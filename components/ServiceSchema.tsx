import type { Service } from "@/lib/data";

interface ServiceSchemaProps {
  service: Service;
}

export default function ServiceSchema({ service }: ServiceSchemaProps) {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  );
}
