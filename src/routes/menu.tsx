import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Minus, Plus, ShoppingBag, X, ArrowRight, Flame } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import dishPaneer from "@/assets/dish-paneer.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import heroThali from "@/assets/hero-thali.jpg";

export const Route = createFileRoute("/menu")({
  head: () => ({
    meta: [
      { title: "Menu & Online Order — Spice Garden, Kolkata" },
      { name: "description", content: "Browse our pure-vegetarian menu and order online for delivery across central Kolkata." },
      { property: "og:title", content: "Spice Garden — Menu" },
      { property: "og:description", content: "Signature thalis, tandoor classics and seasonal specials." },
    ],
  }),
  component: MenuPage,
});

type Item = { id: string; name: string; desc: string; price: number; img?: string; spice?: 1 | 2 | 3; tag?: string };

const MENU: { cat: string; items: Item[] }[] = [
  { cat: "Starters",
    items: [
      { id: "s1", name: "Paneer Tikka Royale", desc: "Charred hung-curd paneer, smoked butter, mint chutney.", price: 480, img: dishPaneer, spice: 2, tag: "Signature" },
      { id: "s2", name: "Tandoori Mushroom", desc: "Button mushrooms in cashew marinade, kasundi mayo.", price: 420, spice: 1 },
      { id: "s3", name: "Beetroot Galouti", desc: "Slow-cooked beetroot kebab on saffron warqi paratha.", price: 460, spice: 1 },
      { id: "s4", name: "Crispy Lotus Stem", desc: "Honey-chilli glazed kamal kakdi, sesame.", price: 390, spice: 3 },
    ],
  },
  { cat: "Mains",
    items: [
      { id: "m1", name: "Dal Makhani 24-Hour", desc: "Overnight simmered urad dal, cream, white butter.", price: 420, img: dishDal, spice: 1, tag: "Most loved" },
      { id: "m2", name: "Subz Miloni", desc: "Seasonal vegetables in tomato-cashew gravy, fenugreek.", price: 460, spice: 2 },
      { id: "m3", name: "Kashmiri Dum Aloo", desc: "Baby potatoes in deep-red mathania chilli yogurt gravy.", price: 480, spice: 3 },
      { id: "m4", name: "Palak Paneer", desc: "Spinach purée tempered with garlic, cumin, fresh paneer.", price: 460, spice: 2 },
    ],
  },
  { cat: "Biryani & Rice",
    items: [
      { id: "b1", name: "Lucknowi Subz Biryani", desc: "Aged basmati, saffron, dum-cooked in copper handi.", price: 540, img: dishBiryani, spice: 2, tag: "Chef's pick" },
      { id: "b2", name: "Hyderabadi Veg Biryani", desc: "Mint-forward biryani with fried onions and raita.", price: 520, spice: 3 },
      { id: "b3", name: "Saffron Pulao", desc: "Fragrant basmati with caramelised onion, ghee, saffron.", price: 360, spice: 1 },
    ],
  },
  { cat: "Breads",
    items: [
      { id: "br1", name: "Garlic Butter Naan", desc: "Hand-rolled naan, roasted garlic, white butter.", price: 110, spice: 1 },
      { id: "br2", name: "Truffle Kulcha", desc: "Stuffed kulcha with truffle paste and amul cheese.", price: 320, spice: 1, tag: "New" },
      { id: "br3", name: "Laccha Paratha", desc: "Multi-layered flaky paratha brushed with ghee.", price: 140, spice: 1 },
    ],
  },
  { cat: "Desserts",
    items: [
      { id: "d1", name: "Saffron Rasmalai Globe", desc: "Cardamom-poached dumpling, saffron syrup, pistachio.", price: 320, img: dishDessert, spice: 1, tag: "Mithai" },
      { id: "d2", name: "Rabri Falooda", desc: "Rose-syrup falooda, thickened milk, basil seeds.", price: 280 },
      { id: "d3", name: "Gajar ka Halwa", desc: "Slow-cooked carrots in ghee and khoya. Served warm.", price: 260 },
    ],
  },
];

