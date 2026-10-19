// Guia de Madeiras Amazônicas para arquitetos e designers (MADRE).
// Valores técnicos são de referência: variam com a procedência e o lote.

export type Uso = "interno" | "externo" | "piso" | "moveis" | "umido" | "estrutura";

export const USOS: { id: Uso; label: string }[] = [
  { id: "piso", label: "Pisos" },
  { id: "moveis", label: "Móveis e marcenaria" },
  { id: "interno", label: "Painéis e forros" },
  { id: "umido", label: "Cozinhas e banheiros" },
  { id: "externo", label: "Áreas externas" },
  { id: "estrutura", label: "Estrutura aparente" },
];

export type Madeira = {
  slug: string;
  nome: string;
  cientifico: string;
  tom: string; // cor aproximada do cerne, para a amostra
  tom2?: string; // segunda cor, para madeiras rajadas
  corDescricao: string;
  resumo: string;
  densidade: string;
  dureza: string;
  notas: { densidade: number; dureza: number; estabilidade: number; durabilidade: number }; // 1 a 5
  usos: Uso[];
  aparencia: string;
  tempo: string;
  ondeUsar: string[];
  ondeEvitar: string[];
  acabamento: string;
  naEspecificacao: string[];
};

export const MADEIRAS: Madeira[] = [
  {
    slug: "tauari",
    nome: "Tauari",
    cientifico: "Couratari spp.",
    tom: "#D8C39B",
    corDescricao: "Bege-claro uniforme",
    resumo: "Madeira clara e neutra para interiores secos. Amplia o ambiente e aceita pintura e laca.",
    densidade: "≈ 620 kg/m³",
    dureza: "≈ 5.800 N",
    notas: { densidade: 2, dureza: 2, estabilidade: 3, durabilidade: 4 },
    usos: ["interno", "moveis"],
    aparencia: "Tom bege-amarelado uniforme, quase sem diferença entre cerne e alburno. Textura fina, veios discretos e grã reta. Fica elegante mesmo sem verniz.",
    tempo: "Escurece pouco, para um mel claro. Perde o brilho e pode manchar se ficar ao sol direto.",
    ondeUsar: ["Forros e lambris claros", "Portas internas, guarnições e rodapés", "Frentes de gaveta, cabeceiras e estruturas internas de móveis", "Marcenaria pintada ou laqueada, com estabilidade melhor que a do MDF"],
    ondeEvitar: ["Qualquer uso externo", "Áreas molhadas e cozinhas", "Tampos e superfícies sujeitas a impacto: a madeira amassa"],
    acabamento: "Verniz à base d'água acetinado ou laca. Para o visual escandinavo, aceita tingidor branco.",
    naEspecificacao: ["Restrinja a ambientes internos e secos.", "Em tampos, combine com uma madeira mais dura ou com outro material."],
  },
  {
    slug: "angelim-vermelho",
    nome: "Angelim-vermelho",
    cientifico: "Dinizia excelsa",
    tom: "#8C4A36",
    corDescricao: "Marrom-avermelhado, escurecendo para pardo",
    resumo: "Muito pesada e muito durável. Para estrutura aparente, decks e peças robustas.",
    densidade: "≈ 970 kg/m³",
    dureza: "≈ 14.600 N",
    notas: { densidade: 5, dureza: 5, estabilidade: 3, durabilidade: 5 },
    usos: ["externo", "estrutura", "piso"],
    aparencia: "Cerne marrom-avermelhado claro, com grã entrecruzada e textura média a grossa. Visual relativamente uniforme e de aspecto robusto.",
    tempo: "Escurece aos poucos para um castanho profundo e mantém a integridade por décadas.",
    ondeUsar: ["Vigas, pilares e pergolados aparentes", "Decks de alto desempenho", "Pisos de alto tráfego", "Bases de mesa e mobiliário de grande porte"],
    ondeEvitar: ["Detalhes finos e marcenaria delicada", "Ambientes fechados logo após o corte, pelo odor da madeira recém-serrada"],
    acabamento: "Óleo ou impregnante na área externa. Verniz fosco no interior.",
    naEspecificacao: ["Considere o peso no dimensionamento.", "Fixações sempre com pré-furo."],
  },
  {
    slug: "angelim-pedra",
    nome: "Angelim-pedra",
    cientifico: "Hymenolobium spp.",
    tom: "#B07B48",
    corDescricao: "Castanho-amarelado com manchas",
    resumo: "Durável e versátil, com bom custo-benefício. Visual rústico e tropical.",
    densidade: "≈ 710 kg/m³",
    dureza: "≈ 7.600 N",
    notas: { densidade: 3, dureza: 3, estabilidade: 4, durabilidade: 4 },
    usos: ["externo", "interno", "piso", "estrutura"],
    aparencia: "Cerne castanho-amarelado a castanho-avermelhado, com manchas escuras irregulares. Textura grossa e fibrosa, sem brilho. Nós e manchas fazem parte do visual.",
    tempo: "Escurece para um castanho mais uniforme. Na área externa sem acabamento, ganha pátina acinzentada.",
    ondeUsar: ["Portas de entrada, janelas e venezianas", "Forros, inclusive de varandas", "Decks de grandes áreas com orçamento moderado", "Pisos internos de estilo rústico"],
    ondeEvitar: ["Projetos que pedem superfície lisa e uniforme"],
    acabamento: "Stain mel na área externa. Seladora e verniz acetinado no interior, porque os poros abertos absorvem muito acabamento.",
    naEspecificacao: ["Peça seladora antes do acabamento final.", "Avise o cliente que nós e manchas são característicos."],
  },
  {
    slug: "tatajuba",
    nome: "Tatajuba",
    cientifico: "Bagassa guianensis",
    tom: "#C49A3A",
    corDescricao: "Amarelo-dourado que vira marrom-dourado",
    resumo: "Estável e muito durável. Começa amarela e escurece em poucos meses.",
    densidade: "≈ 820 kg/m³",
    dureza: "≈ 9.000 N",
    notas: { densidade: 4, dureza: 4, estabilidade: 4, durabilidade: 5 },
    usos: ["externo", "piso", "estrutura", "interno"],
    aparencia: "Cerne amarelo-dourado vivo quando recém-cortado, com grã reta, textura média e brilho alto depois de polida.",
    tempo: "É a mudança de cor mais marcante do guia: passa do amarelo para o marrom-dourado em poucos meses de luz.",
    ondeUsar: ["Fachadas, pergolados e vigas aparentes", "Esquadrias externas", "Pisos, tacos e assoalhos", "Lambris e painéis em tom quente"],
    ondeEvitar: ["Projetos que dependem do amarelo inicial"],
    acabamento: "Óleo de teca na área externa. Verniz com filtro UV no interior.",
    naEspecificacao: ["Mostre ao cliente uma amostra envelhecida, não só a recém-cortada.", "Respeite o peso no dimensionamento estrutural."],
  },
  {
    slug: "muiracatiara",
    nome: "Muiracatiara",
    cientifico: "Astronium spp.",
    tom: "#A0643C",
    tom2: "#3A2618",
    corDescricao: "Castanho-avermelhado com listras escuras",
    resumo: "A mais ornamental do guia. Rajada, dura e estável, para peças de destaque.",
    densidade: "≈ 900 kg/m³",
    dureza: "≈ 10.500 N",
    notas: { densidade: 4, dureza: 4, estabilidade: 4, durabilidade: 4 },
    usos: ["piso", "moveis", "interno", "externo"],
    aparencia: "Fundo castanho-claro a avermelhado com faixas irregulares quase pretas, um rajado que lembra pelagem de tigre. Cada tábua é única.",
    tempo: "No interior, a cor se mantém viva e ganha um tom mais quente. Ao sol, o contraste entre as faixas diminui.",
    ondeUsar: ["Pisos de destaque, que também disfarçam marcas de uso", "Painel de acento atrás da cama ou da TV", "Tampos, aparadores e móveis assinatura", "Decks e brises de alto padrão"],
    ondeEvitar: ["Grandes áreas no mesmo ambiente: o rajado pesa"],
    acabamento: "Verniz transparente no interior, para destacar as listras. Com filtro UV, preserva o contraste.",
    naEspecificacao: ["Use em um ponto focal por ambiente.", "Tampos largos com réguas coladas, não em prancha única."],
  },
  {
    slug: "cumaru",
    nome: "Cumaru",
    cientifico: "Dipteryx odorata",
    tom: "#8B5E36",
    corDescricao: "Castanho com reflexos dourados",
    resumo: "Uma das mais duras e duráveis. Referência para deck, piscina e piso de alto tráfego.",
    densidade: "≈ 1.080 kg/m³",
    dureza: "≈ 14.000 N",
    notas: { densidade: 5, dureza: 5, estabilidade: 4, durabilidade: 5 },
    usos: ["externo", "piso", "umido", "estrutura"],
    aparencia: "Cerne castanho-claro amarelado a marrom-escuro, com reflexos dourados ou avermelhados e listras escuras difusas. Poros finos e aspecto uniforme.",
    tempo: "Escurece para um castanho mais profundo. Na área externa sem proteção, fica acinzentado.",
    ondeUsar: ["Decks, bordas de piscina e pergolados", "Pisos de alto tráfego, como lojas e escritórios", "Escadas, guarda-corpos e brises", "Bancadas e ilhas de cozinha"],
    ondeEvitar: ["Móveis que precisam ser movidos com frequência, pelo peso", "Peças com entalhe ou muito detalhe"],
    acabamento: "Óleo ou stain com filtro UV na área externa. Verniz PU em piso interno.",
    naEspecificacao: ["Parafusos de aço inox.", "Juntas de dilatação um pouco maiores que as do ipê.", "Cola PU ou epóxi, porque a madeira tem óleo natural."],
  },
  {
    slug: "ipe",
    nome: "Ipê",
    cientifico: "Handroanthus spp.",
    tom: "#5B3D28",
    corDescricao: "Marrom-escuro homogêneo",
    resumo: "A mais estável e uma das mais duráveis. Visual sóbrio, para máximo desempenho.",
    densidade: "≈ 1.050 kg/m³",
    dureza: "≈ 16.400 N",
    notas: { densidade: 5, dureza: 5, estabilidade: 5, durabilidade: 5 },
    usos: ["externo", "piso", "umido", "estrutura", "moveis"],
    aparencia: "Cerne marrom-escuro homogêneo, às vezes com leve tom oliva ou avermelhado. Veios sutis e textura fina, que combinam com quase tudo.",
    tempo: "Praticamente não empena nem incha. Na área externa sem óleo, fica cinza-prateado e uniforme.",
    ondeUsar: ["Decks e pisos externos", "Fachadas ripadas e brises", "Escadas e pisos internos de alto tráfego", "Tampos e bancadas em áreas úmidas, bem vedados"],
    ondeEvitar: ["Forros e grandes superfícies suspensas, pelo peso"],
    acabamento: "Óleo ou stain na área externa. Verniz PU incolor no interior.",
    naEspecificacao: ["Parafusos de aço inox: o tanino mancha de preto e corrói metal comum.", "Estrutura dimensionada para o peso."],
  },
  {
    slug: "louro",
    nome: "Louro",
    cientifico: "Nome comercial de mais de uma espécie",
    tom: "#6F5B3D",
    corDescricao: "Marrom médio com tons oliva",
    resumo: "Equilíbrio entre resistência e trabalhabilidade. Nobre e discreta para marcenaria fina.",
    densidade: "≈ 850 kg/m³",
    dureza: "≈ 9.800 N",
    notas: { densidade: 4, dureza: 4, estabilidade: 3, durabilidade: 4 },
    usos: ["moveis", "interno"],
    aparencia: "Marrom médio, de avermelhado a oliva, às vezes com rajas mais escuras. Textura fina, alto lustro natural e aroma agradável.",
    tempo: "Escurece levemente e uniformiza o tom. O aroma pode durar um tempo em ambientes fechados.",
    ondeUsar: ["Painéis e ripados internos", "Armários, aparadores e cabeceiras", "Peças torneadas, como pés de mesa", "Rodapés, guarnições e portas"],
    ondeEvitar: ["Tábuas muito largas sem juntas"],
    acabamento: "Verniz ou laca transparente. Um leve tingidor iguala lotes diferentes.",
    naEspecificacao: ["Louro-preto e louro-verde podem ser espécies diferentes: confirme a espécie com o fornecedor."],
  },
  {
    slug: "andiroba",
    nome: "Andiroba",
    cientifico: "Carapa guianensis",
    tom: "#9A5C46",
    corDescricao: "Castanho-avermelhado suave",
    resumo: "Da família do mogno. Leve, estável e fácil de trabalhar, para marcenaria de interiores.",
    densidade: "≈ 630 kg/m³",
    dureza: "≈ 4.500 N",
    notas: { densidade: 2, dureza: 2, estabilidade: 4, durabilidade: 3 },
    usos: ["moveis", "interno"],
    aparencia: "Rosa-pálido a marrom-avermelhado, lembrando um mogno claro. Grã reta, textura média e pouco brilho.",
    tempo: "O rosado escurece para um castanho suave e estabiliza.",
    ondeUsar: ["Marcenaria fina, armários e painéis", "Portas internas e esquadrias internas", "Lambris e forros, por ser leve", "Pisos residenciais de tráfego leve"],
    ondeEvitar: ["Área molhada permanente", "Contato com solo e uso externo sem proteção"],
    acabamento: "Seladora e verniz. Aceita bem tingidor, inclusive para imitar mogno.",
    naEspecificacao: ["Parece mogno, mas é menos durável: alinhe essa expectativa com o cliente."],
  },
  {
    slug: "jatoba",
    nome: "Jatobá",
    cientifico: "Hymenaea courbaril",
    tom: "#9A3F2A",
    corDescricao: "Vermelho-alaranjado que escurece",
    resumo: "Dura e de cor marcante. Clássica em pisos, tampos e escadas, com atenção à estabilidade.",
    densidade: "≈ 950 kg/m³",
    dureza: "≈ 11.000 N",
    notas: { densidade: 4, dureza: 4, estabilidade: 2, durabilidade: 4 },
    usos: ["piso", "moveis", "estrutura", "externo"],
    aparencia: "Cerne vermelho-alaranjado intenso quando novo, com listras escuras ocasionais e brilho alto depois de polido.",
    tempo: "Escurece para um vermelho-acastanhado profundo em um a dois anos e depois estabiliza.",
    ondeUsar: ["Pisos, tacos e assoalhos", "Tampos de mesa e bancos", "Escadas", "Portas maciças", "Decks, com manutenção"],
    ondeEvitar: ["Tábuas largas sem junta de dilatação", "Contato com água salgada ou salobra"],
    acabamento: "Verniz PU no interior. Stain castanho na área externa.",
    naEspecificacao: ["Tampos com réguas coladas, não em prancha única.", "Junta de dilatação no perímetro dos pisos.", "Avise o cliente sobre o escurecimento."],
  },
];

