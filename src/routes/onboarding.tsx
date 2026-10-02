import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import type { User } from "@supabase/supabase-js";
import { supabase } from "@/integrations/supabase/client";
import { PageShell, RequireAuth, btn, btnGhost, field, labelCls } from "@/components/page-shell";
import { Progress } from "@/components/ui/progress";

export const Route = createFileRoute("/onboarding")({
  head: () => ({
    meta: [
      { title: "Business Onboarding — Plonk Studio" },
      { name: "description", content: "Tell us about your business so we can build your social media plan." },
      { property: "og:title", content: "Business Onboarding — Plonk Studio" },
      { property: "og:description", content: "Onboarding wizard for new Plonk Studio clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <PageShell label="Business onboarding" title="Let's get to know your business." intro="A few quick steps and your workspace is ready.">
      <RequireAuth>{(user) => <Wizard user={user} />}</RequireAuth>
    </PageShell>
  ),
});

const PLATFORMS = ["Facebook", "Instagram", "TikTok", "YouTube", "LinkedIn", "X/Twitter"];

type Form = {
  business_name: string; industry: string; website: string; location: string; target_audience: string;
  social_links: Record<string, string>; marketing_goals: string; monthly_budget: string;
  preferred_platforms: string[]; competitors: string; brand_colors: string; description: string;
};
const empty: Form = { business_name: "", industry: "", website: "", location: "", target_audience: "", social_links: {}, marketing_goals: "", monthly_budget: "", preferred_platforms: [], competitors: "", brand_colors: "", description: "" };

function Wizard({ user }: { user: User }) {
  const navigate = useNavigate();
  const [step, setStep] = useState(0);
  const [f, setF] = useState<Form>(empty);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    supabase.from("business_profiles").select("*").eq("user_id", user.id).maybeSingle().then(({ data }) => {
      if (data) setF({ ...empty, ...(data as unknown as Form), social_links: (data.social_links as Record<string, string>) ?? {} });
    });
  }, [user.id]);

  const set = (k: keyof Form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => setF({ ...f, [k]: e.target.value });
  const text = (k: keyof Form, label: string, ph = "") => (
    <div><label className={labelCls}>{label}</label><input className={`mt-2 ${field}`} value={f[k] as string} onChange={set(k)} placeholder={ph} /></div>
  );
  const area = (k: keyof Form, label: string, ph = "") => (
    <div><label className={labelCls}>{label}</label><textarea rows={4} className={`mt-2 ${field}`} value={f[k] as string} onChange={set(k)} placeholder={ph} /></div>
  );

  const steps = [
    { title: "Business basics", body: <div className="grid gap-6 md:grid-cols-2">{text("business_name", "Business name")}{text("industry", "Industry", "e.g. Hospitality")}{text("website", "Website", "https://")}{text("location", "Location", "Nairobi, Kenya")}</div> },
    { title: "Audience & goals", body: <div className="grid gap-6">{area("target_audience", "Target audience", "Who are your ideal customers?")}{area("marketing_goals", "Marketing goals", "e.g. More bookings, brand awareness")}{text("monthly_budget", "Monthly advertising budget", "e.g. KES 50,000")}</div> },
    {
      title: "Social media",
      body: (
        <div className="grid gap-6">
          <div>
            <p className={labelCls}>Preferred platforms</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {PLATFORMS.map((p) => {
                const on = f.preferred_platforms.includes(p);
                return (
                  <button type="button" key={p} onClick={() => setF({ ...f, preferred_platforms: on ? f.preferred_platforms.filter((x) => x !== p) : [...f.preferred_platforms, p] })}
                    className={`border px-4 py-2 text-xs ${on ? "border-foreground bg-primary text-primary-foreground" : "border-border"}`}>{p}</button>
                );
              })}
            </div>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {PLATFORMS.map((p) => (
              <div key={p}><label className={labelCls}>{p} link</label>
                <input className={`mt-2 ${field}`} placeholder="https://" value={f.social_links[p] ?? ""} onChange={(e) => setF({ ...f, social_links: { ...f.social_links, [p]: e.target.value } })} />
              </div>
            ))}
          </div>
        </div>
      ),
    },
    { title: "Brand & competition", body: <div className="grid gap-6">{area("competitors", "Competitors", "Names or social links, one per line")}{text("brand_colors", "Brand colours", "e.g. Navy #0F172A, Coral #FF6B5B")}{area("description", "Business description")}</div> },
  ];

  async function save(done: boolean): Promise<unknown> {
    setSaving(true);
    const { error } = await supabase.from("business_profiles").upsert({ user_id: user.id, ...f, completed: done, updated_at: new Date().toISOString() });
    setSaving(false);
    if (error) return toast.error(error.message);
    if (done) { toast.success("Onboarding complete!"); navigate({ to: "/dashboard" }); }
    return null;
  }

  return (
    <div className="border border-border bg-card p-8 md:p-10">
      <div className="flex items-center justify-between">
        <p className={labelCls}>Step {step + 1} of {steps.length}</p>
        <p className="font-display text-2xl">{steps[step]?.title}</p>
      </div>
      <Progress value={((step + 1) / steps.length) * 100} className="mt-4 h-1" />
      <div className="mt-8">{steps[step]?.body}</div>
      <div className="mt-10 flex justify-between gap-3">
        <button className={btnGhost} disabled={step === 0} onClick={() => setStep(step - 1)}>Back</button>
        {step < steps.length - 1 ? (
          <button className={btn} onClick={() => { save(false); setStep(step + 1); }}>Next</button>
        ) : (
          <button className={btn} disabled={saving} onClick={() => save(true)}>{saving ? "Saving…" : "Finish"}</button>
        )}
      </div>
    </div>
  );
}
