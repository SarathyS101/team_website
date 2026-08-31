import { members } from "@/content/team";
import { site } from "@/content/site";

/**
 * A one-click mailto: addressed to the entire development team, built from
 * content/team.ts so it can never drift out of date when the roster changes.
 */
export function teamMailto(subject?: string): string {
  const to = members.map((m) => m.email).join(",");
  const line = subject ?? `[${site.courseNumber} ${site.teamName}] `;
  return `mailto:${to}?subject=${encodeURIComponent(line)}`;
}

/** Comma-separated list of every team address, for display. */
export const teamEmailList = members.map((m) => m.email).join(", ");

/**
 * "September 5, 2026" from "2026-09-05".
 * Parsed as UTC so the date never shifts backward in western time zones.
 */
export function formatDate(iso: string): string {
  const date = new Date(`${iso}T00:00:00Z`);
  if (Number.isNaN(date.getTime())) return iso;
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

/** Newest first. Used by the journal, which must be reverse chronological. */
export function byDateDescending<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.date.localeCompare(a.date));
}

/** Oldest first. Used for upcoming schedule events and deliverable due dates. */
export function byDateAscending<T extends { date: string }>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => a.date.localeCompare(b.date));
}
