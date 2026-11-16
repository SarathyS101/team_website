import Link from "next/link";
import { Section } from "@/components/Section";
import { Badge, Card } from "@/components/Card";
import { DataTable } from "@/components/DataTable";
import { site } from "@/content/site";
import { project } from "@/content/project";
import { client, instructors, instructorsSection, members } from "@/content/team";
import { recurringMeetings, scheduleLead } from "@/content/schedule";
import { rules } from "@/content/rules";
import { teamEmailList, teamMailto } from "@/lib/format";

/**
 * This page is fully prerendered at build time. There is no API route, form,
 * server action, or database behind it — the only way to change what appears
 * here is to edit the source in content/ and push a commit, which triggers a
 * new Vercel build.
 */
export const dynamic = "force-static";


export default function Home() {
  return (
    <>
      {/* ---------------- Hero ---------------- */}
      <div className="py-14 sm:py-20">
        <p className="text-sm font-medium tracking-wide text-accent-strong">
          {site.courseNumber} · {site.teamName} · {site.semester}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {project.name}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted">{project.elevatorPitch}</p>
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={teamMailto()}
            className="rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-contrast hover:bg-accent-strong"
          >
            Email the team
          </a>
          <Link
            href="/journal"
            className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-accent"
          >
            Meeting journal
          </Link>
          <a
            href={site.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md border border-line px-4 py-2 text-sm font-medium hover:border-accent"
          >
            Code repository
          </a>
        </div>
      </div>

      {/* ---------------- 1. Project Introduction ---------------- */}
      <Section
        id="intro"
        title="Project introduction"
        lead={site.tagline}
      >
        <div className="max-w-3xl space-y-4 leading-relaxed">
          {project.overview.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {project.highlights.map((highlight, index) => (
            <Card key={index}>
              <h3 className="font-semibold">{highlight.title}</h3>
              <p className="mt-1.5 text-sm text-muted">{highlight.detail}</p>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2">
          <span className="text-sm text-muted">Built with</span>
          {project.stack.map((tech, index) => (
            <Badge key={index} tone="neutral">
              {tech}
            </Badge>
          ))}
        </div>
      </Section>

      {/* ---------------- 3. Contact Information ---------------- */}
      <Section
        id="contact"
        title="Contact"
        lead="One click reaches the entire development team."
      >
        <Card className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="font-semibold">Email the entire development team</h3>
            <p className="mt-1 text-sm break-words text-muted">{teamEmailList}</p>
          </div>
          <a
            href={teamMailto()}
            className="shrink-0 rounded-md bg-accent px-4 py-2 text-center text-sm font-medium text-accent-contrast hover:bg-accent-strong"
          >
            Email all {members.length} members
          </a>
        </Card>

        <h3 className="mt-8 mb-3 font-semibold">Development team</h3>
        <DataTable
          caption="Development team contact information"
          headers={["Name", "Role", "Email"]}
          rows={members.map((member) => [
            member.name,
            member.role,
            <a
              key={member.email}
              href={`mailto:${member.email}`}
              className="text-accent-strong hover:underline"
            >
              {member.email}
            </a>,
          ])}
        />

        <h3 className="mt-8 mb-3 font-semibold">Client</h3>
        <DataTable
          caption="Client contact information"
          headers={["Name", "Title", "Organization", "Email"]}
          rows={[
            [
              client.name,
              client.title,
              client.organization,
              client.email ? (
                <a
                  href={`mailto:${client.email}`}
                  className="text-accent-strong hover:underline"
                >
                  {client.email}
                </a>
              ) : (
                <span className="text-muted">Via the Client Manager</span>
              ),
            ],
          ]}
        />

        {instructors.length > 0 ? (
          <>
            <h3 className="mt-8 mb-3 font-semibold">{instructorsSection.title}</h3>
            <DataTable
              caption={instructorsSection.caption}
              headers={["Name", "Title", "Organization", "Email"]}
              rows={instructors.map((person) => [
                person.name,
                person.title,
                person.organization,
                person.email ? (
                  <a
                    key={person.email}
                    href={`mailto:${person.email}`}
                    className="text-accent-strong hover:underline"
                  >
                    {person.email}
                  </a>
                ) : (
                  <span className="text-muted">—</span>
                ),
              ])}
            />
          </>
        ) : null}
      </Section>

      {/* ---------------- 4. Schedule of Regular Meetings ---------------- */}
      <Section
        id="schedule"
        title="Schedule"
        lead={scheduleLead}
      >
        <DataTable
          caption="Schedule of regular meetings"
          headers={["Meeting", "Who", "Cadence", "Time", "Location"]}
          rows={recurringMeetings.map((meeting) => [
            <span key={meeting.what} className="font-medium">
              {meeting.what}
            </span>,
            meeting.who,
            meeting.cadence,
            meeting.time,
            meeting.location,
          ])}
        />
      </Section>

      {/* ---------------- 5. Team Rules ---------------- */}
      <Section
        id="rules"
        title="Team rules"
        lead="The working agreements every member of this team has committed to."
      >
        <ol className="grid gap-4 sm:grid-cols-2">
          {rules.map((rule, index) => (
            <li key={index}>
              <Card className="h-full">
                <div className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-accent"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="font-semibold">{rule.title}</h3>
                    <p className="mt-1.5 text-sm text-muted">{rule.detail}</p>
                  </div>
                </div>
              </Card>
            </li>
          ))}
        </ol>
      </Section>
    </>
  );
}
