import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { SiteImage } from "@/components/site/SiteImage";
import { ArticleCards } from "@/components/site/ArticleCards";
import { blogArticles } from "@/lib/blog-articles";

export const Route = createFileRoute("/blog/por-que-a-madeira-muda-de-cor")({
  head: () => ({
    meta: [
      { title: "Por que a madeira muda de cor | MADRE" },
      { name: "description", content: "Entenda por que a madeira maciça muda de cor com o tempo." },
      { property: "og:title", content: "Por que a madeira muda de cor | MADRE" },
      { property: "og:description", content: "Entenda por que a madeira maciça muda de cor com o tempo." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WoodArticle,
});

function WoodArticle() {
  return <>
    <Header />
    <main>
      <article>
        <section className="pad wood-article-head">
          <Link to="/blog" className="article-back">VOLTAR AO BLOG</Link>
          <div className="article-meta">MADEIRA · [DATA] · [TEMPO DE LEITURA]</div>
          <h1 className="serif">Por que a madeira muda de cor e de veio <i>de uma peça para outra</i></h1>
          <p>Toda madeira possui características naturais. Entenda o que esperar e por que isso é parte do valor da peça.</p>
        </section>
        <section className="pad wood-article-photo"><div className="duo"><SiteImage src="/images/madeira-serrada.jpg" alt="Pilhas de madeira serrada no estoque" /></div></section>
        <section className="pad wood-article-body">
          <p>Toda madeira possui características naturais, podendo haver alterações de cores, texturas e veios. Duas peças da mesma espécie, cortadas da mesma tora, nunca saem idênticas.</p>
          <p>[PARÁGRAFO: o que causa a variação, com exemplos de espécies que a MADRE usa, como sucupira, tauari e jatobá]</p>
          <h2 className="serif">O papel da secagem</h2>
          <p>Na MADRE a madeira é qualificada, certificada e seca em estufa antes de virar móvel. [PARÁGRAFO: como a secagem influencia estabilidade e tonalidade]</p>
          <blockquote className="serif">A madeira é o manifesto da vida e nossos produtos, a valorização dessa expressão da natureza.</blockquote>
          <h2 className="serif">O que combinar antes de aprovar</h2>
          <p>Por isso o acabamento é sempre aprovado em amostra. [PARÁGRAFO: como funciona a aprovação de amostra e o que o cliente deve observar]</p>
          <div className="article-signature">Por [AUTOR] · MADRE</div>
        </section>
      </article>
      <section className="pad continue-reading"><div className="eyebrow">CONTINUE LENDO</div></section>
      <ArticleCards articles={blogArticles.slice(0, 3)} />
    </main>
    <Footer />
  </>;
}
