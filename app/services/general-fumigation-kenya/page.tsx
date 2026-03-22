import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "General Fumigation Services Kenya | Residential & Commercial",
  description: "Comprehensive fumigation services in Kenya for homes, offices, and warehouses. Safe, PCPB-approved pest elimination targeting multiple pests. Call 0710 907 628.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services/general-fumigation-kenya" },
};

export default function GeneralFumigationPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>Comprehensive Care</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              General Fumigation Services
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Protect your home or business with our all-inclusive fumigation services targeting a wide range of crawling and flying insects in a single visit.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 0710 907 628</a>
              <Link href="/contact" className="btn btn-secondary btn-lg">Get Free Quote</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem" }}>
          <div className="prose">
            <h2>When Do You Need General Fumigation?</h2>
            <p>If you are experiencing multiple pest issues, moving into a new home, managing a rental property turnover, or simply want a preventative treatment, our general fumigation service is the ideal choice. It offers broad-spectrum control against common Kenyan household pests including:</p>
            <ul>
              <li>Spiders and centipedes</li>
              <li>Ants (sugar ants, pavement ants)</li>
              <li>Silverfish and moths</li>
              <li>Fleas and ticks (especially in homes with pets)</li>
              <li>Occasional invaders like crickets or beetles</li>
            </ul>
            <p><em>Note: Serious infestations of <Link href="/services/termite-control-kenya">termites</Link>, <Link href="/services/bed-bug-treatment-kenya">bed bugs</Link>, and <Link href="/services/cockroach-control-kenya">cockroaches</Link> require specialized treatments.</em></p>
            
            <h2>What to Expect from Our Fumigation Service</h2>
            <p>We use modern, eco-friendly pesticides approved by the Kenyan Pest Control Products Board (PCPB). The process usually takes 1–3 hours depending on property size. You will need to vacate the premises during the treatment and allow for a 2-4 hour ventilation period before returning.</p>
            
            <h3>Preparation Steps:</h3>
            <ul>
              <li>Store all exposed food in sealed containers or the refrigerator.</li>
              <li>Remove pets (cover fish tanks and turn off air pumps).</li>
              <li>Put away toothbrushes, baby toys, and pet bowls.</li>
              <li>Open internal doors and cupboards for maximum vapor penetration.</li>
            </ul>

            <h2>Commercial Fumigation</h2>
            <p>For offices, schools, and commercial properties, routine fumigation creates a safe, healthy environment for employees and clients. We offer quarterly or bi-annual service contracts paired with documented service certificates.</p>

            <p>For more details on commercial rates, you can check{" "}
              <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="backlink">
                professional pest control services on PestrAid Kenya
              </a>.
            </p>

            <h2>Read More</h2>
            <p>Curious about timelines? Read our blog guide on <Link href="/blog/how-long-does-fumigation-take">How Long Fumigation Takes in Kenya</Link>.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "100px" }}>
            <div style={{ background: "var(--green-700)", borderRadius: "var(--radius-xl)", padding: "2rem", textAlign: "center", color: "white" }}>
              <h3 style={{ color: "white", marginBottom: "0.75rem" }}>Schedule Fumigation</h3>
              <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", marginBottom: "0.75rem" }}>📞 0710 907 628</a>
              <Link href="/contact" className="btn btn-secondary" style={{ width: "100%" }}>Request Quote</Link>
            </div>
            <div style={{ background: "var(--green-50)", borderRadius: "var(--radius-xl)", padding: "1.5rem", border: "1px solid var(--green-200)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "1rem" }}>Targeted Services</h4>
              {[
                ["/services/termite-control-kenya", "Termite Control"],
                ["/services/bed-bug-treatment-kenya", "Bed Bug Treatment"],
                ["/services/cockroach-control-kenya", "Cockroach Control"],
                ["/services/rodent-control-kenya", "Rodent Control"],
              ].map(([href, label]) => (
                <Link key={href} href={href} style={{ display: "block", padding: "0.5rem 0", borderBottom: "1px solid var(--green-100)", color: "var(--green-700)", fontSize: "0.875rem" }}>→ {label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: "var(--green-800)", padding: "3rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "1rem" }}>Protect Your Environment Today</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call Now</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Book Service</Link>
          </div>
        </div>
      </section>
    </>
  );
}
