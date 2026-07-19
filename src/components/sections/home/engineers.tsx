"use client";

import { faBookOpen } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  BookOpen,
  Box,
  Cpu,
  type LucideIcon,
  RefreshCw,
  Terminal,
  Workflow,
  Wrench,
} from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { createLogger } from "@/lib/logger";

const logger = createLogger("Engineers");

const items: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Cpu,
    title: "Powerful APIs",
    description:
      "Hook into our core systems with well-documented, type-safe APIs designed for extensibility.",
  },
  {
    icon: Box,
    title: "Quality First",
    description:
      "We deliver polished, reliable products backed by excellent support and documentation.",
  },
  {
    icon: Wrench,
    title: "Modern Tooling",
    description:
      "Leverage the latest technologies like React, Rust, C++, and Go for high-performance development.",
  },
  {
    icon: RefreshCw,
    title: "CI/CD Ready",
    description:
      "Our software integrates seamlessly with modern deployment pipelines and automated workflows.",
  },
  {
    icon: Terminal,
    title: "CLI Utilities",
    description:
      "Speed up your workflow with powerful command-line tools designed for speed and automation.",
  },
  {
    icon: Workflow,
    title: "Docker Ready",
    description:
      "Deploy instantly with pre-built Docker images for consistent environments across setups.",
  },
  {
    icon: BookOpen,
    title: "Documentation",
    description:
      "Comprehensive guides and references to help you get the most out of VOMLabs software.",
  },
];

export function Engineers() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    logger.debug("Engineers section mounted");
  }, []);

  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex min-w-0 max-w-5xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl tracking-tight lg:text-3xl">
            Built for Engineers
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We prioritize developer experience, performance, and code quality in
            everything we build.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex flex-col items-center gap-2 border border-border bg-muted p-4 text-center"
                key={item.title}
              >
                <Icon className="size-5 text-primary" />
                <div className="space-y-0.5">
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        {mounted && (
          <Button
            onClick={() => {
              try {
                logger.info("Documentation button clicked", {
                  url: "https://docs.vomlabs.com",
                });
                toast.info("Opening documentation...", { duration: 2000 });
                window.open(
                  "https://docs.vomlabs.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              } catch (error) {
                logger.error("Failed to open documentation", {
                  error: error instanceof Error ? error.message : String(error),
                });
                toast.error("Failed to open documentation. Please try again.");
              }
            }}
          >
            <FontAwesomeIcon icon={faBookOpen} />
            View the Documentation
          </Button>
        )}
      </div>
    </section>
  );
}
