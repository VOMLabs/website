import { Component, type ErrorInfo, type ReactNode } from "react";

import { createLogger } from "@/lib/logger";

const logger = createLogger("ErrorBoundary");

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  error: Error | null;
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    logger.error("Component error caught", {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack ?? "",
    });
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div className="border-border bg-muted flex flex-col items-center justify-center gap-4 border px-6 py-12 text-center">
          <div className="space-y-2">
            <h2 className="text-foreground text-lg font-bold">
              Something went wrong
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          <button
            className="bg-primary text-primary-foreground hover:bg-primary/80 inline-flex h-8 shrink-0 items-center justify-center gap-1.5 border border-transparent px-2.5 text-xs font-medium transition-all outline-none select-none"
            onClick={() => {
              this.setState({ hasError: false, error: null });
              window.location.reload();
            }}
            type="button"
          >
            Refresh page
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
