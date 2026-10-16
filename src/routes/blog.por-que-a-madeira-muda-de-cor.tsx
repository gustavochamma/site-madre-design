import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/PlaceholderPage";

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
  component: () => <PlaceholderPage title="Por que a madeira muda de cor" />,
});
