import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Camera, Instagram } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import interior from "@/assets/interior.jpg";
import spices from "@/assets/spices.jpg";
import dishBiryani from "@/assets/dish-biryani.jpg";
import dishDal from "@/assets/dish-dal.jpg";
import dishPaneer from "@/assets/dish-paneer.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import heroThali from "@/assets/hero-thali.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Royal Hut, Kalyani" },
      { name: "description", content: "A visual tour of Royal Hut — the food, the dining room, the tandoor, the team and the moments in between." },
      { property: "og:title", content: "Royal Hut Gallery" },
      { property: "og:description", content: "Inside the dining hall, around the tandoor, across the menu." },
    ],
  }),
  component: GalleryPage,
});

type Tag = "All" | "Food" | "Dining" | "Tandoor" | "Moments";
type Photo = { src: string; alt: string; tag: Exclude<Tag, "All">; tall?: boolean; wide?: boolean };

const PHOTOS: Photo[] = [
  { src: heroThali, alt: "Festive Royal Hut thali", tag: "Food", wide: true },
  { src: interior, alt: "Main dining hall at dusk", tag: "Dining", tall: true },
  { src: dishBiryani, alt: "Mutton biryani fresh from the handi", tag: "Food" },
  { src: spices, alt: "Whole spices being ground", tag: "Tandoor", tall: true },
  { src: dishDal, alt: "24-hour dal makhani", tag: "Food" },
  { src: dishPaneer, alt: "Tandoori paneer tikka", tag: "Tandoor", wide: true },
  { src: dishDessert, alt: "Saffron rasmalai globes", tag: "Food" },
  { src: interior, alt: "Family room set for an anniversary", tag: "Moments", wide: true },
  { src: heroThali, alt: "Sunday lunch service", tag: "Dining" },
  { src: spices, alt: "Tandoor at full glow", tag: "Tandoor", tall: true },
  { src: dishBiryani, alt: "Catering biryani — wedding service", tag: "Moments" },
  { src: dishDal, alt: "Plating in the open kitchen", tag: "Dining" },
];

function GalleryPage() {
  const [tag, setTag] = useState<Tag>("All");
  const [open, setOpen] = useState<Photo | null>(null);
  const tags: Tag[] = ["All", "Food", "Dining", "Tandoor", "Moments"];
  const list = tag === "All" ? PHOTOS : PHOTOS.filter((p) => p.tag === tag);

  return (
    <div>
      <PageHeader eyebrow="Gallery" title="A visual tour." accent="Open in any order.">
        Photographs from inside the dining hall, around the tandoor, and across the
        menu — including some unguarded family moments we love.
      </PageHeader>

      {/* Filters */}
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <div className="flex flex-wrap gap-2">
          {tags.map((t) => (
            <button key={t} onClick={() => setTag(t)}
              className={`px-4 py-2 rounded-full text-sm border transition-all ${tag===t ? "bg-warm text-primary-foreground border-transparent shadow-soft" : "border-border hover:border-saffron"}`}>
              {t}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry */}
      <section className="mx-auto max-w-7xl px-5 md:px-8 pb-24">
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance]">
          {list.map((p, i) => (
            <Reveal key={`${p.src}-${i}`} delay={i % 6} className="mb-5 break-inside-avoid">
              <button
                onClick={() => setOpen(p)}
                className="group relative block w-full overflow-hidden rounded-2xl shadow-soft"
              >
                <img
                  src={p.src}
                  alt={p.alt}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${p.tall ? "h-[420px]" : p.wide ? "h-[280px]" : "h-[340px]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="absolute bottom-3 left-3 right-3 text-left text-xs uppercase tracking-[0.2em] text-[oklch(0.95_0.02_80)] opacity-0 group-hover:opacity-100 transition-opacity">
                  {p.tag} · {p.alt}
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-4xl px-5 md:px-8 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.35em] text-saffron flex items-center justify-center gap-3">
              <Camera className="h-4 w-4" /> Tag us
            </p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl">
              Tag <span className="font-script text-saffron font-normal">@royalhut.kalyani</span> — we repost the best ones.
            </h2>
            <p className="mt-4 text-muted-foreground">Cake-cutting, first bites, biryani close-ups — send us your best frames.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a href="https://instagram.com/royalhut.kalyani" target="_blank" rel="noreferrer" className="btn-warm">
                <Instagram className="h-4 w-4" /> Follow on Instagram
              </a>
              <Link to="/book" className="btn-ghost-warm">Reserve a table <ArrowRight className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Lightbox */}
      {open && (
        <div className="fixed inset-0 z-[60] bg-ink/95 backdrop-blur-xl flex items-center justify-center p-5 animate-fade-in" onClick={() => setOpen(null)}>
          <button onClick={() => setOpen(null)} aria-label="Close" className="absolute top-5 right-5 h-10 w-10 rounded-full bg-background/10 text-[oklch(0.95_0.02_80)] hover:bg-background/20 grid place-items-center">
            <X className="h-5 w-5" />
          </button>
          <img src={open.src} alt={open.alt} className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-warm" />
          <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-[oklch(0.95_0.02_80)]/80">{open.alt}</p>
        </div>
      )}
    </div>
  );
}