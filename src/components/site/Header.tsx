import { Link } from "@tanstack/react-router";
import { useState } from "react";

const linkStyle = { padding: "12px 0" };
const navTxt = { fontSize: 13, letterSpacing: 2 };

export function Header({ variant = "light" }: { variant?: "light" | "hero" }) {
  const [open, setOpen] = useState(false);
  const hero = variant === "hero";
  const links: [string, string][] = hero
    ? [["/portas", "PORTAS"], ["/projetos", "MÓVEIS"], ["/projetos", "PROJETOS"], ["/a-madre", "A MADRE"], ["/blog", "BLOG"]]
    : [["/portas", "PORTAS"], ["/projetos", "PROJETOS"], ["/a-madre", "A MADRE"], ["/blog", "BLOG"]];
  const line = hero ? "#F9F9F9" : "#1C1C1C";

  return (
    <header
      className="pad site-header"
      style={{
        paddingTop: 22, paddingBottom: 22, display: "flex", alignItems: "center",
        justifyContent: "space-between", gap: 24,
        borderBottom: hero ? undefined : "1px solid #E6E6E6",
      }}
    >
      {hero ? (
        <a href="#topo" aria-label="MADRE, início">
          <img src="/images/logo-madre-branco.png" alt="MAD.RE" style={{ width: 160, height: 39, objectFit: "contain" }} />
        </a>
      ) : (
        <Link to="/" aria-label="MADRE, início">
          <img src="/images/logo-madre-cobre-preto.png" alt="MAD.RE" style={{ width: 160, height: 39, objectFit: "contain" }} />
        </Link>
      )}
      <nav className="navlinks" style={{ display: "flex", gap: 36, ...navTxt }}>
        {links.map(([to, label]) => (
          <Link key={label} to={to} style={linkStyle}>{label}</Link>
        ))}
      </nav>
      <div className="site-header-actions" style={{ display: "flex", alignItems: "center", gap: 24 }}>
        <button
          type="button"
          className="menu-btn"
          onClick={() => setOpen(true)}
          style={{ ...navTxt, padding: "12px 0", background: "none", border: 0, color: hero ? "#F9F9F9" : "#1C1C1C", font: "inherit", fontSize: 13, letterSpacing: 2, cursor: "pointer" }}
        >
          MENU
        </button>
        <Link to="/contato" style={{ ...navTxt, padding: "12px 0", borderBottom: `1px solid ${line}` }}>ORÇAMENTO</Link>
      </div>
      {open && (
        <div className="menu-overlay" role="dialog" aria-modal="true">
          <div className="pad" style={{ paddingTop: 22, paddingBottom: 22, display: "flex", alignItems: "center", justifyContent: "space-between", borderBottom: "1px solid #E6E6E6" }}>
            <Link to="/" onClick={() => setOpen(false)} aria-label="MADRE, início">
              <img src="/images/logo-madre-cobre-preto.png" alt="MAD.RE" style={{ width: 160, height: 39, objectFit: "contain" }} />
            </Link>
            <button type="button" onClick={() => setOpen(false)} style={{ background: "none", border: 0, font: "inherit", fontSize: 13, letterSpacing: 2, color: "#1C1C1C", padding: "12px 0", cursor: "pointer" }}>
              FECHAR
            </button>
          </div>
          <nav className="pad" style={{ display: "flex", flexDirection: "column", paddingTop: 40, ...navTxt }}>
            {[...links, ["/contato", "ORÇAMENTO"] as [string, string]].map(([to, label]) => (
              <Link key={label} to={to} onClick={() => setOpen(false)} style={{ padding: "16px 0", borderBottom: "1px solid #DEDEDE" }}>{label}</Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
