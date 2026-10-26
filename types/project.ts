export interface Project {
  slug: string;
  title: string;
  subtitle: string;
  logo: string;
  description: string;
  technologies: string[];
  features: string[];
  githubUrl: string;
  category?: string;
  command?: string;
  commandInstruction?: string;
  featured?: boolean;
}
