import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState } from "react";
import { ArrowRight, Star, Quote, Sparkles, Leaf, ChefHat, Gift, Award, Send, MapPin, Clock, ChevronDown } from "lucide-react";
import heroThali from "@/assets/hero-thali.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/spices.jpg";
import { Reveal } from "@/components/site/Reveal";
import { Counter } from "@/components/site/Counter";
import { SpiceParticles } from "@/components/site/SpiceParticles";
import { Marquee } from "@/components/site/Marquee";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Spice Garden — A Rooftop Vegetarian Feast in Park Street, Kolkata" },
      { name: "description", content: "Soulful pure-vegetarian Indian cuisine, hand-rolled breads and seasonal thalis served under marigold lights. Reserve a table or order online." },
      { property: "og:title", content: "Spice Garden — Pure Vegetarian, Pure Joy" },
      { property: "og:description", content: "Park Street's rooftop celebration of India's vegetarian heritage." },
    ],
  }),
  component: Index,
});

const DISHES = [
  { name: "Royal Paneer Tikka", desc: "Hung curd marinated paneer, charred over coal, finished with smoked butter.", price: "₹ 480", img: dishPaneer, tag: "Tandoor" },
  { name: "Dal Makhani 24-Hour", desc: "Black urad simmered overnight, finished with cream and white butter.", price: "₹ 420", img: dishDal, tag: "Signature" },
  { name: "Lucknowi Subz Biryani", desc: "Aged basmati layered with saffron, dum-cooked in a sealed copper handi.", price: "₹ 540", img: dishBiryani, tag: "Chef's Pick" },
  { name: "Saffron Rasmalai Globe", desc: "Cardamom-poached dumpling, saffron syrup, pistachio crumb, silver leaf.", price: "₹ 320", img: dishDessert, tag: "Mithai" },
];

const TESTIMONIALS = [
  { name: "Ananya Sen", role: "Kolkata", text: "The dal makhani is a religious experience. Service that makes you feel like family." },
  { name: "Rohan Mehra", role: "Bengaluru", text: "Every dish arrived like a small ceremony. The rooftop at dusk — unforgettable." },
  { name: "Priya & Vikram", role: "Anniversary", text: "They turned our anniversary into a feast. Marigolds on the table, kheer on the house." },
];

const FAQ = [
  { q: "Where do you deliver?", a: "We deliver across central Kolkata — Park Street, Esplanade, Camac Street, AJC Bose Road and most of the 700016/700019/700020 belt. Outside that, please call us." },
  { q: "How early should I reserve?", a: "Weekends fill 5–7 days ahead. For weekday lunch or pre-theatre dinner, same-day reservations usually work." },
  { q: "Is the entire menu pure-vegetarian?", a: "Always. Spice Garden has been 100% pure-vegetarian since the day we opened. Many dishes are also Jain-friendly on request." },
  { q: "Do you host private events?", a: "Yes — our rooftop seats 60 and the indoor hall seats 90. Use the Catering form to start a conversation." },
  { q: "Are corporate meal plans customisable?", a: "Absolutely. Office lunch and diet plans can be tuned for calories, allergens and cuisine rotation." },
];

function Index() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <SignatureMarquee />
      <Stats />
      <SignatureDishes />
      <RoomAndStory />
      <Plans />
      <Loyalty />
      <Catering />
      <Testimonials />
      <InstagramStrip />
      <GiftCards />
      <FaqSection />
      <FinalCTA />
    </div>
  );
}

