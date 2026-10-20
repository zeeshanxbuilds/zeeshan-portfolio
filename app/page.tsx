import { Container } from "@/components/ui/Container";
import { Separator } from "@/components/ui/Separator";
import { HeroSection } from "@/components/core/landing/HeroSection";
import { AboutSection } from "@/components/core/landing/AboutSection";
import { GitHubSection } from "@/components/core/landing/GitHubSection";
import { ExperienceSection } from "@/components/core/landing/ExperienceSection";
import { EducationSection } from "@/components/core/landing/EducationSection";
import { FeaturedProjectsSection } from "@/components/core/landing/FeaturedProjectsSection";
import { ContactSection } from "@/components/core/landing/ContactSection";
import { JsonLd, getProfilePageSchema } from "@/components/seo/JsonLd";

export default function Home() {
  return (
    <>
      <Container>
        <HeroSection />
        <Separator />
        <AboutSection />
        <Separator />
        <GitHubSection />
        <Separator />
        <FeaturedProjectsSection />
        <Separator />
        <ExperienceSection />
        <Separator />
        <EducationSection />
        <Separator />
        <ContactSection />
      </Container>
      <JsonLd data={getProfilePageSchema()} />
    </>
  );
}
