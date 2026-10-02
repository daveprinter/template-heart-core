import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteNav, SiteFooter, ArrowIcon, appTabs } from "@/components/site-chrome";
import { HeroVideos } from "@/components/hero-videos";
import { HomeSections } from "@/components/home-sections";
import { services as allServices } from "@/lib/services";
import { Cable, FilePenLine, Megaphone, MessagesSquare, Rocket, ScanSearch } from "lucide-react";
import workBloom from "@/assets/work-bloom.jpg";
import workLoop from "@/assets/work-loop.jpg";
import workKickkit from "@/assets/work-kickkit.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Plonk Studio — Digital marketing that pops" },
      { name: "description", content: "Strategy, design and campaigns for brands that want to be impossible to ignore. Big ideas, shipped fast." },
      { property: "og:title", content: "Plonk Studio — Digital marketing that pops" },
      { property: "og:description", content: "Strategy, design and campaigns for brands that want to be impossible to ignore." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const stats = [
  { value: "140+", label: "brands launched" },
  { value: "3.4x", label: "avg. campaign lift" },
  { value: "9 yrs", label: "making noise" },
  { value: "24/7", label: "client dashboard" },
];

const services = [
  { n: "01", title: "Brand & Design", desc: "Identities, sites and design systems that turn heads and hold up at scale." },
  { n: "02", title: "Growth & Paid", desc: "Performance campaigns and SEO that keep the metrics pointing up, not sideways." },
  { n: "03", title: "Content & Social", desc: "Always-on content engines built to earn attention and keep it, channel by channel." },
];

const work = [
  { img: workBloom, tag: "Brand launch", title: "Bloom Coffee Co.", result: "+212% repeat orders in 90 days." },
  { img: workLoop, tag: "Paid + SEO", title: "Loop Ledger", result: "Cut CAC by 38% across search." },
  { img: workKickkit, tag: "Social engine", title: "Kickkit Sneakers", result: "5M organic reach in one quarter." },
];

const workspaceIcons = [Cable, FilePenLine, Megaphone, MessagesSquare, Rocket, ScanSearch];

const cta = "group relative inline-flex items-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90";
const ghost = "inline-flex items-center gap-3 border border-border px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background";

function HomePage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <HeroVideos />
        <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-24 text-center md:px-8 md:pt-32">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">
          Digital Marketing Studio
        </span>
        <h1 className="mt-8 font-display text-5xl italic leading-[1.02] tracking-tight md:text-7xl">
          We make brands pop off the page.
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-muted-foreground">
          Strategy, design and campaigns for brands that want to be impossible to ignore. Big ideas, shipped fast.
        </p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link to="/contact" className={cta}>
            Start a project <ArrowIcon />
          </Link>
          <Link to="/work" className={ghost}>
            See our work
          </Link>
        </div>
        </div>
      </section>

      {/* WORKSPACE SHORTCUTS */}
      <section className="border-y border-border bg-secondary">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-primary">Your workspace</span>
              <h2 className="mt-3 font-display text-4xl md:text-5xl">Choose where to begin</h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">Manage your channels, content, campaigns, reviews and business growth from one place.</p>
          </div>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {appTabs.map((tab, index) => {
              const Icon = workspaceIcons[index];
              return (
                <Link
                  key={tab.to}
                  to={tab.to}
                  className="group flex min-h-40 flex-col justify-between border border-border bg-card p-6 transition-colors hover:border-primary hover:bg-accent"
                >
                  <div className="flex items-start justify-between">
                    {Icon ? <Icon className="size-7 text-primary" strokeWidth={1.5} /> : null}
                    <ArrowIcon className="size-4 text-primary" />
                  </div>
                  <h3 className="mt-8 max-w-56 font-display text-2xl leading-tight">{tab.label}</h3>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-border">
        <div className="mx-auto grid max-w-6xl grid-cols-2 md:grid-cols-4 md:divide-x md:divide-border">
          {stats.map((s) => (
            <div key={s.label} className="px-6 py-12 text-center">
              <p className="font-display text-4xl md:text-5xl">{s.value}</p>
              <p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-6xl">What we do</h2>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground sm:block">
            Services / 01–03
          </span>
        </div>
        <div>
          {services.map((s) => (
            <div key={s.n} className="grid gap-4 border-b border-border py-12 md:grid-cols-[80px_1fr_1fr] md:items-baseline md:gap-8">
              <span className="text-xs text-muted-foreground">{s.n}/</span>
              <div>
                <h3 className="font-display text-3xl md:text-4xl">{s.title}</h3>
                <p className="mt-3 max-w-md leading-relaxed text-muted-foreground">{s.desc}</p>
              </div>
              <Link
                to="/services"
                className="group inline-flex items-center gap-3 self-start text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground md:justify-self-end"
              >
                Explore <ArrowIcon />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL MEDIA MARKETING SERVICES */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-24 md:px-8">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Social media marketing services</span>
          <h2 className="mt-4 font-display text-4xl md:text-6xl">Everything your brand needs online</h2>
          <div className="mt-12 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
            {allServices.map((s, i) => (
              <Link key={s.slug} to="/service/$slug" params={{ slug: s.slug }} className="group flex items-start justify-between gap-4 bg-background p-6 transition-colors hover:bg-card">
                <div>
                  <span className="text-[10px] text-muted-foreground">{String(i + 1).padStart(2, "0")}/</span>
                  <h3 className="mt-2 font-display text-2xl">{s.name}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.short}</p>
                </div>
                <ArrowIcon className="mt-8 h-4 w-4 shrink-0" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-8">
        <div className="flex items-end justify-between gap-6 border-b border-border pb-8">
          <h2 className="font-display text-4xl md:text-6xl">Selected work</h2>
          <Link to="/work" className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
            View all
          </Link>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {work.map((w, i) => (
            <Link key={w.title} to="/work" className="group block">
              <div className="aspect-[4/5] w-full overflow-hidden border border-border bg-muted">
                <img
                  src={w.img}
                  alt={w.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                />
              </div>
              <div className="mt-6 flex items-baseline justify-between">
                <h3 className="font-display text-2xl">{w.title}</h3>
                <span className="text-[10px] text-muted-foreground">0{i + 1}</span>
              </div>
              <p className="mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {w.tag} — {w.result}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* CLIENT PLATFORM */}
      <section className="border-y border-border bg-muted">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-24 md:px-8 lg:grid-cols-2">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Client platform</span>
            <h2 className="mt-6 font-display text-4xl italic leading-tight md:text-5xl">
              Your whole engagement, in one quiet dashboard.
            </h2>
            <p className="mt-5 max-w-md font-light leading-relaxed text-muted-foreground">
              Track active projects, invoices and campaign metrics in a single refined workspace built for how agencies actually work.
            </p>
            <Link to="/login" className={`${cta} mt-8`}>
              Log in to your space <ArrowIcon />
            </Link>
          </div>
          <div className="border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em]">Dashboard</p>
              <span className="text-xs font-light text-muted-foreground">October 2026</span>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-4">
              <div className="border border-border p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Active projects</p>
                <p className="mt-2 font-display text-4xl">3</p>
              </div>
              <div className="border border-border p-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Invoices due</p>
                <p className="mt-2 font-display text-4xl">$4,200</p>
              </div>
            </div>
            <div className="mt-4 space-y-3">
              <div className="flex items-center justify-between border border-border p-4">
                <span className="text-sm font-medium">Q4 Brand Refresh</span>
                <span className="border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">In progress</span>
              </div>
              <div className="flex items-center justify-between border border-border p-4">
                <span className="text-sm font-medium">Paid Social Sprint</span>
                <span className="border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground">On track</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeSections />


      {/* CLOSING CTA */}
      <section className="mx-auto max-w-6xl px-6 py-32 text-center md:px-8">
        <h2 className="font-display text-5xl italic leading-tight md:text-6xl">Let's define your digital presence.</h2>
        <Link to="/contact" className={`${cta} mt-12`}>
          Inquire now <ArrowIcon />
        </Link>
      </section>

      <SiteFooter />
    </div>
  );
}
