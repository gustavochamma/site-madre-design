# Site Madre Design

Construa o site institucional da MADRE (móveis e portas sob medida em madeira maciça da Amazônia, Ananindeua/PA) reproduzindo FIELMENTE um design já aprovado. Vou enviar o código HTML de referência de cada página. Não redesenhe: mesma estrutura, mesmos textos, mesmas cores, mesmas fontes, mesmos espaçamentos e mesmos efeitos. Converta para React + Tailwind com componentes reutilizáveis. Nesta mensagem vão as regras gerais, o cabeçalho, o rodapé e a Página inicial. As outras páginas vêm nas próximas mensagens; por enquanto crie as rotas delas com o cabeçalho e o rodapé e um título provisório.

ROTAS
/ (Página inicial), /portas, /projetos, /a-madre, /contato, /blog, /blog/por-que-a-madeira-muda-de-cor
O item de menu MÓVEIS aponta para /projetos.

COMPONENTES COMPARTILHADOS
- Cabeçalho: na página inicial fica por cima da foto de capa, com logo branco (/images/logo-madre-branco.png) e textos claros. Nas outras páginas é o cabeçalho claro (código abaixo), com logo cobre e preto e fio inferior de 1px #E6E6E6. Logo sempre com 160px de largura. No celular (até 760px) os links do menu somem e ficam o logo e ORÇAMENTO; adicione um botão MENU em texto que abre os links em tela cheia sobre fundo #F9F9F9.
- Rodapé: idêntico em todas as páginas (código abaixo), fundo grafite #181818 com a textura /images/textura-grafite.png em background-size 960px 540px.

DESIGN SYSTEM (respeitar à risca)
- Cores: preto #1C1C1C, grafite #181818, off-white #F9F9F9 (fundo das páginas), branco #FFFFFF, texto corrido #555555, secundário #6B6B6B, terciário #9A9A9A, bordas #DEDEDE e #E6E6E6, #C8C8C8 (texto sobre escuro e borda de campos), #4A4A4A (fio no rodapé). Cobre #C04F35 é o único destaque: só em trechos de título em itálico, fios e marcadores. Cobre escuro #A3412B para hover e numeração em fundo claro. Cobre claro #E08A72 para itálico e hover só em fundo escuro. Nunca usar cobre como fundo de seção ou de botão. Nenhuma outra cor.
- Fontes (Google Fonts): Instrument Serif 400 normal e itálico nos títulos; Lato 300/400/700 no resto. Títulos em caixa alta e baixa com um trecho em itálico colorido. Rótulos em caixa alta espaçada (11 a 13px, letter-spacing 2 a 3px).
- Cantos retos em tudo (border-radius 0), sem sombras, sem degradês além dos sombreamentos de foto do código.
- Botões: texto em caixa alta com fio de 1px embaixo, sem caixa nem preenchimento.
- Fotos: em preto e branco, ganham cor e um leve zoom no hover (.duo/.tile). Em telas de toque (hover: none), mostrar as fotos já coloridas.
- Faixa de clientes com rolagem infinita (.faixa-trilho). Respeitar prefers-reduced-motion.
- Margens laterais: clamp(24px, 9vw, 144px); 22px no celular.
- Sem emoji, sem ícones decorativos.

