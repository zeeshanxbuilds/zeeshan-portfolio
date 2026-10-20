import Image from "next/image";
import { cn } from "@/lib/utils";
import { techIcons } from "@/constants/tech-icons";

export function Badge({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  const icon = techIcons[children];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-[#c1bebe2d] px-3 py-1 text-[13px] font-medium leading-5 text-muted-foreground dark:bg-[#a8a29e12]",
        className,
      )}
    >
      {icon ? (
        <Image
          src={`/assets/tech/${icon.file}.svg`}
          width={16}
          height={16}
          alt=""
          className={cn(
            "size-4 shrink-0 object-contain",
            icon.invertInDark && "dark:invert",
          )}
        />
      ) : (
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          className="size-4 shrink-0"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m8 7-5 5 5 5m8-10 5 5-5 5m-3-14-2 18" />
        </svg>
      )}
      {children}
    </span>
  );
}
