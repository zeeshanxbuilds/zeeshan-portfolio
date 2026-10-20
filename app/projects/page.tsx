import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ProjectGrid } from "@/components/core/projects/ProjectGrid";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema, getProjectsCollectionSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Projects",
  description: "Explore Muhammad Zeeshan’s Flutter projects: an e-commerce bookstore app and a cloud notes manager built with Dart, Firebase, and Cloudinary.",
  alternates: { canonical: `${siteConfig.url}/projects` },
  openGraph: {
    title: `Projects | ${siteConfig.fullName}`,
    description: "Selected Flutter applications and mobile development projects.",
    url: `${siteConfig.url}/projects`,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
  },
};

export default function ProjectsPage() {
  return (
    <>
      <Container className="py-16">
        <p className="mb-2 text-[11px] uppercase tracking-[0.12em] text-muted-foreground">Work</p>
        <h1 className="font-serif text-3xl font-semibold">Projects</h1>
        <p className="mt-5 text-sm leading-relaxed text-muted-foreground">Mobile applications I&apos;ve built with Flutter and Firebase, from a real-time bookstore to cloud-synced notes.</p>
        <ProjectGrid projects={projects} />
      </Container>
      <JsonLd data={getProjectsCollectionSchema()} />
      <JsonLd data={getBreadcrumbSchema([{ name: "Home", url: siteConfig.url }, { name: "Projects", url: `${siteConfig.url}/projects` }])} />
    </>
  );
}