function MenuPage() {
  const [cart, setCart] = useState<Record<string, number>>({});
  const [openCart, setOpenCart] = useState(false);
  const [active, setActive] = useState<string>("Starters");

  const all = useMemo(() => MENU.flatMap(c => c.items), []);
  const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
  const totalAmt = Object.entries(cart).reduce((sum, [id, qty]) => {
    const it = all.find(x => x.id === id); return sum + (it ? it.price * qty : 0);
  }, 0);

  const add = (id: string) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const dec = (id: string) => setCart((c) => {
    const next = { ...c, [id]: Math.max(0, (c[id] ?? 0) - 1) };
    if (next[id] === 0) delete next[id];
    return next;
  });

  return (
    <div>
      <PageHeader eyebrow="The Menu" title="Pure vegetarian." accent="Soulfully cooked.">
        Pick from sixteen years of recipes. Add to cart, checkout in seconds — we'll deliver
        across central Kolkata or have it ready at the door.
      </PageHeader>

      <div className="sticky top-[68px] z-30 bg-background/85 backdrop-blur-xl border-y border-border">
        <div className="mx-auto max-w-7xl px-5 md:px-8 flex items-center gap-2 overflow-x-auto py-3 no-scrollbar">
          {MENU.map((c) => (
            <button key={c.cat}
              onClick={() => {
                setActive(c.cat);
                document.getElementById(c.cat)?.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all ${
                active === c.cat ? "bg-warm text-primary-foreground shadow-soft" : "text-foreground/70 hover:text-saffron"
              }`}
            >
              {c.cat}
            </button>
          ))}
          <button onClick={() => setOpenCart(true)}
            className="ml-auto shrink-0 inline-flex items-center gap-2 rounded-full bg-ink text-[oklch(0.95_0.02_80)] px-4 py-2 text-sm font-semibold hover:scale-105 transition-transform">
            <ShoppingBag className="h-4 w-4" /> Cart {totalQty > 0 && <span className="ml-1 bg-saffron text-ink rounded-full px-2 text-xs">{totalQty}</span>}
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8 py-16 space-y-24">
        {MENU.map((c) => (
          <section key={c.cat} id={c.cat} className="scroll-mt-40">
            <Reveal>
              <div className="flex items-end justify-between gap-6 mb-10">
                <h2 className="font-display text-4xl md:text-5xl">{c.cat}</h2>
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground hidden md:block">
                  {c.items.length} dishes
                </p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-6">
              {c.items.map((it, i) => (
                <Reveal key={it.id} delay={i % 4}>
                  <article className="card-warm p-5 flex gap-5 items-start group h-full">
                    {it.img ? (
                      <img src={it.img} alt={it.name} loading="lazy"
                        className="w-24 h-24 md:w-28 md:h-28 rounded-xl object-cover shrink-0 transition-transform duration-700 group-hover:scale-105" />
                    ) : (
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-xl bg-gradient-to-br from-saffron/20 via-gold/10 to-terracotta/20 shrink-0 flex items-center justify-center font-display text-2xl text-saffron/70">
                        {it.name.charAt(0)}
                      </div>
                    )}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-3">
                        <h3 className="font-display text-lg leading-tight">{it.name}</h3>
                        <span className="font-display text-saffron text-lg shrink-0">₹{it.price}</span>
                      </div>
                      <p className="mt-1.5 text-sm text-muted-foreground leading-relaxed">{it.desc}</p>
                      <div className="mt-3 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-xs">
                          {it.tag && <span className="px-2 py-0.5 rounded-full bg-saffron/15 text-saffron font-semibold">{it.tag}</span>}
                          {it.spice && (
                            <span className="inline-flex items-center gap-0.5 text-terracotta">
                              {Array.from({length: it.spice}).map((_, i) => <Flame key={i} className="h-3 w-3 fill-current" />)}
                            </span>
                          )}
                        </div>
                        {cart[it.id] ? (
                          <div className="flex items-center gap-2 bg-warm rounded-full p-1 text-primary-foreground">
                            <button onClick={() => dec(it.id)} className="h-6 w-6 rounded-full hover:bg-white/20 flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                            <span className="text-sm font-semibold w-5 text-center">{cart[it.id]}</span>
                            <button onClick={() => add(it.id)} className="h-6 w-6 rounded-full hover:bg-white/20 flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                          </div>
                        ) : (
                          <button onClick={() => add(it.id)} className="text-xs font-semibold text-saffron hover:text-terracotta inline-flex items-center gap-1 transition-colors">
                            <Plus className="h-3.5 w-3.5" /> Add
                          </button>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Floating cart bubble */}
      {totalQty > 0 && !openCart && (
        <button
          onClick={() => setOpenCart(true)}
          className="fixed bottom-24 md:bottom-28 left-5 z-50 btn-warm shadow-warm"
        >
          <ShoppingBag className="h-4 w-4" /> {totalQty} item{totalQty>1?"s":""} · ₹{totalAmt}
        </button>
      )}

      <AnimatePresence>
        {openCart && (
          <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}
              onClick={() => setOpenCart(false)} className="fixed inset-0 z-50 bg-ink/60 backdrop-blur-sm" />
            <motion.aside
              initial={{x:"100%"}} animate={{x:0}} exit={{x:"100%"}}
              transition={{ type: "tween", duration: 0.4, ease: [0.2,0.7,0.2,1] }}
              className="fixed right-0 top-0 h-full w-full sm:w-[420px] z-50 bg-background border-l border-border flex flex-col"
            >
              <div className="p-5 border-b border-border flex items-center justify-between">
                <h3 className="font-display text-2xl">Your plate</h3>
                <button onClick={() => setOpenCart(false)} className="h-9 w-9 rounded-full hover:bg-muted flex items-center justify-center"><X className="h-4 w-4" /></button>
              </div>
              <div className="flex-1 overflow-y-auto p-5 space-y-3">
                {totalQty === 0 ? (
                  <p className="text-muted-foreground text-sm text-center pt-20">Nothing here yet. Add a dish or two.</p>
                ) : Object.entries(cart).map(([id, qty]) => {
                  const it = all.find(x => x.id === id)!;
                  return (
                    <div key={id} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50">
                      <div className="flex-1">
                        <p className="font-medium text-sm">{it.name}</p>
                        <p className="text-xs text-muted-foreground">₹{it.price} × {qty}</p>
                      </div>
                      <div className="flex items-center gap-2 bg-warm rounded-full p-1 text-primary-foreground">
                        <button onClick={() => dec(id)} className="h-6 w-6 rounded-full hover:bg-white/20 flex items-center justify-center"><Minus className="h-3 w-3" /></button>
                        <span className="text-sm font-semibold w-5 text-center">{qty}</span>
                        <button onClick={() => add(id)} className="h-6 w-6 rounded-full hover:bg-white/20 flex items-center justify-center"><Plus className="h-3 w-3" /></button>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-5 border-t border-border space-y-3">
                <div className="flex justify-between text-sm text-muted-foreground"><span>Subtotal</span><span>₹{totalAmt}</span></div>
                <div className="flex justify-between text-sm text-muted-foreground"><span>Delivery</span><span>{totalAmt > 599 ? "Free" : "₹49"}</span></div>
                <div className="flex justify-between font-display text-xl"><span>Total</span><span className="text-saffron">₹{totalAmt + (totalAmt > 599 || totalAmt === 0 ? 0 : 49)}</span></div>
                <button disabled={totalQty===0} className="btn-warm w-full disabled:opacity-50 disabled:cursor-not-allowed">
                  Checkout <ArrowRight className="h-4 w-4" />
                </button>
                <Link to="/account" className="block text-center text-xs text-muted-foreground hover:text-saffron">
                  Sign in to use Garden Coins
                </Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}

// hide scrollbar utility
const styleEl = typeof document !== "undefined" ? document.createElement("style") : null;
if (styleEl) {
  styleEl.innerHTML = `.no-scrollbar::-webkit-scrollbar{display:none}.no-scrollbar{scrollbar-width:none}`;
  if (!document.head.querySelector("style[data-noscroll]")) {
    styleEl.setAttribute("data-noscroll","1");
    document.head.appendChild(styleEl);
  }
}

// hero image preload reference avoids unused import
void heroThali;