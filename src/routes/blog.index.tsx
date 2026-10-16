import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

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
  component: () => <PlaceholderPage title="Blog" />,
});
