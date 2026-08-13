"use client";

import ArrowRotateRight from "@gravity-ui/icons/ArrowRotateRight";
import CircleCheck from "@gravity-ui/icons/CircleCheck";
import CircleInfo from "@gravity-ui/icons/CircleInfo";
import CircleXmark from "@gravity-ui/icons/CircleXmark";
import TriangleExclamation from "@gravity-ui/icons/TriangleExclamation";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Toaster as Sonner, type ToasterProps } from "sonner";

import { createLogger } from "@/lib/logger";

const logger = createLogger("Toaster");

const Toaster = ({ ...props }: ToasterProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme = "system" } = useTheme();

  useEffect(() => {
    setMounted(true);
    logger.debug("Toaster mounted", { theme });
  }, [theme]);

  if (!mounted) {
    return null;
  }

  return (
    <Sonner
      className="toaster group"
      icons={{
        success: (
          <CircleCheck
            className="size-4"

            strokeWidth={2}
          />
        ),
        info: (
          <CircleInfo
            className="size-4"

            strokeWidth={2}
          />
        ),
        warning: (
          <TriangleExclamation
            className="size-4"

            strokeWidth={2}
          />
        ),
        error: (
          <CircleXmark
            className="size-4"

            strokeWidth={2}
          />
        ),
        loading: (
          <ArrowRotateRight
            className="size-4 animate-spin"

            strokeWidth={2}
          />
        ),
      }}
      style={
        {
          "--normal-bg": "var(--popover)",
          "--normal-text": "var(--popover-foreground)",
          "--normal-border": "var(--border)",
          "--border-radius": "var(--radius)",
        } as React.CSSProperties
      }
      theme={theme as ToasterProps["theme"]}
      toastOptions={{
        classNames: {
          toast: "cn-toast",
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
