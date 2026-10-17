export const blogArticles = [
  { image: "porta-giro-escura.jpg", alt: "Porta de madeira escura", category: "PORTAS", title: "O que observar em uma porta de madeira maciça: peso, som e encaixe" },
  { image: "fabrica-vista-aerea.jpg", alt: "Vista aérea da fábrica", category: "PROCESSO", title: "Da seleção à embalagem: as dez etapas de uma peça MADRE" },
  { image: "deck-jatoba.jpg", alt: "Deck de jatobá", category: "ÁREA EXTERNA", title: "Madeira em área externa: o que muda no projeto e no cuidado" },
  { image: "floresta-rio.jpg", alt: "Floresta amazônica vista de cima", category: "ORIGEM", title: "FSC e Legal Source: o que significam as certificações da madeira" },
  { image: "mesa-borda-organica.jpg", alt: "Mesa de borda orgânica", category: "MÓVEIS", title: "Borda orgânica: quando a forma da árvore vira a forma da mesa" },
];

export type BlogArticle = (typeof blogArticles)[number];