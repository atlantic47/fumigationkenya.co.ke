import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cockroach Control Kenya | Professional Eradication Services",
  description: "Effective cockroach control for homes and businesses in Kenya. We use advanced gel baits and sprays to eliminate nests and stop reproduction. Call 0710 907 628.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services/cockroach-control-kenya" },
};

export default function CockroachPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>Commercial & Residential</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Cockroach Control in Kenya
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Tired of cockroaches returning after spraying? Our professional treatment targets the nest, eliminates eggs, and stops the reproductive cycle.
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
            <h2>The Cockroach Problem in Kenya</h2>
            <p>Cockroaches are one of the most resilient pests in Kenya. The two most common species are the small, light-brown <strong>German cockroach</strong> (common in kitchens and restaurants) and the large, dark-brown <strong>American cockroach</strong> (common in drains and damp areas).</p>
            
            <h2>Why DIY Sprays Fail</h2>
            <p>Supermarket insect sprays are repellents. They kill the few cockroaches you see, but force the survivors deeper into walls and appliances. Because a single female German cockroach can produce 300+ offspring in her lifetime, missing the nest means the problem never goes away.</p>
            
            <h2>Our Professional Approach</h2>
            <p>We use a combination method that guarantees elimination without disrupting your kitchen or business operations:</p>
            <ul>
              <li><strong>Gel Baits:</strong> Placed strategically in cracks and crevices. Cockroaches eat the bait, return to the nest, and pass the poison to the rest of the colony.</li>
              <li><strong>Insect Growth Regulators (IGR):</strong> We apply chemical treatments that disrupt the cockroach life cycle, preventing nymphs from becoming breeding adults.</li>
              <li><strong>Targeted Residual Sprays:</strong> Applied to perimeters and harborage areas to create a protective barrier.</li>
            </ul>

            <h2>For Businesses & Restaurants</h2>
            <p>A cockroach infestation can destroy a business&apos;s reputation and result in health inspection failures. We provide discreet, food-safe treatments tailored for commercial kitchens, hotels, and retail stores, complete with necessary compliance documentation.</p>

            <p>For additional details on commercial and residential cockroach control, you can also review{" "}
              <a href="https://pestraid.co.ke/services/cockroaches-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="backlink">
                PestrAid Kenya&apos;s cockroach control services
              </a>.
            </p>

            <h2>More Resources</h2>
            <p>Check out our detailed guide on <Link href="/blog/cockroach-control-why-diy-fails">Why DIY Cockroach Sprays Keep Failing</Link>, or read about our <Link href="/services/termite-control-kenya">termite control services</Link> if you&apos;re dealing with wood damage.</p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "100px" }}>
            <div style={{ background: "var(--green-700)", borderRadius: "var(--radius-xl)", padding: "2rem", textAlign: "center", color: "white" }}>
              <h3 style={{ color: "white", marginBottom: "0.75rem" }}>Book Treatment</h3>
              <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", marginBottom: "0.75rem" }}>📞 0710 907 628</a>
              <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: "100%" }}>💬 WhatsApp</a>
            </div>
            <div style={{ background: "var(--green-50)", borderRadius: "var(--radius-xl)", padding: "1.5rem", border: "1px solid var(--green-200)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "1rem" }}>Other Services</h4>
              {[
                ["/services/termite-control-kenya", "Termite Control"],
                ["/services/bed-bug-treatment-kenya", "Bed Bug Treatment"],
                ["/services/rodent-control-kenya", "Rodent Control"],
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
          <h2 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "1rem" }}>Eliminate Cockroaches Today</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call Now</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Get Free Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
