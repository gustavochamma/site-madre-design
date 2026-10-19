#!/usr/bin/env bash
# Instala e publica o site MADRE num VPS Ubuntu (Hostinger).
# O site roda em Docker; o Traefik do servidor entrega o dominio e o https.
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
apt-get install -y git
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
# Remove a versao antiga com pm2, se existir
if command -v pm2 >/dev/null 2>&1; then pm2 delete madre >/dev/null 2>&1 || true; pm2 save >/dev/null 2>&1 || true; fi

if docker ps -a --format '{{.Names}}' | grep -qx madre-site; then
  docker restart madre-site
else
  docker run -d --name madre-site --restart unless-stopped \
    -v "$APP_DIR":/app -w /app/.output -e PORT=$PORTA -e HOST=0.0.0.0 \
    -l traefik.enable=true \
    -l "traefik.http.routers.madre.rule=Host(\`$DOMINIO\`) || Host(\`www.$DOMINIO\`)" \
    -l traefik.http.routers.madre.entrypoints=websecure \
    -l traefik.http.routers.madre.tls.certresolver=letsencrypt \
    -l traefik.http.services.madre.loadbalancer.server.port=$PORTA \
    node:22-alpine node server/index.mjs
fi

echo "==> 5/5 Conferindo"
sleep 3
docker ps --filter name=madre-site --format 'Container: {{.Names}} {{.Status}}'
IP=$(docker inspect madre-site --format '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}')
echo "Resposta do site: $(curl -s -o /dev/null -w '%{http_code}' http://$IP:$PORTA/)"
echo ""
echo "Pronto. O Traefik entrega o site em https://$DOMINIO assim que o DNS apontar para este servidor (o certificado e emitido sozinho)."