IMAGENS
Os caminhos /images/... correspondem a arquivos que vou enviar depois com exatamente esses nomes, para salvar em public/images/. Até lá use placeholders cinza (#DEDEDE) do mesmo tamanho, mantendo os caminhos no código.

TEXTOS ENTRE COLCHETES
[E-MAIL], [WHATSAPP], [OUTRAS REDES], [DIAS E HORÁRIOS], [DATA] etc. são dados ainda não definidos: mantenha os colchetes, não invente.

CSS GLOBAL DE REFERÊNCIA
```css
h1,h2,h3{text-wrap:balance}
a{color:#1C1C1C;text-decoration:none}a:hover{color:#A3412B}
.grain{background-color:#181818;background-image:url(/images/textura-grafite.png);background-size:960px 540px}
.grain a{color:#F9F9F9}.grain a:hover{color:#E08A72}
.hero{position:relative;overflow:hidden;background-color:#181818}
.hero-img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center 50%;filter:grayscale(1) contrast(1.03);transition:filter .9s ease,transform 1.8s cubic-bezier(.2,.6,.2,1);z-index:0}
.hero:hover .hero-img{filter:grayscale(0) contrast(1);transform:scale(1.03)}
.hero-shade{position:absolute;inset:0;background:radial-gradient(ellipse 60% 55% at 50% 100%,rgba(18,18,18,0.78) 0%,rgba(18,18,18,0.35) 55%,rgba(18,18,18,0) 100%),linear-gradient(180deg,rgba(18,18,18,0.55) 0%,rgba(18,18,18,0) 22%,rgba(18,18,18,0) 60%,rgba(18,18,18,0.45) 100%);z-index:1;pointer-events:none}
.hero>header,.hero>.pad{position:relative;z-index:2}
.hero a{color:#F9F9F9}.hero a:hover{color:#E08A72}
a.btn{display:inline-flex;align-items:center;color:#1C1C1C;padding:12px 0 8px;border-bottom:1px solid #1C1C1C;font-size:12px;letter-spacing:2.5px;font-weight:400}
a.btn:hover{color:#A3412B;border-bottom-color:#A3412B}
a.btn.light{color:#F9F9F9;border-bottom-color:#F9F9F9}a.btn.light:hover{color:#E08A72;border-bottom-color:#E08A72}
.duo{overflow:hidden}
.duo img{filter:grayscale(1) contrast(1.02);transition:filter .8s ease,transform 1.4s cubic-bezier(.2,.6,.2,1)}
.duo:hover img,.tile:hover .duo img{filter:grayscale(0) contrast(1);transform:scale(1.045)}
@keyframes faixa{from{transform:translateX(0)}to{transform:translateX(-50%)}}
.faixa-trilho{animation:faixa 80s linear infinite}
.faixa{mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
@media (prefers-reduced-motion:reduce){.faixa-trilho{animation:none}.duo:hover img,.tile:hover .duo img,.hero:hover .hero-img{transform:none}}
.pad{padding-left:clamp(24px,9vw,144px);padding-right:clamp(24px,9vw,144px)}
p{text-wrap:pretty}
@media (max-width:760px){.navlinks{display:none}.pad{padding-left:22px;padding-right:22px}}
```
Corpo da página: fundo #F9F9F9, cor #1C1C1C, Lato 16px, line-height 1.65.

CABEÇALHO CLARO (páginas internas)
```html
<header class="pad" style="padding:22px 0;display:flex;align-items:center;justify-content:space-between;gap:24px;border-bottom:1px solid #E6E6E6">
<a href="/" aria-label="MADRE, início"><img src="/images/logo-madre-cobre-preto.png" alt="MAD.RE" style="width:160px;height:39px;object-fit:contain"></a>
<nav class="navlinks" style="display:flex;gap:36px;font-size:13px;letter-spacing:2px">
<a href="/portas">PORTAS</a><a href="/projetos">PROJETOS</a><a href="/a-madre">A MADRE</a><a href="/blog">BLOG</a>
</nav>
<a href="/contato" style="font-size:13px;letter-spacing:2px;padding:12px 0;border-bottom:1px solid #1C1C1C">ORÇAMENTO</a>
</header>
```
(links do menu com padding 12px 0)

RODAPÉ (todas as páginas)
```html
<footer id="contato" class="grain" style="color:#F9F9F9">
<div class="pad" style="padding-top:96px;padding-bottom:32px;display:flex;flex-direction:column;gap:72px">
<div style="display:flex;flex-wrap:wrap;gap:48px 72px;align-items:flex-end;justify-content:space-between">
<div style="flex:1 1 420px;display:flex;flex-direction:column;gap:28px;align-items:flex-start">
<h2 style="font-family:'Instrument Serif';font-weight:400;font-size:clamp(36px,4.2vw,60px);line-height:1.04">Vamos falar do <i style="color:#E08A72">seu projeto</i></h2>
<div style="display:flex;flex-direction:column;gap:4px;font-size:18px;color:#C8C8C8"><span>[E-MAIL]</span><span>[WHATSAPP]</span></div>
<a class="btn light" href="/contato">PEDIR ORÇAMENTO</a>
</div>
<div style="flex:1 1 420px;display:flex;flex-wrap:wrap;gap:32px 48px">
<div style="flex:1 1 130px;display:flex;flex-direction:column;gap:2px;font-size:15px">
<div style="display:flex;align-items:center;gap:10px;font-size:12px;letter-spacing:2.5px;margin-bottom:12px"><span style="width:6px;height:6px;border-radius:50%;background:#F9F9F9"></span>NAVEGAR</div>
<a href="/" style="padding:8px 0">Início</a><a href="/portas" style="padding:8px 0">Portas</a><a href="/projetos" style="padding:8px 0">Projetos</a><a href="/a-madre" style="padding:8px 0">A MADRE</a><a href="/blog" style="padding:8px 0">Blog</a><a href="/contato" style="padding:8px 0">Contato</a>
</div>
<div style="flex:1 1 130px;display:flex;flex-direction:column;gap:2px;font-size:15px">
<div style="...mesmo rótulo com bolinha...">SEGUIR</div>
<a href="https://www.instagram.com/designmadre" style="padding:8px 0">Instagram</a>
<span style="padding:8px 0;color:#C8C8C8">[OUTRAS REDES]</span>
</div>
<div style="flex:1 1 130px;display:flex;flex-direction:column;gap:2px;font-size:15px">
<div style="...mesmo rótulo com bolinha...">FÁBRICA</div>
<span style="padding:8px 0;color:#C8C8C8">Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA, CEP 67035-330</span>
</div>
</div>
</div>
<div style="display:flex;flex-wrap:wrap;justify-content:space-between;gap:8px 24px;border-top:1px solid #4A4A4A;padding-top:24px;font-size:13px;color:#9A9A9A">
<span>© 2026 MADRE Indústria e Comércio Ltda.</span><span>AMAZON | FURNITURE | LUXURY</span>
</div>
</div>
</footer>
```
(A única bolinha que existe no site é a de 6px dos rótulos do rodapé.)

PÁGINA INICIAL /
```html
<section id="topo" class="hero" style="min-height:clamp(500px,41vw,660px);display:flex;flex-direction:column;justify-content:space-between;color:#F9F9F9">
<img class="hero-img" src="/images/capa-mesa.jpg" alt="Mesa de madeira maciça com borda orgânica e duas cadeiras, diante de paredes preta e cobre"><div class="hero-shade"></div>
<header class="pad" style="padding-top:22px;padding-bottom:22px;display:flex;align-items:center;justify-content:space-between;gap:24px">
<a href="#topo" aria-label="MADRE, início"><img src="/images/logo-madre-branco.png" alt="MAD.RE" style="width:160px;height:39px;object-fit:contain"></a>
<nav class="navlinks" style="display:flex;gap:36px;font-size:13px;letter-spacing:2px">
<a href="/portas">PORTAS</a><a href="/projetos">MÓVEIS</a><a href="/projetos">PROJETOS</a><a href="/a-madre">A MADRE</a><a href="/blog">BLOG</a>
</nav>
<a href="/contato" style="font-size:13px;letter-spacing:2px;padding:12px 0;border-bottom:1px solid #F9F9F9">ORÇAMENTO</a>
</header>
<div class="pad" style="padding-bottom:44px;display:flex;flex-direction:column;align-items:center;text-align:center">
<h1 style="font-family:'Instrument Serif';font-weight:400;font-size:clamp(34px,3.8vw,56px);line-height:1.06;letter-spacing:-0.2px">Feito para <i style="color:#E08A72">a vida toda</i></h1>
<p style="margin-top:14px;font-size:14px;font-weight:300;letter-spacing:1.2px;line-height:1.55;color:#E6E6E6">Móveis e portas sob medida em madeira maciça da Amazônia.</p>
<a class="btn light" href="/projetos" style="margin-top:22px">VER PROJETOS</a>
</div>
</section>

<section class="pad" style="padding-top:112px;padding-bottom:112px;display:flex;flex-direction:column;align-items:center;text-align:center;gap:20px">
<div style="font-size:12px;letter-spacing:3px;color:#6B6B6B">A MADRE</div>
<p style="font-family:'Instrument Serif';font-size:clamp(24px,2.6vw,36px);line-height:1.25;max-width:760px">Raízes na floresta, coração nos rios. A madeira é o <i style="color:#C04F35">manifesto da vida</i>.</p>
</section>

<!-- 4 cards lado a lado (flex-wrap, gap 16px, cada um flex 1 1 260px), foto 460px de altura object-fit cover, embaixo linha com nome à esquerda e número #6B6B6B à direita, 13px letter-spacing 2px. Todos linkam /projetos -->
<section class="pad" style="padding-bottom:112px;display:flex;flex-wrap:wrap;gap:16px">
 card: /images/porta-giro-escura.jpg "Porta de giro em madeira escura" | PORTAS | 01
 card: /images/mesa-borda-organica.jpg "Mesa de jantar de borda orgânica" | MESAS | 02
 card: /images/deck-jatoba.jpg "Deck de jatobá em área externa" | ÁREA EXTERNA | 03
 card: /images/banco-corporativo.jpg "Banco corporativo de madeira com jardim central" | CORPORATIVO | 04
</section>

<section class="pad" style="padding-bottom:112px;display:flex;flex-direction:column;gap:48px">
<div style="display:flex;flex-direction:column;gap:16px">
<div style="font-size:12px;letter-spacing:3px;color:#6B6B6B">O QUE FAZEMOS</div>
<h2 style="font-family:'Instrument Serif';font-weight:400;font-size:clamp(30px,3.2vw,46px);line-height:1.04;max-width:900px">Sob medida, <i style="color:#C04F35">encaixando no seu projeto</i></h2>
</div>
<!-- lista de 4 linhas, cada uma um link para #contato, padding 28px 0, fio superior (a primeira #1C1C1C, as outras #DEDEDE, a última também com fio inferior #DEDEDE). Texto Instrument Serif clamp(22px,2vw,30px), número em #A3412B -->
 01. Portas
 02. Móveis e ambientes
 03. Mobiliário urbano
 04. Projetos empresariais
</section>

<section class="pad" style="padding-bottom:112px;display:flex;flex-direction:column;gap:40px">
<div style="display:flex;flex-wrap:wrap;gap:24px 72px;align-items:flex-end">
<h2 style="font-family:'Instrument Serif';font-weight:400;font-size:clamp(30px,3.2vw,46px);line-height:1.04;flex:1.4 1 420px">Madeira certificada, <i style="color:#C04F35">seca em estufa</i></h2>
<p style="color:#555555;flex:1 1 360px">Certificação FSC e Legal Source.</p>
</div>
<div class="duo"><img src="/images/pergolado-orla.jpg" alt="Pergolado e bancos de madeira em orla urbana" style="display:block;width:100%;height:clamp(260px,42vw,620px);object-fit:cover"></div>
<!-- 3 números lado a lado (flex 1 1 240px, gap 40px 24px): valor em Instrument Serif clamp(40px,4.4vw,64px) line-height 1; legenda 12px letter-spacing 2.5px #555555 -->
 4 mil m² | DE ÁREA CONSTRUÍDA
 6,7 mil m² | DE ÁREA TOTAL
 20 mil m³ | DE MADEIRA
</section>

<section style="padding:56px 0;background:#FFFFFF;border-top:1px solid #E6E6E6;border-bottom:1px solid #E6E6E6;display:flex;flex-direction:column;align-items:center;gap:36px">
<div style="font-size:12px;letter-spacing:3px;color:#6B6B6B">GRANDES OBRAS REALIZADAS</div>
<div class="faixa" style="width:100%;overflow:hidden">
<div class="faixa-trilho" style="display:flex;width:max-content">
<img src="/images/faixa-clientes.png" alt="Clientes corporativos: Vale, Teixeira Duarte, Progen, Ideflor-Bio, Eterc Engenharia, NOA Belém, O Mundo do Peteleco, Prefeitura de Ananindeua, Fundação Lymington, Trieng Engenharia e Paraferro" style="width:1720px;height:52px">
<img src="/images/faixa-clientes.png" alt="" style="width:1720px;height:52px">
</div></div>
</section>

<section class="pad" style="padding-top:112px;padding-bottom:112px;display:flex;flex-direction:column;gap:48px">
<div style="display:flex;flex-direction:column;gap:16px">
<div style="font-size:12px;letter-spacing:3px;color:#6B6B6B">PROJETOS</div>
<h2 style="font-family:'Instrument Serif';font-weight:400;font-size:clamp(30px,3.2vw,46px);line-height:1.04">Um olhar de perto <i style="color:#C04F35">no que fazemos</i></h2>
</div>
<!-- 2 cards grandes lado a lado (flex 1 1 380px, gap 40px 16px), foto clamp(300px,36vw,540px), nome em Instrument Serif 26px, tags 13px letter-spacing 2px #6B6B6B -->
 card: /images/mesa-piscina.jpg | Mesa de jantar de borda orgânica | RESIDENCIAL · 4 M DE COMPRIMENTO
 card: /images/deck-jatoba.jpg | Deck de jatobá | ÁREA EXTERNA · CASA EM CONDOMÍNIO
<div><a class="btn" href="/projetos">VER TODOS OS PROJETOS</a></div>
</section>
<!-- RODAPÉ PADRÃO -->
```

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/ebd167a8-6543-46a2-9bd1-771fa9b22a25).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
