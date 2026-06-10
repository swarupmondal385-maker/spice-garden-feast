import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Search, Phone, MessageCircle } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "Help & FAQs — Royal Hut, Kalyani" },
      { name: "description", content: "Everything you might want to know before visiting Royal Hut — reservations, delivery, catering, allergens, parking and more." },
      { property: "og:title", content: "Royal Hut — Help & FAQs" },
      { property: "og:description", content: "Reservations, delivery, allergens, catering — answered." },
    ],
  }),
  component: FaqPage,
});

const SECTIONS = [
  {
    title: "Reservations",
    items: [
      { q: "Do I need to reserve a table?", a: "Not strictly — walk-ins are always welcome. But weekend dinners and any time after 8 PM get busy; reservations save you a wait." },
      { q: "How early should I book?", a: "Weekends fill 4–6 days ahead. Weekday lunches and pre-7 PM slots usually accept same-day bookings." },
      { q: "Is there a deposit?", a: "No — table reservations are completely free. Private events over 30 guests require a small refundable hold." },
      { q: "Can I cancel or reschedule?", a: "Yes, anytime up to two hours before your slot. Use the link in your WhatsApp confirmation or call us." },
      { q: "How big a group can you seat?", a: "Standard tables seat up to 12. For groups of 13–60, use the Private Events form. We have buyouts for 60+." },
    ],
  },
  {
    title: "Menu & Allergens",
    items: [
      { q: "Do you have vegetarian options?", a: "About 60% of our menu is vegetarian, including a fully vegetarian thali. Jain preparations available on request — please mention while reserving." },
      { q: "Do you serve halal meat?", a: "All our chicken and mutton is halal-certified, sourced from a single trusted supplier in Barrackpore." },
      { q: "Can you handle nut allergies?", a: "Yes. Tell us at reservation or before ordering — our kitchen will adjust. Cashew is used in several gravies so always declare it." },
      { q: "Is the food very spicy?", a: "Calibrated to be enjoyable, not punishing. We're happy to adjust heat on most dishes — just ask the server." },
      { q: "What's a must-try for first-timers?", a: "Dal makhani 24-hour, the mutton handi biryani, and tandoori paneer tikka. End with saffron rasmalai." },
    ],
  },
  {
    title: "Delivery & Takeaway",
    items: [
      { q: "Do you deliver?", a: "Yes — directly to PIN codes 741235, 741245 and 741246. Outside that, we list on Swiggy and Zomato." },
      { q: "What's the delivery time?", a: "30–45 minutes door-to-door for the local PIN belt; 45–70 minutes via aggregators depending on demand." },
      { q: "Is there a minimum order?", a: "₹ 400 for direct delivery, no minimum for pickup. Free delivery over ₹ 700." },
      { q: "Can I pick up myself?", a: "Of course — order on phone or WhatsApp. Pickup ready in ~20 minutes, parked spot reserved at the door." },
    ],
  },
  {
    title: "Catering & Events",
    items: [
      { q: "Do you cater off-site?", a: "Yes — weddings, sangeets, corporate offsites, birthdays. We operate across Nadia, North 24 Parganas and Kolkata." },
      { q: "What's the minimum order for catering?", a: "30 guests for plated catering, 50 guests for live counters and buffets." },
      { q: "How far in advance should I book?", a: "Wedding seasons (Nov–Feb, Apr–May) fill 2–3 months ahead. Office catering usually takes 5–7 days." },
      { q: "Can you do live counters?", a: "Yes — chaat, dosa, kebab, biryani, jalebi — even a live tandoor for hot rotis on-site." },
    ],
  },
  {
    title: "Visiting",
    items: [
      { q: "Where exactly are you?", a: "B-16/19, A-B Connector, Block B, beside the ITI More Durga Puja Ground, Kalyani 741235. Plus code XCJQ+39." },
      { q: "Is there parking?", a: "Free off-street parking out front. Valet on Friday and Saturday evenings." },
      { q: "Is the restaurant accessible?", a: "Yes — ground-floor entry, no steps, and our family room accommodates wheelchairs comfortably." },
      { q: "Are kids welcome?", a: "Absolutely. We have high chairs, a kids' menu, and patient staff. We're a family restaurant first." },
      { q: "Are pets allowed?", a: "Service animals always. Other pets aren't permitted in the dining hall — but we'll happily set up a takeaway counter." },
    ],
  },
  {
    title: "Payments & Loyalty",
    items: [
      { q: "What payment methods do you accept?", a: "Cash, all major cards, UPI (GPay/PhonePe/Paytm), and Royal Hut gift cards." },
      { q: "How does the rewards programme work?", a: "Earn 1 Garden Coin per ₹100 spent. Redeem on signature dishes, desserts, or upgrade to a Chef's Table seat." },
      { q: "Can I gift a meal?", a: "Yes — digital gift cards from ₹ 500 to ₹ 25,000, deliverable on WhatsApp or email." },
    ],
  },
];

