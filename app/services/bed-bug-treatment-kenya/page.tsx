import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Bed Bug Treatment Kenya | Professional Elimination — FumigationKenya",
  description: "Professional bed bug treatment in Kenya. We eliminate bed bugs from mattresses, furniture, and walls using heat treatment and targeted pesticides. Call 0710 907 628.",
  alternates: { canonical: "https://fumigationkenya.co.ke/services/bed-bug-treatment-kenya" },
};

export default function BedBugPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>Bed Bug Specialists</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Bed Bug Treatment in Kenya
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              Bed bugs are one of the hardest pests to eliminate without professional help. Our comprehensive treatment targets bugs and eggs in every hiding place — not just the surface.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 0710 907 628</a>
              <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" className="btn btn-whatsapp btn-lg">💬 WhatsApp</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 320px", gap: "3rem" }}>
          <div className="prose">
            <h2>Are Bed Bugs Common in Kenya?</h2>
            <p>Yes. Bed bugs are increasingly prevalent across Kenya, especially in Nairobi, Mombasa, and high-density urban areas. They spread through second-hand furniture, hotels, travel bags, and shared laundry. No household is immune.</p>

            <h2>Warning Signs of Bed Bug Infestation</h2>
            <ul>
              <li>Itchy red bites appearing overnight, usually on arms, neck, and shoulders</li>
              <li>Rust-coloured spots (blood or excrement) on mattress seams and bedding</li>
              <li>Tiny white eggs or shed skins along mattress seams and behind headboards</li>
              <li>A musty, oily smell in the bedroom</li>
              <li>Live bugs (1–7mm, flat, reddish-brown) in mattress folds or furniture joints</li>
            </ul>

            <h2>Why DIY Bed Bug Sprays Fail</h2>
            <p>Bed bugs hide in mattress seams, electrical outlets, wall cracks, beneath carpet edges, and inside furniture — not just on the mattress surface. Spraying only what you can see misses 80–90% of the population. Bed bug eggs are also resistant to most over-the-counter insecticides.</p>

            <h2>Our Bed Bug Treatment Process</h2>
            <ul>
              <li><strong>Full room inspection</strong> — We check every crack, seam, and harborage area</li>
              <li><strong>Targeted pesticide treatment</strong> — Applied to all hiding areas including walls, baseboards, and furniture joints</li>
              <li><strong>Mattress and furniture treatment</strong> — Specific products safe for sleeping surfaces</li>
              <li><strong>Insect Growth Regulator (IGR)</strong> — Prevents eggs from hatching, breaking the reproductive cycle</li>
              <li><strong>Follow-up treatment at 14 days</strong> — Catches any eggs that have since hatched</li>
              <li><strong>Heat treatment option</strong> — Most effective single-session method, kills all life stages</li>
            </ul>

            <h2>After Treatment: What to Do</h2>
            <p>Launder all bedding, clothes, and soft furnishings at 60°C minimum and dry on high heat. Do not bring second-hand furniture or mattresses indoors without inspection. Vacuum regularly and seal the vacuum bag after each use.</p>

            <p>For comparison and additional resources on bed bug control options in Kenya, see{" "}
              <a href="https://pestraid.co.ke/services/bed-bugs-control-services-and-pricing-in-kenya/" target="_blank" rel="noopener noreferrer" className="backlink">
                PestrAid Kenya&apos;s bed bug treatment pricing guide
              </a>.
            </p>

            <h2>Internal Links</h2>
            <p>Also read our blog guide: <Link href="/blog/bed-bug-treatment-guide-kenya">Bed Bug Treatment Guide for Kenya Homes</Link>. For general pest information, visit our <Link href="/services/termite-control-kenya">termite control page</Link> — Kenya&apos;s most damaging pest problem.</p>
          </div>

          {/* Sidebar */}
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
                ["/services/cockroach-control-kenya", "Cockroach Control"],
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
          <h2 style={{ color: "white", fontFamily: "var(--font-heading)", fontSize: "1.75rem", marginBottom: "1rem" }}>Get Rid of Bed Bugs — Permanently</h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call Now</a>
            <Link href="/contact" className="btn btn-secondary btn-lg">Request Quote</Link>
          </div>
        </div>
      </section>
    </>
  );
}
