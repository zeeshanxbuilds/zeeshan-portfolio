import type { NavItem, SocialLink } from "@/types/social";

export const siteConfig = {
  name: "Muhammad Zeeshan",
  fullName: "Muhammad Zeeshan",
  handle: "zeeshanxbuilds",
  title: "Muhammad Zeeshan | Flutter Developer & CS Student",
  description: "Muhammad Zeeshan is a Flutter developer and Computer Science student in Lahore, Pakistan, building mobile apps with Dart and Firebase and expanding into web development.",
  url: "https://zeeshanxbuilds.vercel.app",
  ogImage: "/og-image.png",
  email: "zeeshanxbuilds@gmail.com",
  jobTitle: "Flutter Developer",
  location: "Lahore, Pakistan",
  socialProfiles: {
    github: "https://github.com/zeeshanxbuilds",
    linkedin: "https://www.linkedin.com/in/zeeshanxbuilds2/",
    x: "https://x.com/zeeshanxbuilds",
  },
};

export const navItems: NavItem[] = [
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/#contact" },
];

export const socialLinks: SocialLink[] = [
  { name: "GitHub", url: siteConfig.socialProfiles.github },
  { name: "LinkedIn", url: siteConfig.socialProfiles.linkedin },
  { name: "X", url: siteConfig.socialProfiles.x },
  { name: "CV", url: "/MuhammadZeeshan_Resume.pdf" },
];
