export function SpiceParticles() {
  // Decorative floating spice/marigold dots in hero background
  const items = Array.from({ length: 18 }, (_, i) => i);
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {items.map((i) => {
        const size = 6 + (i % 5) * 4;
        const left = (i * 53) % 100;
        const top = (i * 37) % 100;
        const dur = 14 + (i % 7) * 3;
        const delay = (i % 9) * 0.6;
        const color = i % 3 === 0 ? "var(--saffron)" : i % 3 === 1 ? "var(--gold)" : "var(--terracotta)";
        return (
          <span
            key={i}
            className="absolute rounded-full blur-[1px] opacity-70 animate-drift"
            style={{
              left: `${left}%`,
              top: `${top}%`,
              width: size, height: size,
              background: color,
              animationDuration: `${dur}s`,
              animationDelay: `-${delay}s`,
              boxShadow: `0 0 ${size * 2}px ${color}`,
            }}
          />
        );
      })}
    </div>
  );
}