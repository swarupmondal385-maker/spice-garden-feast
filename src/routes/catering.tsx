import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Send, Sparkles } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import heroThali from "@/assets/hero-thali.jpg";

export const Route = createFileRoute("/catering")({
  head: () => ({
    meta: [
      { title: "Catering & Corporate Orders — Spice Garden Kolkata" },
      { name: "description", content: "From boardroom lunches to weddings — pure-vegetarian catering with live stations across Kolkata." },
      { property: "og:title", content: "Catering — Spice Garden" },
      { property: "og:description", content: "Weddings, conferences, intimate dinners. We cook, plate and serve." },
    ],
  }),
  component: CateringPage,
});

function CateringPage() {
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHeader eyebrow="Catering & Corporate" title="You celebrate." accent="We'll cook.">
        Weddings, board lunches, intimate dinners, festive offices — pure-vegetarian
        menus from 20 to 2,000 guests, with live tandoor and chaat stations.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-warm">
            <img src={heroThali} alt="Catering" className="w-full h-72 object-cover" loading="lazy" />
          </div>
          <h3 className="mt-8 font-display text-2xl">What's included</h3>
          <ul className="mt-5 space-y-3 text-sm">
            {["Custom multi-cuisine Indian menus","Live tandoor, chaat & dosa stations","Bone china + brass thali serveware","Trained service staff in livery","Vegan & Jain options","On-site chef supervision"].map((p) => (
              <li key={p} className="flex gap-3"><Sparkles className="h-4 w-4 text-saffron mt-0.5 shrink-0" />{p}</li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-7">
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-warm p-7 md:p-10 grid sm:grid-cols-2 gap-5">
            <Field label="Full name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" required className="sm:col-span-2" />
            <Field label="Event date" name="date" type="date" />
            <Field label="Guests" name="guests" type="number" placeholder="50" />
            <Field label="Venue / city" name="venue" className="sm:col-span-2" />
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us about your event</label>
              <textarea rows={5} className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
            </div>
            <button type="submit" className="btn-warm sm:col-span-2">
              {sent ? "Sent ✦ We'll WhatsApp you within an hour" : <>Send enquiry <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ label, name, type="text", required, placeholder, className="" }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
    </div>
  );
}