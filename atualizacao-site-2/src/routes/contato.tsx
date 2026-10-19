import { createFileRoute } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { InternalPageTop } from "@/components/site/InternalPageTop";
import { Button } from "@/components/ui/button";
import { ContactIcon } from "@/components/site/ContactIcon";
import { useState, type FormEvent } from "react";

export const Route = createFileRoute("/contato")({
  head: () => seo({
    path: "/contato",
    title: "Orçamento de portas e mesas sob medida | MADRE",
    description: "Peça seu orçamento pelo WhatsApp +55 91 92004-6503 ou pelo formulário. Atendemos Belém, Ananindeua, Castanhal e Salinópolis.",
    breadcrumb: "Contato",
    jsonLd: [faqJsonLd],
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

const ENDPOINT = "https://n8n-od7h.srv2032518.hstgr.cloud/webhook/madre-orcamento";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: questions
    .filter(([, answer]) => !(answer ?? "").startsWith("["))
    .map(([question, answer]) => ({ "@type": "Question", name: question, acceptedAnswer: { "@type": "Answer", text: answer } })),
};

const honeypot = { position: "absolute" as const, left: -10000, top: "auto", width: 1, height: 1, overflow: "hidden" };
const iconLink = { display: "flex", alignItems: "center", gap: 12 };

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    setStatus("sending");
    try {
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: field("name"),
          contact: field("contact"),
          audience: field("audience"),
          request: field("request"),
          page: window.location.pathname,
          website: field("website"),
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <>
    <Header />
    <main>
      <InternalPageTop label="CONTATO">Vamos falar do <i>seu projeto</i></InternalPageTop>
      <section className="pad contact-layout">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div style={honeypot} aria-hidden="true"><label htmlFor="website">Site</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
          <div className="contact-field"><label htmlFor="name">Nome</label><input id="name" name="name" type="text" autoComplete="name" required /></div>
          <div className="contact-field"><label htmlFor="contact">WhatsApp ou e-mail</label><input id="contact" name="contact" type="text" required /></div>
          <div className="contact-field"><label htmlFor="audience">Você é</label><select id="audience" name="audience"><option>Cliente final</option><option>Arquiteto ou designer</option><option>Construtora ou empresa</option></select></div>
          <div className="contact-field"><label htmlFor="request">O que você procura</label><textarea id="request" name="request" rows={5} /></div>
          <Button variant="siteText" type="submit" className="contact-submit" disabled={status === "sending"}>{status === "sending" ? "ENVIANDO..." : "ENVIAR PEDIDO"}</Button>
          <div aria-live="polite" style={{ fontSize: 15, color: "#1C1C1C", minHeight: 22 }}>
            {status === "sent" && <p>Recebemos seu pedido. Em breve entramos em contato.</p>}
            {status === "error" && <p>Não foi possível enviar agora. Fale com a gente pelo WhatsApp: <a href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline" }}>+55 91 92004-6503</a></p>}
          </div>
        </form>
        <div className="contact-details">
          <div><div className="eyebrow">FALE DIRETO</div><a className="serif contact-direct" href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer" style={iconLink}><ContactIcon type="phone" size={22} />+55 91 92004-6503</a><a className="serif contact-direct" href="mailto:contato@grupomadre.com.br" style={iconLink}><ContactIcon type="mail" size={22} />contato@grupomadre.com.br</a></div>
          <div><div className="eyebrow">FÁBRICA</div><p>Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA, CEP 67035-330</p></div>
          <div><div className="eyebrow">ATENDIMENTO</div><p>Segunda a sexta, das 9h às 19h<br />Sábado, das 9h às 13h</p></div>
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
