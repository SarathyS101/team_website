import type { Metadata } from "next";
import { Card } from "@/components/Card";
import { PageHeader } from "@/components/PageHeader";
import { linkGroups } from "@/content/links";

/**
 * This page is fully prerendered at build time. There is no API route, form,
 * server action, or database behind it — the only way to change what appears
 * here is to edit the source in content/ and push a commit, which triggers a
 * new Vercel build.
 */
export const dynamic = "force-static";


export const metadata: Metadata = {
  title: "Related links",
  description:
    "External resources the team references: documentation, tutorials, domain references, and comparable projects.",
};

export default function LinksPage() {
  return (
    <>
      <PageHeader
        title="Related links"
        lead="External resources the team keeps coming back to — technology documentation, domain references, and projects worth learning from. Everything here is publicly available material with clear rights."
      />

      <div className="grid gap-6 py-10 sm:grid-cols-2">
        {linkGroups.map((group, index) => (
          <Card key={index}>
            <h2 className="font-semibold">{group.heading}</h2>
            <ul className="mt-3 space-y-3">
              {group.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-medium text-accent-strong hover:underline"
                  >
                    {link.label}
                  </a>
                  {link.note ? (
                    <p className="mt-0.5 text-sm text-muted">{link.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </>
  );
}
