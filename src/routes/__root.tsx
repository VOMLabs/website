import { TanStackDevtools } from "@tanstack/react-devtools";
import {
  createRootRoute,
  HeadContent,
  Link,
  Outlet,
  Scripts,
} from "@tanstack/react-router";
import { TanStackRouterDevtoolsPanel } from "@tanstack/react-router-devtools";
import { NuqsAdapter } from "nuqs/adapters/tanstack-router";
import { useEffect } from "react";

import { ErrorBoundary } from "@/components/error-boundary";
import { ErrorPage } from "@/components/error-page";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/sections/home/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { log } from "@/lib/logger";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        title: "VOMLabs Website",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  notFoundComponent: () => (
    <main className="flex flex-col items-center justify-center px-6 py-24 text-center">
      <div className="flex max-w-sm flex-col items-center gap-4">
        <div className="space-y-2">
          <h1 className="text-5xl font-bold tracking-tight">404</h1>
          <p className="text-muted-foreground text-xl font-medium">
            Page not found
          </p>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          className="bg-primary text-primary-foreground hover:bg-primary/80 focus-visible:border-ring focus-visible:ring-ring/50 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 border border-transparent px-2.5 text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-1 active:translate-y-px disabled:pointer-events-none disabled:opacity-50"
          to="/"
        >
          Go home
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => <ErrorPage error={error} />,
  component: RootLayout,
  shellComponent: RootDocument,
});

function RootLayout() {
  return (
    <NuqsAdapter>
      <Outlet />
    </NuqsAdapter>
  );
}

function GlobalErrorListener() {
  useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      log.error("Unhandled window error", {
        message: event.message,
        filename: event.filename,
        lineno: String(event.lineno),
        colno: String(event.colno),
      });
    };

    const handleRejection = (event: PromiseRejectionEvent) => {
      log.error("Unhandled promise rejection", {
        reason:
          event.reason instanceof Error
            ? event.reason.message
            : String(event.reason),
      });
    };

    window.addEventListener("error", handleError);
    window.addEventListener("unhandledrejection", handleRejection);

    return () => {
      window.removeEventListener("error", handleError);
      window.removeEventListener("unhandledrejection", handleRejection);
    };
  }, []);

  return null;
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        <ThemeProvider>
          <ErrorBoundary>
            <Navbar />
            <TooltipProvider>
              <div className="flex min-h-dvh flex-col">
                <div className="flex-1">{children}</div>
                <Footer />
              </div>
            </TooltipProvider>
            <Toaster />
          </ErrorBoundary>
        </ThemeProvider>
        <GlobalErrorListener />
        <TanStackDevtools
          config={{
            position: "bottom-right",
          }}
          plugins={[
            {
              name: "Tanstack Router",
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  );
}
