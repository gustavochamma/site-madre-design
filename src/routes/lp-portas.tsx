import { createFileRoute, Link } from "@tanstack/react-router";
import { NumberedList } from "@/components/site/NumberedList";
import { SiteImage } from "@/components/site/SiteImage";
import { seo } from "@/lib/seo";

const WA = "https://wa.me/5591920046503";
const wa = (text: string) => `${WA}?text=${encodeURIComponent(text)}`;
const GERAL = wa("Olá! Quero um orçamento de portas de madeira maciça sob medida.");

type Pos = "hero" | "gallery" | "faq" | "final" | "header";
declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}
function track(cta_position: Pos) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "whatsapp_click", cta_position, category: "portas" });
}

function WaLink({
  pos,
  href = GERAL,
  className,
  children,
}: {
  pos: Pos;
  href?: string;
  className: string;
  children: string;
}) {
  return (
    <a
      className={className}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track(pos)}
    >
      {children}
    </a>
  );
}

export const Route = createFileRoute("/lp-portas")({
  head: () =>
    seo({
      path: "/lp-portas",
      title: "Portas de madeira maciça sob medida em Belém | MADRE",
      description:
        "Portas de madeira maciça sob medida em Belém e Região Metropolitana. Fábrica própria em Ananindeua, madeira FSC e Legal Source. Peça seu orçamento pelo WhatsApp.",
      noindex: true,
    }),
  component: LpPortas,
});

const linhas = [
  {
    image: "porta-laqueada.jpg",
    alt: "Porta laqueada em hall de entrada",
    label: "01 · LAQUEADO",
    title: (
      <>
        Portas <i>laqueadas</i>
      </>
    ),
    description: "Para entradas e interiores.",
    nome: "Laqueada",
  },
  {
    image: "porta-giro-escura.jpg",
    alt: "Porta de giro em madeira escura",
    label: "02 · ELEGANTE",
    title: (
      <>
        Portas <i>de passagem</i>
      </>
    ),
    description: "Portas de giro em taquari vermelho.",
    nome: "de Passagem",
  },
  {
    image: "porta-projeto-especial.jpg",
    alt: "Porta sob medida em projeto especial",
    label: "03 · ESTÚDIO",
    title: (
      <>
        Projetos <i>especiais</i>
      </>
    ),
    description: "Feitas para projetos especiais.",
    nome: "Projetos Especiais",
  },
  {
    image: "porta-linha-essencial.jpg",
    alt: "Porta da Linha Essencial em madeira clara",
    label: "04 · LINHA ESSENCIAL",
    title: (
      <>
        Quatro modelos, <i>produção em volume</i>
      </>
    ),
    description: "Madeira maciça, tingimento e usinagem.",
    nome: "Essencial",
  },
];

const passos: [string, string][] = [
  ["Medida pelo WhatsApp", "Você manda a medida ou a referência da porta."],
  ["Madeira e acabamento", "A gente indica a madeira e o acabamento certos para o seu ambiente."],
  ["Orçamento e aprovação", "Você recebe o orçamento e aprova antes da produção."],
  ["Produção e entrega", "Fabricação na nossa fábrica, com prazo padrão de 90 dias."],
];

const faq: [string, string][] = [
  [
    "Qual é o prazo de entrega?",
    "O prazo padrão é de 90 dias, contados a partir da aprovação do orçamento.",
  ],
  [
    "Vocês atendem a minha cidade?",
    "Atendemos Belém, Ananindeua, Castanhal e Salinópolis. A instalação está incluída apenas em Belém.",
  ],
  [
    "Como funciona o orçamento?",
    "Você manda a medida ou a referência pelo WhatsApp, a gente indica madeira e acabamento e envia o orçamento para aprovação.",
  ],
  [
    "A madeira tem origem legal?",
    "Sim. A madeira é certificada FSC e Legal Source e seca em estufa antes da produção.",
  ],
  ["As portas têm garantia?", "Sim. Cada proposta traz a garantia detalhada no contrato."],
];

