import Link from "next/link";
import { Container } from "@/components/ui/Container";

export default function NotFound() {
  return (
    <div className="min-h-screen pt-20">
      <Container>
        <div
          className="py-2"
        >
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Error 404
          </span>
          <h1 className="mt-3 font-serif text-2xl tracking-tight text-foreground md:text-3xl">
            Page not found.
          </h1>
          <p className="mt-3 max-w-xl text-xs leading-7 text-muted-foreground md:text-sm">
            The page you&apos;re looking for doesn&apos;t exist or may have been
            moved.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs font-medium md:text-sm">
            <Link
              href="/"
              className="text-foreground transition-colors hover:text-muted-foreground"
            >
              Go to Home
            </Link>
            <Link
              href="/projects"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              Browse Projects
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
