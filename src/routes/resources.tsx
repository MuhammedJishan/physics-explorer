import { createFileRoute } from "@tanstack/react-router";
import { FileText } from "lucide-react";
import { Header } from "@/components/physica/Header";
import { PlaceholderView } from "@/components/physica/PlaceholderView";

export const Route = createFileRoute("/resources")({
  head: () => ({
    meta: [
      { title: "Resources — Formula Sheets & Guides | Physica" },
      {
        name: "description",
        content:
          "Physica resources: formula sheets, derivation walkthroughs, worked examples and past-paper practice sets.",
      },
      { property: "og:title", content: "Resources — Formula Sheets & Guides | Physica" },
      {
        property: "og:description",
        content: "Formula sheets, derivations and worked examples to support each simulation.",
      },
    ],
  }),
  component: ResourcesPage,
});

function ResourcesPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <PlaceholderView
        icon={FileText}
        eyebrow="Reference"
        title="Resources"
        description="Everything that supports the simulations: formulae, derivations and practice material."
        items={[
          {
            title: "Formula Sheets",
            description: "Kinematics, dynamics and energy formulae in one page.",
            meta: "Coming soon",
          },
          {
            title: "Derivation Walkthroughs",
            description: "Step-by-step derivations with each algebraic move explained.",
            meta: "Coming soon",
          },
          {
            title: "Worked Examples",
            description: "Solved problems mapped to each simulation parameter.",
            meta: "Coming soon",
          },
          {
            title: "Practice Sets",
            description: "Past-paper style questions with instant checking.",
            meta: "Coming soon",
          },
        ]}
      />
    </div>
  );
}
