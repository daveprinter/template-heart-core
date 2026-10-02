import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/integrations")({
  head: () => ({
    meta: [
      { title: "Social Media Account Integration — Plonk Studio" },
      { name: "description", content: "Social Media Account Integration for Plonk Studio clients — coming soon." },
      { property: "og:title", content: "Social Media Account Integration — Plonk Studio" },
      { property: "og:description", content: "Social Media Account Integration — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Social Media Account Integration" />,
});
