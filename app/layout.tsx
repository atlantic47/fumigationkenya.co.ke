import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: {
    default: "Pestraid Kenya | Termite Control & Pest Management in Kenya",
    template: "%s | Pestraid Kenya",
  },
  description: "Kenya's trusted termite control and pest management specialists. Expert fumigation, bed bug treatment, cockroach control, and rodent elimination across Kenya. Call 0710 907 628.",
  keywords: ["termite control Kenya", "pest control Kenya", "fumigation Kenya", "bed bug treatment Kenya", "cockroach control Nairobi", "rodent control Kenya"],
  authors: [{ name: "Pestraid Kenya" }],
  creator: "Pestraid Kenya",
  metadataBase: new URL("https://fumigationkenya.co.ke"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_KE",
    url: "https://fumigationkenya.co.ke",
    siteName: "Pestraid Kenya",
    title: "Pestraid Kenya | Termite Control & Pest Management in Kenya",
    description: "Kenya's trusted termite control and pest management specialists. Expert fumigation services across Kenya.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pestraid Kenya | Termite Control & Pest Management",
    description: "Kenya's trusted termite control specialists. Call 0710 907 628.",
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Pestraid Kenya",
  description: "Professional termite control and pest management services across Kenya",
  url: "https://fumigationkenya.co.ke",
  telephone: "+254710907628",
  email: "info@fumigationkenya.co.ke",
  address: {
    "@type": "PostalAddress",
    addressCountry: "KE",
    addressLocality: "Nairobi",
  },
  areaServed: "Kenya",
  serviceType: ["Termite Control", "Bed Bug Treatment", "Cockroach Control", "Rodent Control", "Fumigation"],
  priceRange: "KSh 3,000 - KSh 80,000",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-KE" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <Header />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
