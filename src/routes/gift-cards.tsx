import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Gift, Send } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/gift-cards")({
  head: () => ({
    meta: [
      { title: "Digital Gift Cards — Royal Hut Kolkata" },
      { name: "description", content: "Send a Royal Hut gift card on WhatsApp or email — redeemable in-store, online and for events." },
      { property: "og:title", content: "Royal Hut Gift Cards" },
      { property: "og:description", content: "Instant digital gift cards from ₹500 to ₹25,000." },
    ],
  }),
  component: GiftCardPage,
});

const AMOUNTS = [500, 1000, 2500, 5000, 10000, 25000];

function GiftCardPage() {
  const [amount, setAmount] = useState(2500);
  const [sent, setSent] = useState(false);
  return (
    <div>
      <PageHeader eyebrow="Gift Cards" title="A feast," accent="wrapped in saffron.">
        Birthdays, anniversaries, thank-yous. Gift cards arrive on WhatsApp and email
        instantly, with a personal note.
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 md:px-8 pb-24 grid lg:grid-cols-2 gap-12">
        <Reveal>
          <div className="sticky top-32">
            <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-saffron via-rose to-terracotta p-1 shadow-warm">
              <div className="h-full rounded-3xl bg-ink p-8 md:p-10 flex flex-col justify-between text-[oklch(0.96_0.02_80)]">
                <div className="flex items-center justify-between">
                  <span className="font-script text-2xl text-gold">Royal Hut</span>
                  <Gift className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.02_80)]/60">Digital gift card</p>
                  <p className="mt-2 font-display text-6xl text-gradient-festive">₹ {amount.toLocaleString("en-IN")}</p>
                </div>
                <p className="text-xs text-[oklch(0.85_0.02_80)]/60">Valid for 12 months · Redeemable everywhere</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={1}>
          <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="card-warm p-7 md:p-10 space-y-6">
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Choose amount</label>
              <div className="mt-3 flex flex-wrap gap-2">
                {AMOUNTS.map((a) => (
                  <button type="button" key={a} onClick={() => setAmount(a)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${amount===a ? "bg-warm text-primary-foreground border-transparent shadow-soft" : "border-border hover:border-saffron"}`}>
                    ₹{a.toLocaleString("en-IN")}
                  </button>
                ))}
              </div>
            </div>
            <Field label="From" name="from" required />
            <Field label="To" name="to" required />
            <Field label="Recipient WhatsApp or email" name="contact" required />
            <div>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Your message</label>
              <textarea rows={4} placeholder="Happy birthday, eat well…"
                className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
            </div>
            <button type="submit" className="btn-warm w-full">
              {sent ? "Gifted ✦ They'll get it instantly" : <>Send gift card <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ label, name, required }: { label: string; name: string; required?: boolean }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input name={name} required={required}
        className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
    </div>
  );
}