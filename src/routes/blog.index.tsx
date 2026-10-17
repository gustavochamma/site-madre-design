import { createFileRoute, Link } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { InternalPageTop } from "@/components/site/InternalPageTop";
import { SiteImage } from "@/components/site/SiteImage";
import { ArticleCards } from "@/components/site/ArticleCards";
import { blogArticles } from "@/lib/blog-articles";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: "Blog | MADRE" },
      { name: "description", content: "Artigos da MADRE sobre madeira maciça e marcenaria." },
      { property: "og:title", content: "Blog | MADRE" },
      { property: "og:description", content: "Artigos da MADRE sobre madeira maciça e marcenaria." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  return <>
    <Header />
    <main>
      <InternalPageTop label="BLOG">Madeira, ofício e <i>projeto</i></InternalPageTop>
      <section className="pad blog-feature">
        <Link to="/blog/por-que-a-madeira-muda-de-cor" className="tile blog-feature-link">
          <div className="duo blog-feature-photo"><SiteImage src="/images/madeira-serrada.jpg" alt="Pilhas de madeira serrada" /></div>
          <div className="blog-feature-copy"><span className="article-category">MADEIRA · [DATA]</span><h2 className="serif">Por que a madeira muda de cor e de veio de uma peça para outra</h2><span className="article-read">LER ARTIGO</span></div>
        </Link>
      </section>
      <ArticleCards articles={blogArticles} />
    </main>
    <Footer />
  </>;
}
