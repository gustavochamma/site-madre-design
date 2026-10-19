import { Link } from "@tanstack/react-router";
import { ESCALAS, GUIA_PDF, USOS, type Madeira } from "@/lib/guia-madeiras";

export function Amostra({ m, size = "card" }: { m: Madeira; size?: "card" | "big" | "mini" }) {
  const fundo = m.tom2
    ? `repeating-linear-gradient(101deg, ${m.tom} 0 34px, ${m.tom2} 34px 39px, ${m.tom} 39px 47px, ${m.tom2} 47px 49px, ${m.tom} 49px 92px, ${m.tom2} 92px 100px, ${m.tom} 100px 131px)`
    : `repeating-linear-gradient(98deg, rgba(0,0,0,0.05) 0 2px, transparent 2px 19px), ${m.tom}`;
  return <div className={`g-amostra g-amostra-${size}`} style={{ background: fundo }} role="img" aria-label={`Tom aproximado do ${m.nome}: ${m.corDescricao}`} />;
}

export function Escalas({ m }: { m: Madeira }) {
  return (
    <dl className="g-escalas">
      {ESCALAS.map(e => (
        <div key={e.chave} className="g-escala">
          <dt>{e.label}</dt>
          <dd aria-label={`${m.notas[e.chave]} de 5`}>
            {[1, 2, 3, 4, 5].map(i => <span key={i} className={i <= m.notas[e.chave] ? "on" : ""} />)}
          </dd>
        </div>
      ))}
    </dl>
  );
}

export function usoLabel(id: string) {
  return USOS.find(u => u.id === id)?.label ?? id;
}

export function MadeiraCard({ m }: { m: Madeira }) {
  return (
    <Link to="/guia-madeiras/$slug" params={{ slug: m.slug }} className="g-card">
      <Amostra m={m} />
      <div className="g-card-body">
        <div className="g-card-head"><h3 className="serif">{m.nome}</h3><span className="g-cient">{m.cientifico}</span></div>
        <p>{m.resumo}</p>
        <Escalas m={m} />
        <div className="g-tags">{m.usos.map(u => <span key={u}>{usoLabel(u)}</span>)}</div>
      </div>
    </Link>
  );
}

export function GuiaSubnav() {
  return (
    <nav className="pad g-subnav" aria-label="Seções do guia">
      <Link to="/guia-madeiras" hash="madeiras">MADEIRAS</Link>
      <Link to="/guia-madeiras" hash="comparativo">COMPARATIVO</Link>
      <Link to="/guia-madeiras" hash="ambientes">AMBIENTES</Link>
      <Link to="/guia-madeiras" hash="acabamentos">ACABAMENTOS</Link>
      <Link to="/guia-madeiras" hash="origem">ORIGEM LEGAL</Link>
      <Link to="/guia-madeiras" hash="especificar">COMO ESPECIFICAR</Link>
      <a href={GUIA_PDF} download className="g-subnav-pdf">BAIXAR CADERNO PDF</a>
    </nav>
  );
}
