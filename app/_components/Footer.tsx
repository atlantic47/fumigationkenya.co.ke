"use client";
import Link from "next/link";

const serviceLinks = [
  { href: "/services/termite-control-kenya", label: "Termite Control" },
  { href: "/services/bed-bug-treatment-kenya", label: "Bed Bug Treatment" },
  { href: "/services/cockroach-control-kenya", label: "Cockroach Control" },
  { href: "/services/rodent-control-kenya", label: "Rodent Control" },
  { href: "/services/general-fumigation-kenya", label: "General Fumigation" },
];

const areaLinks = [
  { href: "/service-areas/nairobi", label: "Nairobi & Environs" },
  { href: "/service-areas", label: "Muthaiga & Kitisuru" },
  { href: "/service-areas", label: "Kilimani & Kileleshwa" },
  { href: "/service-areas", label: "Karen & Lavington" },
  { href: "/service-areas", label: "View All Areas →" },
];

export default function Footer() {
  return (
    <footer>
      {/* Main footer */}
      <div style={{ background: "var(--green-900)", color: "var(--green-100)", paddingTop: "4rem", paddingBottom: "3rem" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "2.5rem" }}>
            {/* Brand */}
            <div style={{ gridColumn: "span 1" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div style={{ width: 42, height: 42, borderRadius: "50%", background: "var(--yellow-400)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.1rem", fontWeight: 800, color: "var(--green-900)", flexShrink: 0 }}>PK</div>
                <div>
                  <div style={{ color: "white", fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem" }}>Pestraid Kenya</div>
                  <div style={{ color: "var(--yellow-300)", fontSize: "0.65rem", letterSpacing: "0.05em" }}>PEST CONTROL SPECIALISTS</div>
                </div>
              </div>
              <p style={{ fontSize: "0.875rem", lineHeight: 1.7, color: "var(--green-200)", marginBottom: "1.25rem" }}>
                Kenya&apos;s trusted termite and pest control specialists. Protecting homes and businesses across the country with eco-friendly, effective solutions.
              </p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                <a href="tel:+254710907628" style={{ color: "var(--yellow-300)", fontWeight: 600, fontSize: "0.9rem" }}>📞 0710 907 628</a>
                <a href="mailto:sales@pestraid.co.ke" style={{ color: "var(--green-200)", fontSize: "0.875rem" }}>✉ sales@pestraid.co.ke</a>
                <div style={{ color: "var(--green-200)", fontSize: "0.875rem" }}>📍 Argwings Kodhek Road, Rose Ave, Nairobi</div>
              </div>
            </div>

            {/* Services */}
            <div>
              <h4 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Our Services</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {serviceLinks.map((s) => (
                  <li key={s.href}>
                    <Link href={s.href} style={{ color: "var(--green-200)", fontSize: "0.875rem", transition: "var(--transition)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--yellow-300)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--green-200)")}>
                      → {s.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Areas */}
            <div>
              <h4 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Service Areas</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {areaLinks.map((a) => (
                  <li key={a.label}>
                    <Link href={a.href} style={{ color: "var(--green-200)", fontSize: "0.875rem", transition: "var(--transition)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--yellow-300)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--green-200)")}>
                      → {a.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 700, marginBottom: "1.25rem" }}>Quick Links</h4>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                {[
                  { href: "/about", label: "About Us" },
                  { href: "/blog", label: "Blog & Tips" },
                  { href: "/contact", label: "Get Free Quote" },
                  { href: "/service-areas", label: "Coverage Areas" },
                ].map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} style={{ color: "var(--green-200)", fontSize: "0.875rem", transition: "var(--transition)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--yellow-300)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--green-200)")}>
                      → {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div style={{ marginTop: "1.5rem", padding: "1rem", background: "rgba(255,255,255,0.05)", borderRadius: "var(--radius)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontSize: "0.8rem", color: "var(--green-300)", marginBottom: "0.5rem" }}>Pest control partner network:</p>
                <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" style={{ color: "var(--yellow-300)", fontSize: "0.85rem", fontWeight: 600 }}>Pestraid Kenya →</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div style={{ background: "var(--black)", padding: "1rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
          <p style={{ color: "var(--gray-500)", fontSize: "0.8rem", margin: 0 }}>
            © 2025 Pestraid Kenya. All rights reserved. | Professional Pest Control in Kenya
          </p>
          <p style={{ color: "var(--gray-600)", fontSize: "0.78rem", margin: 0 }}>
            Licensed Pest Control Provider · Kenya Pest Control Products Board Compliant
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          footer .container > div { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 600px) {
          footer .container > div { grid-template-columns: 1fr !important; }
          footer .container:last-child { flex-direction: column; text-align: center; }
        }
      `}</style>
    </footer>
  );
}
