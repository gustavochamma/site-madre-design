import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | MADRE" },
      { name: "description", content: "Peça seu orçamento de móveis e portas sob medida." },
      { property: "og:title", content: "Contato | MADRE" },
      { property: "og:description", content: "Peça seu orçamento de móveis e portas sob medida." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <PlaceholderPage title="Contato" />,
});
