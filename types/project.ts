export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  featured?: boolean;
}
