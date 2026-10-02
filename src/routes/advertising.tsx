import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import workBloom from "@/assets/work-bloom.jpg";
import workLoop from "@/assets/work-loop.jpg";
import workKickkit from "@/assets/work-kickkit.jpg";

export const Route = createFileRoute("/advertising")({
  head: () => ({
    meta: [
      { title: "Advertising Management — Plonk Studio" },
      { name: "description", content: "Examples of Facebook, Instagram, TikTok and LinkedIn ads created by Plonk Studio." },
      { property: "og:title", content: "Advertising Management — Plonk Studio" },
      { property: "og:description", content: "Example ads across Facebook, Instagram, TikTok and LinkedIn." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AdsPage,
});

const ads = [
  { platform: "Facebook Ads", brand: "Bloom Coffee Co.", img: workBloom, headline: "Your new morning ritual is 2 streets away", copy: "Fresh single-origin roasts, now open in Westlands. Show this ad for a free pastry.", cta: "Get directions", result: "4,812 store visits · KES 18 per visit" },
  { platform: "Instagram Ads", brand: "Kickkit Sneakers", img: workKickkit, headline: "Drop 07 is live", copy: "Only 300 pairs. Swipe to see every colourway before they're gone.", cta: "Shop now", result: "6.2x ROAS · sold out in 3 days" },
  { platform: "TikTok Ads", brand: "Kickkit Sneakers", img: workKickkit, headline: "POV: you finally found your grails", copy: "#KickkitDrop — duet us with your fit.", cta: "Shop now", result: "2.1M views · 38k profile visits" },
  { platform: "LinkedIn Ads", brand: "Loop Ledger", img: workLoop, headline: "Close your books 3x faster", copy: "See why 400+ finance teams in East Africa moved to Loop Ledger.", cta: "Book a demo", result: "612 demo requests · 38% lower CPL" },
];

function AdsPage() {
  return (
    <PageShell label="Advertising management" title="Ads we've shipped." intro="A selection of real campaign examples across the four biggest ad platforms.">
      <div className="grid gap-8 md:grid-cols-2">
        {ads.map((a) => (
          <article key={a.platform} className="border border-border bg-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-3">
              <span className="text-[11px] font-semibold uppercase tracking-[0.2em]">{a.platform}</span>
              <span className="text-xs text-muted-foreground">Sponsored · {a.brand}</span>
            </div>
            <div className="px-5 py-4 text-sm">{a.copy}</div>
            <img src={a.img} alt={a.headline} loading="lazy" className="aspect-video w-full object-cover" />
            <div className="flex items-center justify-between gap-4 px-5 py-4">
              <p className="font-display text-xl">{a.headline}</p>
              <span className="whitespace-nowrap border border-border px-4 py-2 text-xs font-medium">{a.cta}</span>
            </div>
            <p className="border-t border-border px-5 py-3 text-xs text-muted-foreground">Result: {a.result}</p>
          </article>
        ))}
      </div>
    </PageShell>
  );
}