export const AMBIENTES = [
  {
    titulo: "Pisos internos",
    texto: "Pedem dureza e estabilidade. Ipê, cumaru e jatobá são as opções mais seguras. Para um piso de destaque, muiracatiara. Em ambientes pequenos que precisam de amplitude, tauari ou andiroba, desde que o tráfego seja leve.",
    dicas: ["Madeira seca em estufa, entre 8% e 12% de umidade.", "Junta de dilatação no perímetro, principalmente com jatobá.", "Em áreas comerciais, módulos menores, como tacos, lidam melhor com a movimentação."],
  },
  {
    titulo: "Painéis, ripados e forros",
    texto: "Aqui a dureza importa menos. Valem estabilidade, peso e estética. Louro e andiroba para tons médios, tauari para painéis claros, muiracatiara como ponto focal. Em forros de varanda, angelim-pedra.",
    dicas: ["Réguas de 10 a 15 cm de largura empenam menos que as mais largas.", "Acabamento nas duas faces antes da instalação.", "Madeiras densas em forro exigem estrutura reforçada."],
  },
  {
    titulo: "Móveis e marcenaria",
    texto: "Andiroba e louro são as mais versáteis. Muiracatiara transforma um aparador em peça assinatura. Jatobá, ipê e cumaru funcionam em tampos e bancadas, com projeto que considere o peso.",
    dicas: ["Tampos largos com réguas coladas lado a lado.", "Madeira nobre nas faces aparentes e estrutura mais leve nas ocultas, quando o peso for problema.", "Verniz ou óleo incolor para não esconder os veios."],
  },
  {
    titulo: "Cozinhas e banheiros",
    texto: "Ipê e cumaru são as melhores escolhas para bancadas e áreas úmidas. Andiroba funciona em armários de banheiro bem ventilado, longe da água direta.",
    dicas: ["Dentro do box, só deck removível de madeira muito durável.", "Tampos longe do calor direto do fogão.", "Vedação em todas as faces da peça."],
  },
  {
    titulo: "Áreas externas",
    texto: "Ipê e cumaru lideram em decks, fachadas e brises. Tatajuba e angelim-pedra entregam alta durabilidade com custo menor. Jatobá funciona com manutenção mais frequente.",
    dicas: ["Parafusos de aço inox.", "Cerca de 5 mm entre réguas de deck para escoar a água.", "Stain em vez de verniz: o stain desbota, o verniz descasca.", "Ventilação atrás de fachadas e brises."],
  },
];

