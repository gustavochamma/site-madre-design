import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { NumberedList } from "@/components/site/NumberedList";

export const Route = createFileRoute("/portas")({
  head: () => ({
    meta: [
      { title: "Portas | MADRE" },
      { name: "description", content: "Portas sob medida em madeira maciça da Amazônia." },
      { property: "og:title", content: "Portas | MADRE" },
      { property: "og:description", content: "Portas sob medida em madeira maciça da Amazônia." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Portas,
});

const products = [
  { image: "porta-laqueada.jpg", alt: "Porta laqueada em hall de entrada", label: "01 · LAQUEADO", title: <>Portas <i>laqueadas</i></>, description: "Para entradas e interiores.", specs: [["MADEIRA", "[MADEIRA]"], ["ACABAMENTO", "Laca"], ["ESPESSURA", "[ESPESSURA]"], ["MEDIDAS", "Sob medida"], ["USO", "Entradas e interiores"]] },
  { image: "porta-giro-escura.jpg", alt: "Porta de giro em madeira escura", label: "02 · ELEGANTE", title: <>Portas <i>de passagem</i></>, description: "Portas de giro em taquari vermelho.", specs: [["MADEIRA", "Taquari vermelho"], ["ACABAMENTO", "Tingimento em cerejeira"], ["ESPESSURA", "[ESPESSURA]"], ["ALTURA", "2,30 m"], ["ABERTURA", "Giro"]] },
  { image: "porta-projeto-especial.jpg", alt: "Porta sob medida em projeto especial", label: "03 · ESTÚDIO", title: <>Projetos <i>especiais</i></>, description: "Feitas para projetos especiais.", specs: [["MADEIRA", "[MADEIRA]"], ["ACABAMENTO", "[ACABAMENTO]"], ["ESPESSURA", "[ESPESSURA]"], ["MEDIDAS", "Sob medida"], ["FERRAGENS", "[FERRAGENS]"]] },
  { image: "porta-linha-essencial.jpg", alt: "Porta da Linha Essencial em madeira clara", label: "04 · LINHA ESSENCIAL", title: <>Quatro modelos, <i>produção em volume</i></>, description: "Madeira maciça, tingimento e usinagem.", specs: [["MADEIRA", "Maciça"], ["ACABAMENTO", "Tingimento"], ["ESPESSURA", "30 mm"], ["MODELOS", "Quatro"], ["PRODUÇÃO", "Em volume, com usinagem"]] },
];

function Portas() {
  return <><Header /><main>
    <section className="pad doors-top">
      <div><div className="eyebrow">PORTAS</div><h1 className="serif doors-title">A gente se importa com <i>o lado de fora</i></h1></div>
      <p className="doors-intro">Quatro linhas em madeira maciça, sob medida ou em volume.</p>
    </section>
    {products.map(product => <section key={product.label} className="pad door-product">
      <div className="duo door-photo"><img src={`/images/${product.image}`} alt={product.alt} /></div>
      <div className="door-info">
        <div className="eyebrow">{product.label}</div>
        <h2 className="serif internal-heading">{product.title}</h2><p>{product.description}</p>
        <div className="door-specs"><h3>ESPECIFICAÇÕES TÉCNICAS</h3><dl>
          {product.specs.map(([field, value]) => <div key={field}><dt>{field}</dt><dd className={value?.startsWith("[") ? "spec-placeholder" : undefined}>{value}</dd></div>)}
        </dl></div>
        <Link className="btn" to="/contato">PEDIR ORÇAMENTO</Link>
      </div>
    </section>)}
    <section className="pad door-value">
      <div className="door-value-copy"><div className="eyebrow">PERCEPÇÃO DE VALOR</div>
        <h2 className="serif internal-heading">Portas de qualidade aumentam a percepção do valor do imóvel <i>entre 0,5% e 2%</i></h2>
        <p className="door-value-note">Estimativa. [FONTE DA ESTIMATIVA]</p>
      </div>
      <NumberedList items={["Peso", "Som ao fechar", "Encaixe", "Estética", "Sensação de solidez"].map(label => ({ label }))} />
    </section>
  </main><Footer /></>;
}
