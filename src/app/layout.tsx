import type { Metadata, Viewport } from "next";
import "@fontsource-variable/space-grotesk";
import "@fontsource/pixelify-sans/latin-400.css";
import "@fontsource/pixelify-sans/latin-500.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { business } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: {
    default: "Codeylon — Websites with character",
    template: "%s | Codeylon",
  },
  description: business.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Codeylon",
    url: "/",
    title: "Codeylon — Websites with character",
    description: business.description,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Codeylon. Good business. Great website.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Codeylon — Websites with character",
    description: business.description,
    images: ["/og.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  robots: { index: true, follow: true },
};
export const viewport: Viewport = { themeColor: "#091A44" };

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body id="top">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: business.name,
              url: business.url,
              logo: `${business.url}/brand/logo.svg`,
              sameAs: [business.instagram],
              description: business.description,
            }),
          }}
        />
      </body>
    </html>
  );
}
