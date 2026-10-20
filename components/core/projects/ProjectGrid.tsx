import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/types/project";

export function ProjectGrid({ projects }: { projects: Project[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 py-6 sm:grid-cols-2">
      {projects.map((project) => (
        <Link
          href={`/projects/${project.slug}`}
          key={project.slug}
          className="group flex items-center gap-4 rounded-xl bg-[#c1bebe2d] p-3 text-card-foreground transition-colors hover:bg-[#c1bebe3d] dark:bg-[#a8a29e12] dark:hover:bg-[#a8a29e1f]"
        >
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[9px] bg-[#c1bebe2d] dark:bg-[#a8a29e12]">
            <Image src={project.logo} width={28} height={28} alt="" className="size-7 object-contain" />
          </div>
          <div className="min-w-0">
            <h3 className="text-sm font-semibold transition-colors group-hover:text-accent">{project.title}</h3>
            <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{project.subtitle}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
