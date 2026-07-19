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
        <div className="flex flex-col items-center justify-center gap-4 border border-border bg-muted px-6 py-12 text-center">
          <div className="space-y-2">
            <h2 className="font-bold text-foreground text-lg">
              Something went wrong
            </h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              An unexpected error occurred. Please try refreshing the page.
            </p>
          </div>
          <button
            className="inline-flex h-8 shrink-0 select-none items-center justify-center gap-1.5 border border-transparent bg-primary px-2.5 font-medium text-primary-foreground text-xs outline-none transition-all hover:bg-primary/80"
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
