import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { Slider } from "@/components/ui/slider";

type Field = {
  label: string;
  unit: string;
  value: number;
  min: number;
  max: number;
  step: number;
  decimals?: number;
  onChange: (value: number) => void;
};

export function ControlsPanel({ fields }: { fields: Field[] }) {
  return (
    <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-border bg-card md:grid-cols-2 xl:grid-cols-[repeat(3,minmax(0,1fr))_auto]">
      {fields.map((f) => (
        <div key={f.label} className="border-border p-5 xl:border-r">
          <label className="text-xs font-medium text-muted-foreground" htmlFor={f.label}>
            {f.label}
          </label>
          <div className="mt-2 flex items-center gap-2 rounded-lg border border-border bg-background px-3 py-2 transition-colors focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 hover:border-primary/40">
            <input
              id={f.label}
              type="number"
              min={f.min}
              max={f.max}
              step={f.step}
              value={f.value}
              onChange={(e) => {
                const next = Number(e.target.value);
                if (!Number.isNaN(next)) f.onChange(next);
              }}
              className="w-full bg-transparent text-xl font-semibold tabular-nums outline-none"
            />
            <span className="shrink-0 text-sm text-muted-foreground">{f.unit}</span>
          </div>
          <Slider
            className="mt-5"
            value={[f.value]}
            min={f.min}
            max={f.max}
            step={f.step}
            aria-label={f.label}
            onValueChange={(v) => f.onChange(v[0] ?? f.value)}
          />
          <div className="mt-1.5 flex justify-between text-[11px] text-muted-foreground">
            <span>{f.min}</span>
            <span>{f.max}</span>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-center border-t border-border p-5 xl:border-t-0">
        <button
          type="button"
          className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
          <span className="whitespace-nowrap">More Options</span>
          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </div>
  );
}