function FaqPage() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const needle = q.trim().toLowerCase();
    if (!needle) return SECTIONS;
    return SECTIONS.map((s) => ({
      ...s,
      items: s.items.filter((i) =>
        i.q.toLowerCase().includes(needle) || i.a.toLowerCase().includes(needle)
      ),
    })).filter((s) => s.items.length > 0);
  }, [q]);

  return (
    <div>
      <PageHeader eyebrow="Help & FAQs" title="Quick answers," accent="warm welcome.">
        Reservations, allergens, delivery, catering, parking — chances are
        someone has asked it before. Use the search, or jump to a section.
      </PageHeader>

      {/* Search */}
      <div className="mx-auto max-w-3xl px-5 md:px-8 mb-12">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for parking, allergens, delivery…"
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-input bg-card text-base focus:outline-none focus:border-saffron transition-colors shadow-soft"
          />
        </div>
      </div>

      {/* Section index */}
      {!q && (
        <div className="mx-auto max-w-7xl px-5 md:px-8 mb-12">
          <div className="flex flex-wrap gap-2">
            {SECTIONS.map((s) => (
              <a key={s.title} href={`#${slug(s.title)}`}
                className="px-4 py-2 rounded-full text-sm border border-border hover:border-saffron transition-colors">
                {s.title}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Sections */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-24 space-y-16">
        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground">No matches. Try a different word — or just call us.</p>
        )}
        {filtered.map((s) => (
          <div key={s.title} id={slug(s.title)} className="scroll-mt-28">
            <Reveal>
              <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
              <div className="mt-2 h-px w-16 bg-saffron" />
            </Reveal>
            <div className="mt-8 space-y-3">
              {s.items.map((i) => (
                <details key={i.q} className="group card-warm overflow-hidden">
                  <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                    <span className="font-display text-lg">{i.q}</span>
                    <span className="h-8 w-8 shrink-0 rounded-full bg-saffron/10 text-saffron grid place-items-center transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{i.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Still need help */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-2 gap-5">
          <a href="tel:+919836832967" className="card-warm p-6 flex items-center gap-5 hover:border-saffron transition-colors">
            <span className="h-12 w-12 rounded-full bg-saffron/10 text-saffron grid place-items-center"><Phone className="h-5 w-5" /></span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Call us</p>
              <p className="mt-1 font-display text-xl">+91 98368 32967</p>
              <p className="text-xs text-muted-foreground">11 AM – 11 PM, every day</p>
            </div>
          </a>
          <a href="https://wa.me/919836832967?text=Hi%20Royal%20Hut%21" target="_blank" rel="noreferrer" className="card-warm p-6 flex items-center gap-5 hover:border-saffron transition-colors">
            <span className="h-12 w-12 rounded-full bg-[#25D366]/10 text-[#25D366] grid place-items-center"><MessageCircle className="h-5 w-5" /></span>
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">WhatsApp</p>
              <p className="mt-1 font-display text-xl">Chat with the host</p>
              <p className="text-xs text-muted-foreground">Typical reply &lt; 10 minutes</p>
            </div>
          </a>
        </div>
        <div className="mt-10 text-center">
          <Link to="/book" className="btn-warm">Reserve a table <ArrowRight className="h-4 w-4" /></Link>
        </div>
      </section>
    </div>
  );
}

function slug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}