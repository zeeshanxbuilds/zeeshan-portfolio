import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/constants/site";
import avatar from "@/public/zeeshan-avatar.png";

export function HeroSection() {
  return (
    <section className="py-16" aria-labelledby="hero-name">
      <div className="flex max-w-[72ch] flex-col">
        <div className="flex items-center gap-5">
          <div className="relative size-18 shrink-0 overflow-hidden rounded-full ring-1 ring-border">
            <Image src={avatar} alt={siteConfig.fullName} fill priority placeholder="blur" sizes="72px" className="object-cover" />
          </div>
          <div>
            <h1 id="hero-name" className="text-[25px] font-bold tracking-tighter sm:text-[28px]">{siteConfig.name}</h1>
            <p className="hero-title mt-1 text-[15.5px] font-medium text-muted-foreground">Flutter Developer &amp; CS Student</p>
          </div>
        </div>
        <p className="mt-8 text-[15px] leading-[1.8] text-muted-foreground sm:text-base">
          I build cross-platform mobile apps with Flutter, Dart, and Firebase.
          Computer Science student based in Lahore, Pakistan, expanding into
          web development with React and Tailwind CSS.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-6 text-sm">
          <Link href="/projects" className="font-medium underline decoration-border underline-offset-4 hover:decoration-foreground">View Projects <span aria-hidden="true">↗</span></Link>
          <a href="#contact" className="text-muted-foreground hover:text-foreground">Get in Touch</a>
        </div>
      </div>
    </section>
  );
}
