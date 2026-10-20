import Link from "next/link";
import { siteConfig } from "@/constants/site";
import { Space_Grotesk } from "next/font/google";
import { Container } from "@/components/ui/Container";
import { ThemeToggle } from "@/components/layout/ThemeToggle";
import { NavLinks } from "@/components/layout/NavLinks";

const brandFont = Space_Grotesk({
  subsets: ["latin"],
  weight: "600",
  display: "swap",
});

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background bg-[url(/noise-compressed.png)] bg-size-[auto_90px] backdrop-blur-md">
      <Container className="flex min-h-14 flex-wrap items-center justify-between gap-x-2 gap-y-1 py-2 sm:py-0">
        <Link href="/" aria-label={`${siteConfig.handle} — Home`} className={`${brandFont.className} text-[15px] font-semibold tracking-[-0.045em] transition-opacity hover:opacity-70 sm:text-[17px]`}>
          {siteConfig.handle}
        </Link>
        <nav aria-label="Main navigation" className="flex items-center">
          <NavLinks />
          <div className="ml-1 border-l border-border pl-1"><ThemeToggle /></div>
        </nav>
      </Container>
    </header>
  );
}
