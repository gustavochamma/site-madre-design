import { Link } from "@tanstack/react-router";
import { ContactIcon } from "./ContactIcon";

const col = { flex: "1 1 130px", display: "flex", flexDirection: "column" as const, gap: 2, fontSize: 15 };
const item = { padding: "8px 0" };
const iconLink = { display: "inline-flex", alignItems: "center", gap: 10 };

function Label({ children }: { children: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 12, letterSpacing: 2.5, marginBottom: 12 }}>
      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#F9F9F9" }} />
      {children}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="contato" className="grain" style={{ color: "#F9F9F9" }}>
      <div className="pad" style={{ paddingTop: 96, paddingBottom: 32, display: "flex", flexDirection: "column", gap: 72 }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "48px 72px", alignItems: "flex-end", justifyContent: "space-between" }}>
          <div style={{ flex: "1 1 420px", display: "flex", flexDirection: "column", gap: 28, alignItems: "flex-start" }}>
            <h2 className="serif" style={{ fontSize: "clamp(36px,4.2vw,60px)", lineHeight: 1.04 }}>
              Vamos falar do <i style={{ color: "#E08A72" }}>seu projeto</i>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 4, fontSize: 18, color: "#C8C8C8" }}>
              <a className="footer-contact" href="mailto:contato@grupomadre.com.br" style={iconLink}><ContactIcon type="mail" size={17} />contato@grupomadre.com.br</a>
              <a className="footer-contact" href="https://wa.me/5591920046503" target="_blank" rel="noopener noreferrer" style={iconLink}><ContactIcon type="phone" size={17} />+55 91 92004-6503</a>
            </div>
            <Link className="btn light" to="/contato">PEDIR ORÇAMENTO</Link>
          </div>
          <div style={{ flex: "1 1 420px", display: "flex", flexWrap: "wrap", gap: "32px 48px" }}>
            <div style={col}>
              <Label>NAVEGAR</Label>
              <Link to="/" style={item}>Início</Link>
              <Link to="/portas" style={item}>Portas</Link>
              <Link to="/projetos" style={item}>Projetos</Link>
              <Link to="/a-madre" style={item}>A MADRE</Link>
              <Link to="/blog" style={item}>Blog</Link>
              <Link to="/contato" style={item}>Contato</Link>
            </div>
            <div style={col}>
              <Label>SEGUIR</Label>
              <a href="https://www.instagram.com/designmadre" target="_blank" rel="noopener noreferrer" style={item}>Instagram</a>
              <a href="https://www.facebook.com/designmadre" target="_blank" rel="noopener noreferrer" style={item}>Facebook</a>
            </div>
            <div style={col}>
              <Label>FÁBRICA</Label>
              <span style={{ ...item, color: "#C8C8C8" }}>
                Rua Cinco, Lote 03, Galpão B, Setor C, Quadra 7, Distrito Industrial, Ananindeua/PA, CEP 67035-330
              </span>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: "8px 24px", borderTop: "1px solid #4A4A4A", paddingTop: 24, fontSize: 13, color: "#9A9A9A" }}>
          <span>© 2026 MADRE Indústria e Comércio Ltda.</span>
          <span>AMAZON | FURNITURE | LUXURY</span>
        </div>
      </div>
    </footer>
  );
}
