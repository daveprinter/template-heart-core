import { createFileRoute } from "@tanstack/react-router";
import { ComingSoon } from "@/components/coming-soon";

export const Route = createFileRoute("/messages")({
  head: () => ({
    meta: [
      { title: "Client Communication — Plonk Studio" },
      { name: "description", content: "Client communication hub for Plonk Studio — coming soon." },
      { property: "og:title", content: "Client Communication — Plonk Studio" },
      { property: "og:description", content: "Client communication hub — coming soon." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <ComingSoon label="Client Communication" />,
});
