import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

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
  component: () => <PlaceholderPage title="Projetos" />,
});
