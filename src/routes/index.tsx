import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "MADRE | Móveis e portas sob medida em madeira maciça da Amazônia" },
      { name: "description", content: "Móveis e portas sob medida em madeira maciça da Amazônia. Fábrica em Ananindeua/PA." },
      { property: "og:title", content: "MADRE | Feito para a vida toda" },
      { property: "og:description", content: "Móveis e portas sob medida em madeira maciça da Amazônia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const eyebrow = { fontSize: 12, letterSpacing: 3, color: "#6B6B6B" };
const h2 = { fontSize: "clamp(30px,3.2vw,46px)", lineHeight: 1.04 };
const cobre = { color: "#C04F35" };

const cards = [
  ["/images/porta-giro-escura.jpg", "Porta de giro em madeira escura", "PORTAS", "01"],
  ["/images/mesa-borda-organica.jpg", "Mesa de jantar de borda orgânica", "MESAS", "02"],
  ["/images/deck-jatoba.jpg", "Deck de jatobá em área externa", "ÁREA EXTERNA", "03"],
  ["/images/banco-corporativo.jpg", "Banco corporativo de madeira com jardim central", "CORPORATIVO", "04"],
];
const servicos = ["Portas", "Móveis e ambientes", "Mobiliário urbano", "Projetos empresariais"];
const numeros = [["4 mil m²", "DE ÁREA CONSTRUÍDA"], ["6,7 mil m²", "DE ÁREA TOTAL"], ["20 mil m³", "DE MADEIRA"]];
const projetos = [
  ["/images/mesa-piscina.jpg", "Mesa de jantar de borda orgânica", "RESIDENCIAL · 4 M DE COMPRIMENTO"],
  ["/images/deck-jatoba.jpg", "Deck de jatobá", "ÁREA EXTERNA · CASA EM CONDOMÍNIO"],
];

function Index() {
  return (
    <>
      <section id="topo" className="hero" style={{ minHeight: "clamp(500px,41vw,660px)", display: "flex", flexDirection: "column", justifyContent: "space-between", color: "#F9F9F9" }}>
        <img className="hero-img" src="/images/capa-mesa.jpg" alt="Mesa de madeira maciça com borda orgânica e duas cadeiras, diante de paredes preta e cobre" />
        <div className="hero-shade" />
        <Header variant="hero" />
        <div className="pad" style={{ paddingBottom: 44, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <h1 className="serif" style={{ fontSize: "clamp(34px,3.8vw,56px)", lineHeight: 1.06, letterSpacing: -0.2 }}>
            Feito para <i style={{ color: "#E08A72" }}>a vida toda</i>
          </h1>
          <p style={{ marginTop: 14, fontSize: 14, fontWeight: 300, letterSpacing: 1.2, lineHeight: 1.55, color: "#E6E6E6" }}>
            Móveis e portas sob medida em madeira maciça da Amazônia.
          </p>
          <Link className="btn light" to="/projetos" style={{ marginTop: 22 }}>VER PROJETOS</Link>
        </div>
      </section>

      <section className="pad" style={{ paddingTop: 112, paddingBottom: 112, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", gap: 20 }}>
        <div style={eyebrow}>A MADRE</div>
        <p className="serif" style={{ fontSize: "clamp(24px,2.6vw,36px)", lineHeight: 1.25, maxWidth: 760 }}>
          Raízes na floresta, coração nos rios. A madeira é o <i style={cobre}>manifesto da vida</i>.
        </p>
      </section>

      <section className="pad" style={{ paddingBottom: 112, display: "flex", flexWrap: "wrap", gap: 16 }}>
        {cards.map(([src, alt, nome, n]) => (
          <Link key={n} to="/projetos" className="tile" style={{ flex: "1 1 260px", display: "flex", flexDirection: "column", gap: 14 }}>
            <div className="duo"><img src={src} alt={alt} style={{ width: "100%", height: 460, objectFit: "cover" }} /></div>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, letterSpacing: 2 }}>
              <span>{nome}</span><span style={{ color: "#6B6B6B" }}>{n}</span>
            </div>
          </Link>
        ))}
      </section>

      <section className="pad" style={{ paddingBottom: 112, display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={eyebrow}>O QUE FAZEMOS</div>
          <h2 className="serif" style={{ ...h2, maxWidth: 900 }}>Sob medida, <i style={cobre}>encaixando no seu projeto</i></h2>
        </div>
        <div>
          {servicos.map((s, i) => (
            <a key={s} href="#contato" className="serif" style={{
              display: "flex", gap: 24, alignItems: "baseline", padding: "28px 0",
              borderTop: `1px solid ${i === 0 ? "#1C1C1C" : "#DEDEDE"}`,
              borderBottom: i === servicos.length - 1 ? "1px solid #DEDEDE" : undefined,
              fontSize: "clamp(22px,2vw,30px)", lineHeight: 1.2,
            }}>
              <span style={{ color: "#A3412B" }}>{String(i + 1).padStart(2, "0")}.</span>
              <span>{s}</span>
            </a>
          ))}
        </div>
      </section>

      <section className="pad" style={{ paddingBottom: 112, display: "flex", flexDirection: "column", gap: 40 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "24px 72px", alignItems: "flex-end" }}>
          <h2 className="serif" style={{ ...h2, flex: "1.4 1 420px" }}>Madeira certificada, <i style={cobre}>seca em estufa</i></h2>
          <p style={{ color: "#555555", flex: "1 1 360px" }}>Certificação FSC e Legal Source.</p>
        </div>
        <div className="duo">
          <img src="/images/pergolado-orla.jpg" alt="Pergolado e bancos de madeira em orla urbana" style={{ display: "block", width: "100%", height: "clamp(260px,42vw,620px)", objectFit: "cover" }} />
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 24px" }}>
          {numeros.map(([v, l]) => (
            <div key={v} style={{ flex: "1 1 240px", display: "flex", flexDirection: "column", gap: 12 }}>
              <span className="serif" style={{ fontSize: "clamp(40px,4.4vw,64px)", lineHeight: 1 }}>{v}</span>
              <span style={{ fontSize: 12, letterSpacing: 2.5, color: "#555555" }}>{l}</span>
            </div>
          ))}
        </div>
      </section>

      <section style={{ padding: "56px 0", background: "#FFFFFF", borderTop: "1px solid #E6E6E6", borderBottom: "1px solid #E6E6E6", display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div style={eyebrow}>GRANDES OBRAS REALIZADAS</div>
        <div className="faixa" style={{ width: "100%", overflow: "hidden" }}>
          <div className="faixa-trilho" style={{ display: "flex", width: "max-content" }}>
            <img src="/images/faixa-clientes.png" alt="Clientes corporativos: Vale, Teixeira Duarte, Progen, Ideflor-Bio, Eterc Engenharia, NOA Belém, O Mundo do Peteleco, Prefeitura de Ananindeua, Fundação Lymington, Trieng Engenharia e Paraferro" style={{ width: 1720, height: 52 }} />
            <img src="/images/faixa-clientes.png" alt="" style={{ width: 1720, height: 52 }} />
          </div>
        </div>
      </section>

      <section className="pad" style={{ paddingTop: 112, paddingBottom: 112, display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div style={eyebrow}>PROJETOS</div>
          <h2 className="serif" style={h2}>Um olhar de perto <i style={cobre}>no que fazemos</i></h2>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "40px 16px" }}>
          {projetos.map(([src, nome, tags]) => (
            <Link key={nome} to="/projetos" className="tile" style={{ flex: "1 1 380px", display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="duo"><img src={src} alt={nome} style={{ width: "100%", height: "clamp(300px,36vw,540px)", objectFit: "cover" }} /></div>
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                <span className="serif" style={{ fontSize: 26, lineHeight: 1.15 }}>{nome}</span>
                <span style={{ fontSize: 13, letterSpacing: 2, color: "#6B6B6B" }}>{tags}</span>
              </div>
            </Link>
          ))}
        </div>
        <div><Link className="btn" to="/projetos">VER TODOS OS PROJETOS</Link></div>
      </section>

      <Footer />
    </>
  );
}
