import { Link } from "@tanstack/react-router";
import { SiteImage } from "@/components/site/SiteImage";
import type { BlogArticle } from "@/lib/blog-articles";

export function ArticleCards({ articles }: { articles: BlogArticle[] }) {
  return <section className="pad article-grid">
    {articles.map(article => <Link key={article.image} to="/blog/por-que-a-madeira-muda-de-cor" className="tile article-card">
      <div className="duo"><SiteImage src={`/images/${article.image}`} alt={article.alt} /></div>
      <span className="article-category">{article.category} · [DATA]</span>
      <h2 className="serif article-card-title">{article.title}</h2>
    </Link>)}
  </section>;
}