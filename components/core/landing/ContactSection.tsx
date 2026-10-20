import { SectionHeader } from "@/components/shared/SectionHeader";
import { socialLinks, siteConfig } from "@/constants/site";
import type { SocialLink } from "@/types/social";
import type { ReactNode } from "react";

const icons: Record<SocialLink["name"], ReactNode> = {
  X: <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.24l-4.89-7.42L5.58 22H2.46l7.98-9.12L.8 2h6.4l4.42 6.74L18.9 2Zm-1.1 18h1.73L6.26 3.89H4.4L17.8 20Z" />,
  GitHub: <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.13.68-3.79-1.33-3.79-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.68.08-.68 1.13.08 1.73 1.16 1.73 1.16 1 1.72 2.64 1.22 3.28.93.1-.73.39-1.22.71-1.5-2.5-.29-5.13-1.25-5.13-5.57 0-1.23.44-2.23 1.16-3.02-.12-.28-.5-1.43.11-2.98 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.55.23 2.7.11 2.98.72.79 1.16 1.79 1.16 3.02 0 4.33-2.64 5.28-5.15 5.56.4.35.76 1.03.76 2.08v3.1c0 .3.2.65.77.54A11.25 11.25 0 0 0 12 .75Z" />,
  LinkedIn: <path d="M20.45 2H3.55C2.69 2 2 2.68 2 3.52v16.96c0 .84.69 1.52 1.55 1.52h16.9c.86 0 1.55-.68 1.55-1.52V3.52c0-.84-.69-1.52-1.55-1.52ZM7.93 18.75H4.98V9.2h2.95v9.55ZM6.45 7.9a1.71 1.71 0 1 1 0-3.42 1.71 1.71 0 0 1 0 3.42Zm12.3 10.85H15.8V14.1c0-1.1-.02-2.52-1.54-2.52-1.54 0-1.78 1.2-1.78 2.44v4.73H9.53V9.2h2.83v1.3h.04c.4-.75 1.36-1.54 2.8-1.54 2.99 0 3.55 1.97 3.55 4.53v5.26Z" />,
  CV: <><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-6-6Z" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" /><path d="M14 3v6h6M12 12v6m-3-3 3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" /></>,
};

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-20 py-16">
      <SectionHeader label="Contact" title="Get in Touch" />
      <p className="max-w-[48ch] text-sm leading-relaxed text-muted-foreground">
        Have a mobile app in mind or a project we could work on together? I&apos;m open to development opportunities and collaborations. Let&apos;s talk about what you&apos;re building.
      </p>
      <a href={`mailto:${siteConfig.email}`} className="mt-4 inline-block text-sm underline decoration-border underline-offset-4 hover:decoration-foreground">{siteConfig.email}</a>
      <div className="mt-6 flex w-fit max-w-full flex-wrap items-center gap-1 text-zinc-500 sm:gap-1.5 dark:text-zinc-400" role="group" aria-label="Social profiles and CV">
        {socialLinks.map((link) => (
          <a key={link.name} href={link.url}
            aria-label={link.name === "CV" ? `View ${siteConfig.fullName}'s CV (PDF, opens in a new tab)` : `${link.name} — ${siteConfig.fullName}`}
            title={link.name === "CV" ? "View CV (PDF)" : link.name}
            target="_blank" rel="noopener noreferrer"
            className="inline-flex size-10 shrink-0 items-center justify-center rounded-md transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring motion-reduce:transition-none"
          >
            <svg aria-hidden="true" viewBox="0 0 24 24" className="size-5" fill="currentColor">{icons[link.name]}</svg>
          </a>
        ))}
      </div>
    </section>
  );
}
