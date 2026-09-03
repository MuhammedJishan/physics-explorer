import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "lucide-react";
import { Header } from "@/components/physica/Header";
import { PlaceholderView } from "@/components/physica/PlaceholderView";

export const Route = createFileRoute("/classroom")({
  head: () => ({
    meta: [
      { title: "Classroom — Teach Physics Live | Physica" },
      {
        name: "description",
        content:
          "Run Physica simulations with a class: shared sessions, assignments and live student responses.",
      },
      { property: "og:title", content: "Classroom — Teach Physics Live | Physica" },
      {
        property: "og:description",
        content: "Shared simulation sessions, assignments and live class insights.",
      },
    ],
  }),
  component: ClassroomPage,
});

function ClassroomPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <PlaceholderView
        icon={Presentation}
        eyebrow="For educators"
        title="Classroom"
        description="Host a simulation on the projector, push parameter changes to students, and review responses live."
        items={[
          {
            title: "Live Sessions",
            description: "Broadcast a simulation and let students follow along.",
            meta: "Coming soon",
          },
          {
            title: "Assignments",
            description: "Set problem sets tied to specific simulation states.",
            meta: "Coming soon",
          },
          {
            title: "Class Insights",
            description: "See which concepts the class is struggling with.",
            meta: "Coming soon",
          },
        ]}
      />
    </div>
  );
}
