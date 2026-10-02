import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/content")({
  head: () => ({
    meta: [
      { title: "Content Management — Plonk Studio" },
      { name: "description", content: "Content Management for Plonk Studio clients — coming soon." },
      { property: "og:title", content: "Content Management — Plonk Studio" },
      { property: "og:description", content: "Content Management — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Content Management" />,
});
