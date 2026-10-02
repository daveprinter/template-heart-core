import { Link } from "@tanstack/react-router";
import { ArrowIcon } from "@/components/site-chrome";
import type { Service } from "@/lib/services";

export function ServiceList({ list }: { list: Service[] }) {
  return (
    <div className="border-t border-border">
      {list.map((s, i) => (
        <Link
          key={s.slug}
          to="/service/$slug"
          params={{ slug: s.slug }}
          className="group grid gap-4 border-b border-border py-8 md:grid-cols-[60px_1fr_1fr_40px] md:items-center"
        >
          <span className="text-xs text-muted-foreground">{String(i + 1).padStart(2, "0")}/</span>
          <h2 className="font-display text-3xl">{s.name}</h2>
          <p className="text-muted-foreground">{s.short}</p>
          <ArrowIcon className="h-4 w-4" />
        </Link>
      ))}
    </div>
  );
}

