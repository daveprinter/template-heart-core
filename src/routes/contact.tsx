import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteNav, SiteFooter, ArrowIcon } from "@/components/site-chrome";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Plonk Studio" },
      { name: "description", content: "Start a project with Plonk Studio. Tell us where you want to be in 12 months and we'll map the route." },
      { property: "og:title", content: "Contact — Plonk Studio" },
      { property: "og:description", content: "Start a project with Plonk Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const inputClass =
  "mt-2 w-full border border-input bg-background px-4 py-3 text-sm font-light outline-none transition-colors focus:border-foreground";
const labelClass = "text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />

      <section className="mx-auto max-w-6xl px-6 pb-24 pt-24 md:px-8 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr]">
          <div>
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Start a project</span>
            <h1 className="mt-8 font-display text-5xl italic leading-[1.02] tracking-tight md:text-6xl">
              Let's make some noise.
            </h1>
            <p className="mt-6 max-w-md text-lg font-light leading-relaxed text-muted-foreground">
              Tell us what you're building and where you want to be in 12 months. We reply within one business day — usually faster.
            </p>
            <div className="mt-12 space-y-0 border-t border-border">
              <div className="border-b border-border py-6">
                <p className={labelClass}>Email</p>
                <a href="mailto:hello@plonk.studio" className="mt-2 inline-block font-display text-2xl transition-opacity hover:opacity-70">
                  hello@plonk.studio
                </a>
              </div>
              <div className="border-b border-border py-6">
                <p className={labelClass}>Studio</p>
                <p className="mt-2 font-display text-2xl">Nairobi · remote worldwide</p>
              </div>
            </div>
          </div>

          <div className="border border-border bg-card p-8 md:p-12">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center py-20 text-center">
                <span className="grid size-14 place-items-center border border-border font-display text-2xl">✓</span>
                <h2 className="mt-8 font-display text-3xl italic">Message sent.</h2>
                <p className="mt-3 max-w-xs font-light text-muted-foreground">We'll be in touch within one business day.</p>
              </div>
            ) : (
              <form
                className="space-y-7"
                onSubmit={(e) => {
                  e.preventDefault();
                  setSent(true);
                  toast.success("Thanks! We'll reply within one business day.");
                }}
              >
                <div>
                  <label htmlFor="name" className={labelClass}>Your name</label>
                  <input id="name" required className={inputClass} placeholder="Ada Lovelace" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email</label>
                  <input id="email" type="email" required className={inputClass} placeholder="ada@company.com" />
                </div>
                <div>
                  <label htmlFor="budget" className={labelClass}>Budget range</label>
                  <select id="budget" className={inputClass}>
                    <option>$5k – $15k</option>
                    <option>$15k – $50k</option>
                    <option>$50k+</option>
                    <option>Not sure yet</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>What are you building?</label>
                  <textarea id="message" required rows={4} className={inputClass} placeholder="Tell us about the project…" />
                </div>
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90"
                >
                  Send it over <ArrowIcon />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
