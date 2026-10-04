import type { Metadata } from "next";
import { DeliverablePage } from "@/components/DeliverablePage";
import { Specifications } from "@/components/DeliverableDocs";

/** Prerendered at build time; content comes from content/deliverableDocs.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Specifications",
  description: "User stories and requirements, each labeled Definite, Perhaps, or Improbable.",
};

export default function Page() {
  return (
    <DeliverablePage title="Specifications" lead={"User stories and requirements, each labeled Definite, Perhaps, or Improbable."}>
      <Specifications />
    </DeliverablePage>
  );
}
