import { Link, useRouter } from "@tanstack/react-router";

import { getErrorMessage, isDatabaseError } from "@/lib/errors";

export function ErrorPage({
  error,
}: {
  error: Error;
  info?: { componentStack?: string };
  reset?: () => void;
}) {
  const router = useRouter();
  const isDbError = isDatabaseError(error);
  const message = getErrorMessage(error);

  return (
    <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex max-w-md flex-col items-center gap-6">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">
            {isDbError ? "Database Unavailable" : "Something went wrong"}
          </h1>
          <p className="text-muted-foreground text-lg font-medium">
            {isDbError
              ? "We couldn't reach our database."
              : "An unexpected error occurred."}
          </p>
        </div>

        <p className="text-muted-foreground text-sm leading-relaxed">
          {isDbError ? (
            <>
              This is usually temporary — the database may be restarting or
              briefly unreachable. Please try again in a moment.
            </>
          ) : (
            "Please try again. If the problem persists, contact support."
          )}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            className="bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 border border-transparent px-2.5 text-xs font-medium transition-all outline-none select-none focus-visible:ring-1 active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
            onClick={() => {
              void router.invalidate();
            }}
            type="button"
          >
            Try again
          </button>
          <Link
            className="text-muted-foreground hover:text-foreground text-sm font-medium underline underline-offset-4"
            to="/"
          >
            Go home
          </Link>
        </div>

        {message && import.meta.env?.DEV && (
          <p className="border-border bg-muted text-muted-foreground w-full max-w-sm border px-4 py-2 text-left font-mono text-[11px] break-all">
            {message}
          </p>
        )}
      </div>
    </main>
  );
}
