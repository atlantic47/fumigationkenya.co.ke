import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "../_lib/data";

export const metadata: Metadata = {
  title: "Areas We Serve | Pest Control Coverage Across Kenya",
  description: "Pestraid Kenya provides professional termite and pest control services across Kenya including Nairobi, Mombasa, Kisumu, Nakuru, and Eldoret. Find your area.",
  alternates: { canonical: "https://fumigationkenya.co.ke/service-areas" },
};

export default function ServiceAreasPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>Nationwide Coverage</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Areas We Serve in Kenya
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto" }}>
            We bring professional, guaranteed pest control to homes and businesses across the country
          </p>
        </div>
      </section>

      <section className="section bg-green-light">
        <div className="container">
          <div style={{ maxWidth: 800, margin: "0 auto 4rem", textAlign: "center" }}>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 800, color: "var(--green-900)", marginBottom: "1rem" }}>Fast Response Pest Control in Your County</h2>
            <p style={{ color: "var(--gray-600)", lineHeight: 1.75 }}>
              From termite treatments in Nairobi to rodent control in Mombasa warehouses, our certified teams operate across major Kenyan towns and counties. We offer same-day or next-day inspections for critical pest emergencies in major urban centers.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1.5rem" }}>
            {serviceAreas.map((area) => (
              <div key={area.name} className="card" style={{ padding: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span style={{ fontWeight: 700, fontSize: "1.1rem", color: "var(--green-900)" }}>{area.name}</span>
                {area.slug ? (
                  <Link href={`/service-areas/${area.slug}`} style={{ color: "var(--green-600)", fontWeight: 600, fontSize: "0.85rem", background: "var(--green-50)", padding: "0.4rem 0.8rem", borderRadius: "100px" }}>View Local Services →</Link>
                ) : (
                  <span style={{ color: "var(--gray-400)", fontSize: "0.85rem" }}>Service active</span>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "4rem", background: "white", borderRadius: "var(--radius-xl)", padding: "3rem", boxShadow: "var(--shadow-md)", textAlign: "center" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gray-900)", marginBottom: "1rem" }}>Don&apos;t See Your Location?</h3>
            <p style={{ color: "var(--gray-600)", marginBottom: "1.5rem", maxWidth: 600, margin: "0 auto 2rem" }}>
              Our network is constantly expanding. Even if your town isn&apos;t listed above, we likely cover your area through our local technician network or our partners.
            </p>
            <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary">📞 Call to Confirm Coverage</a>
              <Link href="/contact" className="btn btn-outline-green">Send Us a Message</Link>
            </div>
            <p style={{ marginTop: "2rem", fontSize: "0.85rem", color: "var(--gray-500)" }}>
              For specialized commercial pest management reaching remote facilities, we also recommend checking coverage with <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="backlink">Pestraid Kenya</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
