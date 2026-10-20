import Image from "next/image";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { education } from "@/constants/profile";

export function EducationSection() {
  return (
    <section className="py-12">
      <SectionHeader label="Education" title="Education & Learning" />
      <div className="space-y-7 sm:space-y-8">
        {education.map((entry) => (
          <article key={entry.title}>
            <div className="flex items-center gap-3">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-lg border border-border bg-white p-1">
                <Image src={entry.logo} width={40} height={24} alt="" className="h-auto max-h-10 w-10 object-contain" />
              </div>
              <h3 className="text-base font-semibold leading-snug sm:text-lg">{entry.institution}</h3>
            </div>
            <div className="ml-3 mt-4 border-l border-border pb-5 pl-5">
              <div className="flex items-center gap-2.5">
                <span className="flex size-6 shrink-0 items-center justify-center rounded-md bg-[#c1bebe2d] text-muted-foreground dark:bg-[#a8a29e12]">
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m2 9 10-5 10 5-10 5-10-5Zm4 2v6c4 3 8 3 12 0v-6m4-2v7" />
                  </svg>
                </span>
                <h4 className="text-sm font-medium sm:text-base">{entry.title}</h4>
              </div>
              <p className="ml-8.5 mt-1.5 text-sm text-muted-foreground">{entry.period}</p>
              <p className="ml-8.5 mt-3 max-w-[60ch] text-sm leading-7 text-muted-foreground">{entry.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
