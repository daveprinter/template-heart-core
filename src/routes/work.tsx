import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, ArrowIcon } from "@/components/site-chrome";
import workBloom from "@/assets/work-bloom.jpg";
import workLoop from "@/assets/work-loop.jpg";
import workKickkit from "@/assets/work-kickkit.jpg";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Selected Work — Plonk Studio" },
      { name: "description", content: "Case studies from Plonk Studio: brand launches, paid growth and social engines with real numbers." },
      { property: "og:title", content: "Selected Work — Plonk Studio" },
      { property: "og:description", content: "Brand launches, paid growth and social engines with real numbers." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

const cases = [
  {
    img: workBloom,
    tag: "Brand launch",
    title: "Bloom Coffee Co.",
    result: "+212% repeat orders in 90 days.",
    detail: "Full identity, packaging and launch campaign for a specialty roaster entering three new cities.",
    stats: [["+212%", "repeat orders"], ["3", "new cities"], ["6 wks", "launch window"]],
  },
  {
    img: workLoop,
    tag: "Paid + SEO",
    title: "Loop Ledger",
    result: "Cut CAC by 38% across search.",
    detail: "Rebuilt the paid search account and content hub for a fintech scaling past its first 10k users.",
    stats: [["-38%", "CAC"], ["4.1x", "ROAS"], ["10k+", "users reached"]],
  },
  {
    img: workKickkit,
    tag: "Social engine",
    title: "Kickkit Sneakers",
    result: "5M organic reach in one quarter.",
    detail: "An always-on short-form content engine that turned a sneaker drop brand into a community.",
    stats: [["5M", "organic reach"], ["120k", "new followers"], ["1", "sold-out drop"]],
  },
];

const cta = "group relative inline-flex items-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90";

function WorkPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-20 pt-24 text-center md:px-8 md:pt-32">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Selected Work</span>
        <h1 className="mt-8 font-display text-5xl italic leading-none tracking-tight md:text-7xl">
          Proof, not promises.
        </h1>
        <p className="mx-auto mt-8 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
          Every project below shipped on time and moved a number that matters.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="grid gap-x-16 gap-y-24 md:grid-cols-2">
          {cases.map((c, i) => (
            <article key={c.title} className={i % 2 === 1 ? "md:mt-24" : ""}>
              <div className="aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover grayscale transition-all duration-1000 ease-in-out group-hover:scale-105 group-hover:grayscale-0"
                />
              </div>
              <div className="mt-8 flex items-baseline justify-between">
                <h2 className="font-display text-3xl">{c.title}</h2>
                <span className="text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <p className="mt-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{c.tag}</p>
              <p className="mt-4 max-w-md leading-relaxed text-muted-foreground">{c.detail}</p>
              <div className="mt-6 grid grid-cols-3 divide-x divide-border border-y border-border">
                {c.stats.map(([v, l]) => (
                  <div key={l} className="px-4 py-4 text-center">
                    <p className="font-display text-2xl">{v}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm font-medium">{c.result}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32 text-center md:px-8">
        <h2 className="font-display text-4xl italic leading-tight md:text-6xl">Want numbers like these?</h2>
        <Link to="/contact" className={`${cta} mt-10`}>
          Start a project <ArrowIcon />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
