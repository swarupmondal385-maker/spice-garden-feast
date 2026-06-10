import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import {
  Calendar, Users, Clock, MapPin, PartyPopper, ArrowRight,
  Cake, Heart, Briefcase, Sparkles, ShieldCheck, Phone, Check, Star, Utensils,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Royal Hut, Kalyani" },
      { name: "description", content: "Reserve a table at Royal Hut in Kalyani — tandoori, biryani & Chinese, daily 11:30 AM – 11 PM. Free to book, confirms on WhatsApp in minutes." },
      { property: "og:title", content: "Reserve a Table — Royal Hut" },
      { property: "og:description", content: "Table reservations & private events at Royal Hut, Kalyani." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [tab, setTab] = useState<"table" | "event">("table");
  const [sent, setSent] = useState(false);
  const lunchSlots = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30"];
  const dinnerSlots = ["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"];
  const [slot, setSlot] = useState("20:00");
  const [occasion, setOccasion] = useState<string>("Just dinner");
  const [guests, setGuests] = useState(2);

  const occasions = useMemo(() => ([
    { id: "Just dinner", icon: <Utensils className="h-4 w-4" /> },
    { id: "Birthday", icon: <Cake className="h-4 w-4" /> },
    { id: "Anniversary", icon: <Heart className="h-4 w-4" /> },
    { id: "Business", icon: <Briefcase className="h-4 w-4" /> },
    { id: "Family", icon: <Users className="h-4 w-4" /> },
    { id: "Celebration", icon: <PartyPopper className="h-4 w-4" /> },
  ]), []);

  return (
    <div>
      <PageHeader eyebrow="Reservations" title="A table is waiting." accent="Just say when.">
        Whether it's a quiet dinner for two or a loud reunion for twenty —
        we'll fire the tandoor, chill the lassi and save your favourite seat.
        Confirmation arrives on WhatsApp in minutes.
      </PageHeader>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 -mt-2 mb-14">
          {[
            { icon: <Star className="h-4 w-4 fill-current" />, label: "4.7 ★ on Google" },
            { icon: <ShieldCheck className="h-4 w-4" />, label: "Free to reserve" },
            { icon: <Clock className="h-4 w-4" />, label: "Confirms in 5 min" },
            { icon: <PartyPopper className="h-4 w-4" />, label: "Celebrations on the house" },
          ].map((t) => (
            <div key={t.label} className="flex items-center gap-3 rounded-2xl border border-border bg-card/60 px-4 py-3 text-sm">
              <span className="text-saffron">{t.icon}</span>
              <span className="font-medium">{t.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-7">
          <div className="card-warm overflow-hidden">
            <div className="flex border-b border-border">
              {(["table","event"] as const).map((t) => (
                <button key={t}
                  onClick={() => { setTab(t); setSent(false); }}
                  className={`flex-1 py-4 text-sm font-semibold uppercase tracking-[0.2em] transition-colors ${tab===t ? "text-saffron bg-saffron/5 border-b-2 border-saffron" : "text-muted-foreground hover:text-foreground"}`}>
                  {t === "table" ? "Book a Table" : "Private Event"}
                </button>
              ))}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="p-6 md:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Full name" name="name" required />
                <Field label="Phone" name="phone" type="tel" required />
              </div>
              <Field label="Email" name="email" type="email" required />
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Date" name="date" type="date" required />
                <div>
                  <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Guests</label>
                  <div className="mt-2 flex items-stretch rounded-xl border border-input bg-background overflow-hidden">
                    <button type="button" onClick={() => setGuests((g) => Math.max(1, g - 1))}
                      className="px-4 text-lg text-muted-foreground hover:text-saffron">−</button>
                    <div className="flex-1 grid place-items-center font-display text-lg">{guests}</div>
                    <button type="button" onClick={() => setGuests((g) => Math.min(30, g + 1))}
                      className="px-4 text-lg text-muted-foreground hover:text-saffron">+</button>
                  </div>
                </div>
              </div>

              {tab === "table" ? (
                <>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Lunch · 12 – 3 PM</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {lunchSlots.map((s) => <SlotPill key={s} slot={s} active={slot} onPick={setSlot} />)}
                    </div>
                    <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">Dinner · 7 – 10:30 PM</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {dinnerSlots.map((s) => <SlotPill key={s} slot={s} active={slot} onPick={setSlot} />)}
                    </div>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Occasion</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {occasions.map((o) => (
                        <button type="button" key={o.id} onClick={() => setOccasion(o.id)}
                          className={`px-4 py-2 rounded-full text-sm border transition-all inline-flex items-center gap-2 ${occasion===o.id ? "bg-warm text-primary-foreground border-transparent shadow-soft" : "border-border hover:border-saffron"}`}>
                          {o.icon}{o.id}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Special requests</label>
                    <textarea name="notes" rows={3} placeholder="Window seat, kids' high chair, birthday surprise…"
                      className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                </>
              ) : (
                <>
                  <Field label="Event type" name="event" placeholder="Anniversary, birthday, corporate…" />
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us a little more</label>
                    <textarea rows={4} className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                </>
              )}

              <button type="submit" className="btn-warm w-full !py-4 text-base">
                {sent
                  ? <><Check className="h-5 w-5" /> Reserved ✦ We'll confirm on WhatsApp</>
                  : <>{tab === "table" ? `Reserve for ${guests} at ${slot}` : "Send event enquiry"} <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-xs text-muted-foreground text-center">
                No card required. Cancel or reschedule anytime up to two hours before your slot.
              </p>
            </form>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-5">
          <div className="relative rounded-3xl overflow-hidden shadow-warm">
            <img src={interior} alt="Royal Hut dining room" className="w-full h-64 object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-[oklch(0.95_0.02_80)]">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Tonight at Royal Hut</p>
              <p className="font-display text-2xl leading-tight mt-1">Tandoor lit at 6 PM. Save a seat.</p>
            </div>
          </div>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-4"><MapPin className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">B-16/19, A-B Connector, Block B</p><p className="text-muted-foreground">Kalyani, West Bengal 741235</p></div></li>
            <li className="flex items-start gap-4"><Clock className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">11:30 AM – 11:00 PM</p><p className="text-muted-foreground">Friday – Sunday until 11:30 PM</p></div></li>
            <li className="flex items-start gap-4"><Users className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Groups up to 30</p><p className="text-muted-foreground">Bigger groups via the private events tab</p></div></li>
            <li className="flex items-start gap-4"><PartyPopper className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Celebrations on the house</p><p className="text-muted-foreground">Tell us — we'll bring marigolds &amp; a sparkler</p></div></li>
            <li className="flex items-start gap-4"><Phone className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Prefer to call?</p><a href="tel:+919836832967" className="text-saffron hover:underline">+91 98368 32967</a></div></li>
            <li className="flex items-start gap-4"><Calendar className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Reschedule freely</p><p className="text-muted-foreground">Anytime up to two hours before your slot</p></div></li>
          </ul>

          <div className="mt-8 card-warm p-6 bg-ink text-[oklch(0.95_0.02_80)]">
            <p className="text-xs uppercase tracking-[0.3em] text-gold">Insider tip</p>
            <p className="mt-3 text-sm leading-relaxed text-[oklch(0.9_0.02_80)]/85">
              The mutton biryani comes out of the handi at 8:30 PM sharp.
              Reserve around 8:40 and you'll catch it at its smokiest.
            </p>
            <img src={dishBiryani} alt="" aria-hidden className="mt-5 h-32 w-full object-cover rounded-xl opacity-90" loading="lazy" />
          </div>
        </Reveal>
      </div>

      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron">How it works</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
              Three steps. <span className="font-script text-saffron font-normal">No friction.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {[
              { n: "01", t: "Pick your time", d: "Choose any slot in our lunch or dinner window. Live availability updates in real-time." },
              { n: "02", t: "We confirm", d: "Within 5 minutes you'll get a WhatsApp confirmation with directions and a one-tap reschedule link." },
              { n: "03", t: "Walk in & feast", d: "Skip the wait, head straight to your table. Tandoor warm, lassi cold, kitchen ready." },
            ].map((s, i) => (
              <Reveal key={s.n} delay={i}>
                <div className="card-warm p-7 h-full">
                  <p className="font-display text-5xl text-saffron/30">{s.n}</p>
                  <h3 className="mt-3 font-display text-2xl">{s.t}</h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32 grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-6">
          <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
            <Sparkles className="h-4 w-4" /> Private events
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Buyout the hall. <br />
            <span className="font-script text-saffron font-normal">We'll make it unforgettable.</span>
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Birthdays from 12 to 120. Office offsites. Engagement dinners.
            Our team handles décor, menu curation, live counters and DJ —
            you bring the people.
          </p>
          <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
            {["Custom menu curation","Live chaat & dosa stations","DJ & lighting on request","Photo-ready décor"].map((p) => (
              <li key={p} className="flex items-center gap-2"><Check className="h-4 w-4 text-saffron" /> {p}</li>
            ))}
          </ul>
          <Link to="/catering" className="btn-warm mt-8">Plan an event <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
        <Reveal delay={1} className="lg:col-span-6">
          <div className="grid grid-cols-2 gap-4">
            <img src={interior} alt="" className="rounded-2xl h-64 w-full object-cover" loading="lazy" />
            <img src={dishBiryani} alt="" className="rounded-2xl h-64 w-full object-cover mt-10" loading="lazy" />
          </div>
        </Reveal>
      </section>

      <section className="mx-auto max-w-4xl px-5 md:px-8 pb-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron text-center">Reservation FAQs</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-center">Questions, before you arrive.</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {[
            { q: "How early should I reserve?", a: "Weekend dinners fill 4–6 days ahead. Weekday lunch and pre-dinner slots usually accept same-day reservations." },
            { q: "Is there a deposit?", a: "No — table reservations are completely free. Private events of 30+ guests require a refundable hold via UPI." },
            { q: "Can we bring a cake?", a: "Of course. We don't charge cakeage — and we'll bring marigolds, a sparkler and our signature kheer on the house." },
            { q: "Do you have parking?", a: "Free off-street parking in front of the restaurant, plus valet service on Friday and Saturday nights." },
            { q: "Are children welcome?", a: "Always. We have high chairs, a kid-friendly menu (we love a buttery dal-rice combo), and patient staff." },
            { q: "Can we reschedule or cancel?", a: "Yes — anytime up to two hours before your slot. Use the link in your WhatsApp confirmation or call us." },
          ].map((f) => (
            <details key={f.q} className="group card-warm overflow-hidden">
              <summary className="cursor-pointer list-none p-5 flex items-center justify-between gap-4">
                <span className="font-display text-lg">{f.q}</span>
                <span className="h-8 w-8 rounded-full bg-saffron/10 text-saffron grid place-items-center transition-transform group-open:rotate-45 text-xl leading-none">+</span>
              </summary>
              <p className="px-5 pb-5 text-sm text-muted-foreground leading-relaxed">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

function Field({ label, name, type="text", required, placeholder }: { label: string; name: string; type?: string; required?: boolean; placeholder?: string }) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
    </div>
  );
}

function SlotPill({ slot, active, onPick }: { slot: string; active: string; onPick: (s: string) => void }) {
  const is = slot === active;
  return (
    <button type="button" onClick={() => onPick(slot)}
      className={`px-4 py-2 rounded-full text-sm border transition-all ${is ? "bg-warm text-primary-foreground border-transparent shadow-soft" : "border-border hover:border-saffron"}`}>
      {slot}
    </button>
  );
}