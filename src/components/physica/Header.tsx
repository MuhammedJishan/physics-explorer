import {
  Atom,
  Bell,
  Home,
  Compass,
  GraduationCap,
  Presentation,
  FileText,
  Upload,
  ChevronDown,
  Maximize2,
  Box,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const navItems = [
  { label: "Home", icon: Home, to: "/" },
  { label: "Explore Concepts", icon: Compass, to: "/explore" },
  { label: "My Learning", icon: GraduationCap, to: "/my-learning" },
  { label: "Classroom", icon: Presentation, to: "/classroom" },
  { label: "Resources", icon: FileText, to: "/resources" },
] as const;

export function Header() {
  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex w-full items-center gap-4 px-4 py-3 sm:px-6">
        <div className="flex min-w-0 items-center gap-3">
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
            <Atom className="h-6 w-6" />
          </span>
          <div className="min-w-0">
            <p className="truncate text-xl font-bold leading-tight tracking-tight">Physica</p>
            <p className="truncate text-[11px] text-muted-foreground">
              Understand. Visualize. Master.
            </p>
          </div>
        </div>

        <nav className="mx-auto hidden items-center gap-1 lg:flex">
          {navItems.map(({ label, icon: Icon, active }) => (
            <a
              key={label}
              href="#"
              className={
                "relative flex items-center gap-2 rounded-lg px-3 py-4 text-sm transition-colors " +
                (active
                  ? "font-semibold text-primary"
                  : "text-foreground/70 hover:text-foreground")
              }
            >
              <Icon className="h-4 w-4" />
              <span className="whitespace-nowrap">{label}</span>
              {active && (
                <span className="absolute inset-x-1 -bottom-3 h-0.5 rounded-full bg-primary" />
              )}
            </a>
          ))}
        </nav>

        <div className="ml-auto flex shrink-0 items-center gap-2 sm:gap-3">
          <button
            type="button"
            className="hidden items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-3 py-2 text-sm font-medium text-primary transition-colors hover:bg-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring sm:flex"
          >
            <Upload className="h-4 w-4" />
            Upload
          </button>
          <button
            type="button"
            aria-label="Notifications"
            className="grid h-9 w-9 place-items-center rounded-lg text-foreground/70 transition-colors hover:bg-secondary"
          >
            <Bell className="h-5 w-5" />
          </button>
          <div className="flex items-center gap-1">
            <span className="grid h-9 w-9 place-items-center rounded-full bg-primary/15 text-sm font-semibold text-primary">
              AK
            </span>
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}

const tabs = ["Explain", "Derivation", "Formulae", "Graphs", "Quiz"];

export function SubHeader({
  activeTab,
  onTabChange,
}: {
  activeTab: string;
  onTabChange: (tab: string) => void;
}) {
  return (
    <div className="border-b border-border bg-background">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-4 py-3 sm:px-6 lg:flex lg:justify-between">
        <button
          type="button"
          className="flex min-w-0 items-center gap-2 rounded-lg px-1 py-1 text-left transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Box className="h-5 w-5 shrink-0 text-muted-foreground" />
          <span className="truncate text-base font-semibold">Projectile Motion</span>
          <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground" />
        </button>

        <div className="col-span-2 flex items-center gap-1 overflow-x-auto lg:col-span-1">
          {tabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => onTabChange(tab)}
                className={
                  "relative whitespace-nowrap px-3 py-2 text-sm transition-colors " +
                  (active
                    ? "font-semibold text-primary"
                    : "text-foreground/70 hover:text-foreground")
                }
              >
                {tab}
                {active && (
                  <span className="absolute inset-x-2 -bottom-3 h-0.5 rounded-full bg-primary" />
                )}
              </button>
            );
          })}
          <button
            type="button"
            aria-label="Expand workspace"
            className="ml-2 grid h-9 w-9 shrink-0 place-items-center rounded-lg text-muted-foreground transition-colors hover:bg-secondary"
          >
            <Maximize2 className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
