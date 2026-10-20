import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectGrid } from "@/components/core/projects/ProjectGrid";
import { projects } from "@/constants/projects";

export function FeaturedProjectsSection() {
  const featured = projects.filter((p) => p.featured).slice(0, 4);

  return (
    <section className="py-16">
      <SectionHeader label="Work" title="Featured Projects" />
      <ProjectGrid projects={featured} />
      <div
        className="mt-8 text-center"
      >
        <Link
          href="/projects"
          className="group inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors duration-150 hover:text-foreground"
        >
          View all projects
          <span
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
      </div>
    </section>
  );
}
