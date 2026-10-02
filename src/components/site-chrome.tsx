import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/services", label: "Services" },
  { to: "/work", label: "Work" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 md:px-8">
        <Link to="/" className="font-display text-3xl tracking-tight text-foreground">
          Plonk<span className="italic">.</span>
        </Link>
        <div className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[11px] font-semibold uppercase tracking-[0.2em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="hidden bg-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
          >
            Client Login
          </Link>
          <button
            className="text-foreground md:hidden"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-6xl flex-col px-6 py-6 md:px-8">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="border-b border-border py-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-foreground last:border-b-0"
              >
                {l.label}
              </Link>
            ))}
            <Link
              to="/login"
              onClick={() => setOpen(false)}
              className="mt-4 bg-primary px-6 py-3 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-primary-foreground"
            >
              Client Login
            </Link>
          </div>
        </div>
      )}
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
          <Link to="/work" className="transition-colors hover:text-foreground">Work</Link>
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
    <svg
      className={`transition-transform duration-300 group-hover:translate-x-1 ${className}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );
}
