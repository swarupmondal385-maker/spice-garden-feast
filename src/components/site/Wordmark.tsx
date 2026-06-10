import { Link } from "@tanstack/react-router";

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <Link to="/" className={`inline-flex items-baseline gap-1 leading-none ${className}`}>
      <span className="font-display text-2xl md:text-[1.65rem] font-semibold tracking-tight text-foreground">
        Spice
      </span>
      <span className="font-script text-2xl md:text-3xl text-saffron -ml-1">Garden</span>
      <span className="ml-1 h-1.5 w-1.5 rounded-full bg-saffron animate-pulse-glow" aria-hidden />
    </Link>
  );
}