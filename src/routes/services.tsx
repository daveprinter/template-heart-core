import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { services } from "@/lib/services";
import { ServiceList } from "@/components/service-list";

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

function ServicesPage() {
  return (
    <PageShell label="Services" title="Everything we do, in one place." intro="Pick any service to see what's included and request a quote on WhatsApp.">
      <ServiceList list={services} />
    </PageShell>
  );
}
