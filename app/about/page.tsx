import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | FumigationKenya — Termite Specialists in Kenya",
  description: "FumigationKenya is Kenya's leading termite control and pest management company. Learn about our mission, expertise, and commitment to eco-friendly pest solutions.",
  alternates: { canonical: "https://fumigationkenya.co.ke/about" },
};

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>Who We Are</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            About FumigationKenya
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto" }}>
            Termite control specialists protecting Kenyan homes and businesses since 2014
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center" }}>
            <div>
              <span className="section-label">Our Mission</span>
              <h2 className="section-title">Kenya&apos;s Termite Control Specialists</h2>
              <div className="divider"></div>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                At FumigationKenya, we position ourselves as termite specialists first — because termites are Kenya&apos;s most destructive and most misunderstood pest. Every year, Kenyan homeowners lose millions of shillings to termite damage that could have been prevented or treated early.
              </p>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.25rem" }}>
                Our team was founded with a single purpose: to give Kenyan property owners access to the same quality of termite control that is available in developed markets — at fair, transparent pricing.
              </p>
              <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>
                We work within a broader network of pest control professionals across Kenya. Our trusted partner,{" "}
                <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="backlink">
                  PestrAid Kenya — professional pest control services across Kenya
                </a>
                , shares our commitment to quality and safety standards.
              </p>
              <div style={{ display: "flex", gap: "1rem" }}>
                <Link href="/services/termite-control-kenya" className="btn btn-green">Our Termite Services</Link>
                <Link href="/contact" className="btn btn-outline-green">Get Free Inspection</Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
              {[
                { icon: "🔬", label: "10+ Years", desc: "Of termite control experience in Kenya" },
                { icon: "👥", label: "500+ Clients", desc: "Homes and businesses served across Kenya" },
                { icon: "📋", label: "PCPB Licensed", desc: "Fully certified by Kenya's Pest Control Products Board" },
                { icon: "🌿", label: "Eco-Friendly", desc: "Safe methods for families, pets, and the environment" },
              ].map((item) => (
                <div key={item.label} style={{ background: "var(--green-50)", borderRadius: "var(--radius-lg)", padding: "1.5rem", border: "1px solid var(--green-100)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: "0.75rem" }}>{item.icon}</div>
                  <div style={{ fontWeight: 800, fontSize: "1.3rem", color: "var(--green-700)", marginBottom: "0.3rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.82rem", color: "var(--gray-500)", lineHeight: 1.5 }}>{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section bg-green-light">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Our Values</span>
            <h2 className="section-title">How We Work</h2>
            <div className="divider" style={{ margin: "0 auto" }}></div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: "2rem" }}>
            {[
              { icon: "🔍", title: "Thorough Inspection First", desc: "We never apply treatment blindly. Every job starts with a detailed property inspection to understand the extent and type of infestation before recommending the right solution." },
              { icon: "🌿", title: "Eco-Friendly Approach", desc: "We implement Integrated Pest Management (IPM) — combining biological, mechanical, and carefully chosen chemical controls to minimize environmental impact." },
              { icon: "🛡️", title: "Guaranteed Results", desc: "We stand behind our work. If pests return within our guarantee period, we come back at no additional cost. Our goal is lasting results, not repeat visits for profit." },
              { icon: "📝", title: "Transparent Pricing", desc: "You get a written quote before any treatment begins. No surprises, no hidden charges. We explain exactly what we're doing and why." },
              { icon: "👨‍🔬", title: "Certified Technicians", desc: "Every technician on our team is trained, certified, and operates under Kenya's Pest Control Products Board regulations. Your family's safety is never compromised." },
              { icon: "🔄", title: "Long-Term Prevention", desc: "Our service doesn't end when the treatment does. We provide guidance on sanitation, sealing, and maintenance practices to ensure long-term prevention." },
            ].map((v) => (
              <div key={v.title} style={{ background: "white", borderRadius: "var(--radius-lg)", padding: "1.75rem", boxShadow: "var(--shadow-sm)" }}>
                <div className="icon-circle" style={{ marginBottom: "1.25rem", fontSize: "1.5rem" }}>{v.icon}</div>
                <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-800)", marginBottom: "0.75rem" }}>{v.title}</h3>
                <p style={{ fontSize: "0.875rem", color: "var(--gray-600)", lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section className="section">
        <div className="container" style={{ maxWidth: 800, textAlign: "center" }}>
          <span className="section-label">Legal & Environmental Compliance</span>
          <h2 className="section-title">We Follow the Rules — Because Your Safety Depends on It</h2>
          <div className="divider" style={{ margin: "0 auto 1.5rem" }}></div>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            Kenya has strict regulations governing pesticide use, handling, and disposal. We follow these regulations completely — not just because we have to, but because we understand the risks of improper pesticide application to people, pets, and the environment.
          </p>
          <p style={{ color: "var(--gray-600)", lineHeight: 1.8, marginBottom: "2rem" }}>
            Our pesticide disposal practices follow Kenyan Environmental Regulations and National Environmental Management Authority (NEMA) guidelines. We use only products registered with the Pest Control Products Board and apply them only as labelled.
          </p>
          <Link href="/contact" className="btn btn-green btn-lg">Contact Our Expert Team</Link>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--green-800)", padding: "3.5rem 0" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "1.75rem", fontWeight: 800, color: "white", marginBottom: "0.5rem" }}>Need Termite or Pest Control Services?</h2>
            <p style={{ color: "rgba(255,255,255,0.8)" }}>Reach us at 0710907628 for immediate support or email sales@pestraid.co.ke for a quote.</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Call Now</a>
            <Link href="/services" className="btn btn-secondary">View Services</Link>
          </div>
        </div>
      </section>
    </>
  );
}
