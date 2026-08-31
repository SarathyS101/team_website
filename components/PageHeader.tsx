/** Title block shared by /journal, /links, and /deliverables. */
export function PageHeader({ title, lead }: { title: string; lead: string }) {
  return (
    <div className="border-b border-line py-12 sm:py-14">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h1>
      <p className="mt-3 max-w-2xl text-muted">{lead}</p>
    </div>
  );
}
