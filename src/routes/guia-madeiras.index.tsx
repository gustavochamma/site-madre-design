import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { GuiaGate } from "@/components/guia/GuiaGate";
import { Amostra, GuiaSubnav, MadeiraCard } from "@/components/guia/GuiaParts";
import { ACABAMENTOS, AMBIENTES, CHECKLIST, ERROS, GUIA_PDF, MADEIRAS, ORIGEM_LEGAL, USOS, type Uso } from "@/lib/guia-madeiras";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/guia-madeiras/")({
  head: () => seo({
    path: "/guia-madeiras",
    title: "Guia de Madeiras Amazônicas para arquitetos e designers | MADRE",
    description: "Fichas técnicas de 10 madeiras amazônicas, aplicações por ambiente, acabamentos, origem legal e checklist de especificação.",
    noindex: true,
  }),
  component: GuiaIndex,
});

const nivel = (n: number) => ["", "Baixa", "Média-baixa", "Média", "Alta", "Muito alta"][n];

function GuiaIndex() {
  const [filtro, setFiltro] = useState<Uso | "todos">("todos");
  const lista = filtro === "todos" ? MADEIRAS : MADEIRAS.filter(m => m.usos.includes(filtro));
  return <>
    <Header />
    <main>
      <GuiaGate>
        <section className="grain g-hero">
          <div className="pad g-hero-inner">
            <div className="g-eyebrow-light">GUIA PARA ARQUITETOS E DESIGNERS</div>
            <h1 className="serif g-hero-title">Madeiras amazônicas, <i>do projeto à obra</i></h1>
            <p className="g-hero-text">Dez espécies em fichas técnicas, o que usar em cada ambiente, acabamentos, origem legal e o que não pode faltar na sua especificação.</p>
            <div className="g-hero-actions">
              <a className="btn light" href="#madeiras">VER AS MADEIRAS</a>
              <a className="btn light" href={GUIA_PDF} download>BAIXAR CADERNO PDF</a>
            </div>
          </div>
        </section>
        <GuiaSubnav />

        <section id="madeiras" className="pad g-section">
          <div className="g-section-head">
            <div className="eyebrow">01 · FICHAS TÉCNICAS</div>
            <h2 className="serif g-h2">Dez madeiras, <i>uma ficha para cada</i></h2>
          </div>
          <div className="g-filtros" role="group" aria-label="Filtrar por aplicação">
            <button type="button" aria-pressed={filtro === "todos"} onClick={() => setFiltro("todos")}>Todas</button>
            {USOS.map(u => <button key={u.id} type="button" aria-pressed={filtro === u.id} onClick={() => setFiltro(u.id)}>{u.label}</button>)}
          </div>
          <div className="g-grid">{lista.map(m => <MadeiraCard key={m.slug} m={m} />)}</div>
          <p className="g-nota">Amostras de cor aproximadas. Cor, veio e valores técnicos variam de lote para lote: peça sempre uma amostra física.</p>
        </section>

        <section id="comparativo" className="pad g-section">
          <div className="g-section-head">
            <div className="eyebrow">02 · COMPARATIVO</div>
            <h2 className="serif g-h2">Lado a lado, <i>para decidir rápido</i></h2>
          </div>
          <div className="g-table-wrap">
            <table className="g-table">
              <thead><tr><th scope="col">Madeira</th><th scope="col">Densidade</th><th scope="col">Dureza Janka</th><th scope="col">Estabilidade</th><th scope="col">Durabilidade</th><th scope="col">Área externa</th></tr></thead>
              <tbody>{MADEIRAS.map(m => (
                <tr key={m.slug}>
                  <th scope="row"><Link to="/guia-madeiras/$slug" params={{ slug: m.slug }} className="g-table-name"><Amostra m={m} size="mini" />{m.nome}</Link></th>
                  <td>{m.densidade}</td><td>{m.dureza}</td><td>{nivel(m.notas.estabilidade)}</td><td>{nivel(m.notas.durabilidade)}</td>
                  <td>{m.usos.includes("externo") ? "Sim" : "Não"}</td>
                </tr>
              ))}</tbody>
            </table>
          </div>
          <p className="g-nota">Densidade a 12% de umidade. Valores de referência da literatura técnica.</p>
        </section>

        <section id="ambientes" className="pad g-section">
          <div className="g-section-head">
            <div className="eyebrow">03 · AMBIENTES</div>
            <h2 className="serif g-h2">A madeira certa <i>para cada lugar</i></h2>
          </div>
          <div className="g-list">{AMBIENTES.map((a, i) => (
            <article key={a.titulo} className="g-row">
              <h3 className="serif"><span className="g-num">{String(i + 1).padStart(2, "0")}.</span> {a.titulo}</h3>
              <div><p>{a.texto}</p><ul className="g-dicas">{a.dicas.map(d => <li key={d}>{d}</li>)}</ul></div>
            </article>
          ))}</div>
        </section>

        <section id="acabamentos" className="g-band">
          <div className="pad g-section">
            <div className="g-section-head">
              <div className="eyebrow">04 · ACABAMENTOS</div>
              <h2 className="serif g-h2">Proteger sem <i>esconder a madeira</i></h2>
            </div>
            <div className="g-cols">{ACABAMENTOS.map(a => (
              <article key={a.titulo} className="g-col">
                <h3 className="serif">{a.titulo}</h3>
                <div className="g-cient">{a.exemplos}</div>
                <p><strong>A favor.</strong> {a.bom}</p>
                <p><strong>Atenção.</strong> {a.atencao}</p>
                <p><strong>Onde usar.</strong> {a.onde}</p>
              </article>
            ))}</div>
          </div>
        </section>

        <section id="origem" className="pad g-section">
          <div className="g-section-head">
            <div className="eyebrow">05 · ORIGEM LEGAL</div>
            <h2 className="serif g-h2">Especificar também é <i>garantir a procedência</i></h2>
            <p className="g-lead">Madeira nativa precisa de documento em cada etapa. Peça e guarde os comprovantes: eles protegem o seu cliente e o seu projeto.</p>
          </div>
          <div className="g-cols g-cols-4">{ORIGEM_LEGAL.map(o => (
            <article key={o.titulo} className="g-col"><h3 className="serif">{o.titulo}</h3><p>{o.texto}</p></article>
          ))}</div>
          <p className="g-madre">Na MADRE, a madeira é certificada FSC e Legal Source e seca em estufa.</p>
        </section>

        <section id="especificar" className="pad g-section">
          <div className="g-split">
            <div>
              <div className="eyebrow">06 · COMO ESPECIFICAR</div>
              <h2 className="serif g-h2">O que não pode faltar <i>no seu caderno</i></h2>
              <ol className="g-check">{CHECKLIST.map(c => <li key={c}>{c}</li>)}</ol>
            </div>
            <div>
              <div className="eyebrow">07 · ERROS COMUNS</div>
              <h2 className="serif g-h2">O que <i>evitar</i></h2>
              <div className="g-erros">{ERROS.map(e => <div key={e.titulo}><h3 className="serif">{e.titulo}</h3><p>{e.texto}</p></div>)}</div>
            </div>
          </div>
        </section>

        <section className="grain g-cta">
          <div className="pad g-cta-inner">
            <div className="g-eyebrow-light">TEM UM PROJETO NA MESA?</div>
            <h2 className="serif g-h2">Fale com a equipe <i>que vai produzir</i></h2>
            <p>Mande a planta, a referência ou a medida. A gente indica a madeira e responde com o orçamento.</p>
            <div className="g-hero-actions">
              <a className="btn light" href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer">FALAR NO WHATSAPP</a>
              <a className="btn light" href={GUIA_PDF} download>BAIXAR CADERNO PDF</a>
            </div>
          </div>
        </section>
      </GuiaGate>
    </main>
    <Footer />
  </>;
}
