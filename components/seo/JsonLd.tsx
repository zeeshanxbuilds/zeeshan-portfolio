import { siteConfig } from "@/constants/site";
import type { Project } from "@/types/project";

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}

export function getPersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#person`,
    name: siteConfig.fullName,
    alternateName: siteConfig.handle,
    url: siteConfig.url,
    email: siteConfig.email,
    jobTitle: siteConfig.jobTitle,
    description: siteConfig.description,
    address: { "@type": "PostalAddress", addressLocality: "Lahore", addressCountry: "PK" },
    image: `${siteConfig.url}/zeeshan-avatar.png`,
    knowsAbout: ["Flutter", "Dart", "Firebase", "GetX", "React", "Mobile Application Development"],
    sameAs: Object.values(siteConfig.socialProfiles),
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.title,
    url: siteConfig.url,
    author: { "@id": `${siteConfig.url}/#person` },
    inLanguage: "en",
  };
}

export function getProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    url: siteConfig.url,
    name: siteConfig.title,
    mainEntity: { "@id": `${siteConfig.url}/#person` },
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem", position: index + 1, name: item.name, item: item.url,
    })),
  };
}

export function getProjectSchema(project: Project) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description,
    url: `${siteConfig.url}/projects/${project.slug}`,
    author: { "@id": `${siteConfig.url}/#person` },
    about: project.technologies,
  };
}

export function getProjectsCollectionSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `Projects | ${siteConfig.fullName}`,
    description: "Selected Flutter applications and mobile development projects.",
    url: `${siteConfig.url}/projects`,
    author: { "@id": `${siteConfig.url}/#person` },
  };
}
