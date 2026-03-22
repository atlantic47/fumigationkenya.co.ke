"use client";
import { useState } from "react";
import Link from "next/link";

const navServices = [
  { href: "/services/termite-control-kenya", label: "Termite Control" },
  { href: "/services/bed-bug-treatment-kenya", label: "Bed Bug Treatment" },
  { href: "/services/cockroach-control-kenya", label: "Cockroach Control" },
  { href: "/services/rodent-control-kenya", label: "Rodent Control" },
  { href: "/services/general-fumigation-kenya", label: "General Fumigation" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header style={{ position: "sticky", top: 0, zIndex: 100, background: "var(--green-800)", boxShadow: "0 2px 20px rgba(0,0,0,0.2)" }}>
      {/* Top bar */}
      <div style={{ background: "var(--green-900)", padding: "0.4rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: "0.82rem", color: "var(--green-100)" }}>
          <span>🌿 Kenya&apos;s Trusted Termite &amp; Pest Control Specialists</span>
          <div style={{ display: "flex", gap: "1.5rem" }}>
            <a href="tel:+254710907628" style={{ color: "var(--yellow-300)" }}>📞 0710 907 628</a>
            <a href="mailto:info@fumigationkenya.co.ke" style={{ color: "var(--green-100)" }}>✉ info@fumigationkenya.co.ke</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1rem var(--container-px)" }}>
        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
          <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--yellow-400)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", fontWeight: 800, color: "var(--green-900)", flexShrink: 0 }}>PK</div>
          <div>
            <div style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.1rem", lineHeight: 1.1 }}>Pestraid Kenya</div>
            <div style={{ color: "var(--yellow-300)", fontSize: "0.7rem", letterSpacing: "0.05em" }}>PEST CONTROL SPECIALISTS</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav style={{ display: "flex", alignItems: "center", gap: "0.25rem" }} className="desktop-nav">
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "rgba(255,255,255,0.88)", padding: "0.5rem 0.9rem", borderRadius: "var(--radius)", fontSize: "0.9rem", fontWeight: 500, transition: "var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {item.label}
            </Link>
          ))}

          {/* Services dropdown */}
          <div style={{ position: "relative" }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}>
            <Link href="/services" style={{ color: "rgba(255,255,255,0.88)", padding: "0.5rem 0.9rem", borderRadius: "var(--radius)", fontSize: "0.9rem", fontWeight: 500, display: "flex", alignItems: "center", gap: "0.3rem" }}>
              Services ▾
            </Link>
            {servicesOpen && (
              <div style={{ position: "absolute", top: "100%", left: 0, background: "white", borderRadius: "var(--radius-md)", boxShadow: "var(--shadow-xl)", minWidth: 240, padding: "0.5rem", zIndex: 200 }}>
                {navServices.map((s) => (
                  <Link key={s.href} href={s.href} style={{ display: "block", padding: "0.6rem 1rem", color: "var(--gray-700)", borderRadius: "var(--radius)", fontSize: "0.875rem", fontWeight: 500, transition: "var(--transition)" }}
                    onMouseEnter={e => { e.currentTarget.style.background = "var(--green-50)"; e.currentTarget.style.color = "var(--green-700)"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "var(--gray-700)"; }}>
                    {s.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {[
            { href: "/blog", label: "Blog" },
            { href: "/service-areas", label: "Service Areas" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} style={{ color: "rgba(255,255,255,0.88)", padding: "0.5rem 0.9rem", borderRadius: "var(--radius)", fontSize: "0.9rem", fontWeight: 500, transition: "var(--transition)" }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          <a href="tel:+254710907628" className="btn btn-primary btn-sm" style={{ display: "none" }} id="header-cta">Get Free Quote</a>
          <a href="tel:+254710907628" className="btn btn-primary btn-sm">📞 Free Quote</a>
          {/* Mobile hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} style={{ background: "none", border: "none", color: "white", fontSize: "1.5rem", cursor: "pointer", padding: "0.25rem", display: "none" }} className="hamburger" aria-label="Toggle menu">
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{ background: "var(--green-900)", borderTop: "1px solid rgba(255,255,255,0.1)", padding: "1rem" }}>
          {[
            { href: "/", label: "Home" },
            { href: "/about", label: "About Us" },
            { href: "/services", label: "All Services" },
            ...navServices.map(s => ({ ...s, indent: true })),
            { href: "/blog", label: "Blog" },
            { href: "/service-areas", label: "Service Areas" },
            { href: "/contact", label: "Contact" },
          ].map((item) => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)}
              style={{ display: "block", color: "white", padding: "0.65rem 1rem", borderRadius: "var(--radius)", fontSize: "0.9rem", marginBottom: "0.15rem", paddingLeft: (item as { indent?: boolean }).indent ? "2rem" : "1rem", opacity: (item as { indent?: boolean }).indent ? 0.85 : 1 }}
              onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.1)")}
              onMouseLeave={e => (e.currentTarget.style.background = "transparent")}>
              {(item as { indent?: boolean }).indent ? "→ " : ""}{item.label}
            </Link>
          ))}
          <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", marginTop: "0.75rem" }}>📞 Call Now: 0710 907 628</a>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
        }
        @media (max-width: 640px) {
          header .top-bar-right { display: none; }
        }
      `}</style>
    </header>
  );
}
