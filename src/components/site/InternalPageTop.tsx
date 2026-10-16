import type { ReactNode } from "react";

export function InternalPageTop({ label, children }: { label: string; children: ReactNode }) {
  return <section className="pad internal-page-top"><div className="eyebrow">{label}</div><h1 className="serif internal-page-title">{children}</h1></section>;
}