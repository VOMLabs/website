import { cn } from "@/lib/utils";

/**
 * Editorial content section. Shared across every page so the design system
 * is applied consistently instead of being re-styled per route.
 */
export function Section({
  id,
  eyebrow,
  title,
  description,
  align = "left",
  children,
  className,
  contentClassName,
}: {
  id?: string;
  eyebrow?: string;
  title?: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
}) {
  const headerAlign =
    align === "center" ? "mx-auto items-center text-center" : "items-start";

  return (
    <section id={id} className={cn("border-border border-b", className)}>
      <div
        className={cn("container-editorial py-16 md:py-24", contentClassName)}
      >
        {(eyebrow || title) && (
          <div
            className={cn(
              "mb-12 flex max-w-3xl flex-col gap-4 md:mb-16",
              headerAlign,
            )}
          >
            {eyebrow && (
              <p className="eyebrow">
                <span className="eyebrow-dot" />
                {eyebrow}
              </p>
            )}
            {title && <h2 className="section-title">{title}</h2>}
            {description && <p className="lead max-w-2xl">{description}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

/**
 * Editorial row for long-form pages (legal docs, etc.).
 * Two-column grid on desktop: mono index/label on the left, content on the right.
 */
export function SectionRow({
  title,
  children,
  index,
  className,
}: {
  title: string;
  children: React.ReactNode;
  index?: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "grid gap-3 py-8 md:grid-cols-[200px_1fr] md:gap-10 md:py-10",
        className,
      )}
    >
      <div className="flex items-baseline gap-3 md:block">
        {index && (
          <span className="text-muted-foreground/60 font-mono text-[11px] tracking-[0.15em]">
            {index}
          </span>
        )}
        <h2 className="text-foreground font-mono text-xs tracking-[0.15em] uppercase">
          {title}
        </h2>
      </div>
      <div className="text-muted-foreground flex min-w-0 flex-col gap-4 text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

/**
 * Editorial layout for long-form legal/documentation pages.
 */
export function LegalPage({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <main className="border-border border-t">
      <div className="container-editorial py-16 md:py-24">
        <header className="mb-12 flex max-w-3xl flex-col gap-4 md:mb-16">
          {eyebrow && (
            <p className="eyebrow">
              <span className="eyebrow-dot" />
              {eyebrow}
            </p>
          )}
          <h1 className="display">{title}</h1>
          <p className="lead max-w-2xl">{description}</p>
        </header>
        <div className="divide-border border-border flex flex-col divide-y border-y">
          {children}
        </div>
      </div>
    </main>
  );
}
