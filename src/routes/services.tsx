import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, ArrowIcon } from "@/components/site-chrome";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Plonk Studio" },
      { name: "description", content: "Brand & design, growth & paid, content & social — the three ways Plonk makes brands impossible to ignore." },
      { property: "og:title", content: "Services — Plonk Studio" },
      { property: "og:description", content: "Brand & design, growth & paid, content & social." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    n: "01",
    title: "Brand & Design",
    desc: "Identities, sites and design systems that turn heads and hold up at scale.",
    items: ["Brand strategy & positioning", "Visual identity & logo systems", "Website design & build", "Design systems & guidelines"],
  },
  {
    n: "02",
    title: "Growth & Paid",
    desc: "Performance campaigns and SEO that keep the metrics pointing up, not sideways.",
    items: ["Paid search & social", "SEO & content strategy", "Conversion rate optimisation", "Analytics & reporting"],
  },
  {
    n: "03",
    title: "Content & Social",
    desc: "Always-on content engines built to earn attention and keep it, channel by channel.",
    items: ["Social media management", "Video & motion content", "Email & lifecycle marketing", "Community building"],
  },
];

const cta = "group relative inline-flex items-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90";

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-16 pt-24 md:px-8 md:pt-32">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Services</span>
        <h1 className="mt-8 max-w-3xl font-display text-5xl italic leading-[1.02] tracking-tight md:text-6xl">
          Three ways we make you louder.
        </h1>
        <p className="mt-6 max-w-lg text-lg font-light leading-relaxed text-muted-foreground">
          Every engagement mixes strategy, craft and speed. Pick a lane — or let us build the whole engine.
        </p>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        {services.map((s) => (
          <div key={s.n} className="grid gap-8 border-t border-border py-12 md:grid-cols-[60px_1fr_1fr] md:items-center">
            <span className="text-xs text-muted-foreground">{s.n}/</span>
            <div>
              <h2 className="font-display text-3xl md:text-4xl">{s.title}</h2>
              <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
            <ul className="space-y-0">
              {s.items.map((item) => (
                <li key={item} className="flex items-center gap-4 border-b border-border py-3.5 text-sm text-foreground/80 last:border-b-0">
                  <span className="text-xs text-muted-foreground">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t border-border" />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-32 text-center md:px-8">
        <h2 className="font-display text-4xl italic leading-tight md:text-6xl">Not sure which lane?</h2>
        <p className="mx-auto mt-5 max-w-md font-light leading-relaxed text-muted-foreground">
          Tell us where you want to be in 12 months. We'll map the route.
        </p>
        <Link to="/contact" className={`${cta} mt-10`}>
          Start a project <ArrowIcon />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
