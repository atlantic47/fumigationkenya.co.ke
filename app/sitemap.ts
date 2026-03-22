import { MetadataRoute } from "next";
import { services, serviceAreas } from "./_lib/data";
import { getBlogSlugs } from "./_lib/blogData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://fumigationkenya.co.ke";

  // Core pages
  const coreRoutes = ["", "/about", "/services", "/service-areas", "/contact", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.9,
  }));

  // Services
  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: service.slug === "termite-control-kenya" ? 0.95 : 0.8,
  }));

  // Service Areas
  const areaRoutes = serviceAreas
    .filter((area) => area.slug)
    .map((area) => ({
      url: `${baseUrl}/service-areas/${area.slug}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    }));

  // Blog posts
  const blogRoutes = getBlogSlugs().map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...coreRoutes, ...serviceRoutes, ...areaRoutes, ...blogRoutes];
}
