import { Link } from "@tanstack/react-router";
import { Instagram, Phone, Mail, MapPin } from "lucide-react";
import { Wordmark } from "./Wordmark";

export function SiteFooter() {
  return (
    <footer className="relative mt-32 bg-ink text-[oklch(0.92_0.02_80)]">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-saffron to-transparent" />
      <div className="mx-auto max-w-7xl px-5 md:px-8 pt-20 pb-10">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Wordmark className="[&_span]:!text-[oklch(0.95_0.02_80)] [&_span.font-script]:!text-gold" />
            <p className="mt-5 max-w-md text-sm leading-relaxed text-[oklch(0.85_0.02_80)]/80">
              A neighbourhood tribute to India's culinary heritage — slow-cooked dals,
              hand-rolled breads and seasonal thalis served under marigold lights
              in the heart of Kalyani, West Bengal.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://instagram.com/royalhut.kalyani"
                target="_blank" rel="noreferrer"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-saffron hover:text-saffron transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="tel:+91919836832967"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-saffron hover:text-saffron transition-colors"
                aria-label="Call"
              >
                <Phone className="h-4 w-4" />
              </a>
              <a
                href="mailto:hello@royalhut.in"
                className="h-10 w-10 rounded-full border border-white/15 flex items-center justify-center hover:border-saffron hover:text-saffron transition-colors"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-4">Explore</h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/menu" className="hover:text-saffron">Menu</Link></li>
              <li><Link to="/book" className="hover:text-saffron">Reservations</Link></li>
              <li><Link to="/catering" className="hover:text-saffron">Catering</Link></li>
              <li><Link to="/meal-plans" className="hover:text-saffron">Meal Plans</Link></li>
              <li><Link to="/gift-cards" className="hover:text-saffron">Gift Cards</Link></li>
              <li><Link to="/loyalty" className="hover:text-saffron">Rewards</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-gold/80 mb-4">Visit</h4>
            <p className="text-sm flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-saffron" />
              B-16/19, A-B Connector, Block B,<br /> Kolkata 741235
            </p>
            <p className="mt-4 text-sm">Open daily<br /> 12:00 – 23:30</p>
            <a href="tel:+91919836832967" className="mt-4 inline-block text-sm text-gold hover:text-saffron">
              +91 98368 32967
            </a>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[oklch(0.78_0.02_80)]/70">
          <p>© {new Date().getFullYear()} Royal Hut Hospitality All rights reserved.</p>
          <p>Website by <span className="text-gold">Pixorra</span></p>
        </div>
      </div>
    </footer>
  );
}