import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { InternalPageTop } from "@/components/site/InternalPageTop";
import { Button } from "@/components/ui/button";

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
  component: ContactPage,
});

const questions = [
  ["A cor da madeira varia de uma peça para outra?", "Sim. Toda madeira possui características naturais, podendo haver alterações de cores, texturas e veios."],
  ["As peças têm garantia?", "Todas as peças vão acompanhadas de certificado de garantia e manual de conservação."],
  ["O valor do orçamento pode mudar?", "Os valores são cotados com madeira seca em estufa e podem ser ajustados após a confirmação das medidas."],
  ["O que preciso conferir antes da entrega?", "Verifique se o produto passa por elevadores e portas da sua residência. O custo de içamento não está incluso."],
  ["Qual é o prazo de entrega?", "[PRAZO MÉDIO DE PRODUÇÃO E ENTREGA]"],
];

function ContactPage() {
  return <>
    <Header />
    <main>
      <InternalPageTop label="CONTATO">Vamos falar do <i>seu projeto</i></InternalPageTop>
      <section className="pad contact-layout">
        <form className="contact-form" onSubmit={event => event.preventDefault()}>
          <div className="contact-field"><label htmlFor="name">Nome</label><input id="name" name="name" type="text" autoComplete="name" /></div>
          <div className="contact-field"><label htmlFor="contact">WhatsApp ou e-mail</label><input id="contact" name="contact" type="text" /></div>
          <div className="contact-field"><label htmlFor="audience">Você é</label><select id="audience" name="audience"><option>Cliente final</option><option>Arquiteto ou designer</option><option>Construtora ou empresa</option></select></div>
          <div className="contact-field"><label htmlFor="request">O que você procura</label><textarea id="request" name="request" rows={5} /></div>
          <Button variant="siteText" type="submit" className="contact-submit">ENVIAR PEDIDO</Button>
        </form>
        <div className="contact-details">
          <div><div className="eyebrow">FALE DIRETO</div><div className="serif contact-direct">[WHATSAPP]</div><div className="serif contact-direct">[E-MAIL]</div></div>
          <div><div className="eyebrow">FÁBRICA</div><p>Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA, CEP 67035-330</p></div>
          <div><div className="eyebrow">ATENDIMENTO</div><p>[DIAS E HORÁRIOS]</p></div>
        </div>
      </section>
      <section className="pad contact-faq">
        <div className="contact-faq-heading"><div className="eyebrow">DÚVIDAS</div><h2 className="serif internal-heading">Antes de <i>comprar</i></h2></div>
        <div className="contact-questions">{questions.map(([question, answer]) => <div key={question}><h3 className="serif">{question}</h3><p>{answer}</p></div>)}</div>
      </section>
    </main>
    <Footer />
  </>;
}
