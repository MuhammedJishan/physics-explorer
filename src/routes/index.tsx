import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, Send } from "lucide-react";
import { Header, SubHeader } from "@/components/physica/Header";
import { SimulationCanvas } from "@/components/physica/SimulationCanvas";
import { ControlsPanel } from "@/components/physica/ControlsPanel";
import { ChatCard, ExplanationCard, InsightCard } from "@/components/physica/RightColumn";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Physica — Interactive Projectile Motion Dashboard" },
      {
        name: "description",
        content:
          "Explore projectile motion with a live 3D simulation, adjustable velocity, angle and gravity, instant results, and an AI physics tutor.",
      },
      { property: "og:title", content: "Physica — Interactive Projectile Motion Dashboard" },
      {
        property: "og:description",
        content:
          "Understand. Visualize. Master. A premium physics workspace with live simulation and AI explanations.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  const [velocity, setVelocity] = useState(20);
  const [angle, setAngle] = useState(45);
  const [gravity, setGravity] = useState(9.81);
  const [activeTab, setActiveTab] = useState("Explain");

  const results = useMemo(() => {
    const rad = (angle * Math.PI) / 180;
    const vy = velocity * Math.sin(rad);
    const vx = velocity * Math.cos(rad);
    const flight = (2 * vy) / gravity;
    return {
      flight,
      maxH: (vy * vy) / (2 * gravity),
      range: vx * flight,
      finalV: velocity,
    };
  }, [velocity, angle, gravity]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      <Header />
      <SubHeader activeTab={activeTab} onTabChange={setActiveTab} />

      <main className="grid grid-cols-1 items-start gap-5 px-4 py-5 sm:px-6 lg:grid-cols-[65fr_35fr]">
        {/* Left column */}
        <div className="min-w-0 space-y-4">
          <SimulationCanvas velocity={velocity} angle={angle} gravity={gravity} />

          <ControlsPanel
            fields={[
              {
                label: "Initial Velocity",
                unit: "m/s",
                value: velocity,
                min: 5,
                max: 50,
                step: 1,
                onChange: setVelocity,
              },
              {
                label: "Launch Angle",
                unit: "°",
                value: angle,
                min: 0,
                max: 90,
                step: 1,
                onChange: setAngle,
              },
              {
                label: "Gravity",
                unit: "m/s²",
                value: gravity,
                min: 1,
                max: 20,
                step: 0.01,
                onChange: setGravity,
              },
            ]}
          />

          <div className="grid grid-cols-2 divide-border rounded-xl border border-border bg-card lg:grid-cols-4 lg:divide-x">
            <Result
              label="Time of Flight"
              value={`${results.flight.toFixed(2)} s`}
              tone="text-stat-green"
            />
            <Result
              label="Maximum Height"
              value={`${results.maxH.toFixed(2)} m`}
              tone="text-stat-purple"
            />
            <Result label="Range" value={`${results.range.toFixed(2)} m`} tone="text-stat-blue" />
            <Result
              label="Final Velocity"
              value={`${results.finalV.toFixed(2)} m/s`}
              tone="text-stat-orange"
            />
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-3"
            aria-label="Ask a topic"
          >
            <Search className="ml-1 h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              placeholder="Ask a topic or question..."
              aria-label="Ask a topic or question"
              className="h-10 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            />
            <button
              type="submit"
              aria-label="Send"
              className="grid h-10 w-12 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>

        {/* Right column */}
        <aside className="min-w-0 space-y-4">
          <ExplanationCard />
          <ChatCard />
          <InsightCard angle={angle} />
        </aside>
      </main>
    </div>
  );
}

function Result({ label, value, tone }: { label: string; value: string; tone: string }) {
  return (
    <div className="px-4 py-5 text-center">
      <p className="text-xs text-muted-foreground">{label}</p>
      <p className={"mt-1.5 text-[1.9rem] font-semibold leading-none tabular-nums tracking-tight " + tone}>
        {value}
      </p>
    </div>
  );
}
