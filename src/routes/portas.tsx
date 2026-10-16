import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

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
  component: () => <PlaceholderPage title="Portas" />,
});
