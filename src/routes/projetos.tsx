import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { InternalPageTop } from "@/components/site/InternalPageTop";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | MADRE" },
      { name: "description", content: "Projetos de móveis e portas sob medida em madeira maciça." },
      { property: "og:title", content: "Projetos | MADRE" },
      { property: "og:description", content: "Projetos de móveis e portas sob medida em madeira maciça." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Projetos,
});

const projects = [
  ["porto-futuro.jpg", "Bancadas e vitrines no Porto Futuro II", "MOBILIÁRIO URBANO", "Porto Futuro II"],
  ["pergolado-orla.jpg", "Pergolado e bancos em orla", "MOBILIÁRIO URBANO", "Living Clean"],
  ["jogo-de-mesas.jpg", "Mesas redondas em área aberta", "MOBILIÁRIO URBANO", "Jogo de mesas"],
  ["playground.jpg", "Playground de madeira", "MOBILIÁRIO URBANO", "Playground"],
  ["banco-corporativo.jpg", "Banco com jardim central", "EMPRESARIAL", "Banco corporativo"],
  ["aviario.jpg", "Aviário octogonal entre árvores", "EMPRESARIAL", "Aviários de madeira"],
  ["mesa-borda-organica.jpg", "Mesa de jantar de borda orgânica", "ORGÂNICA", "Mesa de jantar"],
  ["mesa-de-centro.jpg", "Mesa de centro escultural", "FORMA", "Mesa de centro"],
  ["banco-ipe.jpg", "Balanço de ipê em jardim", "RETO", "Banco de ipê"],
  ["deck-jatoba.jpg", "Deck de jatobá", "EXTERNO", "Deck de jatobá"],
  ["armarios-externos.jpg", "Armários sob bancada", "ARMÁRIOS", "Armários externos"],
  ["escada-encaixe.jpg", "Escada de madeira", "ESCADAS", "Escada de encaixe"],
];

function Projetos() {
  return <><Header /><main>
    <InternalPageTop label="PROJETOS">Feitos <i>pela MADRE</i></InternalPageTop>
    <section className="pad projects-grid">
      {projects.map(([image, alt, category, name]) => <Link key={image} to="/contato" className="tile project-tile">
        <div className="duo"><img src={`/images/${image}`} alt={alt} /></div>
        <span className="project-category">{category}</span>
        <span className="serif project-name">{name}</span>
      </Link>)}
    </section>
  </main><Footer /></>;
}
