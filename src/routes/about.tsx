import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Flame, Leaf, Heart, Award, Sparkles, Quote } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/spices.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import { Counter } from "@/components/site/Counter";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story — Royal Hut, Kalyani" },
      { name: "description", content: "How a small tandoor in Kalyani grew into one of West Bengal's most loved family restaurants — the people, the recipes, the philosophy." },
      { property: "og:title", content: "Our Story — Royal Hut" },
      { property: "og:description", content: "A decade of slow-cooked biryanis, hand-rolled rotis and second-helping hospitality." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <PageHeader eyebrow="Our story" title="A tandoor, a family," accent="and ten years of feeding Kalyani.">
        Royal Hut started as a tiny seven-table place beside the ITI More Durga Puja
        ground. Ten years and four lakh meals later, we're still using the same
        clay tandoor, the same family recipes, and the same simple promise: cook
        like you'd cook for your own people.
      </PageHeader>

      {/* Story split */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid lg:grid-cols-12 gap-12 items-center">
        <Reveal className="lg:col-span-7 space-y-6 text-base leading-relaxed text-muted-foreground">
          <p>
            In 2014, Sukhbir &amp; Reshma Singh moved from Amritsar to Kalyani with one
            stainless-steel handi, a notebook of grandmother's recipes, and an
            unreasonable belief that the suburbs deserved restaurant-grade food
            without restaurant-grade pretension.
          </p>
          <p>
            The first tandoor was a brick-and-clay drum welded in the back lane.
            The first menu was 14 dishes long. The first customers were Durga Puja
            volunteers next door who wandered in, sniffed once, and stayed for two
            hours. They came back the next night with their families.
          </p>
          <p>
            Today Royal Hut serves close to 800 covers on a busy Saturday, runs a
            catering kitchen for weddings across Nadia district, and trains a team
            of 36 — most of whom started as 18-year-olds learning to flip a roti.
            But the recipes haven't moved. The dal still simmers for 24 hours.
            The biryani still comes out of a sealed handi. The kheer still uses
            three litres of milk per kilo of rice.
          </p>
        </Reveal>
        <Reveal delay={1} className="lg:col-span-5">
          <div className="grid grid-cols-2 gap-4">
            <img src={interior} alt="Royal Hut dining" className="rounded-2xl h-56 w-full object-cover" loading="lazy" />
            <img src={spices} alt="Whole spices" className="rounded-2xl h-56 w-full object-cover mt-8" loading="lazy" />
            <img src={dishDal} alt="" className="rounded-2xl h-56 w-full object-cover -mt-8" loading="lazy" />
            <img src={dishBiryani} alt="" className="rounded-2xl h-56 w-full object-cover" loading="lazy" />
          </div>
        </Reveal>
      </section>

      {/* Pillars */}
      <section className="bg-muted/40 py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron text-center">What we believe</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl text-center max-w-2xl mx-auto leading-[1.05]">
              Four ideas, <span className="font-script text-saffron font-normal">cooked into everything.</span>
            </h2>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { i: <Flame className="h-5 w-5" />, t: "Slow always wins", d: "24-hour dal. 6-hour biryani dum. We never rush the heat — flavour follows patience." },
              { i: <Leaf className="h-5 w-5" />, t: "Source close, cook fresh", d: "Veg from Kalyani Block A market. Spices ground each morning. Nothing frozen, nothing canned." },
              { i: <Heart className="h-5 w-5" />, t: "Hospitality is a recipe too", d: "Free water. Free refills. Pat on the back for kids. Cake-cutting plate on the house." },
              { i: <Award className="h-5 w-5" />, t: "Train, don't hire", d: "Most of our chefs started in their teens. We grow people, not just menus." },
            ].map((p, i) => (
              <Reveal key={p.t} delay={i}>
                <div className="card-warm p-7 h-full">
                  <div className="h-10 w-10 rounded-full bg-saffron/10 text-saffron grid place-items-center">{p.i}</div>
                  <h3 className="mt-4 font-display text-xl">{p.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 py-24">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">Milestones</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            A decade, <span className="font-script text-saffron font-normal">one chapter at a time.</span>
          </h2>
        </Reveal>
        <div className="mt-14 relative">
          <div className="absolute left-3 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" aria-hidden />
          <ul className="space-y-12">
            {[
              { year: "2014", t: "Seven tables, one tandoor", d: "Royal Hut opens with a 14-dish menu and a borrowed cash drawer." },
              { year: "2016", t: "The dal goes viral (locally)", d: "Our 24-hour dal makhani gets a write-up in Anandabazar. Wait times hit 90 minutes." },
              { year: "2018", t: "First catering wedding", d: "A 600-guest baraat in Chakdaha. We discovered we love feeding crowds." },
              { year: "2020", t: "The hard year", d: "Pivoted to home-delivery thalis to keep the team employed. No layoffs." },
              { year: "2022", t: "New dining hall", d: "Renovated to seat 84, added a private family room and central A/C." },
              { year: "2024", t: "4.7★ on Google", d: "Crossed 1,200 reviews — most still mention the dal." },
            ].map((m, i) => (
              <li key={m.year} className={`relative md:grid md:grid-cols-2 md:gap-12 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
                <div className={`pl-10 md:pl-0 ${i % 2 === 0 ? "md:text-right md:pr-12" : "md:pl-12"}`}>
                  <p className="font-display text-4xl text-saffron">{m.year}</p>
                  <h3 className="mt-2 font-display text-2xl">{m.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.d}</p>
                </div>
                <span className="absolute left-3 md:left-1/2 top-2 md:top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-saffron ring-4 ring-background" />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-ink text-[oklch(0.95_0.02_80)] py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-y-10">
          {[
            { v: 400000, s: "+", l: "Meals served" },
            { v: 1200, s: "+", l: "Google reviews" },
            { v: 36, s: "", l: "Family of chefs" },
            { v: 10, s: " yrs", l: "Serving Kalyani" },
          ].map((s) => (
            <Reveal key={s.l} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-gold font-semibold">
                <Counter to={s.v} suffix={s.s} />
              </div>
              <p className="mt-2 text-xs uppercase tracking-[0.25em] text-[oklch(0.85_0.02_80)]/70">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Founder quote */}
      <section className="mx-auto max-w-4xl px-5 md:px-8 py-24 text-center">
        <Reveal>
          <Quote className="h-10 w-10 text-saffron mx-auto" />
          <p className="mt-6 font-display text-3xl md:text-4xl leading-tight">
            "We don't have a secret ingredient. We just refuse to take any shortcuts —
            and refuse to let anyone leave still hungry."
          </p>
          <p className="mt-6 text-xs uppercase tracking-[0.3em] text-muted-foreground">
            — Sukhbir Singh, Founder
          </p>
        </Reveal>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 pb-32">
        <Reveal>
          <div className="card-warm p-10 md:p-14 text-center">
            <p className="text-xs uppercase tracking-[0.3em] text-saffron">Come say hi</p>
            <h2 className="mt-3 font-display text-4xl md:text-5xl">Best way to know us? <span className="font-script text-saffron font-normal">Eat with us.</span></h2>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/book" className="btn-warm">Reserve a table <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/menu" className="btn-ghost-warm">Browse the menu</Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}