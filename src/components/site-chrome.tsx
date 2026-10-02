import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { WhatsAppIcon } from "@/components/whatsapp";
import { whatsappLink, WHATSAPP_DISPLAY } from "@/lib/services";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/social-media-marketing", label: "Social Media Marketing" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export const appTabs = [
  { to: "/integrations", label: "Account Integration" },
  { to: "/content", label: "Content Management" },
  { to: "/advertising", label: "Advertising" },
  { to: "/reviews", label: "Reviews" },
  { to: "/onboarding", label: "Business Onboarding" },
  { to: "/competitors", label: "Competitor Analysis" },
] as const;

const sidebarGroups = [
  { title: "Website", items: links },
  { title: "Client workspace", items: [{ to: "/dashboard", label: "Dashboard" }, ...appTabs] },
  {
    title: "Coming soon",
    items: [
      { to: "/analytics", label: "Analytics & Reports" },
      { to: "/campaigns", label: "Campaign Management" },
      { to: "/messages", label: "Client Communication" },
    ],
  },
] as const;

const linkCls = "text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground";
const activeCls = { className: "text-foreground" };

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-30 border-b border-border bg-background/95 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-5 md:px-8">
        <div className="flex items-center gap-4">
          <button onClick={() => setOpen(true)} aria-label="Open menu" className="text-foreground">
            <Menu className="size-6" />
          </button>
          <Link to="/" className="font-display text-3xl tracking-tight text-foreground">
            Plonk<span className="italic">.</span>
          </Link>
        </div>
        <div className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link key={l.to} to={l.to} activeOptions={{ exact: l.to === "/" }} activeProps={activeCls} className={linkCls}>
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-whatsapp">
            <WhatsAppIcon className="size-6" />
          </a>
          <Link to="/login" className="hidden bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex">
            Client Login
          </Link>
        </div>
      </nav>
      <div className="border-t border-border">
        <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-3 md:px-8">
          {appTabs.map((t) => (
            <Link key={t.to} to={t.to} activeProps={activeCls} className={`whitespace-nowrap ${linkCls}`}>
              {t.label}
            </Link>
          ))}
        </div>
      </div>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent side="left" className="w-80 overflow-y-auto">
          <SheetHeader>
            <SheetTitle className="font-display text-3xl font-normal">Plonk.</SheetTitle>
          </SheetHeader>
          <div className="space-y-8 px-4 pb-8">
            {sidebarGroups.map((g) => (
              <div key={g.title}>
                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-muted-foreground">{g.title}</p>
                <div className="mt-3 flex flex-col">
                  {g.items.map((i) => (
                    <Link
                      key={i.to}
                      to={i.to}
                      onClick={() => setOpen(false)}
                      activeOptions={{ exact: i.to === "/" }}
                      activeProps={{ className: "bg-muted" }}
                      className="border-b border-border px-2 py-3 text-sm text-foreground hover:bg-muted"
                    >
                      {i.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/login" onClick={() => setOpen(false)} className="block bg-primary px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground">
              Client Login
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 py-16 md:px-8">
        <Link to="/" className="font-display text-4xl tracking-tight text-foreground">
          Plonk<span className="italic">.</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          <a href="mailto:hello@plonk.studio" className="transition-colors hover:text-foreground">hello@plonk.studio</a>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-foreground">
            <WhatsAppIcon className="size-4" /> {WHATSAPP_DISPLAY}
          </a>
          <Link to="/services" className="transition-colors hover:text-foreground">Services</Link>
          <Link to="/login" className="transition-colors hover:text-foreground">Client Login</Link>
        </div>
        <p className="text-xs font-light text-muted-foreground">© 2026 Plonk Studio</p>
      </div>
    </footer>
  );
}

export function ArrowIcon({ className = "h-3.5 w-3.5" }: { className?: string }) {
  return (
    <svg className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
