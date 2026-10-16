export type NumberedItem = { label: string; detail?: string };

export function NumberedList({ items, dark = false }: { items: NumberedItem[]; dark?: boolean }) {
  return <ol className={`numbered-list${dark ? " numbered-list-dark" : ""}`}>
    {items.map(({ label, detail }, index) => <li key={label}>
      <span className="list-number">{String(index + 1).padStart(2, "0")}</span>
      <span className="serif list-label">{label}</span>
      {detail && <span className="list-detail">{detail}</span>}
    </li>)}
  </ol>;
}