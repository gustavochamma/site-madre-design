export function ContactIcon({ type, size = 17 }: { type: "mail" | "phone"; size?: number }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinejoin: "miter" as const,
    strokeLinecap: "square" as const,
    "aria-hidden": true,
    style: { flex: "none" },
  };
  if (type === "mail") {
    return (
      <svg {...common}>
        <rect x="3" y="5.5" width="18" height="13" />
        <path d="M3.5 6.5 12 13l8.5-6.5" />
      </svg>
    );
  }
  return (
    <svg {...common}>
      <path d="M6.6 3.5H9l1.4 4.2-2 1.4a12 12 0 0 0 6 6l1.4-2 4.2 1.4v2.4a2 2 0 0 1-2 2A16.5 16.5 0 0 1 4.6 5.5a2 2 0 0 1 2-2Z" />
    </svg>
  );
}
