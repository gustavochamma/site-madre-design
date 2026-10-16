import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { InternalPageTop } from "@/components/site/InternalPageTop";
import { NumberedList } from "@/components/site/NumberedList";
import { ClientsStrip } from "@/components/site/ClientsStrip";
import { SiteImage } from "@/components/site/SiteImage";

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
  component: AMadre,
});

const process = [
  { label: "Seleção" }, { label: "Qualificação" }, { label: "Armazenagem" },
  { label: "Corte" }, { label: "Colagem" }, { label: "Lixamento", detail: "3 a 5 etapas" },
  { label: "Preparação" }, { label: "Pintura", detail: "2 a 4 etapas" },
  { label: "Inspeção" }, { label: "Embalagem" },
];

function AMadre() {
  return <><Header /><main>
    <InternalPageTop label="A MADRE">Raízes na floresta, <i>coração nos rios</i></InternalPageTop>
    <section className="pad madre-cover"><div className="duo"><SiteImage src="/images/floresta-rio.jpg" alt="Vista aérea de rio cortando a floresta amazônica" /></div></section>
    <section className="grain madre-manifesto"><div className="pad madre-manifesto-inner">
      <div className="eyebrow">SOMOS</div>
      <p className="serif madre-manifesto-lead"><span>Somos muito da cultura amazônica, </span><span>temos raízes na floresta e o coração </span><span>pulsando <i>na correnteza dos rios.</i></span></p>
      <div className="madre-manifesto-copy">
        <p>Nascemos da grandeza da nossa terra, do valor do nosso povo e do brilho da nossa cultura.</p>
        <p>Somos contemporâneos, ancestrais e vivemos sob a sabedoria do tempo. A madeira é o manifesto da vida e nossos produtos, a valorização dessa expressão da natureza.</p>
      </div>
    </div></section>
    <section className="pad madre-feature">
      <div className="duo madre-feature-photo"><SiteImage src="/images/fabrica-vista-aerea.jpg" alt="Vista aérea da fábrica" /></div>
      <div className="madre-feature-copy"><div className="eyebrow">01 · FÁBRICA</div><h2 className="serif internal-heading">Produção em <i>mais de 4 mil m²</i></h2><p>Mais de 4 mil metros de área construída para absorver a produção e 6,7 mil metros de área total.</p></div>
    </section>
    <section className="pad madre-feature madre-feature-reversed">
      <div className="duo madre-feature-photo"><SiteImage src="/images/madeira-serrada.jpg" alt="Pilhas de madeira serrada" /></div>
      <div className="madre-feature-copy"><div className="eyebrow">02 · MADEIRA</div><h2 className="serif internal-heading">Madeira seca <i>em estufa</i></h2><p>Madeira qualificada, certificada em FSC, Legal Source, seca em estufa, preparada para uso de móveis. Mais de 20 mil m³ de madeira.</p></div>
    </section>
    <section className="grain madre-process"><div className="pad madre-process-inner">
      <div className="madre-process-copy"><div><div className="eyebrow">PROCESSO</div><h2 className="serif">Da seleção <i>à embalagem</i></h2><p>Como produzimos ou revitalizamos a madeira.</p></div><SiteImage src="/images/veios-cobre.png" alt="" /></div>
      <NumberedList dark items={process} />
    </div></section>
    <section className="pad madre-materials">
      <div className="madre-materials-copy"><div className="eyebrow">MATERIAIS</div><h2 className="serif internal-heading">Alto padrão e <i>acabamentos premium</i></h2></div>
      <NumberedList items={["Madeira de lei", "Teca", "MDF de alta densidade", "Pallet reaproveitado", "Deck"].map(label => ({ label }))} />
    </section>
    <ClientsStrip />
  </main><Footer /></>;
}
