import { Atom, Lightbulb, Minus, Send } from "lucide-react";

function Math({ children }: { children: React.ReactNode }) {
  return <span className="font-math italic tracking-tight">{children}</span>;
}

export function ExplanationCard() {
  return (
    <section className="rounded-xl border border-border bg-panel p-5">
      <h2 className="text-base font-semibold">Explanation</h2>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        A projectile is launched with an initial velocity at an angle{" "}
        <Math>θ</Math> to the horizontal.
      </p>
      <p className="mt-3 text-sm leading-relaxed text-foreground/80">
        Its path is a parabola due to the combination of constant horizontal velocity (no
        acceleration in x-direction) and constant downward acceleration due to gravity.
      </p>
      <ul className="mt-4 space-y-2.5 text-sm">
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-stat-blue" />
          <span>
            <strong className="font-semibold">Horizontal motion:</strong>{" "}
            <Math>
              a<sub>x</sub> = 0
            </Math>
          </span>
        </li>
        <li className="flex items-start gap-2.5">
          <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-stat-purple" />
          <span>
            <strong className="font-semibold">Vertical motion:</strong>{" "}
            <Math>
              a<sub>y</sub> = −g
            </Math>
          </span>
        </li>
      </ul>
    </section>
  );
}

export function ChatCard() {
  return (
    <section className="rounded-xl border border-border bg-panel p-5">
      <div className="flex items-center justify-between">
        <h2 className="text-base font-semibold">Ask Physica</h2>
        <button
          type="button"
          aria-label="Collapse chat"
          className="grid h-7 w-7 place-items-center rounded-md text-muted-foreground transition-colors hover:bg-secondary"
        >
          <Minus className="h-4 w-4" />
        </button>
      </div>

      <div className="mt-4 space-y-4">
        <div className="flex justify-end">
          <p className="max-w-[85%] rounded-xl rounded-br-sm bg-primary px-4 py-3 text-sm leading-relaxed text-primary-foreground">
            Why is the vertical velocity zero at the highest point?
          </p>
        </div>
        <div className="flex items-start gap-2.5">
          <span className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-primary/10 text-primary">
            <Atom className="h-4 w-4" />
          </span>
          <p className="max-w-[85%] rounded-xl rounded-bl-sm border border-border bg-card px-4 py-3 text-sm leading-relaxed text-foreground/80">
            At the highest point, the projectile momentarily stops moving upward due to gravity, so
            the vertical velocity (
            <Math>
              v<sub>y</sub>
            </Math>
            ) becomes zero before it starts moving downward.
          </p>
        </div>
      </div>

      <form
        className="mt-5 flex items-center gap-2"
        onSubmit={(e) => e.preventDefault()}
        aria-label="Ask Physica"
      >
        <input
          placeholder="Ask anything..."
          aria-label="Ask anything"
          className="h-11 w-full rounded-lg border border-border bg-card px-4 text-sm outline-none transition-colors placeholder:text-muted-foreground hover:border-primary/40 focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
        <button
          type="submit"
          aria-label="Send message"
          className="grid h-11 w-12 shrink-0 place-items-center rounded-lg bg-primary/70 text-primary-foreground transition-colors hover:bg-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Send className="h-4 w-4" />
        </button>
      </form>
    </section>
  );
}

export function InsightCard({ angle }: { angle: number }) {
  return (
    <section className="rounded-xl border border-primary/15 bg-insight p-5">
      <div className="flex items-start gap-3">
        <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
        <div>
          <h2 className="text-sm font-semibold text-insight-foreground">Key Insight</h2>
          <p className="mt-1.5 text-sm leading-relaxed text-insight-foreground/85">
            For the same initial velocity, maximum range is achieved at 45° in ideal conditions (no
            air resistance). You are currently at {angle}°.
          </p>
        </div>
      </div>
    </section>
  );
}
