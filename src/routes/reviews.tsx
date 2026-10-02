import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Star } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/use-auth";
import { PageShell, btn, field, labelCls } from "@/components/page-shell";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — Plonk Studio" },
      { name: "description", content: "What clients say about Plonk Studio's social media marketing." },
      { property: "og:title", content: "Client Reviews — Plonk Studio" },
      { property: "og:description", content: "Reviews from Plonk Studio clients." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

type Review = { id: string; name: string; rating: number; comment: string; created_at: string; user_id: string };

const featured = [
  { name: "Amara N., Bloom Coffee Co.", rating: 5, comment: "Plonk took our Instagram from 4k to 61k in eight months — and orders followed." },
  { name: "David K., Loop Ledger", rating: 5, comment: "The dashboard alone is worth it. I finally know what our ad spend returns." },
  { name: "Sofia R., Kickkit", rating: 5, comment: "Our TikTok launch did 5M reach in a quarter. They just get culture." },
];

function Stars({ n }: { n: number }) {
  return <div className="flex gap-1">{[1, 2, 3, 4, 5].map((i) => <Star key={i} className={`size-4 ${i <= n ? "fill-foreground" : "text-muted-foreground"}`} />)}</div>;
}

function ReviewsPage() {
  const { user } = useAuth();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(5);

  const load = () => supabase.from("reviews").select("*").order("created_at", { ascending: false }).then(({ data }) => setReviews((data as Review[]) ?? []));
  useEffect(() => { load(); }, []);

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!user) return;
    const { error } = await supabase.from("reviews").insert({ user_id: user.id, name, rating, comment });
    if (error) return toast.error(error.message);
    toast.success("Thanks for your review!");
    setComment(""); load();
  }

  return (
    <PageShell label="Reviews" title="Clients, in their own words.">
      <div className="grid gap-6 md:grid-cols-3">
        {[...featured, ...reviews].map((r, i) => (
          <figure key={"id" in r ? (r as Review).id : i} className="border border-border bg-card p-8">
            <Stars n={r.rating} />
            <blockquote className="mt-4 font-display text-xl leading-snug">“{r.comment}”</blockquote>
            <figcaption className="mt-5 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">{r.name}</figcaption>
          </figure>
        ))}
      </div>
      <div className="mt-16 border border-border bg-card p-8">
        <h2 className="font-display text-3xl">Leave a review</h2>
        {!user ? (
          <p className="mt-3 text-muted-foreground">Sign in to your client workspace to leave a review.</p>
        ) : (
          <form onSubmit={submit} className="mt-6 grid gap-5">
            <div><label className={labelCls}>Your name & company</label><input required className={`mt-2 ${field}`} value={name} onChange={(e) => setName(e.target.value)} /></div>
            <div>
              <p className={labelCls}>Rating</p>
              <div className="mt-2 flex gap-2">{[1, 2, 3, 4, 5].map((i) => (
                <button type="button" key={i} onClick={() => setRating(i)} aria-label={`${i} stars`}><Star className={`size-6 ${i <= rating ? "fill-foreground" : "text-muted-foreground"}`} /></button>
              ))}</div>
            </div>
            <div><label className={labelCls}>Review</label><textarea required rows={4} className={`mt-2 ${field}`} value={comment} onChange={(e) => setComment(e.target.value)} /></div>
            <button className={`${btn} justify-self-start`}>Submit review</button>
          </form>
        )}
      </div>
    </PageShell>
  );
}
