import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rodent, Rat & Mice Control Kenya | Professional Extermination",
  description: "Get rid of rats and mice permanently. Our rodent control services include proofing, trapping, and baiting for homes and warehouses. Call 0710 907 628.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services/rodent-control-kenya" },
};

export default function RodentPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>Rodent Eradication</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Rodent Control in Kenya
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Rats and mice carry diseases and cause significant property damage. We provide comprehensive rodent exclusion, trapping, and elimination programs.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 0710 907 628</a>
              <a href="mailto:info@fumigationkenya.co.ke" className="btn btn-secondary btn-lg">✉ Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem" }}>
          <div className="prose">
            <h2>The Threat of Rodents</h2>
            <p>From residential neighborhoods in Nairobi to commercial warehouses in Mombasa, rodents are a persistent threat in Kenya. The black rat (roof rat) and brown rat are common invaders. They spread diseases like Salmonella and Leptospirosis, contaminate food supplies, and cause electrical fires by gnawing through wiring.</p>
            
            <h2>Signs of a Rodent Infestation</h2>
            <ul>
              <li>Droppings shaped like dark grains of rice</li>
              <li>Scratching or scurrying noises in walls or ceilings at night</li>
              <li>Gnaw marks on wood, plastics, and food packaging</li>
              <li>Grease marks (smudges) along skirting boards or walls</li>
              <li>Nesting materials like shredded paper or fabric</li>
            </ul>
            
            <h2>Our Rodent Control Program</h2>
            <p>We don&apos;t just put down poison and leave. Our comprehensive program is designed to completely remove rodents and prevent them from returning.</p>
            <ul>
              <li><strong>Inspection & Assessment:</strong> We identify entry points, travel routes, and nesting areas.</li>
              <li><strong>Exclusion (Rodent Proofing):</strong> We advise on sealing cracks, gaps around pipes, and vents to prevent entry.</li>
              <li><strong>Trapping:</strong> We use safe, efficient snap traps and live traps in heavily infested areas to immediately reduce the population.</li>
              <li><strong>Baiting Stations:</strong> We place locked, tamper-proof bait stations in strategic outdoor and commercial areas — safe from children and pets.</li>
            </ul>

            <h2>Commercial & Warehouse Services</h2>
            <p>For factories, warehouses, and agricultural facilities storing grain or food, we offer ongoing rodent management contracts to maintain zero-tolerance environments.</p>

            <p>For more details on commercial rates and service packages across Kenya, please review{" "}
              <a href="https://pestraid.co.ke/services/rat-and-rodents-control-service-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="backlink">
                PestrAid Kenya&apos;s rat and rodent control pricing
              </a>.
            </p>

            <h2>Related Articles</h2>
            <p>Check out our practical guide on <Link href="/blog/rodent-control-nairobi">Rodent Control in Nairobi</Link>. Also, since rodents often damage wooden structures to build nests, you might be interested in our <Link href="/services/termite-control-kenya">termite control services</Link>.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "100px" }}>
            <div style={{ background: "var(--green-700)", borderRadius: "var(--radius-xl)", padding: "2rem", textAlign: "center", color: "white" }}>
              <h3 style={{ color: "white", marginBottom: "0.75rem" }}>Book Treatment</h3>
              <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", marginBottom: "0.75rem" }}>📞 0710 907 628</a>
              <Link href="/contact" className="btn btn-secondary" style={{ width: "100%" }}>Request Quote</Link>
            </div>
            <div style={{ background: "var(--green-50)", borderRadius: "var(--radius-xl)", padding: "1.5rem", border: "1px solid var(--green-200)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "1rem" }}>Other Services</h4>
              {[
                ["/services/termite-control-kenya", "Termite Control"],
                ["/services/bed-bug-treatment-kenya", "Bed Bug Treatment"],
                ["/services/cockroach-control-kenya", "Cockroach Control"],
                ["/services/general-fumigation-kenya", "General Fumigation"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ display: "block", padding: "0.5rem 0", borderBottom: "1px solid var(--green-100)", color: "var(--green-700)", fontSize: "0.875rem" }}>→ {label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--green-800)", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "1rem" }}>Professional Rodent Eradication</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call Now</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
