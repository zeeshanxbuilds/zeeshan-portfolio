import type { Metadata } from "next";
import { Manrope, Hanken_Grotesk } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { siteConfig } from "@/constants/site";
import { JsonLd, getWebSiteSchema, getPersonSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const bodyFont = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const headingFont = Manrope({
  variable: "--font-space-grotesk",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.title, template: `%s | ${siteConfig.fullName}` },
  description: siteConfig.description,
  authors: [{ name: siteConfig.fullName, url: siteConfig.url }],
  creator: siteConfig.fullName,
  icons: { icon: { url: "/favicon.png", type: "image/png" }, apple: "/favicon.png" },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    siteName: siteConfig.title,
    title: siteConfig.title,
    description: siteConfig.description,
    images: [{
      url: siteConfig.ogImage, width: 1200, height: 630,
      alt: siteConfig.title, type: "image/png",
    }],
  },
  twitter: {
    card: "summary_large_image",
    creator: "@zeeshanxbuilds",
    site: "@zeeshanxbuilds",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${bodyFont.variable} ${headingFont.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <a href="#main-content" className="skip-link">Skip to content</a>
          <Navbar />
          <main id="main-content" className="min-h-[calc(100dvh-3.5rem)]">{children}</main>
          <Footer />
        </ThemeProvider>
        <JsonLd data={getWebSiteSchema()} />
        <JsonLd data={getPersonSchema()} />
      </body>
    </html>
  );
}
