import type { ReactNode } from "react";

export function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-border/60 bg-ink text-[oklch(0.95_0.02_80)] py-5">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {doubled.map((it, i) => (
          <span key={i} className="flex items-center gap-12 font-display text-2xl md:text-3xl">
            {it}
            <span className="text-saffron text-3xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}