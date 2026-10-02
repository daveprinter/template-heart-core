import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Client Dashboard — Plonk Studio" },
      { name: "description", content: "Your Plonk client space: active projects, invoices and campaign metrics in one place." },
      { property: "og:title", content: "Client Dashboard — Plonk Studio" },
      { property: "og:description", content: "Active projects, invoices and campaign metrics in one place." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: DashboardPage,
});

const projects = [
  { name: "Q4 Brand Refresh", status: "In progress", progress: "w-2/3" },
  { name: "Paid Social Sprint", status: "On track", progress: "w-4/5" },
  { name: "Holiday Campaign", status: "Kickoff", progress: "w-1/5" },
];

const invoices = [
  { id: "INV-2041", label: "Brand Refresh — milestone 2", amount: "$2,400", due: "Due Oct 15" },
  { id: "INV-2042", label: "Paid Social — October", amount: "$1,800", due: "Due Oct 31" },
];

const metrics = [
  { label: "Reach this month", value: "842k", delta: "+18%" },
  { label: "Avg. ROAS", value: "4.1x", delta: "+0.6" },
  { label: "New followers", value: "12.4k", delta: "+9%" },
];

const statusPill = "border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.15em] text-muted-foreground";

function DashboardPage() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <Link to="/" className="font-display text-3xl tracking-tight">
            Plonk<span className="italic">.</span>
          </Link>
          <div className="flex items-center gap-5">
            <span className="hidden text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground sm:block">
              Bloom Coffee Co.
            </span>
            <Link
              to="/login"
              className="border border-border px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              Log out
            </Link>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-6 pb-24 pt-14 md:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4 border-b border-border pb-8">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Client space</span>
            <h1 className="mt-4 font-display text-4xl italic md:text-6xl">Good morning, Ada.</h1>
            <p className="mt-3 font-light text-muted-foreground">Here's everything happening across your engagement — October 2026.</p>
          </div>
          <span className={statusPill}>All systems go</span>
        </div>

        {/* Metrics */}
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-3">
          {metrics.map((m) => (
            <div key={m.label} className="bg-card p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{m.label}</p>
              <div className="mt-3 flex items-baseline gap-3">
                <p className="font-display text-5xl">{m.value}</p>
                <span className="text-xs font-medium text-muted-foreground">{m.delta}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Projects */}
          <section className="border border-border bg-card p-8">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <h2 className="font-display text-2xl">Active projects</h2>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">3 running</span>
            </div>
            <div className="mt-6 space-y-5">
              {projects.map((p) => (
                <div key={p.name} className="border-b border-border pb-5 last:border-b-0 last:pb-0">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">{p.name}</span>
                    <span className={statusPill}>{p.status}</span>
                  </div>
                  <div className="mt-3 h-1 w-full bg-muted">
                    <div className={`h-full bg-foreground ${p.progress}`} />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Invoices */}
          <section className="border border-border bg-card p-8">
            <div className="flex items-center justify-between border-b border-border pb-5">
              <h2 className="font-display text-2xl">Invoices</h2>
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">$4,200 due</span>
            </div>
            <div className="mt-6 space-y-4">
              {invoices.map((inv) => (
                <div key={inv.id} className="flex items-center justify-between border-b border-border pb-4 last:border-b-0">
                  <div>
                    <p className="text-sm font-medium">{inv.label}</p>
                    <p className="mt-1 text-xs font-light text-muted-foreground">{inv.id} · {inv.due}</p>
                  </div>
                  <span className="font-display text-xl">{inv.amount}</span>
                </div>
              ))}
            </div>
            <button className="mt-6 w-full bg-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90">
              Pay outstanding invoices
            </button>
          </section>
        </div>

        {/* Deliverables */}
        <section className="mt-8 bg-foreground p-8 text-background">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-2xl">Latest deliverables</h2>
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] opacity-60">Updated today</span>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {["Homepage hero concepts v2", "October content calendar", "Q3 performance report"].map((d) => (
              <div key={d} className="flex items-center justify-between gap-3 border border-background/20 p-4">
                <span className="text-sm font-light">{d}</span>
                <span className="border border-background/40 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em]">New</span>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
