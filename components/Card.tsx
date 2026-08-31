import type { ReactNode } from "react";

/** Bordered container used for role cards, contacts, and journal entries. */
export function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-lg border border-line bg-surface p-5 ${className}`.trim()}
    >
      {children}
    </div>
  );
}

/** Small uppercase label used for roles, meeting types, and statuses. */
export function Badge({
  children,
  tone = "accent",
}: {
  children: ReactNode;
  tone?: "accent" | "neutral";
}) {
  const tones = {
    accent: "border-accent/40 text-accent-strong",
    neutral: "border-line text-muted",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 text-xs font-medium tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
