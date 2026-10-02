export const WHATSAPP_NUMBER = "254722493288";
export const WHATSAPP_DISPLAY = "+254 722 493 288";

export function whatsappLink(message = "Hi Plonk Studio, I'd like to talk about growing my brand.") {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export type Service = {
  slug: string;
  name: string;
  short: string;
  description: string;
  features: string[];
  benefits: string[];
  platform?: boolean;
};

function s(
  slug: string,
  name: string,
  short: string,
  description: string,
  features: string[],
  benefits: string[],
  platform = false,
): Service {
  return { slug, name, short, description, features, benefits, platform };
}

export const services: Service[] = [
  s("facebook-marketing", "Facebook Marketing", "Pages, groups and ads that build loyal communities.",
    "We grow your Facebook presence with a consistent content plan, active page management and targeted campaigns that turn followers into paying customers.",
    ["Page setup & optimisation", "Weekly content calendar", "Facebook Groups management", "Messenger auto-replies", "Monthly performance report"],
    ["Reach your local and national audience", "More enquiries through Messenger", "A trusted, active brand page"], true),
  s("instagram-marketing", "Instagram Marketing", "Feeds, stories and reels that stop the scroll.",
    "Beautiful, on-brand Instagram content planned around what your audience saves, shares and buys — backed by growth tactics that bring real followers.",
    ["Grid planning & aesthetic direction", "Stories & highlights", "Reels strategy", "Bio & link-in-bio optimisation", "Shoppable posts"],
    ["Higher engagement and saves", "Steady follower growth", "More profile-to-website visits"], true),
  s("tiktok-marketing", "TikTok Marketing", "Trend-led short videos built for reach.",
    "We script, shoot and edit TikToks that ride trends while staying true to your brand, so you can reach millions without guesswork.",
    ["Trend research", "Scripting & hooks", "Filming & editing", "Sound selection", "TikTok Shop setup"],
    ["Massive organic reach", "Younger audience access", "Viral-ready content library"], true),
  s("youtube-marketing", "YouTube Marketing", "Channels that rank, retain and convert.",
    "From channel branding to SEO-optimised long-form and Shorts, we turn YouTube into a search engine that sends you customers for years.",
    ["Channel branding", "Video SEO & thumbnails", "YouTube Shorts", "Playlist strategy", "Analytics reviews"],
    ["Evergreen discoverability", "Deeper audience trust", "Long-term lead source"], true),
  s("linkedin-marketing", "LinkedIn Marketing", "Thought leadership for B2B growth.",
    "We position your company and leaders as experts with LinkedIn content, company page management and outreach that opens doors.",
    ["Company page management", "Founder ghostwriting", "Carousel & document posts", "LinkedIn newsletters", "B2B lead campaigns"],
    ["Credibility with decision-makers", "Quality B2B leads", "Talent attraction"], true),
  s("x-twitter-marketing", "X / Twitter Marketing", "Real-time conversation and brand voice.",
    "We craft a sharp brand voice on X with threads, timely replies and community engagement that keeps you in the conversation.",
    ["Daily posting", "Thread writing", "Trend monitoring", "Reply & engagement management", "X Ads"],
    ["Stay culturally relevant", "Direct customer conversations", "Fast news distribution"], true),
  s("google-business-profile", "Google Business Profile Management", "Show up when locals search for you.",
    "We optimise and actively manage your Google Business Profile so you appear in Maps and local search, with fresh posts and review responses.",
    ["Profile optimisation", "Weekly Google posts", "Photo updates", "Review responses", "Q&A management"],
    ["More calls and directions", "Higher local rankings", "Stronger first impressions"], true),
  s("social-media-advertising", "Social Media Advertising", "Paid campaigns across every major network.",
    "Full-funnel paid social campaigns on Facebook, Instagram, TikTok and LinkedIn, with creative testing and daily optimisation.",
    ["Audience research", "Ad creative production", "A/B testing", "Retargeting", "ROAS reporting"],
    ["Predictable lead flow", "Lower cost per acquisition", "Scalable growth"]),
  s("content-creation", "Content Creation", "Posts, photos and stories made in-house.",
    "Our creative team produces scroll-stopping photos, graphics and copy every month, all planned around your goals.",
    ["Monthly content shoots", "Branded templates", "Caption writing", "Content calendar", "Approval workflow"],
    ["Consistent, on-brand posting", "Time saved for your team", "Higher engagement"]),
  s("video-reels-production", "Video & Reels Production", "Short-form video that performs.",
    "Concept, filming and editing of reels, TikToks and Shorts — designed for the first three seconds and built to be shared.",
    ["Concept & storyboard", "On-location filming", "Motion graphics", "Captions & subtitles", "Multi-format exports"],
    ["Higher reach than static posts", "Memorable brand storytelling", "Content for every platform"]),
  s("graphic-design", "Graphic Design", "Visuals that make your brand unmistakable.",
    "Social graphics, carousels, ad creatives and brand assets designed to stand out in a crowded feed.",
    ["Social post graphics", "Carousels & infographics", "Ad creatives", "Brand templates", "Print-ready assets"],
    ["Instant brand recognition", "Professional look across channels", "More shares and saves"]),
  s("copywriting", "Copywriting", "Words that sell without sounding salesy.",
    "Captions, ad copy, landing pages and email copy written in your brand voice and tuned to convert.",
    ["Captions & hooks", "Ad copy", "Website copy", "Email copy", "Brand voice guide"],
    ["Clear, persuasive messaging", "Higher click-through rates", "Consistent tone everywhere"]),
  s("hashtag-research", "Hashtag Research", "The right tags for the right audience.",
    "Data-driven hashtag sets per platform and content type, refreshed monthly to maximise discoverability.",
    ["Niche hashtag sets", "Competitor tag analysis", "Branded hashtags", "Monthly refresh", "Performance tracking"],
    ["Better discoverability", "Reach beyond your followers", "Less guesswork"]),
  s("influencer-marketing", "Influencer Marketing", "Creators who move your audience.",
    "We find, vet and manage influencers who genuinely fit your brand, from nano creators to big names.",
    ["Influencer sourcing & vetting", "Campaign briefs", "Contract & payment handling", "Content approval", "Campaign reporting"],
    ["Borrowed trust from creators", "Authentic user content", "New audience reach"]),
  s("community-management", "Community Management", "Every comment and DM answered.",
    "We reply to comments and messages in your brand voice, moderate conversations and turn followers into fans.",
    ["Comment & DM replies", "Moderation", "Engagement sessions", "Escalation to your team", "Weekly sentiment report"],
    ["Happier customers", "Faster response times", "Stronger loyalty"]),
  s("social-media-strategy", "Social Media Strategy", "A clear 90-day plan with KPIs.",
    "An audit of your channels and competitors followed by a practical strategy: platforms, pillars, cadence and targets.",
    ["Channel audit", "Audience personas", "Content pillars", "Posting cadence", "KPI framework"],
    ["Focus on what works", "Clear goals for your team", "Measurable progress"]),
  s("brand-management", "Brand Management", "One consistent brand everywhere.",
    "We guard your brand identity across every channel with guidelines, asset libraries and regular brand audits.",
    ["Brand guidelines", "Asset library", "Tone of voice", "Brand audits", "Partner co-branding"],
    ["Trustworthy, consistent image", "Faster content production", "Premium perception"]),
  s("lead-generation", "Lead Generation", "Campaigns that fill your pipeline.",
    "Lead magnets, landing pages and lead-form campaigns that deliver qualified prospects straight to your inbox or CRM.",
    ["Lead magnets", "Landing pages", "Lead-form ads", "CRM integration", "Lead nurturing"],
    ["Steady flow of qualified leads", "Lower cost per lead", "Sales-ready prospects"]),
  s("paid-advertising", "Paid Advertising", "Search, display and social ads managed end-to-end.",
    "Google Ads and paid social managed by specialists who obsess over every shilling of your budget.",
    ["Google Search & Display", "Shopping campaigns", "Paid social", "Conversion tracking", "Weekly optimisation"],
    ["Immediate visibility", "Measurable return on spend", "Scale what works"]),
  s("seo", "SEO", "Rank higher, get found organically.",
    "Technical fixes, content and local SEO that lift your rankings and bring free, compounding traffic.",
    ["Technical audit", "Keyword research", "On-page optimisation", "Content strategy", "Local SEO"],
    ["Free long-term traffic", "Higher trust from search", "Lower ad dependency"]),
  s("email-marketing", "Email Marketing", "Newsletters and automations that sell.",
    "Welcome flows, newsletters and automated campaigns that nurture leads and bring customers back.",
    ["List building", "Newsletter design", "Automation flows", "Segmentation", "A/B testing"],
    ["Owned audience channel", "Repeat purchases", "High return on investment"]),
  s("reputation-management", "Reputation Management", "Protect and grow your good name.",
    "We monitor mentions and reviews, respond professionally and generate more positive reviews.",
    ["Review monitoring", "Response management", "Review generation", "Crisis handling", "Monthly reputation report"],
    ["Higher star ratings", "Customer trust", "Fast crisis response"]),
];

export const platformServices = services.filter((x) => x.platform);

export function getService(slug: string) {
  return services.find((x) => x.slug === slug);
}
