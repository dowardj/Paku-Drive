import { siteConfig } from "@/config/site";

export function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Residence",
    name: siteConfig.title,
    description: siteConfig.description,
    address: {
      "@type": "PostalAddress",
      streetAddress: "203 Paku Drive",
      addressLocality: "Tairua",
      addressRegion: "Waikato",
      addressCountry: "NZ",
    },
    image: [new URL(siteConfig.ogImage, siteConfig.url).toString()],
    url: siteConfig.url,
    potentialAction: {
      "@type": "CommunicateAction",
      target: new URL("/contact", siteConfig.url).toString(),
      name: "Request Information",
    },
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
