import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Sparkles, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/meal-plans")({
  head: () => ({
    meta: [
      { title: "Meal Plans — Office Lunch & Diet | Spice Garden" },
      { name: "description", content: "Monthly subscriptions for office lunch and personalised diet plans, delivered across central Kolkata." },
      { property: "og:title", content: "Meal Plans — Spice Garden" },
      { property: "og:description", content: "Office lunch and diet subscriptions cooked daily, delivered fresh." },
    ],
  }),
  component: MealPlansPage,
});

const PLANS = [
  { id: "office-classic", tag: "Office Lunch", title: "The Workday Thali", price: 4800, points: ["20 working-day lunches", "3 dishes + roti + rice + dessert", "Rotating regional menu", "Delivery before 1 pm"] },
  { id: "diet-sattvic", tag: "Diet Plan", title: "Sattvic Wellness", price: 6400, points: ["Calorie & macro tracked", "Cold-pressed oils only", "Nutritionist consultation", "Two meals / day"], featured: true },
  { id: "family-feast", tag: "Family", title: "Sunday Feast Box", price: 3200, points: ["Four Sundays / month", "Serves 4", "Chef's tasting menu", "Includes mithai"] },
];

function MealPlansPage() {
  const [picked, setPicked] = useState<string>("diet-sattvic");
  return (
    <div>
      <PageHeader eyebrow="Meal Plans" title="Eat home-cooked," accent="every working day.">
        Subscribe once. We cook, pack and deliver — hot, on time, all month.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid md:grid-cols-3 gap-6">
        {PLANS.map((p, i) => {
          const active = picked === p.id;
          return (
            <Reveal key={p.id} delay={i}>
              <button
                onClick={() => setPicked(p.id)}
                className={`text-left w-full card-warm p-8 h-full transition-all ${active ? "ring-2 ring-saffron border-saffron shadow-warm -translate-y-1" : ""} ${p.featured && !active ? "border-saffron/40" : ""}`}
              >
                <p className="text-xs uppercase tracking-[0.3em] text-saffron">{p.tag}</p>
                <h3 className="mt-3 font-display text-3xl">{p.title}</h3>
                <p className="mt-3 text-3xl font-display text-gradient-warm">₹{p.price.toLocaleString("en-IN")}<span className="text-base text-muted-foreground"> / month</span></p>
                <ul className="mt-6 space-y-3 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex gap-3"><Sparkles className="h-4 w-4 text-saffron mt-0.5 shrink-0" />{pt}</li>
                  ))}
                </ul>
              </button>
            </Reveal>
          );
        })}
      </div>

      <div className="mx-auto max-w-3xl px-5 md:px-8 pb-32">
        <Reveal>
          <div className="card-warm p-8 md:p-10">
            <h3 className="font-display text-2xl">Start your subscription</h3>
            <p className="mt-1 text-sm text-muted-foreground">You picked: <span className="text-saffron font-semibold">{PLANS.find(p => p.id === picked)?.title}</span></p>
            <form className="mt-6 grid sm:grid-cols-2 gap-5" onSubmit={(e) => e.preventDefault()}>
              {[
                ["Full name","name","text"], ["Phone","phone","tel"],
                ["Email","email","email"], ["Start date","start","date"],
              ].map(([l,n,t]) => (
                <div key={n}>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</label>
                  <input name={n} type={t}
                    className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
                </div>
              ))}
              <div className="sm:col-span-2">
                <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Delivery address</label>
                <textarea rows={3} className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
              </div>
              <button className="btn-warm sm:col-span-2 mt-2">Subscribe <ArrowRight className="h-4 w-4" /></button>
            </form>
            <p className="mt-4 text-xs text-muted-foreground text-center">Already a member? <Link to="/account" className="text-saffron">Sign in</Link></p>
          </div>
        </Reveal>
      </div>
    </div>
  );
}