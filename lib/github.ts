export interface ContributionDay {
  date: string;
  count: number;
  level: number;
}

export interface ContributionCalendar {
  year: number;
  total: number;
  days: ContributionDay[];
}

async function fetchJson(url: string, signal: AbortSignal) {
  const response = await fetch(url, {
    cache: "no-store",
    signal: AbortSignal.any([signal, AbortSignal.timeout(15000)]),
  });
  if (!response.ok) throw new Error(`GitHub request failed: ${response.status}`);
  return response.json();
}

export async function fetchFollowers(username: string, signal: AbortSignal): Promise<number> {
  const profile = await fetchJson(`https://api.github.com/users/${encodeURIComponent(username)}`, signal);
  if (!Number.isInteger(profile.followers) || profile.followers < 0) {
    throw new Error("Invalid follower count");
  }
  return profile.followers;
}

export async function fetchContributions(username: string, year: number, signal: AbortSignal): Promise<ContributionCalendar> {
  const calendar = await fetchJson(`https://github-contributions-api.jogruber.de/v4/${encodeURIComponent(username)}?y=${year}`, signal);
  const total = calendar.total?.[year];
  if (!Number.isInteger(total) || total < 0 || !Array.isArray(calendar.contributions)) {
    throw new Error("Invalid contribution calendar");
  }
  const days: ContributionDay[] = calendar.contributions;
  if (!days.length || days.some((day) =>
    typeof day.date !== "string" || !day.date.startsWith(`${year}-`) ||
    !Number.isFinite(Date.parse(day.date)) ||
    !Number.isInteger(day.count) || day.count < 0 ||
    !Number.isInteger(day.level) || day.level < 0 || day.level > 4
  )) {
    throw new Error("Invalid contribution days");
  }
  return { year, total, days: [...days].sort((first, second) => first.date.localeCompare(second.date)) };
}
