import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { WhatsAppIcon } from "@/components/whatsapp";
import { getService, whatsappLink } from "@/lib/services";

export const Route = createFileRoute("/service/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Service not found" }, { name: "robots", content: "noindex" }] };
    const t = `${loaderData.service.name} — Plonk Studio`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.service.description },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.service.description },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  notFoundComponent: ServiceNotFound,
  component: ServicePage,
});

function ServiceNotFound() {
  return (
    <PageShell label="Services" title="Service not found.">
      <Link to="/services" className="underline">See all services</Link>
    </PageShell>
  );
}

function ServicePage() {
  const { service } = Route.useLoaderData();
  const msg = `Hello Plonk Studio, I'd like a quote for your ${service.name} service.`;
  return (
    <PageShell label="Service" title={service.name} intro={service.description}>
      <div className="grid gap-10 md:grid-cols-2">
        <div className="border border-border bg-card p-8">
          <h2 className="font-display text-3xl">Features</h2>
          <ul className="mt-6 space-y-3">
            {service.features.map((f) => <li key={f} className="border-b border-border pb-3 text-sm">— {f}</li>)}
          </ul>
        </div>
        <div className="border border-border bg-card p-8">
          <h2 className="font-display text-3xl">Benefits</h2>
          <ul className="mt-6 space-y-3">
            {service.benefits.map((f) => <li key={f} className="border-b border-border pb-3 text-sm">— {f}</li>)}
          </ul>
        </div>
      </div>
      <div className="mt-12 flex flex-wrap items-center gap-4">
        <a href={whatsappLink(msg)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-whatsapp px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-whatsapp-foreground transition-opacity hover:opacity-90">
          <WhatsAppIcon /> Request quote
        </a>
        <Link to="/services" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">← All services</Link>
      </div>
    </PageShell>
  );
}
