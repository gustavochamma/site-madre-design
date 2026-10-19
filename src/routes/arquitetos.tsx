import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { Footer } from "@/components/site/Footer";
import { SiteImage } from "@/components/site/SiteImage";
import { liberarGuia } from "@/components/guia/GuiaGate";
import { GUIA_PDF } from "@/lib/guia-madeiras";
import { seo } from "@/lib/seo";

const ENDPOINT = "https://n8n-od7h.srv2032518.hstgr.cloud/webhook/madre-arquitetos";

export const Route = createFileRoute("/arquitetos")({
  head: () => seo({
    path: "/arquitetos",
    title: "Guia de Madeiras Amazônicas para arquitetos e designers | MADRE",
    description: "Receba o guia da MADRE com fichas técnicas de 10 madeiras amazônicas, aplicações por ambiente, acabamentos e origem legal. Exclusivo para arquitetos e designers.",
    breadcrumb: "Para arquitetos",
  }),
  component: Arquitetos,
});

const conteudo: [string, string][] = [
  ["Fichas técnicas de 10 madeiras", "Tauari, angelim-vermelho, angelim-pedra, tatajuba, muiracatiara, cumaru, ipê, louro, andiroba e jatobá: aparência, densidade, estabilidade e durabilidade."],
  ["Aplicações por ambiente", "Pisos, painéis e forros, marcenaria sob medida, áreas úmidas e áreas externas."],
  ["Acabamentos e tratamentos", "Óleos, vernizes e stains: onde usar cada um e como manter a cor ao longo dos anos."],
  ["Origem legal e certificação", "DOF, nota fiscal, FSC e como conferir se a madeira é legal."],
  ["Tabela comparativa", "Densidade, dureza, estabilidade e durabilidade das dez espécies, lado a lado."],
  ["Checklist e erros comuns", "O que não pode faltar no caderno de especificação e o que evitar para a peça não empenar, rachar ou mudar de cor antes da hora."],
];

