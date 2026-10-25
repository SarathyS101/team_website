"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/content/site";
import { teamMailto } from "@/lib/format";

/**
 * Every required section is reachable from here in one click: the five
 * "always needed" items are anchors on the home page, the four growing
 * lists are their own pages.
 */
const navItems = [
  { label: "Introduction", href: "/#intro" },
  { label: "Roles", href: "/#roles" },
  { label: "Contact", href: "/#contact" },
  { label: "Schedule", href: "/#schedule" },
  { label: "Rules", href: "/#rules" },
  { label: "Journal", href: "/journal" },
  { label: "Links", href: "/links" },
  { label: "Deliverables", href: "/deliverables" },
  { label: "Assignments", href: "/assignments" },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl flex-col gap-3 px-5 py-3 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
        <Link href="/" className="group flex items-baseline gap-2">
          <span className="text-base font-semibold tracking-tight group-hover:text-accent-strong">
            {site.courseNumber} · {site.teamName}
          </span>
        </Link>

        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <nav aria-label="Main">
            <ul className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm">
              {navItems.map((item) => {
                // Anchor links live on the home page; page links match the path.
                const isActive = item.href.startsWith("/#")
                  ? false
                  : pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={isActive ? "page" : undefined}
                      className={
                        isActive
                          ? "font-semibold text-accent-strong"
                          : "text-muted hover:text-foreground"
                      }
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <a
            href={teamMailto()}
            className="rounded-md bg-accent px-3 py-1.5 text-sm font-medium text-accent-contrast hover:bg-accent-strong"
          >
            Email the team
          </a>
        </div>
      </div>
    </header>
  );
}
