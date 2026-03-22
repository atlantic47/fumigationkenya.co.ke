import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termite Control Kenya | Professional Subterranean Termite Treatment",
  description: "Expert termite control in Kenya. We eliminate subterranean and drywood termites using soil treatment, baiting systems, and fumigation. Free inspection. Call 0710 907 628.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services/termite-control-kenya" },
  keywords: ["termite control Kenya", "termite treatment Nairobi", "subterranean termite Kenya", "termite fumigation Kenya", "termite inspection Kenya"],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Termite Control Kenya",
  provider: { "@type": "LocalBusiness", name: "FumigationKenya", telephone: "+254710907628" },
  areaServed: "Kenya",
  description: "Professional termite control services in Kenya including soil treatment, baiting systems, and fumigation for subterranean and drywood termites.",
};

export default function TermiteControlPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />

      {/* Hero */}
      <section className="hero-bg" style={{ padding: "4.5rem 0 3.5rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <div className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>⭐ Our #1 Specialty</div>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3.25rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              Termite Control in Kenya: Expert Treatment You Can Trust
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Termites are called the &quot;silent destroyers&quot; — they eat your home from the inside without any visible warning until the damage is severe. Our termite control specialists use proven methods to eliminate colonies and protect your property long-term.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Free Inspection: 0710 907 628</a>
              <Link href="/contact" className="btn btn-secondary btn-lg">Get Written Quote</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts */}
      <section style={{ background: "var(--yellow-400)", padding: "1.75rem 0" }}>
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem", justifyContent: "space-around", textAlign: "center" }}>
            {[
              { label: "Termite Species Handled", value: "2+" },
              { label: "Treatment Methods", value: "4" },
              { label: "Years Experience", value: "10+" },
              { label: "Guarantee Period", value: "Up to 10 Yrs" },
            ].map((f) => (
              <div key={f.label}>
                <div style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "1.75rem", color: "var(--green-900)" }}>{f.value}</div>
                <div style={{ fontSize: "0.8rem", color: "var(--green-800)", fontWeight: 600 }}>{f.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "3rem", alignItems: "flex-start" }}>
          <div className="prose">
            <h2>Understanding Termites in Kenya</h2>
            <p>Kenya&apos;s warm, humid tropical climate creates ideal breeding conditions for termites year-round. Two species are most common in Kenyan homes and businesses:</p>
            <ul>
              <li><strong>Subterranean termites</strong> — The most destructive species in Kenya. They live in the soil and build mud tubes to reach wooden structures above ground. A single colony can house millions of workers consuming up to 1 kg of wood per day.</li>
              <li><strong>Drywood termites</strong> — Live inside dry wood without soil contact. Common in furniture, window frames, and roof timbers. Signs include frass (powdery droppings) pushed out through small holes.</li>
            </ul>
            <p>Rainy seasons (March–May and October–December) accelerate termite activity as moisture increases soil fertility for colony growth. This is when most Kenyan homeowners first notice signs of infestation.</p>

            <h2>Signs of Termite Infestation in Your Kenyan Home</h2>
            <p>Early detection is critical. The sooner you identify termites, the less damage they cause and the less expensive the treatment. Look for:</p>
            <ul>
              <li>Mud tubes running up walls, foundations, or pipes</li>
              <li>Hollow-sounding wood when tapped</li>
              <li>Discarded wings near windows or lights (especially after rain)</li>
              <li>Frass — tiny pellet-like droppings near wood</li>
              <li>Bubbling or uneven paint on walls</li>
              <li>Doors and windows suddenly becoming tight-fitting</li>
              <li>Visible tunnelling in exposed wood structures</li>
            </ul>
            <p>For a detailed visual guide, read our article on <Link href="/blog/how-to-identify-termites-kenya">how to identify termites in your Kenyan home</Link>.</p>

            <h2>Termite Damage: What&apos;s at Stake</h2>
            <p>Termites don&apos;t just damage furniture — they threaten the structural integrity of your entire building. In Kenya, common damage includes:</p>
            <ul>
              <li>Roof truss collapse from hollow structural timber</li>
              <li>Floor joist damage causing sagging or unsafe floors</li>
              <li>Door and window frame destruction requiring full replacement</li>
              <li>Internal wall damage hidden behind plaster</li>
              <li>Destruction of valuable furniture, books, and documents</li>
            </ul>
            <p>The average cost of termite repair in Kenya ranges from <strong>KSh 50,000 to over KSh 500,000</strong> for serious structural damage. Professional treatment costs a fraction of this.</p>

            <h2>Our Termite Treatment Methods</h2>
            <h3>1. Liquid Soil Treatment (Chemical Barrier)</h3>
            <p>The most widely used and cost-effective method for subterranean termites in Kenya. We apply a liquid termiticide (such as Termidor or Agenda) to the soil around and beneath the foundation. Termites passing through the treated soil pick up the chemical and spread it through the colony — eliminating the entire colony, not just individual workers.</p>
            <ul>
              <li>Treats active infestations and prevents new ones</li>
              <li>Effective for 5–10 years depending on soil type and product</li>
              <li>Available for both new construction and existing buildings</li>
            </ul>

            <h3>2. Termite Baiting Systems</h3>
            <p>Bait stations are installed around the perimeter of your property and checked regularly. When termites are found feeding, bait is replaced and termites carry it back to the colony — slowly eliminating the entire population. This is the most environmentally friendly method available.</p>
            <ul>
              <li>Excellent for sensitive environments (near water sources, organic gardens)</li>
              <li>Requires ongoing monitoring visits</li>
              <li>Works even where soil treatment is impractical</li>
            </ul>

            <h3>3. Wood Treatment (Borate)</h3>
            <p>Borate solution is applied directly to timber, making it toxic to termites that try to consume it. Best used during construction on exposed timber, or for accessible structural wood in existing buildings.</p>

            <h3>4. Structural Fumigation (Tenting)</h3>
            <p>For severe drywood termite infestations or where other methods cannot adequately reach all affected areas. The entire structure is sealed and filled with fumigant gas — killing all termites throughout the building. Requires vacating the property for 2–3 days.</p>

            <h2>Termite Prevention: Protecting Your Property Long-Term</h2>
            <p>After treatment, these prevention practices significantly reduce the risk of re-infestation:</p>
            <ul>
              <li>Fix all water leaks immediately — moisture is the primary termite attractant</li>
              <li>Ensure gutters drain away from the foundation</li>
              <li>Remove wood-to-soil contact (firewood, timber posts, wood mulch near the house)</li>
              <li>Seal cracks in foundation and walls</li>
              <li>Schedule annual termite inspections before the rainy season</li>
              <li>Use treated timber in construction and renovation projects</li>
            </ul>
            <p>Read our full guide on <Link href="/blog/how-to-prevent-termites-rainy-season">preventing termites during Kenya&apos;s rainy season</Link> for more practical tips.</p>

            <h2>Termite Control Cost in Kenya</h2>
            <p>Treatment costs depend on the method used, property size, and severity of the infestation:</p>
            <table>
              <thead><tr><th>Method</th><th>Typical Cost Range</th><th>Best For</th></tr></thead>
              <tbody>
                <tr><td>Soil Treatment</td><td>KSh 8,000–25,000</td><td>Subterranean termites, most properties</td></tr>
                <tr><td>Baiting System</td><td>KSh 15,000–40,000/yr</td><td>Ongoing protection, eco-sensitive areas</td></tr>
                <tr><td>Spot/Wood Treatment</td><td>KSh 3,000–10,000</td><td>Isolated drywood termite damage</td></tr>
                <tr><td>Full Fumigation</td><td>KSh 30,000–80,000+</td><td>Severe or whole-building infestations</td></tr>
              </tbody>
            </table>
            <p>For a detailed breakdown, read <Link href="/blog/cost-of-termite-treatment-kenya">our guide to termite treatment costs in Kenya</Link>.</p>

            <h2>Why Choose FumigationKenya for Termite Control?</h2>
            <p>We are termite specialists, not generalists. Our technicians are trained specifically in termite biology, behaviour, and treatment — giving you a higher standard of service than a typical general pest control company.</p>
            <p>Our approach:</p>
            <ul>
              <li>Free, no-obligation property inspection before any treatment</li>
              <li>Written treatment plan and pricing before work begins</li>
              <li>Use of PCPB-registered termiticides only</li>
              <li>Follow-up inspection 4–6 weeks after treatment</li>
              <li>Guarantee period included with all soil treatments</li>
            </ul>
            <p>For alternative quotes and additional information on termite treatment options in Kenya, our trusted industry partner{" "}
              <a href="https://pestraid.co.ke/services/termites-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="backlink">
                PestrAid Kenya&apos;s termite treatment and pricing guide
              </a>{" "}
              is a valuable resource for comparing services.
            </p>

            <h2>Frequently Asked Questions: Termite Control Kenya</h2>
            <h3>How long does termite treatment take?</h3>
            <p>Soil treatment takes 2–6 hours depending on property size. You can re-enter the property the same day once the soil has absorbed the chemical. Fumigation requires vacating for 2–3 days.</p>

            <h3>How do I know the termites are gone?</h3>
            <p>We schedule a follow-up inspection 4–6 weeks after treatment. We also show you what to look for between visits. If you see new activity, we return at no additional cost within our guarantee period.</p>

            <h3>Can I treat termites myself?</h3>
            <p>Over-the-counter products do not contain the professional-grade termiticides needed to eliminate a colony. They may temporarily disrupt visible workers but leave the queen and colony intact. Professional treatment is always more effective.</p>

            <h3>Do I need to leave my home during treatment?</h3>
            <p>For soil treatment, you generally do not need to vacate — just stay away from treated areas until dry. For fumigation, you need to vacate for 2–3 days.</p>
          </div>

          {/* Sidebar */}
          <div style={{ position: "sticky", top: "100px", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div style={{ background: "var(--green-700)", borderRadius: "var(--radius-xl)", padding: "2rem", color: "white", textAlign: "center" }}>
              <div style={{ fontSize: "2.5rem", marginBottom: "0.75rem" }}>📞</div>
              <h3 style={{ color: "white", fontSize: "1.1rem", fontWeight: 700, marginBottom: "0.5rem" }}>Free Termite Inspection</h3>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.875rem", marginBottom: "1.5rem" }}>Call now and our specialist will arrange a free on-site assessment</p>
              <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", marginBottom: "0.75rem" }}>0710 907 628</a>
              <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp" style={{ width: "100%" }}>💬 WhatsApp</a>
            </div>

            <div style={{ background: "var(--green-50)", borderRadius: "var(--radius-xl)", padding: "1.5rem", border: "1px solid var(--green-200)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "1rem" }}>Related Services</h4>
              {[
                { href: "/services/general-fumigation-kenya", label: "General Fumigation" },
                { href: "/services/cockroach-control-kenya", label: "Cockroach Control" },
                { href: "/services/rodent-control-kenya", label: "Rodent Control" },
                { href: "/services/bed-bug-treatment-kenya", label: "Bed Bug Treatment" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: "block", padding: "0.5rem 0", borderBottom: "1px solid var(--green-100)", color: "var(--green-700)", fontSize: "0.875rem", fontWeight: 500 }}>→ {l.label}</Link>
              ))}
            </div>

            <div style={{ background: "white", borderRadius: "var(--radius-xl)", padding: "1.5rem", boxShadow: "var(--shadow)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--gray-800)", marginBottom: "1rem" }}>📚 Related Articles</h4>
              {[
                { href: "/blog/how-to-identify-termites-kenya", label: "How to Identify Termites in Kenya" },
                { href: "/blog/cost-of-termite-treatment-kenya", label: "Cost of Termite Treatment" },
                { href: "/blog/how-to-prevent-termites-rainy-season", label: "Prevent Termites in Rainy Season" },
                { href: "/blog/best-termite-treatment-methods-kenya", label: "Best Termite Treatment Methods" },
              ].map((l) => (
                <Link key={l.href} href={l.href} style={{ display: "block", padding: "0.5rem 0", borderBottom: "1px solid var(--gray-100)", color: "var(--green-600)", fontSize: "0.82rem" }}>→ {l.label}</Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--green-800)", padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Protect Your Home From Termites Today
          </h2>
          <p style={{ color: "rgba(255,255,255,0.8)", marginBottom: "2rem", maxWidth: 500, margin: "0 auto 2rem" }}>
            Reach us at 0710907628 or email sales@pestraid.co.ke for a quote. Our team is ready to assist you today.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call: 0710 907 628</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Request Free Inspection</Link>
          </div>
        </div>
      </section>
    </>
  );
}