function Arquitetos() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const field = (name: string) => String(data.get(name) ?? "").trim();
    setStatus("sending");
    try {
      const params = new URLSearchParams(window.location.search);
      const response = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: field("name"), office: field("office"), email: field("email"), whatsapp: field("whatsapp"),
          instagram: field("instagram"), city: field("city"), website: field("website"),
          source: params.get("utm_source") ? `landing-arquitetos/${params.get("utm_source")}` : "landing-arquitetos",
        }),
      });
      if (!response.ok) throw new Error(String(response.status));
      liberarGuia();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  return <>
    <main>
      <section className="grain arq-hero">
        <header className="pad arq-header">
          <Link to="/" aria-label="MADRE, início"><img src="/images/logo-madre-branco.png" alt="MAD.RE" className="arq-logo" /></Link>
          <a href="#guia" className="arq-header-cta">RECEBER O GUIA</a>
        </header>
        <div className="pad arq-hero-inner">
          <div className="arq-hero-copy">
            <div className="g-eyebrow-light">PARA ARQUITETOS E DESIGNERS</div>
            <h1 className="serif arq-title">Especifique madeira amazônica <i>com segurança</i></h1>
            <p className="arq-sub">O Guia de Madeiras Amazônicas da MADRE reúne fichas técnicas, aplicações por ambiente, acabamentos e certificação num material feito para o dia a dia do projeto.</p>
            <div className="arq-chips"><span>10 ESPÉCIES</span><span>ACABAMENTOS</span><span>FSC E ORIGEM LEGAL</span></div>
          </div>

          {status === "sent" ? (
            <div id="guia" className="arq-form arq-ok" aria-live="polite">
              <div className="arq-form-label">ACESSO LIBERADO</div>
              <h2 className="serif">Seu guia <i>está pronto</i></h2>
              <p>Também enviamos os links para o seu e-mail, para consultar quando quiser.</p>
              <Link to="/guia-madeiras" className="arq-send arq-send-solid">ABRIR O GUIA NAVEGÁVEL</Link>
              <a href={GUIA_PDF} download className="arq-send">BAIXAR CADERNO PDF</a>
            </div>
          ) : (
            <form id="guia" className="arq-form" onSubmit={handleSubmit}>
              <div className="arq-form-label">RECEBA O GUIA</div>
              <div className="arq-honeypot" aria-hidden="true"><label htmlFor="website">Site</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" /></div>
              <label className="arq-field">Nome<input name="name" type="text" autoComplete="name" required /></label>
              <label className="arq-field">Escritório<input name="office" type="text" autoComplete="organization" /></label>
              <label className="arq-field">E-mail<input name="email" type="email" autoComplete="email" required /></label>
              <label className="arq-field">WhatsApp<input name="whatsapp" type="tel" autoComplete="tel" placeholder="(91) 9 0000-0000" required /></label>
              <label className="arq-field">Instagram profissional<input name="instagram" type="text" placeholder="@seuescritorio" autoCapitalize="none" /></label>
              <label className="arq-field">Cidade<select name="city" defaultValue="Belém"><option>Belém</option><option>Ananindeua</option><option>Castanhal</option><option>Salinópolis</option><option>Outra cidade do Pará</option><option>Outro estado</option></select></label>
              <button type="submit" className="arq-send arq-send-solid" disabled={status === "sending"}>{status === "sending" ? "ENVIANDO..." : "RECEBER O GUIA"}</button>
              <div aria-live="polite" className="arq-msg">
                {status === "error"
                  ? <p>Não foi possível enviar agora. Tente de novo ou fale com a gente pelo <a href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer">WhatsApp</a>.</p>
                  : <p>O acesso é liberado na hora e os links chegam no seu e-mail. Seus dados ficam só com a MADRE.</p>}
              </div>
            </form>
          )}
        </div>
      </section>

      <section className="pad arq-section arq-conteudo">
        <div className="arq-conteudo-head">
          <div className="eyebrow">O QUE TEM NO GUIA</div>
          <h2 className="serif g-h2">Da ficha técnica <i>à obra pronta</i></h2>
          <div className="duo arq-foto"><SiteImage src="/images/madeira-serrada.jpg" alt="Pilhas de madeira serrada no estoque da fábrica" /></div>
        </div>
        <div className="g-list">{conteudo.map(([t, d], i) => (
          <div key={t} className="g-row"><h3 className="serif"><span className="g-num">{String(i + 1).padStart(2, "0")}.</span> {t}</h3><p>{d}</p></div>
        ))}</div>
      </section>

      <section className="g-band">
        <div className="pad arq-section arq-quem">
          <div className="duo arq-foto-grande"><SiteImage src="/images/fabrica-vista-aerea.jpg" alt="Vista aérea da fábrica da MADRE em Ananindeua" /></div>
          <div className="arq-quem-copy">
            <div className="eyebrow">QUEM FAZ</div>
            <h2 className="serif g-h2">Fábrica própria, <i>madeira certificada</i></h2>
            <p>A MADRE fabrica portas e mesas sob medida em madeira maciça da Amazônia, em Ananindeua. A madeira é certificada FSC e Legal Source e seca em estufa, e cada peça sai com certificado de garantia e manual de conservação.</p>
            <div className="arq-nums">
              <div><div className="serif">4 mil m²</div><span>DE ÁREA CONSTRUÍDA</span></div>
              <div><div className="serif">FSC</div><span>E LEGAL SOURCE</span></div>
            </div>
          </div>
        </div>
      </section>

      <section className="pad arq-section arq-final">
        <div className="eyebrow">TEM UM PROJETO NA MESA?</div>
        <h2 className="serif g-h2">Fale direto com a equipe <i>que vai produzir</i></h2>
        <p>Mande a planta, a referência ou a medida. A gente responde com a madeira indicada e o orçamento.</p>
        <div className="arq-final-actions">
          <a className="btn" href="#guia">RECEBER O GUIA</a>
          <a className="btn" href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer">FALAR NO WHATSAPP</a>
        </div>
      </section>
    </main>
    <Footer />
  </>;
}
