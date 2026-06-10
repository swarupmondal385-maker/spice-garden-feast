import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  MapPin, Phone, Clock, Car, Train, Utensils, Wind, Users,
  Navigation, Share2, Copy, Check, Star, ArrowRight, Calendar,
} from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";

export const Route = createFileRoute("/visit")({
  head: () => ({
    meta: [
      { title: "Visit Us — Royal Hut, Kalyani | Map, Directions & Hours" },
      { name: "description", content: "Find Royal Hut at ITI More Durga Puja Ground, A-B Connector, Block B, Kalyani 741235. Live map, directions, parking, opening hours and contact." },
      { property: "og:title", content: "Visit Royal Hut, Kalyani" },
      { property: "og:description", content: "Tandoori, biryani & Chinese — daily 11:30 AM to 11 PM, beside the ITI More Durga Puja Ground." },
    ],
  }),
  component: VisitPage,
});

const ADDRESS = "ITI More Durga Puja Ground, B-16/19, A-B Connector, Block B, Kalyani, West Bengal 741235";
const PLUS_CODE = "XCJQ+39 Kalyani, West Bengal";
const PHONE = "+91 98368 32967";
const TEL = "+919836832967";
const WHATSAPP = "919836832967";
const MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(ADDRESS)}`;
const MAPS_PLACE = "https://maps.app.goo.gl/JS1iMncr1yQZgZk86";
const MAPS_EMBED = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

function VisitPage() {
  return (
    <div>
      <PageHeader eyebrow="Find Us" title="Beside the Durga Puja ground." accent="Tandoor smoke included.">
        We're a five-minute walk from Kalyani ITI More, on the A-B Connector across
        from Block B. Drive in, ride in, or just follow the smell of charcoal.
      </PageHeader>

      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24 grid lg:grid-cols-12 gap-10">
        {/* MAP */}
        <Reveal className="lg:col-span-7">
          <div className="relative rounded-3xl overflow-hidden shadow-warm border border-border bg-muted">
            <div className="aspect-[4/3] md:aspect-[16/11]">
              <iframe
                title="Royal Hut on Google Maps"
                src={MAPS_EMBED}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full border-0"
              />
            </div>
            <div className="absolute top-4 left-4 right-4 md:right-auto md:max-w-xs rounded-2xl bg-background/95 backdrop-blur-xl border border-border shadow-soft p-4">
              <div className="flex items-center gap-1 text-saffron">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-2 text-xs font-semibold text-foreground">4.7 on Google</span>
              </div>
              <p className="mt-2 font-display text-lg leading-tight">Royal Hut Restaurant &amp; Caterer</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-muted-foreground">North Indian · Tandoor · Biryani</p>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-3">
            <a href={MAPS_DIRECTIONS} target="_blank" rel="noreferrer" className="btn-warm !py-3 !px-5 text-sm">
              <Navigation className="h-4 w-4" /> Get directions
            </a>
            <a href={MAPS_PLACE} target="_blank" rel="noreferrer" className="btn-ghost-warm text-sm">
              Open in Google Maps <ArrowRight className="h-4 w-4" />
            </a>
            <CopyAddressButton />
          </div>
        </Reveal>

        {/* CONTACT CARD */}
        <Reveal delay={1} className="lg:col-span-5">
          <div className="card-warm overflow-hidden">
            <img src={interior} alt="Royal Hut dining room" className="w-full h-44 object-cover" loading="lazy" />
            <div className="p-7">
              <p className="text-xs uppercase tracking-[0.3em] text-saffron">Contact &amp; Hours</p>
              <ul className="mt-5 space-y-5 text-sm">
                <InfoRow icon={<MapPin className="h-5 w-5 text-saffron" />} title="Address">
                  B-16/19, A-B Connector, Block B,<br />
                  ITI More Durga Puja Ground,<br />
                  Kalyani, West Bengal 741235
                  <p className="mt-1 text-xs text-muted-foreground">Plus code: {PLUS_CODE}</p>
                </InfoRow>
                <InfoRow icon={<Phone className="h-5 w-5 text-saffron" />} title="Phone">
                  <a href={`tel:${TEL}`} className="hover:text-saffron font-semibold">{PHONE}</a>
                  <p className="mt-1 text-xs text-muted-foreground">Walk-in confirmations &amp; takeaway orders</p>
                </InfoRow>
                <InfoRow icon={<Clock className="h-5 w-5 text-saffron" />} title="Hours">
                  <table className="text-sm">
                    <tbody className="[&_td]:py-0.5">
                      <tr><td className="pr-6 text-muted-foreground">Mon – Thu</td><td>11:30 AM – 11:00 PM</td></tr>
                      <tr><td className="pr-6 text-muted-foreground">Fri – Sun</td><td>11:30 AM – 11:30 PM</td></tr>
                      <tr><td className="pr-6 text-muted-foreground">Kitchen LO</td><td>30 min before close</td></tr>
                    </tbody>
                  </table>
                </InfoRow>
              </ul>
              <div className="mt-7 grid grid-cols-2 gap-3">
                <Link to="/book" className="btn-warm justify-center text-sm !py-3">
                  <Calendar className="h-4 w-4" /> Book a table
                </Link>
                <a href={`https://wa.me/${WHATSAPP}?text=Hi%20Royal%20Hut%21%20I%27d%20like%20to%20visit.`} target="_blank" rel="noreferrer" className="btn-ghost-warm justify-center text-sm !py-3">
                  WhatsApp us
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* HOW TO REACH */}
      <section className="bg-muted/40 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron">How to reach</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
              Three easy <span className="font-script text-saffron font-normal">routes in.</span>
            </h2>
          </Reveal>
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <RouteCard icon={<Car className="h-5 w-5" />} title="By car" eta="Free parking on premises">
              Pull off the A-B Connector at ITI More; we're the first building beside the Durga Puja ground. Ample off-street parking, valet on weekend evenings.
            </RouteCard>
            <RouteCard icon={<Train className="h-5 w-5" />} title="By local train" eta="8 min auto from Kalyani Stn.">
              Sealdah → Kalyani local, then a quick auto or toto to ITI More. Drivers know the spot — just say "Royal Hut".
            </RouteCard>
            <RouteCard icon={<Navigation className="h-5 w-5" />} title="By cab / app" eta="Uber & Ola available">
              Drop pin on Plus Code <span className="font-mono">XCJQ+39</span> or paste the address — the route is clean of late-night traffic from BT Road.
            </RouteCard>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">What to expect</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
            Walk in. <span className="font-script text-saffron font-normal">Stay a while.</span>
          </h2>
        </Reveal>
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Utensils className="h-5 w-5" />, title: "Two dining rooms", body: "60-seat main hall & a quieter 24-seat family room." },
            { icon: <Wind className="h-5 w-5" />, title: "Centrally A/C", body: "Cool through Kolkata summers, tandoor-warm in winter." },
            { icon: <Users className="h-5 w-5" />, title: "Groups welcome", body: "Tables of 8+ — reserve ahead to skip the wait." },
            { icon: <Car className="h-5 w-5" />, title: "Free parking", body: "Front-of-house & valet on Friday-Sunday evenings." },
          ].map((f, i) => (
            <Reveal key={f.title} delay={i}>
              <div className="card-warm p-6 h-full">
                <div className="h-10 w-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center">{f.icon}</div>
                <h3 className="mt-4 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="mx-auto max-w-5xl px-5 md:px-8 pb-32">
        <Reveal>
          <div className="card-warm bg-ink text-[oklch(0.95_0.02_80)] p-10 md:p-14 text-center overflow-hidden relative">
            <p className="text-xs uppercase tracking-[0.35em] text-gold">Tonight or this weekend</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">Save a seat at the tandoor.</h2>
            <p className="mt-4 text-sm text-[oklch(0.9_0.02_80)]/70 max-w-md mx-auto">
              Reservations confirm on WhatsApp within minutes. No card needed.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link to="/book" className="btn-warm">Book a table <ArrowRight className="h-4 w-4" /></Link>
              <a href={`tel:${TEL}`} className="btn-ghost-warm !text-[oklch(0.95_0.02_80)] !border-white/30 hover:!border-gold">
                <Phone className="h-4 w-4" /> {PHONE}
              </a>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}

function InfoRow({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <span className="mt-0.5">{icon}</span>
      <div className="flex-1">
        <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">{title}</p>
        <div className="mt-1 text-sm leading-relaxed">{children}</div>
      </div>
    </li>
  );
}

function RouteCard({ icon, title, eta, children }: { icon: React.ReactNode; title: string; eta: string; children: React.ReactNode }) {
  return (
    <div className="card-warm p-7 h-full">
      <div className="flex items-center gap-3">
        <span className="h-10 w-10 rounded-full bg-saffron/10 text-saffron flex items-center justify-center">{icon}</span>
        <div>
          <h3 className="font-display text-xl leading-tight">{title}</h3>
          <p className="text-xs text-muted-foreground">{eta}</p>
        </div>
      </div>
      <p className="mt-5 text-sm text-muted-foreground leading-relaxed">{children}</p>
    </div>
  );
}

function CopyAddressButton() {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(ADDRESS);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="btn-ghost-warm text-sm"
    >
      {copied ? <><Check className="h-4 w-4" /> Address copied</> : <><Copy className="h-4 w-4" /> Copy address</>}
    </button>
  );
}