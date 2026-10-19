import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GuiaGate } from "@/components/guia/GuiaGate";
import { Amostra, Escalas, GuiaSubnav, usoLabel } from "@/components/guia/GuiaParts";
import { GUIA_PDF, MADEIRAS } from "@/lib/guia-madeiras";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/guia-madeiras/$slug")({
  loader: ({ params }) => {
    const madeira = MADEIRAS.find(m => m.slug === params.slug);
    if (!madeira) throw notFound();
    return { slug: madeira.slug };
  },
  head: ({ params }) => {
    const m = MADEIRAS.find(x => x.slug === params.slug);
    return seo({
      path: `/guia-madeiras/${params.slug}`,
      title: m ? `${m.nome}: ficha técnica para arquitetos | Guia MADRE` : "Guia de Madeiras | MADRE",
      description: m ? m.resumo : "Guia de Madeiras Amazônicas da MADRE.",
      noindex: true,
    });
  },
  component: FichaMadeira,
});

function FichaMadeira() {
  const { slug } = Route.useLoaderData();
  const i = Math.max(0, MADEIRAS.findIndex(x => x.slug === slug));
  const m = MADEIRAS[i]!;
  const anterior = MADEIRAS[(i - 1 + MADEIRAS.length) % MADEIRAS.length]!;
  const proxima = MADEIRAS[(i + 1) % MADEIRAS.length]!;
  return <>
    <Header />
    <main>
      <GuiaGate>
        <GuiaSubnav />
        <article>
          <section className="pad g-ficha-top">
            <div className="g-ficha-intro">
              <Link to="/guia-madeiras" hash="madeiras" className="article-back">TODAS AS MADEIRAS</Link>
              <div className="eyebrow">FICHA {String(i + 1).padStart(2, "0")} DE {MADEIRAS.length}</div>
              <h1 className="serif g-ficha-title">{m.nome}</h1>
              <div className="g-cient g-cient-big">{m.cientifico}</div>
              <p className="g-lead">{m.resumo}</p>
              <div className="g-tags">{m.usos.map(u => <span key={u}>{usoLabel(u)}</span>)}</div>
            </div>
            <div className="g-ficha-visual">
              <Amostra m={m} size="big" />
              <div className="g-ficha-cor">{m.corDescricao} · tom aproximado</div>
            </div>
          </section>

          <section className="pad g-ficha-dados">
            <div className="g-dado"><div className="eyebrow">DENSIDADE</div><div className="serif g-dado-num">{m.densidade}</div><div className="g-dado-sub">a 12% de umidade</div></div>
            <div className="g-dado"><div className="eyebrow">DUREZA JANKA</div><div className="serif g-dado-num">{m.dureza}</div><div className="g-dado-sub">valor de referência</div></div>
            <div className="g-dado g-dado-escalas"><Escalas m={m} /></div>
          </section>

          <section className="pad g-section g-ficha-corpo">
            <div className="g-row"><h2 className="serif">Aparência</h2><p>{m.aparencia}</p></div>
            <div className="g-row"><h2 className="serif">Com o tempo</h2><p>{m.tempo}</p></div>
            <div className="g-row"><h2 className="serif">Onde usar</h2><ul className="g-dicas">{m.ondeUsar.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div className="g-row"><h2 className="serif">Onde evitar</h2><ul className="g-dicas g-dicas-evitar">{m.ondeEvitar.map(x => <li key={x}>{x}</li>)}</ul></div>
            <div className="g-row"><h2 className="serif">Acabamento</h2><p>{m.acabamento}</p></div>
            <div className="g-row g-row-destaque"><h2 className="serif">Na sua especificação</h2><ul className="g-dicas">{m.naEspecificacao.map(x => <li key={x}>{x}</li>)}</ul></div>
          </section>

          <nav className="pad g-ficha-nav" aria-label="Outras madeiras">
            <Link to="/guia-madeiras/$slug" params={{ slug: anterior.slug }}><span className="eyebrow">ANTERIOR</span><span className="serif">{anterior.nome}</span></Link>
            <Link to="/guia-madeiras/$slug" params={{ slug: proxima.slug }} className="g-next"><span className="eyebrow">PRÓXIMA</span><span className="serif">{proxima.nome}</span></Link>
          </nav>
        </article>

        <section className="grain g-cta">
          <div className="pad g-cta-inner">
            <div className="g-eyebrow-light">VAI ESPECIFICAR {m.nome.toUpperCase()}?</div>
            <h2 className="serif g-h2">Peça uma amostra <i>e o orçamento</i></h2>
            <div className="g-hero-actions">
              <a className="btn light" href={`https://wa.me/5591920046503?text=${encodeURIComponent(`Olá! Sou arquiteto(a) e vi a ficha de ${m.nome} no guia da MADRE. Quero falar sobre um projeto.`)}`} target="_blank" rel="noopener noreferrer">FALAR NO WHATSAPP</a>
              <a className="btn light" href={GUIA_PDF} download>BAIXAR CADERNO PDF</a>
            </div>
          </div>
        </section>
      </GuiaGate>
    </main>
    <Footer />
  </>;
}