/* ------------------------------ HERO ------------------------------ */
function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] grain overflow-hidden bg-ink">
      <motion.div style={{ y, scale }} className="absolute inset-0">
        <img src={heroThali} alt="Royal Spice Garden thali" className="h-full w-full object-cover opacity-70" />
        <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.12_0.02_35)]/85 via-[oklch(0.12_0.02_35)]/40 to-[oklch(0.12_0.02_35)]/95" />
      </motion.div>

      <SpiceParticles />

      <motion.div style={{ opacity }} className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-40 md:pt-48 pb-24 min-h-[100svh] flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }}
          className="inline-flex items-center gap-2 text-gold/90 text-xs md:text-sm uppercase tracking-[0.35em]"
        >
          <span className="h-px w-10 bg-gold/60" />
          Park Street · Kolkata · Since 2009
        </motion.p>

        <h1 className="mt-6 font-display text-[clamp(2.6rem,8vw,7rem)] leading-[0.95] text-[oklch(0.96_0.02_80)] max-w-5xl">
          {"A rooftop feast".split(" ").map((w, i) => (
            <motion.span key={i} initial={{ opacity: 0, y: 60, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              transition={{ delay: 0.35 + i * 0.12, duration: 1, ease: [0.2,0.7,0.2,1] }}
              className="inline-block mr-[0.25em]">{w}</motion.span>
          ))}
          <br />
          <motion.span initial={{ opacity: 0, y: 60, filter: "blur(10px)" }} animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
            transition={{ delay: 0.75, duration: 1, ease: [0.2,0.7,0.2,1] }}
            className="inline-block font-script text-gradient-festive font-normal">made of memory.</motion.span>
        </h1>

        <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.1, duration: 0.9 }}
          className="mt-7 max-w-xl text-base md:text-lg text-[oklch(0.92_0.02_80)]/80 leading-relaxed">
          Soulful pure-vegetarian Indian cuisine — slow-cooked dals, hand-rolled breads
          and seasonal thalis, served under marigold lights with a view of the city
          that taught us to cook.
        </motion.p>

        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.25, duration: 0.9 }}
          className="mt-9 flex flex-wrap items-center gap-4">
          <Link to="/menu" className="btn-warm group">
            Order Now <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <Link to="/book" className="btn-ghost-warm !text-[oklch(0.95_0.02_80)] !border-white/30 hover:!border-saffron">
            Book a Table
          </Link>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[oklch(0.92_0.02_80)]/60 text-xs uppercase tracking-[0.35em] flex flex-col items-center gap-2">
          Scroll
          <ChevronDown className="h-4 w-4 animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}

/* --------------------------- MARQUEE --------------------------- */
function SignatureMarquee() {
  return (
    <Marquee items={[
      "Dal Makhani 24-Hour",
      "Saffron Pulao",
      "Tandoori Mushroom",
      "Lucknowi Biryani",
      "Hand-rolled Naans",
      "Rabri Falooda",
      "Festive Thali",
      "Cold-pressed Lassi",
    ]} />
  );
}

