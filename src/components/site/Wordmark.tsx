import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`group inline-flex flex-col leading-none ${className}`}>
      <span className="inline-flex items-baseline gap-1">
        <span className="font-display text-2xl md:text-[1.65rem] font-semibold tracking-tight text-foreground">
          Royal
        </span>
        <span className="font-script text-2xl md:text-3xl text-saffron -ml-1">Hut</span>
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-glow" aria-hidden />
      </span>
      <span className="hidden sm:block mt-1 text-[10px] uppercase tracking-[0.32em] text-muted-foreground">
        Restaurant &amp; Caterer · Kalyani
      </span>
    </Link>
  );
}