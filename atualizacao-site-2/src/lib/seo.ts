const SITE = "https://madredesign.com.br";
const IMAGE = `${SITE}/images/capa-mesa.jpg`;

type SeoOptions = {
  path: string;
  title: string;
  description: string;
  breadcrumb?: string;
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

export function seo({ path, title, description, breadcrumb, noindex, jsonLd = [] }: SeoOptions) {
  const url = `${SITE}${path === "/" ? "/" : path}`;
  const data = [...jsonLd];
  if (breadcrumb) {
    data.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: `${SITE}/` },
        { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
      ],
    });
  }
  return {
    meta: [
      { title },
      { name: "description", content: description },
      ...(noindex ? [{ name: "robots", content: "noindex, follow" }] : []),
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: IMAGE },
      { property: "og:locale", content: "pt_BR" },
      { property: "og:site_name", content: "MADRE" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: url }],
    scripts: data.map(item => ({ type: "application/ld+json", children: JSON.stringify(item) })),
  };
}

export const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "FurnitureStore",
  "@id": `${SITE}/#empresa`,
  name: "MADRE",
  legalName: "MADRE Indústria e Comércio Ltda.",
  description: "Fábrica de portas e mesas sob medida em madeira maciça da Amazônia, em Ananindeua, Pará.",
  url: `${SITE}/`,
  logo: `${SITE}/images/logo-madre-cobre-preto.png`,
  image: IMAGE,
  telephone: "+55-91-92004-6503",
  email: "contato@grupomadre.com.br",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial",
    addressLocality: "Ananindeua",
    addressRegion: "PA",
    postalCode: "67035-330",
    addressCountry: "BR",
  },
  areaServed: ["Belém", "Ananindeua", "Castanhal", "Salinópolis"].map(name => ({ "@type": "City", name })),
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: "Saturday", opens: "09:00", closes: "13:00" },
  ],
  sameAs: ["https://www.instagram.com/designmadre", "https://www.facebook.com/designmadre"],
};
