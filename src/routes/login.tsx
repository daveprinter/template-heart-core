import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowIcon } from "@/components/site-chrome";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login — Plonk Studio" },
      { name: "description", content: "Log in to your Plonk client space to track projects, invoices and campaign metrics." },
      { property: "og:title", content: "Client Login — Plonk Studio" },
      { property: "og:description", content: "Log in to your Plonk client space." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <Link to="/" className="font-display text-3xl tracking-tight">
            Plonk<span className="italic">.</span>
          </Link>
          <Link to="/" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground">
            ← Back to site
          </Link>
        </nav>
      </header>

      <main className="flex flex-1 items-center justify-center px-6 pb-24">
        <div className="w-full max-w-md">
          <div className="border border-border bg-card p-10 md:p-12">
            <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Client platform</span>
            <h1 className="mt-5 font-display text-4xl italic">Welcome back.</h1>
            <p className="mt-3 font-light text-muted-foreground">Your projects, invoices and metrics are waiting.</p>

            <form
              className="mt-10 space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                setLoading(true);
                setTimeout(() => navigate({ to: "/dashboard" }), 600);
              }}
            >
              <div>
                <label htmlFor="login-email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Email</label>
                <input
                  id="login-email"
                  type="email"
                  required
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm font-light outline-none transition-colors focus:border-foreground"
                  placeholder="you@company.com"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Password</label>
                <input
                  id="login-password"
                  type="password"
                  required
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm font-light outline-none transition-colors focus:border-foreground"
                  placeholder="••••••••"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                {loading ? "Opening your space…" : <>Log in <ArrowIcon /></>}
              </button>
            </form>

            <p className="mt-8 border-t border-border pt-6 text-center text-sm font-light text-muted-foreground">
              Not a client yet?{" "}
              <Link to="/contact" className="font-medium text-foreground underline underline-offset-4">
                Start a project
              </Link>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
