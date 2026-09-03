import { useState } from "react";
import cannon from "@/assets/cannon.png";

type Props = {
  velocity: number;
  angle: number;
  gravity: number;
};

const VIEW_W = 1000;
const VIEW_H = 470;
const PAD_L = 78;
const PAD_R = 40;
const PAD_B = 62;
const PAD_T = 40;

const toggles = ["3D View", "2D View", "Vector", "Trajectory", "Grid"] as const;

function niceMax(value: number, step: number) {
  return Math.max(step, Math.ceil(value / step) * step);
}

export function SimulationCanvas({ velocity, angle, gravity }: Props) {
  const [activeView, setActiveView] = useState<string>("3D View");

  const rad = (angle * Math.PI) / 180;
  const vx = velocity * Math.cos(rad);
  const vy = velocity * Math.sin(rad);
  const flight = (2 * vy) / gravity;
  const range = vx * flight;
  const maxH = (vy * vy) / (2 * gravity);

  const xMax = niceMax(range * 1.15, 10);
  const yMax = niceMax(maxH * 1.25, 10);

  const px = (x: number) => PAD_L + (x / xMax) * (VIEW_W - PAD_L - PAD_R);
  const py = (y: number) => VIEW_H - PAD_B - (y / yMax) * (VIEW_H - PAD_B - PAD_T);

  const steps = 34;
  const points = Array.from({ length: steps + 1 }, (_, i) => {
    const t = (flight * i) / steps;
    return { x: vx * t, y: vy * t - 0.5 * gravity * t * t };
  });
  const path = points.map((p, i) => `${i === 0 ? "M" : "L"}${px(p.x)},${py(p.y)}`).join(" ");

  const xTicks = Array.from({ length: Math.round(xMax / 10) + 1 }, (_, i) => i * 10);
  const yTicks = Array.from({ length: Math.round(yMax / 10) + 1 }, (_, i) => i * 10).slice(1);

  const apexX = range / 2;
  const midTime = flight / 2;
  const liveHeight = vy * midTime - 0.5 * gravity * midTime * midTime;

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-canvas">
      {/* floating toggle group */}
      <div className="absolute left-4 top-4 z-10 flex flex-wrap gap-2">
        {toggles.map((label) => {
          const isActive = activeView === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setActiveView(label)}
              className={
                "rounded-lg px-3 py-1.5 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
                (isActive
                  ? "bg-primary text-primary-foreground shadow-soft"
                  : "border border-border bg-card text-foreground/80 hover:bg-secondary")
              }
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* floating live stats */}
      <div className="absolute right-4 top-4 z-10 w-52 rounded-xl border border-border bg-card/95 p-3 shadow-float backdrop-blur">
        <dl className="divide-y divide-border text-xs">
          <Row label="Time" value={`${midTime.toFixed(2)} s`} className="text-stat-purple" />
          <Row label="Height" value={`${liveHeight.toFixed(2)} m`} className="text-stat-purple" />
          <Row label="Range" value={`${range.toFixed(2)} m`} className="text-stat-purple" />
          <Row
            label="Velocity"
            value={`${velocity.toFixed(2)} m/s`}
            className="text-stat-orange"
          />
        </dl>
      </div>

      <svg
        viewBox={`0 0 ${VIEW_W} ${VIEW_H}`}
        className="block h-auto w-full"
        role="img"
        aria-label="Projectile motion simulation viewport"
      >
        <defs>
          <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--canvas)" />
            <stop offset="100%" stopColor="var(--background)" />
          </linearGradient>
          <marker id="arrow" markerWidth="9" markerHeight="9" refX="6" refY="3" orient="auto">
            <path d="M0,0 L6,3 L0,6 z" fill="var(--foreground)" />
          </marker>
        </defs>

        <rect x="0" y="0" width={VIEW_W} height={VIEW_H} fill="url(#sky)" />

        {/* 3D perspective grid floor */}
        <g stroke="var(--canvas-line)" strokeWidth="1" opacity="0.7">
          {Array.from({ length: 7 }, (_, i) => {
            const y = VIEW_H - PAD_B + i * (i * 1.6 + 3);
            return y < VIEW_H ? <line key={i} x1="0" y1={y} x2={VIEW_W} y2={y} /> : null;
          })}
          {Array.from({ length: 21 }, (_, i) => {
            const x = (i / 20) * VIEW_W;
            const vanish = VIEW_W / 2 + (x - VIEW_W / 2) * 2.2;
            return (
              <line key={i} x1={x} y1={VIEW_H - PAD_B} x2={vanish} y2={VIEW_H} />
            );
          })}
        </g>

        {/* grid lines */}
        <g stroke="var(--canvas-line)" strokeWidth="1" strokeDasharray="2 6" opacity="0.6">
          {yTicks.map((t) => (
            <line key={t} x1={PAD_L} y1={py(t)} x2={VIEW_W - PAD_R} y2={py(t)} />
          ))}
        </g>

        {/* axes */}
        <line
          x1={PAD_L}
          y1={VIEW_H - PAD_B}
          x2={VIEW_W - PAD_R}
          y2={VIEW_H - PAD_B}
          stroke="var(--foreground)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />
        <line
          x1={PAD_L}
          y1={VIEW_H - PAD_B}
          x2={PAD_L}
          y2={PAD_T - 12}
          stroke="var(--foreground)"
          strokeWidth="1.5"
          markerEnd="url(#arrow)"
        />

        <g className="fill-muted-foreground text-[13px]" fontFamily="var(--font-sans)">
          <text x={PAD_L - 8} y={PAD_T - 20} textAnchor="middle" className="fill-foreground">
            y (m)
          </text>
          <text x={VIEW_W - PAD_R + 4} y={VIEW_H - PAD_B + 22} className="fill-foreground">
            x (m)
          </text>
          {xTicks.map((t) => (
            <text key={t} x={px(t)} y={VIEW_H - PAD_B + 24} textAnchor="middle">
              {t}
            </text>
          ))}
          {yTicks.map((t) => (
            <text key={t} x={PAD_L - 14} y={py(t) + 4} textAnchor="end">
              {t}
            </text>
          ))}
          <text x={PAD_L - 14} y={VIEW_H - PAD_B + 4} textAnchor="end">
            0
          </text>
        </g>

        {/* trajectory */}
        <path
          d={path}
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.5"
          strokeDasharray="5 7"
          opacity="0.5"
        />
        {points.map((p, i) => (
          <circle
            key={i}
            cx={px(p.x)}
            cy={py(p.y)}
            r={i % 2 === 0 ? 4.5 : 3}
            fill="var(--primary)"
            opacity={0.35 + 0.65 * (1 - i / points.length)}
          />
        ))}

        {/* Hmax indicator */}
        <line
          x1={px(apexX)}
          y1={py(maxH)}
          x2={px(apexX)}
          y2={VIEW_H - PAD_B}
          stroke="var(--foreground)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />
        <text
          x={px(apexX) + 10}
          y={py(maxH / 2)}
          className="fill-foreground text-[14px] font-semibold"
          fontFamily="var(--font-sans)"
        >
          H
          <tspan dy="4" className="text-[10px]">
            max
          </tspan>
        </text>
      </svg>

      <img
        src={cannon}
        alt="Cannon launching a projectile"
        loading="lazy"
        width={896}
        height={752}
        className="pointer-events-none absolute bottom-[9%] left-[3%] w-[15%] min-w-24 drop-shadow-sm"
      />
    </div>
  );
}

function Row({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="flex items-center justify-between py-2">
      <dt className="text-muted-foreground">{label}</dt>
      <dd className={"font-medium tabular-nums " + (className ?? "")}>{value}</dd>
    </div>
  );
}
