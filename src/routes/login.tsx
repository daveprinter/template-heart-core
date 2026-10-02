import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { ArrowIcon } from "@/components/site-chrome";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "Client Login — Plonk Studio" },
      { name: "description", content: "Sign in or create your Plonk Studio client workspace." },
      { property: "og:title", content: "Client Login — Plonk Studio" },
      { property: "og:description", content: "Sign in to your Plonk Studio client workspace." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LoginPage,
});

async function goAfterLogin(navigate: ReturnType<typeof useNavigate>) {
  const { data: u } = await supabase.auth.getUser();
  if (!u.user) return;
  const { data } = await supabase.from("business_profiles").select("completed").eq("user_id", u.user.id).maybeSingle();
  navigate({ to: data?.completed ? "/dashboard" : "/onboarding" });
}

const input = "mt-2 w-full border border-input bg-background px-4 py-3 text-sm font-light outline-none transition-colors focus:border-foreground";

function LoginPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function submit(e: React.FormEvent): Promise<void> {
    e.preventDefault();
    setLoading(true);
    if (mode === "signup") {
      const { data, error } = await supabase.auth.signUp({ email, password, options: { emailRedirectTo: `${window.location.origin}/onboarding` } });
      setLoading(false);
      if (error) { toast.error(error.message); return; }
      if (!data.session) { toast.success("Check your email to confirm your account, then sign in."); return; }
      await goAfterLogin(navigate);
      return;
    }
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) { toast.error(error.message); return; }
    await goAfterLogin(navigate);
  }

  async function google(): Promise<void> {
    const result = await lovable.auth.signInWithOAuth("google", { redirect_uri: window.location.origin + "/login" });
    if (result.error) { toast.error(String(result.error.message ?? result.error)); return; }
    if (result.redirected) return;
    await goAfterLogin(navigate);
  }

  return (
    <div className="flex min-h-screen flex-col bg-background font-body text-foreground">
      <header className="border-b border-border">
        <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6 md:px-8">
          <Link to="/" className="font-display text-3xl tracking-tight">Plonk<span className="italic">.</span></Link>
          <Link to="/" className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground">← Back to site</Link>
        </nav>
      </header>
      <main className="flex flex-1 items-center justify-center px-6 py-16">
        <div className="w-full max-w-md border border-border bg-card p-10 md:p-12">
          <span className="text-[10px] font-semibold uppercase tracking-[0.4em] text-muted-foreground">Client platform</span>
          <h1 className="mt-5 font-display text-4xl italic">{mode === "signin" ? "Welcome back." : "Create your space."}</h1>
          <button onClick={google} className="mt-8 w-full border border-border py-3 text-sm font-medium hover:bg-muted">Continue with Google</button>
          <form className="mt-6 space-y-6" onSubmit={submit}>
            <div>
              <label htmlFor="email" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Email</label>
              <input id="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={input} placeholder="you@company.com" />
            </div>
            <div>
              <label htmlFor="password" className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">Password</label>
              <input id="password" type="password" required minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className={input} placeholder="••••••••" />
            </div>
            <button type="submit" disabled={loading} className="group inline-flex w-full items-center justify-center gap-3 bg-primary px-9 py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground hover:opacity-90 disabled:opacity-60">
              {loading ? "Please wait…" : <>{mode === "signin" ? "Log in" : "Sign up"} <ArrowIcon /></>}
            </button>
          </form>
          <p className="mt-8 border-t border-border pt-6 text-center text-sm font-light text-muted-foreground">
            {mode === "signin" ? "New client? " : "Already have an account? "}
            <button className="font-medium text-foreground underline" onClick={() => setMode(mode === "signin" ? "signup" : "signin")}>
              {mode === "signin" ? "Create an account" : "Log in"}
            </button>
          </p>
        </div>
      </main>
    </div>
  );
}
