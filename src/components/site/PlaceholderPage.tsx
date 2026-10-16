import { Header } from "./Header";
import { Footer } from "./Footer";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <Header />
      <main className="pad" style={{ paddingTop: 112, paddingBottom: 112 }}>
        <h1 className="serif" style={{ fontSize: "clamp(34px,3.8vw,56px)", lineHeight: 1.06 }}>{title}</h1>
      </main>
      <Footer />
    </>
  );
}
