import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { serviceAreas } from "../../_lib/data";

export async function generateStaticParams() {
  return serviceAreas.filter((a) => a.slug).map((a) => ({ slug: a.slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const area = serviceAreas.find((a) => a.slug === resolvedParams.slug);
  
  if (!area) return { title: "Area Not Found" };

  return {
    title: `Pest Control Services in ${area.name} | Termite & Fumigation Specialists`,
    description: `Leading pest control and fumigation services in ${area.name}. Expert termite control, bed bug treatment, and rodent elimination. Free inspections.`,
    alternates: { canonical: `https://fumigationkenya.co.ke/service-areas/${area.slug}` },
  };
}

export default async function LocationPage({ params }: Props) {
  const resolvedParams = await params;
  const area = serviceAreas.find((a) => a.slug === resolvedParams.slug);

  if (!area) {
    notFound();
  }

  return (
    <>
      <section className="hero-bg" style={{ padding: "4.5rem 0 3.5rem" }}>
        <div className="container">
          <div style={{ maxWidth: 700 }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1.25rem" }}>Local Experts</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", lineHeight: 1.15, marginBottom: "1.25rem" }}>
              Professional Pest Control in {area.name}
            </h1>
            <p style={{ color: "rgba(255,255,255,0.88)", fontSize: "1.0625rem", lineHeight: 1.75, marginBottom: "2rem" }}>
              FumigationKenya provides rapid, reliable pest management services throughout {area.name} and surrounding areas. Protecting local homes and businesses with guaranteed results.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="tel:+254710907628" className="btn btn-primary btn-lg">📞 Contact {area.name} Team</a>
              <Link href="/contact" className="btn btn-secondary btn-lg">Book Free Inspection</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 340px", gap: "3rem" }}>
          <div className="prose">
            <h2>Pest Challenges in {area.name}</h2>
            <p>{area.name} faces unique pest challenges driven by its climate, urbanization, and housing types. Our local technicians are deeply familiar with the specific pests that affect this region, ensuring highly targeted and effective treatments.</p>
            
            <h2>Our Primary Services in {area.name}</h2>
            
            <h3>1. Termite Control ({area.name})</h3>
            <p>Subterranean termites cause massive property damage annually. We offer complete termite control including localized treatments, soil barriers, and baiting systems tailored to {area.name} properties. <Link href="/services/termite-control-kenya">Read more about our termite services</Link>.</p>
            
            <h3>2. Bed Bug Treatment</h3>
            <p>A common issue in urban residential areas and hospitality businesses. Our intensive treatment guarantees elimination of all life stages (eggs, nymphs, adults). <Link href="/services/bed-bug-treatment-kenya">Learn about our bed bug process</Link>.</p>

            <h3>3. Cockroach Control</h3>
            <p>For homes, apartments, and commercial kitchens across {area.name}, we deploy advanced gel baits and IGRs (Insect Growth Regulators) to wipe out persistent cockroach populations.</p>

            <h3>4. Rodent Extermination</h3>
            <p>Complete rat and mice control using trapping, exclusion, and secure baiting stations to protect health and property.</p>

            <h2>Why {area.name} Residents Choose Us</h2>
            <ul>
              <li><strong>Fast Local Response:</strong> Because our teams operate locally, we provide rapid response to pest emergencies.</li>
              <li><strong>Certified & Licensed:</strong> Fully compliant with Kenya's Pest Control Products Board requirements.</li>
              <li><strong>Environmentally Conscious:</strong> We use methods safe for families, pets, and the local {area.name} environment.</li>
              <li><strong>Free Property Inspections:</strong> We don't guess. We inspect first.</li>
            </ul>

            <p>For alternative local pest control quotes in {area.name}, you can also connect with our partners at{" "}
              <a href="https://pestraid.co.ke/" target="_blank" rel="noopener noreferrer" className="backlink">PestrAid Kenya</a>.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "sticky", top: "100px" }}>
            <div style={{ background: "var(--green-50)", borderRadius: "var(--radius-xl)", padding: "1.5rem", border: "1px solid var(--green-200)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--green-900)", marginBottom: "1rem" }}>Area Contact Details</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--gray-600)", marginBottom: "1rem" }}>We provide on-site services directly to your property in {area.name}.</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", fontSize: "0.9rem" }}>
                <a href="tel:+254710907628" style={{ color: "var(--green-700)", fontWeight: 600 }}>📞 0710 907 628</a>
                <a href="https://wa.me/254710907628" target="_blank" rel="noopener noreferrer" style={{ color: "#25d366", fontWeight: 600 }}>💬 WhatsApp Us</a>
                <a href="mailto:info@fumigationkenya.co.ke" style={{ color: "var(--gray-600)" }}>✉ info@fumigationkenya.co.ke</a>
              </div>
            </div>

            <div style={{ background: "white", borderRadius: "var(--radius-xl)", padding: "1.5rem", boxShadow: "var(--shadow)" }}>
              <h4 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--gray-800)", marginBottom: "1rem" }}>Other Areas Served</h4>
              {[
                { s: "nairobi", n: "Nairobi" },
                { s: "mombasa", n: "Mombasa" },
                { s: "kisumu", n: "Kisumu" },
                { s: "nakuru", n: "Nakuru" },
              ].filter(a => a.s !== area.slug).map((a) => (
                <Link key={a.s} href={`/service-areas/${a.s}`} style={{ display: "block", padding: "0.5rem 0", borderBottom: "1px solid var(--gray-100)", color: "var(--green-600)", fontSize: "0.82rem" }}>→ {a.n}</Link>
              ))}
              <Link href="/service-areas" style={{ display: "block", marginTop: "1rem", color: "var(--gray-500)", fontSize: "0.8rem", fontWeight: 600 }}>View All Areas →</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
