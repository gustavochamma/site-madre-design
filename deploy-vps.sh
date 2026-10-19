#!/usr/bin/env bash
# Instala e publica o site MADRE num VPS Ubuntu (Hostinger).
# Primeira vez:   git clone https://github.com/gustavochamma/site-madre-design.git /var/www/madre && cd /var/www/madre && bash deploy-vps.sh
# Atualizar site: cd /var/www/madre && bash deploy-vps.sh
set -euo pipefail

DOMINIO="madredesign.com.br"
PORTA=3000
APP_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$APP_DIR"

if [ "$(id -u)" -ne 0 ]; then echo "Rode como root (ou com sudo)."; exit 1; fi

echo "==> 1/5 Programas do servidor"
if ! command -v node >/dev/null 2>&1 || [ "$(node -v | cut -d. -f1 | tr -d v)" -lt 20 ]; then
  curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
  apt-get install -y nodejs
fi
apt-get install -y git nginx certbot python3-certbot-nginx
command -v pm2 >/dev/null 2>&1 || npm install -g pm2
apt-get install -y unzip
if ! command -v bun >/dev/null 2>&1 && [ ! -x "$HOME/.bun/bin/bun" ]; then
  curl -fsSL https://bun.sh/install | bash
fi
export PATH="$HOME/.bun/bin:$PATH"

echo "==> 2/5 Codigo mais recente"
git pull --ff-only || true

echo "==> 3/5 Montando o site"
rm -rf node_modules
bun install
NITRO_PRESET=node-server bun run build

echo "==> 4/5 Iniciando o site"
if pm2 describe madre >/dev/null 2>&1; then
  PORT=$PORTA pm2 restart madre --update-env
else
  PORT=$PORTA pm2 start .output/server/index.mjs --name madre
  pm2 startup systemd -u root --hp /root >/dev/null 2>&1 || true
fi
pm2 save

echo "==> 5/5 Ligando o dominio"
if [ ! -f /etc/nginx/sites-available/madre ]; then
  cat > /etc/nginx/sites-available/madre <<EOF
server {
  listen 80;
  server_name $DOMINIO www.$DOMINIO;
  client_max_body_size 20m;
  location / {
    proxy_pass http://127.0.0.1:$PORTA;
    proxy_http_version 1.1;
    proxy_set_header Host \$host;
    proxy_set_header X-Real-IP \$remote_addr;
    proxy_set_header X-Forwarded-For \$proxy_add_x_forwarded_for;
    proxy_set_header X-Forwarded-Proto \$scheme;
  }
}
EOF
  ln -sf /etc/nginx/sites-available/madre /etc/nginx/sites-enabled/madre
  rm -f /etc/nginx/sites-enabled/default
fi
nginx -t && systemctl reload nginx

echo ""
echo "Pronto. Site rodando na porta $PORTA."
if [ ! -d /etc/letsencrypt/live/$DOMINIO ]; then
  echo "Depois que o DNS do dominio apontar para este servidor, ative o https com:"
  echo "  certbot --nginx -d $DOMINIO -d www.$DOMINIO"
fi
