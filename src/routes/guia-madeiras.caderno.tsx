import { createFileRoute } from "@tanstack/react-router";
import { GuiaGate } from "@/components/guia/GuiaGate";
import { Amostra, Escalas, usoLabel } from "@/components/guia/GuiaParts";
import { ACABAMENTOS, AMBIENTES, CHECKLIST, ERROS, MADEIRAS, NOTA_DURABILIDADE, ORIGEM_LEGAL } from "@/lib/guia-madeiras";
import { seo } from "@/lib/seo";

// Versão para impressão (A5) usada para gerar o caderno em PDF.
export const Route = createFileRoute("/guia-madeiras/caderno")({
  head: () => seo({ path: "/guia-madeiras/caderno", title: "Caderno MADRE: Guia de Madeiras Amazônicas", description: "Versão para impressão do guia.", noindex: true }),
  component: Caderno,
});

const nivel = (n: number) => ["", "Baixa", "Média-baixa", "Média", "Alta", "Muito alta"][n];

function Rodape({ n }: { n: number }) {
  return <div className="cd-foot"><span>MADRE · GUIA DE MADEIRAS AMAZÔNICAS</span><span>{String(n).padStart(2, "0")}</span></div>;
}

function Caderno() {
  let p = 2;
  return (
    <GuiaGate>
      <div className="cd">
        <section className="cd-pg cd-capa grain">
          <img src="/images/logo-madre-branco.png" alt="MAD.RE" className="cd-logo" />
          <div>
            <div className="cd-eyebrow-l">CADERNO PARA ARQUITETOS E DESIGNERS</div>
            <h1 className="serif cd-capa-title">Guia de madeiras <i>amazônicas</i></h1>
            <p className="cd-capa-sub">Dez espécies em fichas técnicas, aplicações por ambiente, acabamentos, origem legal e checklist de especificação.</p>
          </div>
          <div className="cd-capa-foot">madredesign.com.br · Ananindeua, Pará</div>
        </section>

        <section className="cd-pg">
          <div className="cd-eyebrow">SUMÁRIO</div>
          <h2 className="serif cd-h2">Neste <i>caderno</i></h2>
          <ol className="cd-sumario">
            <li><span>Como ler as fichas</span><span>03</span></li>
            {MADEIRAS.map((m, i) => <li key={m.slug}><span>{m.nome}</span><span>{String(i + 4).padStart(2, "0")}</span></li>)}
            <li><span>Comparativo</span><span>14</span></li>
            <li><span>A madeira certa para cada ambiente</span><span>15</span></li>
            <li><span>Acabamentos</span><span>17</span></li>
            <li><span>Origem legal</span><span>18</span></li>
            <li><span>Como especificar e erros comuns</span><span>19</span></li>
          </ol>
          <Rodape n={p++} />
        </section>

        <section className="cd-pg">
          <div className="cd-eyebrow">ANTES DE COMEÇAR</div>
          <h2 className="serif cd-h2">Como ler <i>as fichas</i></h2>
          <p className="cd-p">Cada ficha reúne o que importa na hora de especificar: aparência, comportamento com o tempo, onde usar, onde evitar, acabamento indicado e o que não pode faltar no seu caderno de especificação.</p>
          <p className="cd-p">As barras comparam as dez madeiras entre si, de 1 a 5:</p>
          <ul className="cd-dicas">
            <li><strong>Densidade:</strong> peso da madeira seca. Mais densa, mais pesada e, em geral, mais resistente.</li>
            <li><strong>Dureza:</strong> resistência a marcas e riscos, medida pelo ensaio Janka.</li>
            <li><strong>Estabilidade:</strong> quanto a peça se movimenta com a umidade. Mais alta, menos empena e abre frestas.</li>
            <li><strong>Durabilidade natural:</strong> resistência a fungos e cupins. Cada ficha traz também a durabilidade em campo, em anos, medida com estacas enterradas no solo.</li>
          </ul>
          <p className="cd-nota">Valores de referência da literatura técnica. Cor, veio e propriedades variam de lote para lote: peça sempre uma amostra física. As amostras de cor impressas são aproximadas.</p>
          <Rodape n={p++} />
        </section>

        {MADEIRAS.map((m, i) => (
          <section key={m.slug} className="cd-pg cd-ficha">
            <div className="cd-ficha-top">
              <div>
                <div className="cd-eyebrow">FICHA {String(i + 1).padStart(2, "0")} DE {MADEIRAS.length}</div>
                <h2 className="serif cd-ficha-title">{m.nome}</h2>
                <div className="cd-cient">{m.cientifico}</div>
              </div>
              <Amostra m={m} size="mini" />
            </div>
            <div className="cd-amostra"><Amostra m={m} size="card" /></div>
            <p className="cd-resumo">{m.resumo}</p>
            <div className="cd-dados">
              <div><span>DENSIDADE</span><b className="serif">{m.densidade}</b></div>
              <div><span>DUREZA JANKA</span><b className="serif">{m.dureza}</b></div>
              <div><span>DURABILIDADE EM CAMPO</span><b className="serif">{m.durabilidadeCampo}</b></div>
            </div>
            <Escalas m={m} />
            <div className="cd-blocos">
              <div><h3>Aparência</h3><p>{m.aparencia}</p></div>
              <div><h3>Com o tempo</h3><p>{m.tempo}</p></div>
              <div><h3>Onde usar</h3><ul className="cd-dicas">{m.ondeUsar.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>Onde evitar</h3><ul className="cd-dicas cd-evitar">{m.ondeEvitar.map(x => <li key={x}>{x}</li>)}</ul></div>
              <div><h3>Acabamento</h3><p>{m.acabamento}</p></div>
              <div className="cd-destaque"><h3>Na sua especificação</h3><ul className="cd-dicas">{m.naEspecificacao.map(x => <li key={x}>{x}</li>)}</ul></div>
            </div>
            <div className="cd-usos">{m.usos.map(u => usoLabel(u)).join(" · ")}</div>
            <Rodape n={p++} />
          </section>
        ))}

        <section className="cd-pg">
          <div className="cd-eyebrow">COMPARATIVO</div>
          <h2 className="serif cd-h2">Lado a <i>lado</i></h2>
          <table className="cd-table">
            <thead><tr><th>Madeira</th><th>Densidade</th><th>Dureza</th><th>Estab.</th><th>Em campo</th><th>Externa</th></tr></thead>
            <tbody>{MADEIRAS.map(m => (
              <tr key={m.slug}><th>{m.nome}</th><td>{m.densidade.replace("≈ ", "")}</td><td>{m.dureza.replace("≈ ", "")}</td><td>{nivel(m.notas.estabilidade)}</td><td>{m.durabilidadeCampo}</td><td>{m.usos.includes("externo") ? "Sim" : "Não"}</td></tr>
            ))}</tbody>
          </table>
          <p className="cd-nota">Densidade em kg/m³ a 12% de umidade. Dureza Janka em newtons. {NOTA_DURABILIDADE}</p>
          <Rodape n={p++} />
        </section>

        {[AMBIENTES.slice(0, 3), AMBIENTES.slice(3)].map((grupo, gi) => (
          <section key={gi} className="cd-pg">
            <div className="cd-eyebrow">AMBIENTES{gi ? " · CONTINUAÇÃO" : ""}</div>
            {gi === 0 && <h2 className="serif cd-h2">A madeira certa <i>para cada lugar</i></h2>}
            {grupo.map(a => (
              <div key={a.titulo} className="cd-amb">
                <h3 className="serif">{a.titulo}</h3>
                <p>{a.texto}</p>
                <ul className="cd-dicas">{a.dicas.map(d => <li key={d}>{d}</li>)}</ul>
              </div>
            ))}
            <Rodape n={p++} />
          </section>
        ))}

        <section className="cd-pg">
          <div className="cd-eyebrow">ACABAMENTOS</div>
          <h2 className="serif cd-h2">Proteger sem <i>esconder a madeira</i></h2>
          {ACABAMENTOS.map(a => (
            <div key={a.titulo} className="cd-amb">
              <h3 className="serif">{a.titulo}</h3>
              <div className="cd-cient">{a.exemplos}</div>
              <p><strong>A favor.</strong> {a.bom}</p>
              <p><strong>Atenção.</strong> {a.atencao}</p>
              <p><strong>Onde usar.</strong> {a.onde}</p>
            </div>
          ))}
          <Rodape n={p++} />
        </section>

        <section className="cd-pg">
          <div className="cd-eyebrow">ORIGEM LEGAL</div>
          <h2 className="serif cd-h2">Especificar é <i>garantir a procedência</i></h2>
          <p className="cd-p">Madeira nativa precisa de documento em cada etapa. Peça e guarde os comprovantes: eles protegem o seu cliente e o seu projeto.</p>
          {ORIGEM_LEGAL.map(o => <div key={o.titulo} className="cd-amb"><h3 className="serif">{o.titulo}</h3><p>{o.texto}</p></div>)}
          <p className="cd-madre serif">Na MADRE, a madeira é certificada FSC e Legal Source e seca em estufa.</p>
          <Rodape n={p++} />
        </section>

        <section className="cd-pg">
          <div className="cd-eyebrow">COMO ESPECIFICAR</div>
          <h2 className="serif cd-h2">O que não pode faltar</h2>
          <ol className="cd-check">{CHECKLIST.map(c => <li key={c}>{c}</li>)}</ol>
          <div className="cd-eyebrow cd-gap">ERROS COMUNS</div>
          <div className="cd-erros">{ERROS.map(e => <p key={e.titulo}><strong>{e.titulo}.</strong> {e.texto}</p>)}</div>
          <Rodape n={p++} />
        </section>

        <section className="cd-pg cd-capa grain">
          <img src="/images/logo-madre-branco.png" alt="MAD.RE" className="cd-logo" />
          <div>
            <div className="cd-eyebrow-l">TEM UM PROJETO NA MESA?</div>
            <h2 className="serif cd-capa-title cd-capa-title-s">Fale com a equipe <i>que vai produzir</i></h2>
            <p className="cd-capa-sub">Mande a planta, a referência ou a medida. A gente indica a madeira e responde com o orçamento.</p>
            <div className="cd-contatos">
              <span>WhatsApp +55 91 92004-6503</span>
              <span>contato@grupomadre.com.br</span>
              <span>@designmadre</span>
              <span>madredesign.com.br</span>
            </div>
          </div>
          <div className="cd-capa-foot">MADRE Indústria e Comércio Ltda. · Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA</div>
        </section>
      </div>
    </GuiaGate>
  );
}
