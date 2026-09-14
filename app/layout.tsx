import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteChrome } from "@/components/site-chrome";
import { COMPANY } from "@/lib/data";
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
  metadataBase: new URL("https://ainexa.digital"),
  title: {
    default: `${COMPANY.name} | ${COMPANY.tagline}`,
    template: `%s | ${COMPANY.shortName}`,
  },
  description:
    "AINEXA Digital Solutions builds custom software, Next.js websites, AI bots, mobile apps, and cloud platforms. Founded by Aina Yasmeen.",
  keywords: [
    "AINEXA Digital Solutions",
    "Aina Yasmeen",
    "custom software",
    "Next.js development",
    "AI chatbots",
    "WhatsApp bots",
    "digital marketing SEO",
    "UI UX design",
    "mobile app development",
    "cloud solutions",
  ],
  openGraph: {
    title: COMPANY.name,
    description: COMPANY.tagline,
    type: "website",
    locale: "en_US",
    siteName: COMPANY.name,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${display.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <SiteChrome>{children}</SiteChrome>
        </ThemeProvider>
      </body>
    </html>
  );
}