/* ---------------------------- STATS ---------------------------- */
function Stats() {
  const items = [
    { value: 1200000, suffix: "+", label: "Dishes served" },
    { value: 86000, suffix: "+", label: "Happy guests" },
    { value: 16, suffix: " yrs", label: "On Park Street" },
    { value: 48, suffix: "+", label: "Signature recipes" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-5 md:px-8 py-24 md:py-32">
      <Reveal>
        <p className="divider-ornament text-xs md:text-sm uppercase tracking-[0.35em]"><span className="px-2">The Spice Garden Story</span></p>
      </Reveal>
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
        {items.map((s, i) => (
          <Reveal key={s.label} delay={i} className="text-center md:text-left">
            <div className="font-display text-5xl md:text-6xl text-gradient-warm font-semibold">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-2 text-sm uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ----------------------- SIGNATURE DISHES ----------------------- */
function SignatureDishes() {
  return (
    <section id="signature" className="relative py-24 md:py-36">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
              <Sparkles className="h-4 w-4" /> Signature Dishes
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-6xl max-w-2xl leading-[1.05]">
              Plates we'd <span className="font-script text-saffron font-normal">happily</span> be remembered by.
            </h2>
          </Reveal>
          <Reveal delay={1}>
            <Link to="/menu" className="btn-ghost-warm">View Full Menu <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {DISHES.map((d, i) => (
            <Reveal key={d.name} delay={i}>
              <article className="card-warm overflow-hidden group h-full flex flex-col">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img src={d.img} alt={d.name} loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
                  <span className="absolute top-4 left-4 text-[10px] uppercase tracking-[0.25em] bg-background/90 backdrop-blur px-3 py-1.5 rounded-full text-saffron font-semibold">
                    {d.tag}
                  </span>
                  <span className="absolute bottom-4 right-4 font-display text-lg text-[oklch(0.96_0.02_80)] bg-saffron/90 backdrop-blur px-3 py-1.5 rounded-full">
                    {d.price}
                  </span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-display text-xl">{d.name}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{d.desc}</p>
                  <Link to="/menu" className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-saffron group/link">
                    Add to plate
                    <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ----------------------- ROOM + STORY (parallax) ----------------------- */
function RoomAndStory() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], ["-10%", "15%"]);
  const ySpice = useTransform(scrollYProgress, [0, 1], ["10%", "-15%"]);

  return (
    <section ref={ref} className="relative py-24 md:py-36 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[5/4] overflow-hidden rounded-3xl shadow-warm">
            <motion.img style={{ y: yImg }} src={interior} alt="Rooftop interior" loading="lazy"
              className="absolute inset-0 h-[120%] w-full object-cover" />
          </div>
          <div className="absolute -bottom-10 -right-6 md:-right-12 w-44 md:w-64 aspect-square rounded-2xl overflow-hidden shadow-soft border-4 border-background rotate-3">
            <motion.img style={{ y: ySpice }} src={spices} alt="Whole spices" loading="lazy"
              className="h-[120%] w-full object-cover" />
          </div>
        </div>
        <div className="lg:col-span-5">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
              <Leaf className="h-4 w-4" /> Our Rooftop
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
              Marigold lights. <br />
              <span className="font-script text-saffron font-normal">A view of the city</span> we love.
            </h2>
            <p className="mt-6 text-base text-muted-foreground leading-relaxed">
              Four floors above Park Street, our rooftop is a little garden of brass
              lamps, hanging plants and slow conversations. The food is grandma's
              technique — restaurant precision. We've cooked here for sixteen years,
              and we're still excited every evening.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-6 text-sm">
              <div>
                <p className="text-saffron font-semibold uppercase tracking-[0.2em] text-xs">Address</p>
                <p className="mt-2">4th Floor, 27 Park Street,<br /> Kolkata 700016</p>
              </div>
              <div>
                <p className="text-saffron font-semibold uppercase tracking-[0.2em] text-xs">Hours</p>
                <p className="mt-2">Mon — Sun<br /> 12:00 – 23:30</p>
              </div>
            </div>
            <Link to="/book" className="btn-warm mt-10">Reserve your evening <ArrowRight className="h-4 w-4" /></Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------- PLANS ---------------------------- */
function Plans() {
  const plans = [
    {
      tag: "Office Lunch",
      title: "The Workday Thali",
      price: "₹ 4,800 / month",
      points: ["20 working-day lunches", "Rotating regional menu", "Delivery before 1 pm", "Skip days anytime"],
    },
    {
      tag: "Diet Plan",
      title: "Sattvic Wellness",
      price: "₹ 6,400 / month",
      points: ["Calorie & macro tracked", "Cold-pressed oils only", "Personal nutritionist call", "Two meals / day"],
      featured: true,
    },
  ];
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
            <ChefHat className="h-4 w-4" /> Meal Plans
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
            Subscriptions that <span className="font-script text-saffron font-normal">eat well</span> all month.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {plans.map((p, i) => (
            <Reveal key={p.title} delay={i}>
              <article className={`relative card-warm p-8 md:p-10 h-full overflow-hidden ${p.featured ? "bg-ink text-[oklch(0.95_0.02_80)] border-saffron/40" : ""}`}>
                {p.featured && (
                  <div className="absolute -top-1 -right-1 bg-saffron text-ink text-[10px] tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-bl-xl">Most loved</div>
                )}
                <p className={`text-xs uppercase tracking-[0.3em] ${p.featured ? "text-gold" : "text-saffron"}`}>{p.tag}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                <p className={`mt-2 text-xl ${p.featured ? "text-gold" : "text-foreground/70"}`}>{p.price}</p>
                <ul className="mt-7 space-y-3 text-sm">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-3">
                      <Sparkles className={`h-4 w-4 mt-0.5 shrink-0 ${p.featured ? "text-gold" : "text-saffron"}`} />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/meal-plans" className={`mt-8 inline-flex ${p.featured ? "btn-warm" : "btn-ghost-warm"}`}>
                  Subscribe <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- LOYALTY --------------------------- */
function Loyalty() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-ink" />
      <div className="absolute inset-0 opacity-40">
        <img src={spices} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center text-[oklch(0.95_0.02_80)]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold flex items-center gap-3">
            <Award className="h-4 w-4" /> Loyalty & Rewards
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Every meal earns you the next <span className="font-script text-gold font-normal">small joy</span>.
          </h2>
          <p className="mt-6 text-[oklch(0.92_0.02_80)]/75 max-w-md leading-relaxed">
            Earn 1 Garden Coin for every ₹100. Redeem on signature thalis,
            festive desserts and private chef tables. Refer a friend and you both
            get 500 coins on their first order.
          </p>
          <Link to="/loyalty" className="btn-warm mt-8">Join Garden Rewards <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>

        <Reveal delay={1}>
          <div className="relative">
            <div className="rounded-3xl bg-gradient-to-br from-saffron via-terracotta to-[oklch(0.42_0.07_25)] p-1 shadow-warm rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
              <div className="rounded-3xl bg-ink p-8 md:p-10">
                <div className="flex items-center justify-between">
                  <span className="font-script text-2xl text-gold">Garden Card</span>
                  <Award className="h-6 w-6 text-gold" />
                </div>
                <p className="mt-12 text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.02_80)]/60">Coin balance</p>
                <p className="mt-2 font-display text-6xl text-gradient-festive">2,480</p>
                <div className="mt-8 grid grid-cols-2 gap-4 text-xs">
                  <div><p className="text-[oklch(0.85_0.02_80)]/60 uppercase tracking-[0.2em]">Tier</p><p className="mt-1 font-semibold text-gold">Saffron</p></div>
                  <div><p className="text-[oklch(0.85_0.02_80)]/60 uppercase tracking-[0.2em]">Member since</p><p className="mt-1 font-semibold">Mar 2024</p></div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* --------------------------- CATERING --------------------------- */
function Catering() {
  const [sent, setSent] = useState(false);
  return (
    <section id="catering" className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-12 gap-10">
        <Reveal className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">Catering & Corporate</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Bring the <span className="font-script text-saffron font-normal">Spice Garden</span> to your celebration.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            Weddings, board lunches, intimate dinners, festive offices — we cook,
            we plate, we serve, we clean up. You get the compliments.
          </p>
          <div className="mt-8 space-y-3 text-sm">
            {["Custom multi-cuisine menus", "Live tandoor & chaat stations", "Vegan & Jain options", "From 20 to 2,000 guests"].map((t) => (
              <div key={t} className="flex items-center gap-3">
                <span className="h-1.5 w-1.5 rounded-full bg-saffron" /> {t}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={1} className="lg:col-span-7">
          <form
            onSubmit={(e) => { e.preventDefault(); setSent(true); }}
            className="card-warm p-7 md:p-10 grid sm:grid-cols-2 gap-5"
          >
            <Field label="Full name" name="name" required />
            <Field label="Phone" name="phone" type="tel" required />
            <Field label="Email" name="email" type="email" className="sm:col-span-2" required />
            <Field label="Event date" name="date" type="date" />
            <Field label="Guests" name="guests" type="number" placeholder="50" />
            <div className="sm:col-span-2">
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Tell us about your event</label>
              <textarea name="notes" rows={4}
                className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors" />
            </div>
            <button type="submit" className="btn-warm sm:col-span-2 mt-2">
              {sent ? "We'll be in touch ✦" : <>Send enquiry <Send className="h-4 w-4" /></>}
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text", required, className = "", placeholder }: { label: string; name: string; type?: string; required?: boolean; className?: string; placeholder?: string }) {
  return (
    <div className={className}>
      <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{label}</label>
      <input
        name={name} type={type} required={required} placeholder={placeholder}
        className="mt-2 w-full rounded-xl bg-background border border-input px-4 py-3 text-sm focus:outline-none focus:border-saffron transition-colors"
      />
    </div>
  );
}

/* ------------------------- TESTIMONIALS ------------------------- */
function Testimonials() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
            <Star className="h-4 w-4 fill-saffron" /> Google · 4.9 from 2,310 reviews
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl max-w-2xl leading-[1.05]">
            What guests are <span className="font-script text-saffron font-normal">whispering</span> at the table.
          </h2>
        </Reveal>
        <div className="mt-14 grid md:grid-cols-3 gap-7">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i}>
              <figure className="card-warm p-7 h-full flex flex-col">
                <Quote className="h-7 w-7 text-saffron" />
                <blockquote className="mt-5 text-lg font-display leading-snug">"{t.text}"</blockquote>
                <figcaption className="mt-6 pt-5 border-t border-border flex items-center justify-between text-sm">
                  <div>
                    <p className="font-semibold">{t.name}</p>
                    <p className="text-muted-foreground text-xs">{t.role}</p>
                  </div>
                  <div className="flex gap-0.5 text-saffron">
                    {Array.from({length:5}).map((_,i) => <Star key={i} className="h-3.5 w-3.5 fill-saffron" />)}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------- INSTAGRAM ------------------------- */
function InstagramStrip() {
  const imgs = [heroThali, dishPaneer, dishBiryani, dishDal, dishDessert, interior, spices, heroThali];
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8 flex flex-wrap items-end justify-between gap-4 mb-10">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron">@spicegarden.kolkata</p>
          <h2 className="mt-3 font-display text-3xl md:text-4xl">From our kitchen, to the feed.</h2>
        </Reveal>
        <Reveal delay={1}>
          <a href="https://instagram.com/spicegarden.kolkata" target="_blank" rel="noreferrer" className="btn-ghost-warm">
            Follow on Instagram <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3 px-2 md:px-3">
        {imgs.map((src, i) => (
          <Reveal key={i} delay={i % 4}>
            <a href="https://instagram.com/spicegarden.kolkata" target="_blank" rel="noreferrer"
              className="relative block aspect-square overflow-hidden rounded-xl group">
              <img src={src} alt={`Spice Garden feed ${i+1}`} loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/60 transition-colors flex items-center justify-center">
                <span className="text-[oklch(0.96_0.02_80)] opacity-0 group-hover:opacity-100 transition-opacity text-sm">View ↗</span>
              </div>
            </a>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ------------------------- GIFT CARDS ------------------------- */
function GiftCards() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <div className="relative">
            <div className="aspect-[16/10] rounded-3xl bg-gradient-to-br from-saffron via-rose to-terracotta p-1 shadow-warm rotate-2 hover:rotate-0 transition-transform duration-700">
              <div className="h-full w-full rounded-3xl bg-ink/95 p-8 md:p-10 flex flex-col justify-between text-[oklch(0.96_0.02_80)]">
                <div className="flex items-center justify-between">
                  <span className="font-script text-2xl text-gold">Spice Garden</span>
                  <Gift className="h-6 w-6 text-gold" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-[oklch(0.85_0.02_80)]/60">Digital gift card</p>
                  <p className="mt-2 font-display text-5xl text-gradient-festive">₹ 2,500</p>
                </div>
                <p className="text-xs text-[oklch(0.85_0.02_80)]/60">Redeemable in-store, online & for events.</p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center gap-3">
            <Gift className="h-4 w-4" /> Digital Gift Cards
          </p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl leading-[1.05]">
            Send a <span className="font-script text-saffron font-normal">meal worth remembering</span>.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
            Birthdays, anniversaries, thank-yous — gift cards arrive on WhatsApp
            and email instantly, with a personal note from you.
          </p>
          <Link to="/gift-cards" className="btn-warm mt-8">Send a gift card <ArrowRight className="h-4 w-4" /></Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------ FAQ ------------------------------ */
function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24 md:py-32 bg-muted/40">
      <div className="mx-auto max-w-4xl px-5 md:px-8">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-saffron text-center">Good to know</p>
          <h2 className="mt-4 font-display text-4xl md:text-5xl text-center leading-[1.05]">
            Frequently <span className="font-script text-saffron font-normal">asked</span>.
          </h2>
        </Reveal>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {FAQ.map((f, i) => (
            <Reveal key={f.q} delay={i % 4}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left py-6 flex items-start justify-between gap-6 group"
              >
                <span className="font-display text-lg md:text-xl group-hover:text-saffron transition-colors">{f.q}</span>
                <ChevronDown className={`h-5 w-5 mt-1 text-saffron transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-500"
                style={{ gridTemplateRows: open === i ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-muted-foreground leading-relaxed max-w-3xl">{f.a}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* --------------------------- FINAL CTA --------------------------- */
function FinalCTA() {
  return (
    <section className="relative py-32 overflow-hidden grain">
      <div className="absolute inset-0">
        <img src={interior} alt="" className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-ink/85" />
      </div>
      <SpiceParticles />
      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center text-[oklch(0.96_0.02_80)]">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-gold">Tonight, perhaps?</p>
          <h2 className="mt-5 font-display text-5xl md:text-7xl leading-[0.95]">
            We've kept a table <br /> with your <span className="font-script text-gradient-festive font-normal">name on it.</span>
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link to="/book" className="btn-warm">Book a Table <ArrowRight className="h-4 w-4" /></Link>
            <Link to="/menu" className="btn-ghost-warm !text-[oklch(0.95_0.02_80)] !border-white/30 hover:!border-saffron">Order Online</Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.25em] text-[oklch(0.92_0.02_80)]/70">
            <span className="flex items-center gap-2"><MapPin className="h-3.5 w-3.5 text-saffron" /> Park Street, Kolkata</span>
            <span className="flex items-center gap-2"><Clock className="h-3.5 w-3.5 text-saffron" /> 12:00 – 23:30</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
