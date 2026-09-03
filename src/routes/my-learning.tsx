import { createFileRoute } from "@tanstack/react-router";
import { GraduationCap } from "lucide-react";
import { Header } from "@/components/physica/Header";
import { PlaceholderView } from "@/components/physica/PlaceholderView";

export const Route = createFileRoute("/my-learning")({
  head: () => ({
    meta: [
      { title: "My Learning — Progress & Saved Simulations | Physica" },
      {
        name: "description",
        content:
          "Track your physics progress on Physica: saved simulations, mastered concepts, quiz scores and study streaks.",
      },
      { property: "og:title", content: "My Learning — Progress & Saved Simulations | Physica" },
      {
        property: "og:description",
        content: "Your saved simulations, concept mastery and quiz history in one place.",
      },
    ],
  }),
  component: MyLearningPage,
});

function MyLearningPage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <PlaceholderView
        icon={GraduationCap}
        eyebrow="Your workspace"
        title="My Learning"
        description="Progress, saved simulation setups and quiz history will collect here as you work through concepts."
        items={[
          {
            title: "Saved Simulations",
            description: "Pin a velocity/angle/gravity setup and return to it later.",
            meta: "0 saved",
          },
          {
            title: "Concept Mastery",
            description: "Mastery bars per concept, driven by quiz performance.",
            meta: "Coming soon",
          },
          {
            title: "Quiz History",
            description: "Every attempt with per-question breakdowns.",
            meta: "Coming soon",
          },
        ]}
      />
    </div>
  );
}
