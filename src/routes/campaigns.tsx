import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Campaign Management — Plonk Studio" },
      { name: "description", content: "Campaign management dashboard for Plonk Studio clients — coming soon." },
      { property: "og:title", content: "Campaign Management — Plonk Studio" },
      { property: "og:description", content: "Campaign management dashboard — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Campaign Management" />,
});