export const ACABAMENTOS = [
  {
    titulo: "Óleos",
    exemplos: "Tungue, teca, linhaça, óleo e cera",
    bom: "Mantêm o toque natural, não descascam e permitem retoque localizado.",
    atencao: "Pedem reaplicação frequente. Protegem pouco contra manchas, riscos e raios UV.",
    onde: "Decks, móveis rústicos e peças que o cliente vai tocar muito.",
  },
  {
    titulo: "Vernizes e seladoras",
    exemplos: "PU, verniz marítimo, verniz à base d'água, laca",
    bom: "Alta proteção contra água, manchas e riscos. Duram anos no interior.",
    atencao: "Formam filme: quando se desgastam, descascam e exigem lixamento total.",
    onde: "Pisos internos, tampos e móveis de uso intenso.",
  },
  {
    titulo: "Stains",
    exemplos: "Impregnantes pigmentados com fungicida",
    bom: "Pigmento funciona como filtro solar. Não descasca, só desbota, e a manutenção é simples.",
    atencao: "Protegem pouco contra abrasão: em deck, saem primeiro nas áreas de passagem.",
    onde: "Decks, fachadas, brises e pergolados.",
  },
];

export const ORIGEM_LEGAL = [
  { titulo: "DOF", texto: "O Documento de Origem Florestal, emitido pelo IBAMA, é obrigatório para transportar e armazenar madeira nativa. Exija o número do DOF vinculado à nota fiscal." },
  { titulo: "Nota fiscal", texto: "Deve trazer espécie, volume e o DOF correspondente. Nota genérica, como \"madeira serrada\" sem espécie, é sinal de alerta." },
  { titulo: "Certificação", texto: "FSC e Cerflor atestam manejo responsável, com auditoria da floresta ao produto. O código do certificado pode ser conferido no site da certificadora." },
  { titulo: "Preço", texto: "Preço muito abaixo do mercado é o sinal mais comum de madeira ilegal." },
];

