import type { Metadata } from "next";
import { DeliverablePage } from "@/components/DeliverablePage";
import { Platform } from "@/components/DeliverableDocs";
import { platformIntro } from "@/content/deliverableDocs";

/** Prerendered at build time; content comes from content/deliverableDocs.ts. */
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "Platform selection",
  description: "Technology alternatives considered and the final choices, with pros, cons, and justification.",
};

export default function Page() {
  return (
    <DeliverablePage title="Platform selection" lead={platformIntro}>
      <Platform />
    </DeliverablePage>
  );
}
