"use client";

import { useEffect, useState, type CSSProperties } from "react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { siteConfig } from "@/constants/site";
import { fetchContributions, fetchFollowers, type ContributionCalendar } from "@/lib/github";

const REFRESH_INTERVAL = 24 * 60 * 60 * 1000;
const levels = [
  "bg-zinc-100 dark:bg-slate-800",
  "bg-zinc-300 dark:bg-slate-600",
  "bg-zinc-400 dark:bg-slate-400",
  "bg-zinc-600 dark:bg-slate-300",
  "bg-zinc-900 dark:bg-slate-100",
];

function ContributionGraph({ calendar }: { calendar: ContributionCalendar }) {
  const offset = new Date(`${calendar.days[0].date}T00:00:00Z`).getUTCDay();
  const weeks = Math.ceil((offset + calendar.days.length) / 7);
  const columns = { gridTemplateColumns: `repeat(${weeks}, minmax(0, 1fr))` };

  return (
    <div className="overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring" tabIndex={0} role="region" aria-label="Daily contribution graph; swipe or use arrow keys to scroll on small screens">
      <div className="flex gap-2" role="img" aria-label={`${calendar.total.toLocaleString("en-US")} GitHub contributions in ${calendar.year}`}>
        <div className="mt-6 grid shrink-0 grid-rows-7 gap-[3px] text-[9px] leading-3 text-muted-foreground dark:text-slate-400" aria-hidden="true">
          <span className="row-start-2">Mon</span>
          <span className="row-start-4">Wed</span>
          <span className="row-start-6">Fri</span>
        </div>
        <div className="min-w-[var(--graph-width)] flex-1 sm:min-w-0" style={{ "--graph-width": `${weeks * 15 - 3}px` } as CSSProperties}>
          <div className="mb-3 grid h-3 gap-[3px] text-[9px] leading-3 text-muted-foreground dark:text-slate-400" style={columns} aria-hidden="true">
            {calendar.days.map((day, index) => day.date.endsWith("-01") && (
              <span key={day.date} className="w-max" style={{ gridColumn: Math.floor((index + offset) / 7) + 1, gridRow: 1 }}>
                {new Date(`${day.date}T00:00:00Z`).toLocaleDateString("en-US", { month: "short", timeZone: "UTC" })}
              </span>
            ))}
          </div>
          <div className="grid grid-flow-col grid-rows-7 gap-[3px]" style={columns}>
            {Array.from({ length: offset }, (_, index) => <span key={`padding-${index}`} className="aspect-square w-full" aria-hidden="true" />)}
            {calendar.days.map((day) => (
              <span
                key={day.date}
                className={`aspect-square w-full rounded-[2px] transition-opacity hover:opacity-75 motion-reduce:transition-none ${levels[day.level]}`}
                title={`${day.count} ${day.count === 1 ? "contribution" : "contributions"} on ${day.date}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function GitHubSection() {
  const [followers, setFollowers] = useState<number | null>(null);
  const [calendar, setCalendar] = useState<ContributionCalendar | null>(null);
  const [loaded, setLoaded] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const username = new URL(siteConfig.socialProfiles.github).pathname.split("/").filter(Boolean)[0];
    let lastRefresh = 0;

    async function refresh() {
      lastRefresh = Date.now();
      const year = new Date().getFullYear();
      const [profileResult, calendarResult] = await Promise.allSettled([
        fetchFollowers(username, controller.signal),
        fetchContributions(username, year, controller.signal),
      ]);
      if (controller.signal.aborted) return;

      const failures: string[] = [];
      if (profileResult.status === "fulfilled") setFollowers(profileResult.value);
      else failures.push("Follower count is temporarily unavailable.");
      if (calendarResult.status === "fulfilled") setCalendar(calendarResult.value);
      else failures.push("Contribution data is temporarily unavailable.");
      setErrors(failures);
      setLoaded(true);
    }

    function refreshWhenVisible() {
      if (document.visibilityState === "visible" && Date.now() - lastRefresh >= REFRESH_INTERVAL) {
        void refresh();
      }
    }

    void refresh();
    const interval = window.setInterval(refresh, REFRESH_INTERVAL);
    document.addEventListener("visibilitychange", refreshWhenVisible);
    return () => {
      controller.abort();
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  return (
    <section className="py-12" aria-labelledby="github-heading">
      <SectionHeader label="Open Source" title="On GitHub" />
      <h3 id="github-heading" className="sr-only">GitHub activity</h3>
      <dl className="mb-6 flex flex-wrap gap-x-10 gap-y-4" aria-live="polite" aria-busy={!loaded}>
        <div>
          <dt className="text-xs text-muted-foreground">Followers</dt>
          <dd className="mt-1 font-serif text-xl font-semibold tabular-nums">{followers?.toLocaleString("en-US") ?? "—"}</dd>
        </div>
        <div>
          <dt className="text-xs text-muted-foreground">Contributions {calendar ? `in ${calendar.year}` : "this year"}</dt>
          <dd className="mt-1 font-serif text-xl font-semibold tabular-nums">{calendar?.total.toLocaleString("en-US") ?? "—"}</dd>
        </div>
      </dl>
      <div className="min-h-32 bg-transparent">
        {calendar ? <ContributionGraph calendar={calendar} /> : (
          <p className="py-8 text-sm text-muted-foreground" role="status">{loaded ? "View my contribution history on GitHub." : "Loading GitHub activity…"}</p>
        )}
      </div>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-x-4 gap-y-2 bg-transparent text-[10px] leading-none text-zinc-500 sm:text-[11px] dark:text-slate-400">
        <a href={siteConfig.socialProfiles.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 py-1 transition-colors hover:text-foreground motion-reduce:transition-none">View on GitHub <span aria-hidden="true">↗</span></a>
        <div className="ml-auto flex shrink-0 items-center gap-1.5 py-1" aria-hidden="true">
          <span>Less</span>
          <div className="flex items-center gap-[2px]">{levels.map((level) => <span key={level} className={`size-2 rounded-[2px] sm:size-2.5 ${level}`} />)}</div>
          <span>More</span>
        </div>
      </div>
      {errors.length > 0 && <p className="mt-3 text-xs text-muted-foreground" role="status">{errors.join(" ")}{calendar || followers !== null ? " Showing the last available data." : ""}</p>}
      <noscript><p className="mt-3 text-xs text-muted-foreground">Enable JavaScript to load live GitHub activity, or visit my GitHub profile.</p></noscript>
    </section>
  );
}
