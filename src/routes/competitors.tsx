import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/competitors")({
  head: () => ({
    meta: [
      { title: "Competitor Analysis — Plonk Studio" },
      { name: "description", content: "Competitor Analysis for Plonk Studio clients — coming soon." },
      { property: "og:title", content: "Competitor Analysis — Plonk Studio" },
      { property: "og:description", content: "Competitor Analysis — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Competitor Analysis" />,
});
