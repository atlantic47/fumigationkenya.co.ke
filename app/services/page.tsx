import type { Metadata } from "next";
import Link from "next/link";
import { services } from "../_lib/data";

export const metadata: Metadata = {
  title: "Pest Control Services in Kenya | Termite, Bed Bugs, Cockroaches, Rodents",
  description: "Complete pest control services in Kenya. Termite control, bed bug treatment, cockroach control, rodent elimination, and general fumigation. Licensed specialists serving all of Kenya.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services" },
};

const serviceDetails = [
  { slug: "termite-control-kenya", icon: "🐜", color: "var(--green-700)", bg: "var(--green-50)", title: "Termite Control", featured: true, details: ["Subterranean termite elimination", "Soil treatment & baiting systems", "Drywood termite fumigation", "Pre-construction treatment", "Free property inspection", "10+ year guarantee options"] },
  { slug: "bed-bug-treatment-kenya", icon: "🛏️", color: "#c0392b", bg: "#fdf2f1", title: "Bed Bug Treatment", featured: false, details: ["Full room inspection", "Mattress & furniture treatment", "Heat treatment available", "Wall & baseboard treatment", "14-day follow-up treatment", "Laundering guidance provided"] },
  { slug: "cockroach-control-kenya", icon: "🪳", color: "#7d5a1e", bg: "#faf5e8", title: "Cockroach Control", featured: false, details: ["Gel bait application", "Residual spray treatment", "Nest site elimination", "Insect Growth Regulator (IGR)", "Kitchen & restaurant specialists", "HACCP-compliant methods"] },
  { slug: "rodent-control-kenya", icon: "🐀", color: "#555", bg: "#f5f5f5", title: "Rodent Control", featured: false, details: ["Rodent proofing & exclusion", "Snap trap placement", "Bait station installation", "Monitoring & follow-up", "Warehouse & farm coverage", "Health & safety compliant"] },
  { slug: "general-fumigation-kenya", icon: "🌿", color: "#1a5c8a", bg: "#eef6fb", title: "General Fumigation", featured: false, details: ["Multi-pest treatment", "Residential & commercial", "Pre/post-fumigation advice", "Air quality certified", "Same-day response available", "Service certificate issued"] },
];

export default function ServicesPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>What We Offer</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Professional Pest Control Services in Kenya
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto" }}>
            From termites to rodents, we offer complete pest management for homes and businesses across Kenya, complementing other structural treatments like <a href="https://moldguardkenya.co.ke/" style={{color: "var(--yellow-400)", textDecoration: "underline", fontWeight: 500}} target="_blank" rel="dofollow noopener noreferrer">expert mold removal</a>.
          </p>
        </div>
      </section>

      {/* Featured: Termite */}
      <section className="section">
        <div className="container">
          <div style={{ background: "var(--green-50)", border: "2px solid var(--green-200)", borderRadius: "var(--radius-xl)", padding: "3rem", marginBottom: "2rem" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem", alignItems: "center" }}>
              <div>
                <div className="badge badge-green" style={{ marginBottom: "1rem" }}>⭐ Our #1 Specialty</div>
                <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--green-800)", marginBottom: "1rem" }}>Termite Control Kenya</h2>
                <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
                  Termites are the most destructive pest in Kenya, causing billions in property damage annually. Our termite control service is the most comprehensive available — from free inspection to guaranteed elimination and prevention. We specialize in subterranean termites, which are responsible for 90% of termite damage in Kenyan homes. Furthermore, water damage promoting termite growth should be addressed with professional <a href="https://moldguardkenya.co.ke/services" className="backlink text-green-700 underline font-medium" target="_blank" rel="dofollow noopener noreferrer">mold testing and remediation services</a>.
                </p>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                  {serviceDetails[0].details.map((d) => (
                    <li key={d} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.875rem", color: "var(--gray-700)" }}>
                      <span style={{ color: "var(--green-600)", fontWeight: 700 }}>✓</span> {d}
                    </li>
                  ))}
                </ul>
                <Link href="/services/termite-control-kenya" className="btn btn-green btn-lg">Explore Termite Control →</Link>
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{ fontSize: "8rem", marginBottom: "1rem" }}>🐜</div>
                <div style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "1.5rem", display: "inline-block", boxShadow: "var(--shadow)" }}>
                  <div style={{ fontWeight: 800, fontSize: "1.5rem", color: "var(--green-700)" }}>Free Inspection</div>
                  <div style={{ color: "var(--gray-500)", fontSize: "0.875rem" }}>Before any treatment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Other services */}
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, color: "var(--gray-900)", marginBottom: "1.5rem" }}>Additional Services</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: "1.5rem" }}>
            {serviceDetails.slice(1).map((svc) => (
              <div key={svc.slug} className="card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                  <div style={{ fontSize: "2.5rem", flexShrink: 0 }}>{svc.icon}</div>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "var(--gray-900)", marginBottom: "0.5rem" }}>{svc.title}</h3>
                    <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.25rem 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.35rem" }}>
                      {svc.details.map((d) => (
                        <li key={d} style={{ fontSize: "0.8rem", color: "var(--gray-600)", display: "flex", gap: "0.3rem" }}>
                          <span style={{ color: "var(--green-600)" }}>✓</span> {d}
                        </li>
                      ))}
                    </ul>
                    <Link href={`/services/${svc.slug}`} className="btn btn-outline-green btn-sm">Learn More</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--green-800)", padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Not Sure Which Service You Need?
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem" }}>
            Call us and we&apos;ll recommend the right solution after a free on-site assessment. If your issue is moisture-related, we can also advise on professional <a href="https://moldguardkenya.co.ke/services" style={{color: "var(--yellow-400)", textDecoration: "underline", fontWeight: 500}} target="_blank" rel="dofollow noopener noreferrer">mold mitigation services</a>.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 0710 907 628</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
