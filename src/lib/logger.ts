type LogLevel = "debug" | "info" | "warn" | "error";

const LEVEL_ORDER: Record<LogLevel, number> = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

const isDev = typeof import.meta !== "undefined" && import.meta.env?.DEV;

const minLevel: LogLevel = isDev ? "debug" : "warn";

function shouldLog(level: LogLevel): boolean {
  return LEVEL_ORDER[level] >= LEVEL_ORDER[minLevel];
}

function timestamp(): string {
  return new Date().toISOString();
}

function formatMessage(
  level: LogLevel,
  context: string,
  message: string,
  data?: Record<string, unknown>
): string {
  const prefix = `[${timestamp()}] [${level.toUpperCase()}] [${context}]`;
  if (data !== undefined) {
    return `${prefix} ${message} ${JSON.stringify(data)}`;
  }
  return `${prefix} ${message}`;
}

export interface Logger {
  debug: (message: string, data?: Record<string, unknown>) => void;
  error: (message: string, data?: Record<string, unknown>) => void;
  info: (message: string, data?: Record<string, unknown>) => void;
  warn: (message: string, data?: Record<string, unknown>) => void;
}

export function createLogger(context: string): Logger {
  return {
    debug: (message, data) => {
      if (shouldLog("debug")) {
        console.debug(formatMessage("debug", context, message, data));
      }
    },
    info: (message, data) => {
      if (shouldLog("info")) {
        console.info(formatMessage("info", context, message, data));
      }
    },
    warn: (message, data) => {
      if (shouldLog("warn")) {
        console.warn(formatMessage("warn", context, message, data));
      }
    },
    error: (message, data) => {
      if (shouldLog("error")) {
        console.error(formatMessage("error", context, message, data));
      }
    },
  };
}

export const log = createLogger("app");
