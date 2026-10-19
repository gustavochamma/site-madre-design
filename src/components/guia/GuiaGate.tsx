import { Link } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";

const KEY = "madre-guia-acesso";

export function liberarGuia() {
  try { window.localStorage.setItem(KEY, "1"); } catch { /* navegação privada */ }
}

function temAcesso() {
  try {
    const params = new URLSearchParams(window.location.search);
    if (params.get("acesso") === "arquiteto") { liberarGuia(); return true; }
    return window.localStorage.getItem(KEY) === "1";
  } catch {
    return false;
  }
}

/** Mostra o guia só para quem se cadastrou na página /arquitetos (ou chegou pelo link do e-mail). */
export function GuiaGate({ children }: { children: ReactNode }) {
  const [estado, setEstado] = useState<"verificando" | "liberado" | "fechado">("verificando");
  useEffect(() => { setEstado(temAcesso() ? "liberado" : "fechado"); }, []);

  if (estado === "liberado") return <>{children}</>;
  if (estado === "verificando") return <div style={{ minHeight: "70vh" }} aria-busy="true" />;
  return (
    <section className="grain g-gate">
      <div className="pad g-gate-inner">
        <div className="g-eyebrow-light">GUIA PARA ARQUITETOS E DESIGNERS</div>
        <h1 className="serif g-gate-title">Este guia é <i>exclusivo para profissionais</i></h1>
        <p className="g-gate-text">Cadastre-se na página para arquitetos e designers para liberar o guia navegável e o caderno em PDF. O acesso é imediato.</p>
        <Link className="btn light" to="/arquitetos">LIBERAR MEU ACESSO</Link>
      </div>
    </section>
  );
}
