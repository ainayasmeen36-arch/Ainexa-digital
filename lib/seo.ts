import type { Metadata } from "next";
import { COMPANY, IMAGES } from "@/lib/data";

/** Live domain used in canonical tags, sitemap, and Open Graph. */
export const SITE_URL = COMPANY.website;

export const DEFAULT_DESCRIPTION =
  "AINEXA Digital Solutions builds custom software, Next.js websites, AI bots, WhatsApp automation, mobile apps, SEO, and cloud platforms. Founded by Aina Yasmeen.";

export function absoluteUrl(path: string) {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return new URL(clean, SITE_URL).toString();
}

export function pageMeta({
  title,
  description,
  path,
  index = true,
  absoluteTitle = false,
}: {
  title: string;
  description: string;
  path: string;
  index?: boolean;
  absoluteTitle?: boolean;
}): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title.includes(COMPANY.shortName) ? title : `${title} | ${COMPANY.shortName}`;

  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    alternates: { canonical: url },
    robots: index ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: COMPANY.name,
      type: "website",
      locale: "en_GB",
      images: [
        {
          url: IMAGES.hero,
          width: 1600,
          height: 1066,
          alt: `${COMPANY.name} — ${COMPANY.tagline}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [IMAGES.hero],
    },
  };
}
