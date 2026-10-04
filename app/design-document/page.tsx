import type { Metadata } from "next";
import { DeliverablePage } from "@/components/DeliverablePage";
import { DesignDocument } from "@/components/DeliverableDocs";
import { designDoc } from "@/content/deliverableDocs";

/** Prerendered at build time; content comes from content/deliverableDocs.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Design document",
  description: "Expanded architecture, code repository, data definitions, and design rationale.",
};

export default function Page() {
  return (
    <DeliverablePage title="Design document" lead={designDoc.intro}>
      <DesignDocument />
    </DeliverablePage>
  );
}