export const CHECKLIST = [
  "Espécie, com nome comercial e científico.",
  "Dimensões das peças: espessura, largura e comprimento.",
  "Perfil ou sistema: macho e fêmea, deck com friso, réguas coladas.",
  "Teor de umidade: cerca de 12% para interiores.",
  "Acabamento, com produto, brilho e número de demãos.",
  "Acabamento em todas as faces, inclusive as ocultas.",
  "Fixações: pré-furo e parafusos de aço inox nas madeiras densas.",
  "Juntas de dilatação e folgas.",
  "Documentação: DOF, nota fiscal e certificação.",
];

export const ERROS = [
  { titulo: "Especificar só \"madeira\"", texto: "Sem espécie, umidade e acabamento, quem executa escolhe por você." },
  { titulo: "Madeira de interior na área externa", texto: "Tauari e andiroba não foram feitas para sol e chuva." },
  { titulo: "Tábua larga sem folga", texto: "Jatobá e louro em peças largas, sem junta, abrem frestas ou empenam." },
  { titulo: "Parafuso comum em madeira densa", texto: "No ipê e no cumaru, o tanino corrói o metal e mancha a madeira de preto." },
  { titulo: "Verniz em deck ao sol", texto: "O filme racha e descasca. Na área externa, use óleo ou stain." },
  { titulo: "Esquecer de avisar sobre a cor", texto: "Tatajuba e jatobá mudam bastante. O cliente precisa ver isso antes." },
  { titulo: "Acabar só a face aparente", texto: "A peça absorve umidade de forma desigual e empena." },
  { titulo: "Instalar sem aclimatar", texto: "A madeira precisa de alguns dias no ambiente da obra antes da instalação." },
  { titulo: "Aceitar madeira sem documento", texto: "Obra com madeira sem DOF pode ser embargada, e o material, apreendido." },
];

export const ESCALAS: { chave: keyof Madeira["notas"]; label: string }[] = [
  { chave: "densidade", label: "Densidade" },
  { chave: "dureza", label: "Dureza" },
  { chave: "estabilidade", label: "Estabilidade" },
  { chave: "durabilidade", label: "Durabilidade" },
];

export const GUIA_PDF = "/guia-madeiras/caderno-madre-guia-de-madeiras.pdf";

