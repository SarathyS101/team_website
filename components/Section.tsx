import type { ReactNode } from "react";

type SectionProps = {
  /** Anchor target used by the header nav, e.g. "roles". */
  id: string;
  title: string;
  /** Optional one-line description under the heading. */
  lead?: string;
  children: ReactNode;
};

/** Uniform heading rhythm and anchor behavior for every section on the site. */
export function Section({ id, title, lead, children }: SectionProps) {
  return (
    <section id={id} className="border-t border-line py-12 first:border-t-0 sm:py-14">
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        <a href={`#${id}`} className="hover:text-accent-strong">
          {title}
        </a>
      </h2>
      {lead ? <p className="mt-2 max-w-2xl text-muted">{lead}</p> : null}
      <div className="mt-6">{children}</div>
    </section>
  );
}
