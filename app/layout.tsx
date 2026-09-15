import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteChrome } from "@/components/site-chrome";
import { SeoJsonLd } from "@/components/seo-jsonld";
import { COMPANY, IMAGES } from "@/lib/data";
import { DEFAULT_DESCRIPTION, SITE_URL } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description: DEFAULT_DESCRIPTION,
  keywords: [
    "AINEXA Digital Solutions",
    "AINEXA",
    "Aina Yasmeen",
    "custom software development",
    "Next.js website development",
    "MERN stack",
    "AI chatbots",
    "WhatsApp automation",
    "digital marketing SEO",
    "UI UX design",
    "mobile app development",
    "cloud solutions",
    "ainexia.com",
  ],
  authors: [{ name: COMPANY.owner }],
  creator: COMPANY.owner,
  publisher: COMPANY.name,
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: COMPANY.name,
    description: DEFAULT_DESCRIPTION,
    type: "website",
    locale: "en_GB",
    url: SITE_URL,
    siteName: COMPANY.name,
    images: [
      {
        url: IMAGES.hero,
        width: 2000,
        height: 1333,
        alt: `${COMPANY.name} — ${COMPANY.tagline}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: COMPANY.name,
    description: DEFAULT_DESCRIPTION,
    images: [IMAGES.hero],
  },
  robots: { index: true, follow: true },
  category: "technology",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <SeoJsonLd />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
