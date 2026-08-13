"use client";

import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { GitFork, Handshake, type LucideIcon, Users } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { createLogger } from "@/lib/logger";

const logger = createLogger("BecomeDev");

const items: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Users,
    title: "Join Our Community",
    description: "Connect with developers and contributors on Discord.",
  },
  {
    icon: GitFork,
    title: "Quality Products",
    description:
      "Help us build high-quality, affordable tools that developers love.",
  },
  {
    icon: Handshake,
    title: "Build with Us",
    description:
      "Work on C++, Java, TypeScript, Go, and Rust projects alongside experienced devs.",
  },
];

export function BecomeDev() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    logger.debug("BecomeDev section mounted");
  }, []);

  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex max-w-4xl min-w-0 flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Become a Developer
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Join our community and help build the future of developer tools.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="border-border bg-muted flex flex-col items-center gap-2 border p-4 text-center"
                key={item.title}
              >
                <Icon className="text-primary size-5" />
                <div className="space-y-0.5">
                  <h3 className="text-sm font-medium">{item.title}</h3>
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
            className="bg-[#5865F2] text-white hover:bg-[#4752c4]"
            onClick={() => {
              try {
                logger.info("BecomeDev Discord button clicked", {
                  url: "https://discord.vomlabs.com",
                });
                toast.info("Opening Discord...", { duration: 2000 });
                window.open(
                  "https://discord.vomlabs.com",
                  "_blank",
                  "noopener,noreferrer",
                );
              } catch (error) {
                logger.error("Failed to open Discord from BecomeDev", {
                  error: error instanceof Error ? error.message : String(error),
                });
                toast.error("Failed to open Discord. Please try again.");
              }
            }}
            variant="outline"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Join Discord to Apply
          </Button>
        )}
      </div>
    </section>
  );
}
