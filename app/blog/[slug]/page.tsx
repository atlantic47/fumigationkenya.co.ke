import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { getBlogPost, getBlogSlugs } from "../../_lib/blogData";

export async function generateStaticParams() {
  const slugs = getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);
  if (!post) {
    return { title: "Post Not Found" };
  }
  return {
    title: `${post.title} | Pestraid Kenya`,
    description: post.excerpt,
    alternates: { canonical: `https://fumigationkenya.co.ke/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const resolvedParams = await params;
  const post = getBlogPost(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  // Generate Article Schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: {
      "@type": "Organization",
      name: "Pestraid Kenya",
      url: "https://fumigationkenya.co.ke"
    },
    publisher: {
      "@type": "Organization",
      name: "Pestraid Kenya",
    },
    datePublished: post.date,
    dateModified: post.date,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section style={{ background: "var(--green-900)", padding: "4rem 0 3rem" }}>
        <div className="container">
          <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
            <span className="badge badge-yellow" style={{ marginBottom: "1rem" }}>{post.category}</span>
            <h1 style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem,4vw,2.5rem)", fontWeight: 800, color: "white", lineHeight: 1.25, marginBottom: "1.25rem" }}>
              {post.title}
            </h1>
            <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", color: "rgba(255,255,255,0.7)", fontSize: "0.9rem" }}>
              <span>📅 Published: {post.date}</span>
              <span>⏱ {post.readTime}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 300px", gap: "4rem" }}>
          <article className="prose blog-content" dangerouslySetInnerHTML={{ __html: post.content }} style={{ fontSize: "1.0625rem", lineHeight: 1.8 }} />
          
          <aside style={{ display: "flex", flexDirection: "column", gap: "2rem", position: "sticky", top: "100px", alignSelf: "start" }}>
            <div style={{ background: "var(--green-50)", padding: "1.5rem", borderRadius: "var(--radius-lg)", border: "1px solid var(--green-100)" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--green-900)", marginBottom: "1rem" }}>Need Professional Help?</h3>
              <p style={{ fontSize: "0.875rem", color: "var(--gray-600)", marginBottom: "1.25rem" }}>Our specialists are ready to inspect your property and provide a targeted pest control solution.</p>
              <a href="tel:+254710907628" className="btn btn-primary" style={{ width: "100%", textAlign: "center", marginBottom: "0.5rem" }}>📞 Call 0710 907 628</a>
              <Link href="/contact" className="btn btn-outline-green" style={{ width: "100%", textAlign: "center" }}>Request Quote</Link>
            </div>

            <div style={{ padding: "1.5rem", border: "1px solid var(--gray-200)", borderRadius: "var(--radius-lg)" }}>
              <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--gray-800)", marginBottom: "1rem" }}>Our Core Services</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <li><Link href="/services/termite-control-kenya" style={{ color: "var(--green-700)", fontSize: "0.875rem" }}>→ Termite Control</Link></li>
                <li><Link href="/services/bed-bug-treatment-kenya" style={{ color: "var(--green-700)", fontSize: "0.875rem" }}>→ Bed Bug Treatment</Link></li>
                <li><Link href="/services/cockroach-control-kenya" style={{ color: "var(--green-700)", fontSize: "0.875rem" }}>→ Cockroach Control</Link></li>
                <li><Link href="/services/rodent-control-kenya" style={{ color: "var(--green-700)", fontSize: "0.875rem" }}>→ Rodent Control</Link></li>
                <li><Link href="/services/general-fumigation-kenya" style={{ color: "var(--green-700)", fontSize: "0.875rem" }}>→ General Fumigation</Link></li>
              </ul>
            </div>
            
            <Link href="/blog" style={{ color: "var(--green-600)", fontWeight: 600, fontSize: "0.9rem", display: "inline-block" }}>
              ← Back to All Articles
            </Link>
          </aside>
        </div>
      </section>

      {/* Global CSS for markdown content styling */}
      <style dangerouslySetInnerHTML={{ __html: `
        .blog-content h2 { font-family: var(--font-heading); font-size: 1.75rem; font-weight: 700; color: var(--green-900); margin-top: 2.5rem; margin-bottom: 1rem; }
        .blog-content h3 { font-family: var(--font-heading); font-size: 1.35rem; font-weight: 600; color: var(--green-800); margin-top: 1.75rem; margin-bottom: 0.75rem; }
        .blog-content p { color: var(--gray-700); margin-bottom: 1.25rem; }
        .blog-content ul { padding-left: 1.5rem; margin-bottom: 1.5rem; }
        .blog-content li { color: var(--gray-700); margin-bottom: 0.5rem; }
        .blog-content a { color: var(--green-600); text-decoration: underline; font-weight: 500; }
        .blog-content a:hover { color: var(--green-800); }
        .blog-content table { width: 100%; border-collapse: collapse; margin: 2rem 0; }
        .blog-content th { background: var(--green-50); color: var(--green-900); font-weight: 600; text-align: left; padding: 0.75rem 1rem; border: 1px solid var(--gray-200); }
        .blog-content td { padding: 0.75rem 1rem; border: 1px solid var(--gray-200); color: var(--gray-700); }
        @media (max-width: 900px) {
          .section .container { grid-template-columns: 1fr !important; }
          aside { position: static !important; }
        }
      `}} />
    </>
  );
}
