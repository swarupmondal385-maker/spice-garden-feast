import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Calendar, Users, Clock, MapPin, PartyPopper, ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/book")({
  head: () => ({
    meta: [
      { title: "Reserve a Table — Royal Hut Park Street" },
      { name: "description", content: "Reserve a table at Royal Hut or plan a private event in the heart of Kalyani, West Bengal." },
      { property: "og:title", content: "Reserve a Table — Royal Hut" },
      { property: "og:description", content: "Table reservations & private events in Kalyani, West Bengal." },
    ],
  }),
  component: BookPage,
});

function BookPage() {
  const [tab, setTab] = useState<"table" | "event">("table");
  const [sent, setSent] = useState(false);
  const slots = ["12:30", "13:30", "19:00", "20:00", "21:00", "22:00"];
  const [slot, setSlot] = useState(slots[3]);

  return (
    <div>
      <PageHeader eyebrow="Reservations" title="A table waits." accent="Just say when.">
        Whether it's a quiet dinner or a noisy reunion — we'll set the marigolds,
        chill the lassi and keep the kitchen on its toes.
      </PageHeader>

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
                <Field label="Guests" name="guests" type="number" placeholder="2" required />
              </div>

              {tab === "table" ? (
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Time slot</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {slots.map((s) => (
                      <button type="button" key={s} onClick={() => setSlot(s)}
                        className={`px-4 py-2 rounded-full text-sm border transition-all ${slot===s ? "bg-warm text-primary-foreground border-transparent shadow-soft" : "border-border hover:border-saffron"}`}>
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <>
                  <Field label="Event type" name="event" placeholder="Anniversary, birthday, corporate…" />
                  <div>
                    <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us a little more</label>
                    <textarea rows={4} className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
                  </div>
                </>
              )}

              <button type="submit" className="btn-warm w-full">
                {sent ? "Reserved ✦ We'll confirm on WhatsApp" : <>Confirm {tab === "table" ? "Reservation" : "Enquiry"} <ArrowRight className="h-4 w-4" /></>}
              </button>
              <p className="text-xs text-muted-foreground text-center">No card needed. We'll send a confirmation within minutes.</p>
            </form>
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-5">
          <div className="rounded-3xl overflow-hidden shadow-warm">
            <img src={interior} alt="Royal Hut dining room" className="w-full h-64 object-cover" loading="lazy" />
          </div>
          <ul className="mt-8 space-y-5 text-sm">
            <li className="flex items-start gap-4"><MapPin className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">B-16/19, A-B Connector, Block B</p><p className="text-muted-foreground">Kolkata 741235</p></div></li>
            <li className="flex items-start gap-4"><Clock className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">12:00 – 23:30</p><p className="text-muted-foreground">Daily, including Sundays</p></div></li>
            <li className="flex items-start gap-4"><Users className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Groups up to 30</p><p className="text-muted-foreground">Bigger groups via the events form</p></div></li>
            <li className="flex items-start gap-4"><PartyPopper className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Celebrations on the house</p><p className="text-muted-foreground">Tell us — we'll bring marigolds</p></div></li>
            <li className="flex items-start gap-4"><Calendar className="h-5 w-5 text-saffron mt-0.5" /><div><p className="font-semibold">Reschedule freely</p><p className="text-muted-foreground">Anytime up to two hours before</p></div></li>
          </ul>
        </Reveal>
      </div>
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