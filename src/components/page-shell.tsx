import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import type { User } from "@supabase/supabase-js";
import { SiteNav, SiteFooter } from "@/components/site-chrome";
import { useAuth } from "@/hooks/use-auth";

export function PageShell({ label, title, intro, children }: { label: string; title: string; intro?: string; children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background font-body text-foreground">
      <SiteNav />
      <section className="mx-auto max-w-6xl px-6 pb-10 pt-16 md:px-8 md:pt-20">
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">{label}</span>
        <h1 className="mt-6 max-w-3xl font-display text-5xl italic leading-[1.05] tracking-tight md:text-6xl">{title}</h1>
        {intro && <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-muted-foreground">{intro}</p>}
      </section>
      <div className="mx-auto max-w-6xl px-6 pb-24 md:px-8">{children}</div>
      <SiteFooter />
    </div>
  );
}

/** Renders children only for signed-in users; otherwise a sign-in prompt. */
export function RequireAuth({ children }: { children: (user: User) => ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return <p className="text-muted-foreground">Loading…</p>;
  if (!user)
    return (
      <div className="border border-border bg-card p-10 text-center">
        <h2 className="font-display text-3xl">Sign in to continue</h2>
        <p className="mt-3 text-muted-foreground">This area is part of your client workspace.</p>
        <Link to="/login" className="mt-6 inline-block bg-primary px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
          Client Login
        </Link>
      </div>
    );
  return <>{children(user)}</>;
}

export const btn = "inline-flex items-center justify-center gap-2 bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50";
export const btnGhost = "inline-flex items-center justify-center gap-2 border border-border px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:bg-muted disabled:opacity-50";
export const field = "w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-foreground";
export const labelCls = "text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground";
