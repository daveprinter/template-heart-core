import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/analytics")({
  head: () => ({
    meta: [
      { title: "Analytics & Reports — Plonk Studio" },
      { name: "description", content: "Analytics and reporting dashboard for Plonk Studio clients — coming soon." },
      { property: "og:title", content: "Analytics & Reports — Plonk Studio" },
      { property: "og:description", content: "Analytics and reporting dashboard — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Analytics & Reports" />,
});
