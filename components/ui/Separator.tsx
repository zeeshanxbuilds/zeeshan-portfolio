import { cn } from "@/lib/utils";

interface SeparatorProps {
  className?: string;
}

export function Separator({ className }: SeparatorProps) {
  return (
    <hr className={cn("border-t border-border", className)} role="separator" />
  );
}
