import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "../_lib/blogData";

export const metadata: Metadata = {
  title: "Pest Control Blog & Tips | Pestraid Kenya",
  description: "Expert advice on termite prevention, pest control costs, and fumigation tips for Kenyan homeowners and businesses.",
  alternates: { canonical: "https://fumigationkenya.co.ke/blog" },
};

export default function BlogIndexPage() {
  return (
    <>
      <section className="hero-bg" style={{ padding: "4rem 0 3rem" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>Expert Advice</span>
          <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "white", marginBottom: "1rem" }}>
            Pest Control & Prevention Blog
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "1.0625rem", maxWidth: 560, margin: "0 auto" }}>
            Learn how to identify, prevent, and treat pest infestations in Kenya
          </p>
        </div>
      </section>

      <section className="section bg-green-light" style={{ minHeight: "60vh" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
            {blogPosts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div className="card" style={{ height: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ background: "var(--green-700)", padding: "2.5rem 1.5rem 1.5rem", position: "relative" }}>
                    <span className="badge badge-yellow" style={{ position: "absolute", top: "1rem", left: "1rem", fontSize: "0.7rem" }}>{post.category}</span>
                    <div style={{ fontSize: "3rem" }}>
                      {post.category.includes("Termite") ? "🐜" : 
                       post.category.includes("Bed Bug") ? "🛏️" : 
                       post.category.includes("Cockroach") ? "🪳" : 
                       post.category.includes("Rodent") ? "🐀" : "🌿"}
                    </div>
                  </div>
                  <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
                    <div style={{ display: "flex", gap: "1rem", marginBottom: "0.75rem", fontSize: "0.78rem", color: "var(--gray-400)" }}>
                      <span>📅 {post.date}</span>
                      <span>⏱ {post.readTime}</span>
                    </div>
                    <h2 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--gray-900)", lineHeight: 1.4, marginBottom: "0.75rem" }}>{post.title}</h2>
                    <p style={{ fontSize: "0.85rem", color: "var(--gray-500)", lineHeight: 1.6, marginBottom: "1.25rem", flex: 1 }}>{post.excerpt}</p>
                    <span style={{ color: "var(--green-600)", fontWeight: 600, fontSize: "0.85rem", marginTop: "auto" }}>Read Full Guide →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
