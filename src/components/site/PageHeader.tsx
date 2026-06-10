import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow, title, accent, children,
}: { eyebrow: string; title: string; accent?: string; children?: ReactNode }) {
  return (
    <section className="relative pt-36 md:pt-44 pb-12 md:pb-16 grain">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">{eyebrow}</p>
          <h1 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95] max-w-4xl">
            {title} {accent && <span className="font-script text-saffron font-normal">{accent}</span>}
          </h1>
          {children && <div className="mt-6 max-w-2xl text-muted-foreground text-lg leading-relaxed">{children}</div>}
        </Reveal>
      </div>
    </section>
  );
}