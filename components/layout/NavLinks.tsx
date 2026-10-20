"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { navItems } from "@/constants/site";

export function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {navItems.map((item) => {
        const active = !item.href.includes("#") && pathname.startsWith(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={active ? "page" : undefined}
            className={cn("rounded-md px-2 py-1.5 text-xs transition-colors duration-150 sm:px-3 sm:text-sm",
              active
                ? "text-foreground"
                : "text-muted-foreground hover:bg-muted hover:text-foreground",
            )}
          >
            {item.label}
          </Link>
        );
      })}
    </>
  );
}
