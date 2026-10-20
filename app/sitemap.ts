import type { MetadataRoute } from "next";
import { projects } from "@/constants/projects";
import { siteConfig } from "@/constants/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteConfig.url },
    { url: `${siteConfig.url}/projects` },
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}` })),
  ];
}
