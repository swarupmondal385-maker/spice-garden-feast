import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, ChefHat, Sparkles, Users, Clock, Wine, Check, Calendar } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/spices.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

export const Route = createFileRoute("/chefs-table")({
  head: () => ({
    meta: [
      { title: "Chef's Table — Royal Hut, Kalyani" },
      { name: "description", content: "An eight-seat tasting experience at Royal Hut — eleven courses, live tandoor, paired mocktails. Friday and Saturday evenings only." },
      { property: "og:title", content: "Chef's Table at Royal Hut" },
      { property: "og:description", content: "Eleven courses. Eight seats. One unforgettable evening." },
    ],
  }),
  component: ChefsTablePage,
});

const COURSES = [
  { n: "01", t: "Welcome thali", d: "Saunf-mint shrub, papad three ways, mango-ginger pickle." },
  { n: "02", t: "Tandoor opener", d: "Smoked paneer 65, charred pineapple, mint-coriander chutney." },
  { n: "03", t: "Soup of the season", d: "Tomato-rasam shot, curry leaf foam." },
  { n: "04", t: "Chaat moment", d: "Aloo tikki, white pea ragda, yoghurt pearls, tamarind reduction." },
  { n: "05", t: "Tandoor centrepiece", d: "Whole mushroom kalimirch, table-side carved with truffle oil." },
  { n: "06", t: "Palate cleanser", d: "Jal jeera sorbet, kaffir lime crisps." },
  { n: "07", t: "House biryani", d: "Lucknowi-style, sealed handi opened at your table." },
  { n: "08", t: "Dal makhani 24-hr", d: "Served in a copper kadai with hand-rolled rumali." },
  { n: "09", t: "Curry of the night", d: "Chef's pick — could be malai kofta, could be paneer pasanda." },
  { n: "10", t: "Mithai duo", d: "Saffron rasmalai globe + warm gulab jamun, rabri pool." },
  { n: "11", t: "Paan chocolate", d: "Hand-rolled betel-leaf truffle, cardamom dust." },
];

function ChefsTablePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <PageHeader eyebrow="Chef's Table" title="Eleven courses." accent="Eight seats. Friday & Saturday only.">
        A two-hour tasting menu, served at our open kitchen counter. The tandoor
        crackles a metre away. Chef Sukhbir walks every course. Limited to one
        seating per evening.
      </PageHeader>

      {/* Hero band */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-20 grid lg:grid-cols-12 gap-8 items-stretch">
        <Reveal className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden shadow-warm h-full min-h-[420px]">
            <img src={interior} alt="Chef's Table counter" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-[oklch(0.95_0.02_80)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Friday · Saturday · 8:00 PM</p>
              <h2 className="mt-3 font-display text-3xl md:text-5xl leading-tight">A two-hour ceremony at the tandoor counter.</h2>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-5">
          <div className="card-warm p-8 h-full flex flex-col">
            <p className="text-xs uppercase tracking-[0.3em] text-saffron">The details</p>
            <ul className="mt-6 space-y-5 text-sm">
              <Item icon={<Users className="h-5 w-5 text-saffron" />} title="Seats 8">One seating per evening. Strangers welcome.</Item>
              <Item icon={<Clock className="h-5 w-5 text-saffron" />} title="2 hours">Starts 8 PM sharp. Eleven courses, paced like a story.</Item>
              <Item icon={<Wine className="h-5 w-5 text-saffron" />} title="Mocktail pairing">Five paired house mocktails. Optional add-on.</Item>
              <Item icon={<ChefHat className="h-5 w-5 text-saffron" />} title="₹ 2,400 / guest">Mocktail pairing ₹ 600 extra. Inclusive of taxes.</Item>
              <Item icon={<Sparkles className="h-5 w-5 text-saffron" />} title="Custom occasions">Birthdays, anniversaries — tell us and we'll weave in surprises.</Item>
            </ul>
            <a href="#reserve" className="btn-warm mt-auto pt-6 justify-center">Reserve a seat <ArrowRight className="h-4 w-4" /></a>
          </div>
        </Reveal>
      </section>

      {/* Course list */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron text-center">The menu</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-center leading-[1.05]">
              Eleven courses. <span className="font-script text-saffron font-normal">One arc.</span>
            </h2>
          </Reveal>

          <ol className="mt-14 grid sm:grid-cols-2 gap-5">
            {COURSES.map((c, i) => (
              <Reveal key={c.n} delay={i % 4}>
                <li className="card-warm p-6 h-full flex gap-5">
                  <span className="font-display text-3xl text-saffron/40 leading-none">{c.n}</span>
                  <div>
                    <h3 className="font-display text-xl leading-tight">{c.t}</h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.d}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>

          <p className="mt-10 text-center text-xs uppercase tracking-[0.25em] text-muted-foreground">
            Menu rotates with the season — courses may vary by night.
          </p>
        </div>
      </section>

      {/* Behind the scenes */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">Inside the kitchen</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Sit close to the <span className="font-script text-saffron font-normal">fire.</span>
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            The Chef's Table runs along our open kitchen pass. You'll see kebabs
            come off skewers, breads slap against the tandoor wall, and chutneys
            being plated to order. Chef Sukhbir narrates every course — how it's
            built, why it's spiced, what to pair with what.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {["Live tandoor counter", "Course-by-course chef commentary", "Photography welcomed", "Vegetarian & Jain menus on request"].map((p) => (
              <li key={p} className="flex items-center gap-3"><Check className="h-4 w-4 text-saffron" /> {p}</li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={1} className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <img src={spices} alt="" className="rounded-2xl h-64 w-full object-cover" loading="lazy" />
            <img src={dishPaneer} alt="" className="rounded-2xl h-64 w-full object-cover mt-10" loading="lazy" />
            <img src={dishDessert} alt="" className="rounded-2xl h-64 w-full object-cover -mt-10" loading="lazy" />
            <img src={interior} alt="" className="rounded-2xl h-64 w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Reserve */}
      <section id="reserve" className="bg-ink text-[oklch(0.95_0.02_80)] py-24">
        <div className="mx-auto max-w-3xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-gold text-center">Reserve your seat</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-center">Only 8 seats. Reserved by request.</h2>
            <p className="mt-4 text-center text-[oklch(0.9_0.02_80)]/70 text-sm">
              We'll WhatsApp you within an hour to confirm date, allergens and pairings.
            </p>
          </Reveal>

          <form
            onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
            className="mt-10 card-warm !bg-[oklch(0.18_0.03_45)] !border-white/10 p-6 md:p-8 space-y-5 text-[oklch(0.95_0.02_80)]"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <DarkField label="Full name" />
              <DarkField label="Phone" type="tel" />
            </div>
            <DarkField label="Email" type="email" />
            <div className="grid sm:grid-cols-2 gap-5">
              <DarkField label="Preferred date" type="date" />
              <DarkField label="Guests (max 8)" type="number" placeholder="2" />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-gold">Anything we should know?</label>
              <textarea rows={3}
                className="mt-2 w-full rounded-xl bg-[oklch(0.22_0.03_45)] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
            </div>
            <button type="submit" className="btn-warm w-full !py-4 text-base">
              {submitted ? <><Check className="h-5 w-5" /> Request sent — we'll WhatsApp shortly</> : <><Calendar className="h-4 w-4" /> Request a seat</>}
            </button>
          </form>

          <div className="mt-10 text-center">
            <Link to="/book" className="text-sm text-gold hover:text-saffron underline-offset-4 hover:underline">
              Looking for a regular table instead? →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function Item({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5">{icon}</span>
      <div>
        <p className="font-semibold">{title}</p>
        <p className="text-muted-foreground text-xs mt-0.5 leading-relaxed">{children}</p>
      </div>
    </li>
  );
}

function DarkField({ label, type="text", placeholder }: { label: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-gold">{label}</label>
      <input type={type} placeholder={placeholder} required
        className="mt-2 w-full rounded-xl bg-[oklch(0.22_0.03_45)] border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-gold transition-colors" />
    </div>
  );
}