import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, ArrowIcon } from "@/components/site-chrome";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Plonk Studio" },
      { name: "description", content: "Plonk is a small, senior digital marketing studio. Nine years, 140+ brands, zero account managers." },
      { property: "og:title", content: "About — Plonk Studio" },
      { property: "og:description", content: "A small, senior digital marketing studio. Nine years, 140+ brands." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  { title: "Loud beats safe", desc: "If the work doesn't make someone feel something, it goes back in the oven." },
  { title: "Small on purpose", desc: "You work with the people who do the work. No hand-offs, no telephone game." },
  { title: "Numbers or it didn't happen", desc: "Every campaign ships with a metric it's trying to move. We report the misses too." },
  { title: "Fast is a feature", desc: "Momentum wins. We'd rather ship a great thing Friday than a perfect thing never." },
];

const cta = "group relative inline-flex items-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90";

function AboutPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-8 md:pt-32">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">About us</span>
        <h1 className="mt-8 max-w-3xl font-display text-5xl italic leading-[1.02] tracking-tight md:text-6xl">
          A small studio with a big volume knob.
        </h1>
        <p className="mt-6 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
          Plonk started in 2017 with two desks and one belief: most marketing is wallpaper. Nine years and 140+ brands later, we still only take on work we can make impossible to ignore.
        </p>
      </section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
            <h2 className="font-display text-4xl md:text-6xl">How we work</h2>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:block">
              Principles / 01–04
            </span>
          </div>
          <div className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2">
            {values.map((v, i) => (
              <div key={v.title} className="bg-card p-10">
                <span className="text-[10px] text-muted-foreground">0{i + 1}/</span>
                <h3 className="mt-4 font-display text-3xl">{v.title}</h3>
                <p className="mt-3 max-w-sm font-light leading-relaxed text-muted-foreground">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-32 text-center md:px-8">
        <h2 className="font-display text-4xl italic leading-tight md:text-6xl">Sound like your kind of studio?</h2>
        <Link to="/contact" className={`${cta} mt-10`}>
          Say hello <ArrowIcon />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
