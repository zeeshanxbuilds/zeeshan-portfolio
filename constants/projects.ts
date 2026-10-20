import type { Project } from "@/types/project";
import { siteConfig } from "@/constants/site";

export const projects: Project[] = [
  {
    slug: "ecommerce-bookstore-app",
    logo: "/assets/projects/bookstore.svg",
    title: "E-Commerce Bookstore App",
    subtitle: "A real-time mobile bookstore",
    description: "A Flutter bookstore application with Firebase authentication and real-time inventory updates, built to keep cloud data in sync across devices.",
    technologies: ["Flutter", "Dart", "GetX", "Firebase", "REST APIs", "Git"],
    features: [
      "Firebase authentication for signing in to the application.",
      "Real-time inventory updates without manual refreshes.",
      "GetX state management with Firebase-backed data synchronization.",
      "Cross-device access to synchronized cloud data.",
    ],
    githubUrl: siteConfig.socialProfiles.github,
    featured: true,
  },
  {
    slug: "cloud-notes-manager",
    logo: "/assets/projects/cloud-notes.svg",
    title: "Cloud Notes Manager",
    subtitle: "Notes that stay in sync",
    description: "A Flutter productivity app with cross-device synchronization and Cloudinary image hosting, designed around a simple, minimal interface.",
    technologies: ["Flutter", "Dart", "Firebase", "Cloudinary", "Git"],
    features: [
      "Cloud-backed notes synchronized across devices.",
      "Cloudinary API integration for image hosting.",
      "A minimal interface that keeps the note-taking workflow simple.",
      "Feature development organized through Git branches.",
    ],
    githubUrl: siteConfig.socialProfiles.github,
    featured: true,
  },
];
