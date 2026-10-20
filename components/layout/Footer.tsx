import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/site";

export function Footer() {
  return (
    <footer className="mt-12 border-t border-border py-8">
      <Container className="flex flex-wrap items-center justify-between gap-4 text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} {siteConfig.name}</p>
        <Link href="/" className="hover:text-foreground">Code is the conversation.</Link>
      </Container>
    </footer>
  );
}
