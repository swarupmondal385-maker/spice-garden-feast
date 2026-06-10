import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./Wordmark";

const NAV = [
  { to: "/menu", label: "Menu" },
  { to: "/book", label: "Reserve" },
  { to: "/visit", label: "Visit" },
  { to: "/meal-plans", label: "Meal Plans" },
  { to: "/catering", label: "Catering" },
  { to: "/loyalty", label: "Rewards" },
  { to: "/gift-cards", label: "Gift Cards" },
] as const;

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/80 border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center justify-between">
        <Wordmark />
        <nav className="hidden lg:flex items-center gap-1">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="px-4 py-2 text-sm font-medium text-foreground/70 hover:text-saffron transition-colors relative group"
              activeProps={{ className: "text-saffron" }}
            >
              {n.label}
              <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-saffron scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>
          ))}
        </nav>
        <div className="hidden lg:flex items-center gap-3">
          <Link to="/account" className="text-sm font-medium text-foreground/70 hover:text-saffron transition-colors">
            Sign in
          </Link>
          <Link to="/book" className="btn-warm !py-2.5 !px-5 text-sm">Book a Table</Link>
        </div>
        <button
          aria-label="Open menu"
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden p-2 text-foreground"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden mx-4 mt-3 rounded-2xl border border-border bg-card/95 backdrop-blur-xl shadow-soft p-4 animate-rise">
          <div className="flex flex-col">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="px-3 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/account"
              onClick={() => setOpen(false)}
              className="px-3 py-3 rounded-lg text-base font-medium text-foreground hover:bg-muted"
            >
              Sign in
            </Link>
            <Link to="/book" onClick={() => setOpen(false)} className="btn-warm mt-2">
              Book a Table
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}