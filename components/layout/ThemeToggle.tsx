"use client";

import { useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { Skeleton } from "../ui/Skeleton";

const emptySubscribe = () => () => {};

export const ThemeToggle = () => {
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  if (!mounted) {
    return (
      <button type="button" aria-label="Switch color theme" disabled className="mx-2 mt-0.5 rounded-md border border-border bg-transparent p-1.5 transition-[background-color,color]">
        <Skeleton className="h-3.75 w-3.75 rounded-[3px]" />
      </button>
    );
  }
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      onClick={() => {
        setTheme(resolvedTheme === "dark" ? "light" : "dark");
      }}
      className="mx-2 mt-0.5 rounded-md border border-border bg-transparent p-1.5 transition-[background-color,color]"
    >
      {isDark ? (
        <Image
          src={"/assets/icons/moon.svg"}
          alt="moon"
          width={15}
          height={15}
          className="text-white"
        />
      ) : (
        <Image src={"/assets/icons/sun.svg"} alt="sun" width={15} height={15} />
      )}
    </button>
  );
};
