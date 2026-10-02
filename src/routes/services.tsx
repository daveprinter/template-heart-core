import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { ArrowIcon } from "@/components/site-chrome";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Plonk Studio" },
      { name: "description", content: "22 social media and digital marketing services: platform marketing, ads, content, SEO, email, influencers and more." },
      { property: "og:title", content: "Services — Plonk Studio" },
      { property: "og:description", content: "Social media and digital marketing services from Plonk Studio." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

export function ServiceList({ list }: { list: typeof services }) {
  return (
    <div className="border-t border-border">
      {list.map((s, i) => (
        <Link
          key={s.slug}
          to="/service/$slug"
          params={{ slug: s.slug }}
          className="group grid gap-4 border-b border-border py-8 md:grid-cols-[60px_1fr_1fr_40px] md:items-center"
        >
          <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}/</span>
          <h2 className="font-display text-3xl">{s.name}</h2>
          <p className="text-muted-foreground">{s.short}</p>
          <ArrowIcon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}

function ServicesPage() {
  return (
    <PageShell label="Services" title="Everything we do, in one place." intro="Pick any service to see what's included and request a quote on WhatsApp.">
      <ServiceList list={services} />
    </PageShell>
  );
}
