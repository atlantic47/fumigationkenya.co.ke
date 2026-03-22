import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | FumigationKenya - Get a Free Quote",
  description: "Contact FumigationKenya for professional termite and pest control services in Kenya. Call 0710 907 628 for a free property inspection and quote.",
  alternates: { canonical: "https://fumigationkenya.co.ke/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>We're Here to Help</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Contact FumigationKenya
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto" }}>
            Request a free inspection or get expert advice on your pest problem today.
          </p>
        </div>
      </section>

      <section className="section bg-green-light">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem" }}>
          {/* Contact Info */}
          <div>
            <h2 style={{ fontFamily: "var(--font-heading)", fontSize: "2rem", fontWeight: 800, color: "var(--green-900)", marginBottom: "1.5rem" }}>Get In Touch</h2>
            <p style={{ color: "var(--gray-600)", lineHeight: 1.75, marginBottom: "2.5rem" }}>
              Have a question about termites, bed bugs, cockroaches, or need an urgent fumigation service? Our team is available 24/7 to assist homes and businesses across Kenya.
            </p>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "3rem" }}>
              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="icon-circle" style={{ width: 50, height: 50, background: "white", color: "var(--green-700)", fontSize: "1.5rem", boxShadow: "var(--shadow-sm)" }}>📞</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: "0.25rem" }}>Call Us (24/7 Support)</div>
                  <a href="tel:+254710907628" style={{ color: "var(--gray-600)", fontSize: "1.1rem" }}>0710 907 628</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="icon-circle" style={{ width: 50, height: 50, background: "white", color: "#25d366", fontSize: "1.5rem", boxShadow: "var(--shadow-sm)" }}>💬</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: "0.25rem" }}>WhatsApp</div>
                  <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" style={{ color: "var(--gray-600)", fontSize: "1.1rem" }}>Message on WhatsApp</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="icon-circle" style={{ width: 50, height: 50, background: "white", color: "var(--green-700)", fontSize: "1.5rem", boxShadow: "var(--shadow-sm)" }}>✉️</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: "0.25rem" }}>Email</div>
                  <a href="mailto:sales@pestraid.co.ke" style={{ color: "var(--gray-600)" }}>sales@pestraid.co.ke</a>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="icon-circle" style={{ width: 50, height: 50, background: "white", color: "var(--green-700)", fontSize: "1.5rem", boxShadow: "var(--shadow-sm)" }}>📍</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: "0.25rem" }}>Head Office</div>
                  <div style={{ color: "var(--gray-600)" }}>Argwings Kodhek Road, Rose Ave, Nairobi</div>
                </div>
              </div>

              <div style={{ display: "flex", gap: "1rem" }}>
                <div className="icon-circle" style={{ width: 50, height: 50, background: "white", color: "var(--green-700)", fontSize: "1.5rem", boxShadow: "var(--shadow-sm)" }}>🌍</div>
                <div>
                  <div style={{ fontWeight: 700, color: "var(--green-900)", marginBottom: "0.25rem" }}>Coverage</div>
                  <div style={{ color: "var(--gray-600)", lineHeight: 1.6 }}>Serving Kitisuru Estate, Tatu City, Nairobi Metropolitan Area, Muthaiga, Highridge Village, Kileleshwa Estate, Nairobi West, Parklands, Lavington, Westlands, Eastleigh, Embakasi, South C, Kilimani, South B, Karen, Runda, Syokimau, and major towns across Kenya.</div>
                </div>
              </div>
            </div>

            <div style={{ background: "var(--green-50)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--green-200)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--green-900)", marginBottom: "0.5rem" }}>Looking for commercial proposals?</h3>
              <p style={{ fontSize: "0.85rem", color: "var(--gray-600)" }}>For large scale industrial pest control, agricultural properties, or national retail chains, our partner <a href="https://pestraid.co.ke/contact-us-for-free-fumigation-quotation/" target="_blank" rel="noopener noreferrer" className="backlink">PestrAid Kenya</a> also provides comprehensive corporate quotations.</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "white", padding: "3rem", borderRadius: "var(--radius-xl)", boxShadow: "var(--shadow-lg)" }}>
            <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "var(--gray-900)", marginBottom: "1.5rem" }}>Request a Free Quote</h3>
            {/* Note: In a real app, this form would connect to a server action or API route. Since this is static/frontend mainly, it acts as a UI mock */}
            <form style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label htmlFor="firstName" className="form-label">First Name *</label>
                  <input type="text" id="firstName" className="form-control" placeholder="John" required />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">Last Name *</label>
                  <input type="text" id="lastName" className="form-control" placeholder="Doe" required />
                </div>
              </div>
              
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.25rem" }}>
                <div>
                  <label htmlFor="phone" className="form-label">Phone Number *</label>
                  <input type="tel" id="phone" className="form-control" placeholder="07XX XXX XXX" required />
                </div>
                <div>
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input type="email" id="email" className="form-control" placeholder="email@example.com" />
                </div>
              </div>

              <div>
                <label htmlFor="service" className="form-label">Service Needed *</label>
                <select id="service" className="form-control" required>
                  <option value="">-- Select a Service --</option>
                  <option value="Termite Control">Termite Control</option>
                  <option value="Bed Bug Treatment">Bed Bug Treatment</option>
                  <option value="Cockroach Control">Cockroach Control</option>
                  <option value="Rodent Control">Rodent Control</option>
                  <option value="General Fumigation">General Fumigation</option>
                  <option value="Other">Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label htmlFor="location" className="form-label">City / County *</label>
                <input type="text" id="location" className="form-control" placeholder="e.g. Nairobi" required />
              </div>

              <div>
                <label htmlFor="message" className="form-label">Describe Your Pest Problem</label>
                <textarea id="message" className="form-control" rows={4} placeholder="Please tell us a bit about what you're seeing..."></textarea>
              </div>

              <button type="submit" className="btn btn-green btn-lg" style={{ width: "100%", marginTop: "0.5rem" }}>
                Send Request
              </button>
              
              <p style={{ textAlign: "center", fontSize: "0.75rem", color: "var(--gray-400)", marginTop: "0.5rem" }}>Your information is safe. We will only use it to contact you regarding your inquiry.</p>
            </form>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:900px){.bg-green-light .container{grid-template-columns:1fr !important;}}`}</style>
    </>
  );
}
