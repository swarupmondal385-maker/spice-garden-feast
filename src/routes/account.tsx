import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Award, Mail, Lock } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/account")({
  head: () => ({
    meta: [
      { title: "Sign in — Royal Hut Rewards" },
      { name: "description", content: "Sign in or create your Royal Hut account to track orders, earn Garden Coins and manage reservations." },
      { property: "og:title", content: "Royal Hut — Account" },
      { property: "og:description", content: "Your rewards, orders and reservations in one place." },
    ],
  }),
  component: AccountPage,
});

function AccountPage() {
  const [mode, setMode] = useState<"signin"|"signup">("signup");
  const [done, setDone] = useState(false);
  return (
    <div>
      <PageHeader eyebrow="Your Garden" title={mode === "signin" ? "Welcome back." : "Save your seat."} accent={mode === "signin" ? "Hungry yet?" : "Earn 500 coins."}>
        {mode === "signin"
          ? "Sign in to track orders, manage reservations and use your Garden Coins."
          : "Create your free account, get 500 welcome Garden Coins, and unlock birthday & anniversary surprises."}
      </PageHeader>

      <div className="mx-auto max-w-6xl px-5 md:px-8 pb-24 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-7">
          <div className="card-warm p-7 md:p-10">
            <div className="flex bg-muted/60 rounded-full p-1 w-fit">
              {(["signup","signin"] as const).map((m) => (
                <button key={m} onClick={() => { setMode(m); setDone(false); }}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${mode===m ? "bg-warm text-primary-foreground shadow-soft" : "text-muted-foreground"}`}>
                  {m === "signup" ? "Create account" : "Sign in"}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setDone(true); }} className="mt-8 grid sm:grid-cols-2 gap-5">
              {mode === "signup" && <>
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
                <Field label="Date of birth" name="dob" type="date" />
                <Field label="Anniversary" name="anniv" type="date" />
                <div className="sm:col-span-2">
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Address (for delivery)</label>
                  <textarea name="address" rows={3} className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
                </div>
              </>}
              <Field label="Email" name="email" type="email" icon={<Mail className="h-4 w-4" />} required className="sm:col-span-2" />
              <Field label="Password" name="password" type="password" icon={<Lock className="h-4 w-4" />} required className="sm:col-span-2" />

              <button type="submit" className="btn-warm sm:col-span-2 mt-2">
                {done ? "All set ✦ Check your inbox" : <>{mode === "signup" ? "Create my account" : "Sign in"} <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="sm:col-span-2 text-xs text-muted-foreground text-center">
                By continuing you agree to our terms & rewards programme rules.
              </p>
            </form>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-5">
          <div className="rounded-3xl bg-ink text-[oklch(0.95_0.02_80)] p-8 md:p-10 shadow-warm relative overflow-hidden">
            <Award className="absolute -right-8 -top-8 h-48 w-48 text-saffron/10" />
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Member perks</p>
            <h3 className="mt-4 font-display text-3xl">Why join?</h3>
            <ul className="mt-6 space-y-4 text-sm">
              {["500 Garden Coins on signup","Birthday dessert on us","Anniversary table set with marigolds","Early access to chef tables","Faster reorders & saved addresses"].map((p) => (
                <li key={p} className="flex gap-3"><span className="h-1.5 w-1.5 rounded-full bg-gold mt-2 shrink-0" />{p}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </div>
  );
}

function Field({ label, name, type="text", required, icon, className="" }: { label: string; name: string; type?: string; required?: boolean; icon?: React.ReactNode; className?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <div className="mt-2 relative">
        {icon && <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">{icon}</span>}
        <input name={name} type={type} required={required}
          className={`w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors ${icon ? "pl-10" : ""}`} />
      </div>
    </div>
  );
}