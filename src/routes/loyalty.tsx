import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Gift, Sparkles, Users, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/loyalty")({
  head: () => ({
    meta: [
      { title: "Garden Rewards — Loyalty Program | Royal Hut" },
      { name: "description", content: "Earn Garden Coins on every order, redeem for thalis and desserts, and unlock private chef experiences." },
      { property: "og:title", content: "Garden Rewards — Royal Hut" },
      { property: "og:description", content: "Loyalty, referrals and tiered perks for our regulars." },
    ],
  }),
  component: LoyaltyPage,
});

const TIERS = [
  { name: "Cardamom", coins: "0 – 1,000", color: "from-cardamom/20 to-cardamom/5", perks: ["Birthday dessert on us", "Member-only menu drops"] },
  { name: "Saffron", coins: "1,001 – 5,000", color: "from-saffron/40 to-gold/10", perks: ["Priority reservations", "10% bonus coins on weekends", "Free hand-rolled naan"] },
  { name: "Royal", coins: "5,000+", color: "from-rose/40 to-terracotta/30", perks: ["Annual chef's table for two", "Private event 5% discount", "Concierge WhatsApp line"] },
];

function LoyaltyPage() {
  return (
    <div>
      <PageHeader eyebrow="Garden Rewards" title="Eat well." accent="Earn well.">
        Every plate adds up. Spend ₹100, earn a Garden Coin. Redeem on signature thalis,
        festive desserts and once-a-year chef tables.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 md:px-8 grid md:grid-cols-3 gap-6 pb-16">
        {[
          { i: <Sparkles className="h-6 w-6" />, t: "Earn", d: "1 coin / ₹100 spent. Across dine-in, delivery and events." },
          { i: <Gift className="h-6 w-6" />, t: "Redeem", d: "Use coins on any dish — even the entire bill, if you've been busy." },
          { i: <Users className="h-6 w-6" />, t: "Refer", d: "Share a code, your friend gets 500 coins, you get 500 too." },
        ].map((b, i) => (
          <Reveal key={b.t} delay={i}>
            <div className="card-warm p-7 h-full">
              <div className="h-12 w-12 rounded-full bg-warm text-primary-foreground flex items-center justify-center">{b.i}</div>
              <h3 className="mt-5 font-display text-2xl">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <Reveal>
          <h2 className="font-display text-3xl md:text-4xl mb-8">Three tiers of generosity</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-6">
          {TIERS.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <div className={`relative rounded-3xl p-8 h-full border border-border bg-gradient-to-br ${t.color} overflow-hidden`}>
                <Award className="absolute -right-4 -top-4 h-32 w-32 text-saffron/10" />
                <p className="text-xs uppercase tracking-[0.3em] text-saffron">{t.coins} coins</p>
                <h3 className="mt-3 font-display text-3xl">{t.name}</h3>
                <ul className="mt-6 space-y-3 text-sm">
                  {t.perks.map((p) => (
                    <li key={p} className="flex gap-3 items-start"><span className="h-1.5 w-1.5 rounded-full bg-saffron mt-2 shrink-0" /> {p}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-16 card-warm p-8 md:p-12 text-center">
            <h3 className="font-display text-3xl">Join in under a minute.</h3>
            <p className="mt-3 text-muted-foreground">Create your account, get 500 welcome coins.</p>
            <Link to="/account" className="btn-warm mt-6">Create account <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </Reveal>
      </div>
    </div>
  );
}