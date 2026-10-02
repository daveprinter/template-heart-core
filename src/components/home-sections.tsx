import { useState } from "react";
import { toast } from "sonner";

const eyebrow = "text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground";
const head = "font-display text-4xl md:text-5xl";

function Section({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24 md:px-8">
      <div className="border-b border-border pb-8">
        <span className={eyebrow}>{label}</span>
        <h2 className={`mt-4 ${head}`}>{title}</h2>
      </div>
      {children}
    </section>
  );
}

const why = [
  ["Senior team only", "Every account is run by strategists with 8+ years in social."],
  ["Live dashboard", "See followers, reach, leads and ad spend update in real time."],
  ["Content that converts", "Creative built around a measurable business objective."],
  ["No lock-in", "Month-to-month plans. We keep you by delivering results."],
];
const industries = ["Hospitality", "Retail & E-commerce", "Real Estate", "Healthcare", "Education", "Fintech", "Beauty & Fashion", "Professional Services"];
const steps = [
  ["Discover", "Audit your channels, audience and competitors."],
  ["Strategise", "A 90-day plan with clear KPIs per platform."],
  ["Create", "Posts, reels, ads and copy produced in-house."],
  ["Grow", "Weekly optimisation and monthly reporting."],
];
const testimonials = [
  ["Plonk took our Instagram from 4k to 61k in eight months — and orders followed.", "Amara N.", "Founder, Bloom Coffee Co."],
  ["The dashboard alone is worth it. I finally know what our ad spend returns.", "David K.", "CMO, Loop Ledger"],
  ["Our TikTok launch did 5M reach in a quarter. They just get culture.", "Sofia R.", "Head of Brand, Kickkit"],
];
const plans = [
  { name: "Starter", price: "$490", desc: "For local businesses", items: ["2 platforms", "12 posts / month", "Monthly report", "Client dashboard"] },
  { name: "Growth", price: "$1,290", desc: "Most popular", items: ["4 platforms", "30 posts + 4 reels", "Ads management", "Weekly reporting", "Content calendar"], featured: true },
  { name: "Enterprise", price: "Custom", desc: "For multi-brand teams", items: ["All platforms", "Unlimited content", "Influencer campaigns", "Dedicated team", "Team roles & approvals"] },
];
const faqs = [
  ["How quickly will I see results?", "Most clients see engagement lift within 30 days and lead growth within 60–90 days."],
  ["Do I need a long contract?", "No. All plans are month-to-month with 30 days' notice."],
  ["Which platforms do you manage?", "Facebook, Instagram, TikTok, YouTube, LinkedIn, X and Google Business Profile."],
  ["Is ad spend included in the price?", "No — ad spend is paid directly to the platforms. We manage it for you."],
  ["Can my team approve posts?", "Yes. Every post goes through approval in your client dashboard before it's published."],
];

export function HomeSections() {
  const [open, setOpen] = useState<number | null>(0);
  const [email, setEmail] = useState("");
  return (
    <>
      <Section label="Why choose us" title="Built for measurable growth">
        <div className="grid gap-px bg-border md:grid-cols-4">
          {why.map(([t, d]) => (
            <div key={t} className="bg-background p-8">
              <h3 className="font-display text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
          <span className={eyebrow}>Industries we serve</span>
          <div className="mt-6 flex flex-wrap gap-3">
            {industries.map((i) => (
              <span key={i} className="border border-border bg-background px-5 py-2.5 text-xs font-medium">{i}</span>
            ))}
          </div>
        </div>
      </section>

      <Section label="Our process" title="Four steps, no guesswork">
        <div className="grid gap-10 pt-12 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t}>
              <span className="text-xs text-muted-foreground">0{i + 1}/</span>
              <h3 className="mt-3 font-display text-3xl">{t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section label="Testimonials" title="What clients say">
        <div className="grid gap-8 pt-12 md:grid-cols-3">
          {testimonials.map(([q, n, r]) => (
            <figure key={n} className="border border-border bg-card p-8">
              <blockquote className="font-display text-2xl leading-snug">“{q}”</blockquote>
              <figcaption className="mt-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{n} — {r}</figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section label="Pricing" title="Simple monthly plans">
        <div className="grid gap-8 pt-12 md:grid-cols-3">
          {plans.map((p) => (
            <div key={p.name} className={`border p-8 ${p.featured ? "border-foreground bg-primary text-primary-foreground" : "border-border bg-card"}`}>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] opacity-70">{p.desc}</p>
              <h3 className="mt-3 font-display text-3xl">{p.name}</h3>
              <p className="mt-4 font-display text-5xl">{p.price}<span className="text-base opacity-60">{p.price !== "Custom" && " /mo"}</span></p>
              <ul className="mt-6 space-y-2 text-sm">
                {p.items.map((i) => <li key={i}>— {i}</li>)}
              </ul>
              <a href="/contact" className={`mt-8 inline-block w-full border px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] ${p.featured ? "border-primary-foreground" : "border-border"}`}>
                {p.price === "Custom" ? "Request quote" : "Get started"}
              </a>
            </div>
          ))}
        </div>
      </Section>

      <Section label="FAQ" title="Questions, answered">
        <div>
          {faqs.map(([q, a], i) => (
            <div key={q} className="border-b border-border">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between py-6 text-left">
                <span className="font-display text-2xl">{q}</span>
                <span className="text-xl">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="pb-6 text-muted-foreground">{a}</p>}
            </div>
          ))}
        </div>
      </Section>

      <section className="border-y border-border bg-muted">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 px-6 py-16 md:flex-row md:items-center md:px-8">
          <div>
            <span className={eyebrow}>Newsletter</span>
            <h2 className="mt-3 font-display text-3xl">Social trends, every Friday.</h2>
          </div>
          <form
            className="flex w-full max-w-md"
            onSubmit={(e) => { e.preventDefault(); if (!email) return; toast.success("You're subscribed."); setEmail(""); }}
          >
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@company.com" className="flex-1 border border-border bg-background px-4 py-3 text-sm outline-none focus:border-foreground" />
            <button className="bg-primary px-6 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
