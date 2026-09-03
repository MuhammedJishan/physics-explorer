import type { LucideIcon } from "lucide-react";

export type PlaceholderItem = {
  title: string;
  description: string;
  meta?: string;
};

export function PlaceholderView({
  icon: Icon,
  eyebrow,
  title,
  description,
  items,
}: {
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  items: PlaceholderItem[];
}) {
  return (
    <main className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
            {eyebrow}
          </p>
          <h1 className="mt-1 text-2xl font-bold tracking-tight sm:text-3xl">{title}</h1>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <article
            key={item.title}
            className="rounded-xl border border-border bg-card p-5 transition-colors hover:border-primary/40"
          >
            <h2 className="text-base font-semibold tracking-tight">{item.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{item.description}</p>
            {item.meta && (
              <p className="mt-4 text-xs font-medium uppercase tracking-wider text-primary">
                {item.meta}
              </p>
            )}
          </article>
        ))}
      </div>
    </main>
  );
}
