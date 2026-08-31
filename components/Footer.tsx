import { site } from "@/content/site";
import { formatDate, teamMailto } from "@/lib/format";

export function Footer() {
  return (
    <footer className="mt-8 border-t border-line">
      <div className="mx-auto flex max-w-5xl flex-col gap-2 px-5 py-8 text-sm text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>
          {site.courseNumber}: {site.courseName} · {site.semester}
          <br />
          {site.university}
        </p>
        <p className="flex flex-wrap items-center gap-x-4 gap-y-1">
          <a href={teamMailto()} className="hover:text-foreground">
            Email the team
          </a>
          <a
            href={site.repoUrl}
            className="hover:text-foreground"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repository
          </a>
          <span>Last updated {formatDate(site.lastUpdated)}</span>
        </p>
      </div>
    </footer>
  );
}
