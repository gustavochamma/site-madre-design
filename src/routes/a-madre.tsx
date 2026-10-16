import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/a-madre")({
  head: () => ({
    meta: [
      { title: "A MADRE | MADRE" },
      { name: "description", content: "Conheça a MADRE, fábrica de móveis em madeira maciça em Ananindeua/PA." },
      { property: "og:title", content: "A MADRE | MADRE" },
      { property: "og:description", content: "Conheça a MADRE, fábrica de móveis em madeira maciça em Ananindeua/PA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PlaceholderPage title="A MADRE" />,
});
