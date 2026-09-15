import { COMPANY, SERVICES } from "@/lib/data";
import { SITE_URL } from "@/lib/seo";

/** Google-readable business markup. Rendered in the static HTML export. */
export function SeoJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#studio`,
        name: COMPANY.name,
        url: SITE_URL,
        email: COMPANY.email,
        telephone: COMPANY.phone,
        description: COMPANY.mission,
        slogan: COMPANY.tagline,
        founder: {
          "@type": "Person",
          name: COMPANY.owner,
          jobTitle: COMPANY.ownerTitle,
        },
        areaServed: ["GB", "US", "Europe", "GCC"],
        sameAs: [SITE_URL],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Digital services",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              url: `${SITE_URL}/services/#${service.slug}`,
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: COMPANY.name,
        description: COMPANY.tagline,
        publisher: { "@id": `${SITE_URL}/#studio` },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
