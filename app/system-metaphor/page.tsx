import type { Metadata } from "next";
import { DeliverablePage } from "@/components/DeliverablePage";
import { Metaphor } from "@/components/DeliverableDocs";

/** Prerendered at build time; content comes from content/deliverableDocs.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "System metaphor",
  description: "The system described in everyday terms anyone has experienced.",
};

export default function Page() {
  return (
    <DeliverablePage title="System metaphor" lead={"The system described in everyday terms anyone has experienced."}>
      <Metaphor />
    </DeliverablePage>
  );
}
