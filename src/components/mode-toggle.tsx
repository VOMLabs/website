"use client";

import { Monitor, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <button
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800"
      >
        <Sun className="h-4 w-4" />
      </button>
    );
  }

  return (
    <div className="flex items-center gap-1 rounded-md border border-zinc-200 dark:border-zinc-800 p-1">
      <button
        type="button"
        onClick={() => setTheme("light")}
        className={`flex h-7 w-7 items-center justify-center rounded transition-colors ${
          theme === "light"
            ? "bg-zinc-200 dark:bg-zinc-700"
            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }`}
        aria-label="Light mode"
      >
        <Sun className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("dark")}
        className={`flex h-7 w-7 items-center justify-center rounded transition-colors ${
          theme === "dark"
            ? "bg-zinc-200 dark:bg-zinc-700"
            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }`}
        aria-label="Dark mode"
      >
        <Moon className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
      </button>
      <button
        type="button"
        onClick={() => setTheme("system")}
        className={`flex h-7 w-7 items-center justify-center rounded transition-colors ${
          theme === "system"
            ? "bg-zinc-200 dark:bg-zinc-700"
            : "hover:bg-zinc-100 dark:hover:bg-zinc-800"
        }`}
        aria-label="System mode"
      >
        <Monitor className="h-4 w-4 text-zinc-700 dark:text-zinc-300" />
      </button>
    </div>
  );
}
