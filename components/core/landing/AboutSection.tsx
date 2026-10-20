import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { skills } from "@/constants/profile";

export function AboutSection() {
  return (
    <section className="py-12">
      <SectionHeader label="About" title="About Me" />
      <div className="space-y-4 text-sm leading-[1.9] text-muted-foreground">
        <p>I&apos;m Muhammad Zeeshan, a Computer Science student and Flutter developer based in Lahore, Pakistan. I build cross-platform mobile applications with Dart, GetX, and Firebase, and I&apos;m expanding my skills in web development with React, JavaScript, and Tailwind CSS.</p>
        <p>During my Flutter development internship at Acme Digital Solutions, I worked on Android and iOS features, translated Figma designs into responsive interfaces, and integrated Firebase services. My projects include an e-commerce bookstore with real-time inventory updates and a cloud notes app with cross-device synchronization.</p>
        <p>I enjoy turning ideas into practical applications and learning through hands-on work. I use AI tools to support research and development, alongside Git-based collaboration. If you&apos;re looking for a developer to contribute to a mobile app or collaborate on a project, <Link href="/#contact" className="text-foreground underline decoration-border underline-offset-4 hover:decoration-foreground">let&apos;s connect</Link>.</p>
      </div>
      <div className="mt-10 border-t border-border pt-8 sm:mt-12 sm:pt-10">
        <h3 className="font-serif text-lg font-semibold">Tech Stack</h3>
        <dl className="mt-6 space-y-6 text-sm">
          {skills.map((skill) => (
            <div key={skill.category}>
              <dt className="text-xs font-medium">{skill.category}</dt>
              <dd className="mt-2.5 flex flex-wrap gap-2">{skill.tools.map((tool) => <Badge key={tool}>{tool}</Badge>)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
