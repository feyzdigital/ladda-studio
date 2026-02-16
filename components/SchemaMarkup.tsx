import { siteConfig } from "@/lib/data";

export default function SchemaMarkup() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "BeautySalon"],
    name: siteConfig.name,
    description: siteConfig.slogan,
    url: "https://ladda.studio",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: siteConfig.address,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "20:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "18:00",
      },
    ],
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1200&h=630&fit=crop",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
    />
  );
}
