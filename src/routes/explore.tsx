import { createFileRoute } from "@tanstack/react-router";
import { Compass } from "lucide-react";
import { Header } from "@/components/physica/Header";
import { PlaceholderView } from "@/components/physica/PlaceholderView";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Explore Physics Concepts — Physica" },
      {
        name: "description",
        content:
          "Browse interactive physics concepts on Physica: projectile motion, circular motion, waves, optics, thermodynamics and more.",
      },
      { property: "og:title", content: "Explore Physics Concepts — Physica" },
      {
        property: "og:description",
        content: "A growing library of interactive simulations across mechanics, waves and optics.",
      },
    ],
  }),
  component: ExplorePage,
});

function ExplorePage() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <PlaceholderView
        icon={Compass}
        eyebrow="Concept library"
        title="Explore Concepts"
        description="Interactive simulations across the syllabus. Projectile Motion is live today; the rest are being built."
        items={[
          {
            title: "Projectile Motion",
            description: "Launch angle, velocity and gravity with a live 3D trajectory.",
            meta: "Available now",
          },
          {
            title: "Circular Motion",
            description: "Centripetal force, angular velocity and banked curves.",
            meta: "Coming soon",
          },
          {
            title: "Simple Harmonic Motion",
            description: "Springs and pendulums with phase and energy plots.",
            meta: "Coming soon",
          },
          {
            title: "Waves & Superposition",
            description: "Interference, standing waves and beat frequencies.",
            meta: "Coming soon",
          },
          {
            title: "Ray Optics",
            description: "Lenses, mirrors and image formation on an optical bench.",
            meta: "Coming soon",
          },
          {
            title: "Thermodynamics",
            description: "PV diagrams, cycles and efficiency of heat engines.",
            meta: "Coming soon",
          },
        ]}
      />
    </div>
  );
}
