import type { Metadata } from "next";
import { DeliverablePage } from "@/components/DeliverablePage";
import { ArchitectureDiagram } from "@/components/DeliverableDocs";
import { architecture } from "@/content/deliverableDocs";

/** Prerendered at build time; content comes from content/deliverableDocs.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Architecture diagram",
  description: "Architecture pattern, major components, data flow, external elements, and our work versus inherited work.",
};

export default function Page() {
  return (
    <DeliverablePage title="Architecture diagram" lead={`${architecture.pattern}. ${architecture.summary}`}>
      <ArchitectureDiagram />
    </DeliverablePage>
  );
}