function LpPortas() {
  return (
    <>
      <main>
        <section className="grain arq-hero">
          <header className="pad arq-header">
            <Link to="/lp-portas" aria-label="MADRE">
              <img src="/images/logo-madre-branco.png" alt="MAD.RE" className="arq-logo" />
            </Link>
            <WaLink pos="header" className="arq-header-cta">
              ORÇAMENTO
            </WaLink>
          </header>
          <div className="pad arq-hero-inner">
            <div className="arq-hero-copy">
              <div className="g-eyebrow-light">PORTAS SOB MEDIDA EM BELÉM</div>
              <h1 className="serif arq-title">
                Portas de madeira maciça sob medida em Belém, <i>feitas para durar</i>
              </h1>
              <p className="arq-sub">
                Fábrica própria em Ananindeua, com entrega em Belém e Região Metropolitana.
              </p>
              <div>
                <WaLink pos="hero" className="btn light">
                  FALAR NO WHATSAPP
                </WaLink>
              </div>
            </div>
          </div>
        </section>

        <section className="pad lp-nums-band">
          <div className="arq-nums">
            <div>
              <div className="serif">4 mil m²</div>
              <span>DE ÁREA CONSTRUÍDA</span>
            </div>
            <div>
              <div className="serif">FSC</div>
              <span>E LEGAL SOURCE</span>
            </div>
            <div>
              <div className="serif">90 DIAS</div>
              <span>PRAZO PADRÃO DE ENTREGA</span>
            </div>
          </div>
        </section>

        <section className="pad door-value">
          <div className="door-value-copy">
            <div className="eyebrow">POR QUE MADEIRA MACIÇA</div>
            <h2 className="serif internal-heading">
              Uma porta de qualidade <i>se sente no uso</i>
            </h2>
          </div>
          <NumberedList
            items={["Peso", "Som ao fechar", "Encaixe", "Estética", "Sensação de solidez"].map(
              (label) => ({ label }),
            )}
          />
        </section>

        <section className="pad arq-section">
          <div className="eyebrow">AS LINHAS</div>
          <h2 className="serif g-h2 lp-gap">
            Quatro linhas <i>em madeira maciça</i>
          </h2>
        </section>
        {linhas.map((l) => (
          <section key={l.label} className="pad door-product">
            <div className="duo door-photo">
              <SiteImage src={`/images/${l.image}`} alt={l.alt} />
            </div>
            <div className="door-info">
              <div className="eyebrow">{l.label}</div>
              <h2 className="serif internal-heading">{l.title}</h2>
              <p>{l.description}</p>
              <WaLink
                pos="gallery"
                className="btn"
                href={wa(`Olá! Quero um orçamento da linha ${l.nome}.`)}
              >
                PEDIR ORÇAMENTO
              </WaLink>
            </div>
          </section>
        ))}

        <section className="g-band">
          <div className="pad arq-section">
            <div className="eyebrow">COMO FUNCIONA</div>
            <h2 className="serif g-h2 lp-gap">
              Do WhatsApp <i>à porta instalada</i>
            </h2>
            <div className="g-cols g-cols-4">
              {passos.map(([t, d], i) => (
                <div key={t} className="g-col">
                  <span className="list-number">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="serif">{t}</h3>
                  <p>{d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="pad arq-section">
          <div className="eyebrow">ÁREA DE ATENDIMENTO</div>
          <h2 className="serif g-h2 lp-gap">
            Belém e <i>Região Metropolitana</i>
          </h2>
          <div className="lp-tags">
            {["BELÉM", "ANANINDEUA", "CASTANHAL", "SALINÓPOLIS"].map((c) => (
              <span key={c}>{c}</span>
            ))}
          </div>
        </section>

        <section className="pad contact-faq">
          <div className="contact-faq-heading">
            <div className="eyebrow">DÚVIDAS</div>
            <h2 className="serif internal-heading">
              Antes de <i>pedir orçamento</i>
            </h2>
          </div>
          <div className="lp-faq">
            {faq.map(([q, a]) => (
              <details key={q}>
                <summary className="serif">{q}</summary>
                <p>{a}</p>
              </details>
            ))}
            <WaLink pos="faq" className="btn">
              TIRAR DÚVIDAS NO WHATSAPP
            </WaLink>
          </div>
        </section>

        <section className="grain">
          <div className="pad arq-section arq-final lp-final">
            <div className="g-eyebrow-light">SUA PORTA SOB MEDIDA</div>
            <h2 className="serif g-h2">
              Mande a medida, <i>a gente faz o resto</i>
            </h2>
            <p>Orçamento direto com a equipe da fábrica, pelo WhatsApp.</p>
            <div className="arq-final-actions">
              <WaLink pos="final" className="btn light">
                FALAR NO WHATSAPP
              </WaLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="grain lp-footer">
        <div className="pad">
          <span>MADRE Indústria e Comércio Ltda.</span>
          <span>
            Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA, CEP
            67035-330
          </span>
          <span>contato@grupomadre.com.br · +55 91 92004-6503</span>
        </div>
      </footer>
    </>
  );
}
