import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CodeBlock } from "@/components/shared/CodeBlock";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";
import { JsonLd, getBreadcrumbSchema, getProjectSchema } from "@/components/seo/JsonLd";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `${siteConfig.url}/projects/${slug}` },
    openGraph: {
      title: `${project.title} | ${siteConfig.fullName}`,
      description: project.description,
      url: `${siteConfig.url}/projects/${slug}`,
      images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: siteConfig.title }],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((entry) => entry.slug === slug);
  if (!project) notFound();
  return (
    <>
      <Container className="pb-24 pt-16">
        <Link href="/projects" className="text-xs text-muted-foreground hover:text-foreground">← All Projects</Link>
        <div className="mb-4 mt-12">
          <span className="inline-flex rounded-full bg-muted px-2.5 py-1 text-[11px] text-muted-foreground">{project.category ?? "Mobile Project"}</span>
        </div>
        <h1 className="font-serif text-3xl font-semibold tracking-tight">{project.title}</h1>
        <p className="mt-5 text-sm leading-7 text-muted-foreground">{project.description}</p>
        <div className="mt-8 flex flex-wrap gap-3 text-[13px] font-medium">
          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border px-3.5 py-2 transition-colors hover:bg-muted">
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="currentColor"><path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" /></svg>
            View GitHub Profile
          </a>
        </div>
        {project.command && (
          <section className="mt-12">
            <h2 className="font-serif text-xl font-semibold">Quick Start</h2>
            {project.commandInstruction && (
              <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.commandInstruction}</p>
            )}
            <div className="mt-4">
              <CodeBlock code={project.command} />
            </div>
          </section>
        )}
        <div className="mt-20 grid grid-cols-1 gap-10 md:mt-24 md:grid-cols-[minmax(0,1fr)_220px] md:gap-12">
          <section>
            <h2 className="font-serif text-xl font-semibold">Key Features</h2>
            <ul className="mt-7 space-y-5 text-sm leading-7 text-muted-foreground">
              {project.features.map((feature) => (
                <li key={feature} className="flex gap-4">
                  <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full border border-border bg-muted">
                    <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 12 4 4 8-8" /></svg>
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h2 className="font-serif text-xl font-semibold">Tech Stack</h2>
            <div className="mt-7 flex flex-wrap gap-2">
              {project.technologies.map((technology) => <Badge key={technology}>{technology}</Badge>)}
            </div>
          </section>
        </div>
      </Container>
      <JsonLd data={getProjectSchema(project)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", url: siteConfig.url },
        { name: "Projects", url: `${siteConfig.url}/projects` },
        { name: project.title, url: `${siteConfig.url}/projects/${project.slug}` },
      ])} />
    </>
  );
}
