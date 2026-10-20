import { SectionHeader } from "@/components/shared/SectionHeader";
import { experiences } from "@/constants/profile";

export function ExperienceSection() {
  return (
    <section className="py-12">
      <SectionHeader label="Experience" title="Where I’ve Worked" />
      <div className="space-y-7 sm:space-y-8">
        {experiences.map((entry) => (
          <article key={`${entry.company}-${entry.role}`}>
            <div className="flex items-center gap-3">
              <div aria-hidden="true" className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-border text-[11px] font-semibold text-muted-foreground">{entry.initials}</div>
              <h3 className="text-lg font-semibold">{entry.company}</h3>
            </div>
            <div className="ml-3 mt-4 border-l border-border pb-5 pl-5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#c1bebe2d] text-muted-foreground dark:bg-[#a8a29e12]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="7" width="18" height="14" rx="2" />
                    <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12a20 20 0 0 0 18 0M10 12h4v4h-4z" />
                  </svg>
                </span>
                <h4 className="text-sm font-medium sm:text-base">{entry.role}</h4>
              </div>
              <p className="ml-8.5 mt-1.5 text-sm text-muted-foreground">{entry.period}</p>
              <p className="ml-8.5 mt-2 text-xs text-muted-foreground">{entry.location}</p>
              <ul className="ml-8.5 mt-3 space-y-2 text-sm leading-7 text-muted-foreground">
                {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
