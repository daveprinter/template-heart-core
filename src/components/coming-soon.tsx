import { PageShell } from "@/components/page-shell";

export function ComingSoon({ label }: { label: string }) {
  return (
    <PageShell label={label} title="Coming soon." intro="This dashboard is on its way. Our team is building it now.">
      <div className="grid gap-4 md:grid-cols-3">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-40 animate-pulse border border-border bg-muted" />
        ))}
      </div>
    </PageShell>
  );
}
