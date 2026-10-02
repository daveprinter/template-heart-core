import { createFileRoute } from "@tanstack/react-router";
import { PageShell } from "@/components/page-shell";
import { platformServices } from "@/lib/services";
import { ServiceList } from "./services";

export const Route = createFileRoute("/social-media-marketing")({
  head: () => ({
    meta: [
      { title: "Social Media Marketing Services — Plonk Studio" },
      { name: "description", content: "Facebook, Instagram, TikTok, YouTube, LinkedIn, X/Twitter and Google Business Profile marketing." },
      { property: "og:title", content: "Social Media Marketing Services — Plonk Studio" },
      { property: "og:description", content: "Platform-by-platform social media marketing." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell label="Social media marketing" title="Platform by platform." intro="Choose a platform to see how we grow your brand there.">
      <ServiceList list={platformServices} />
    </PageShell>
  ),
});
