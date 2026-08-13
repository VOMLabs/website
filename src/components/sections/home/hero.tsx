"use client";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { createLogger } from "@/lib/logger";

const logger = createLogger("Hero");

const githubOrgs = [
  {
    name: "VOMLabs",
    url: "https://github.com/VOMLabs",
    description: "Open source projects & tools",
  },
  {
    name: "VOMHost",
    url: "https://github.com/VOMHost",
    description: "Hosting & infrastructure",
  },
] as const;

export function Hero() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    logger.debug("Hero section mounted");
  }, []);

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6">
      <div className="flex max-w-2xl min-w-0 flex-col items-center gap-6 text-center">
        <div className="border-border bg-muted inline-flex items-center gap-1.5 border px-3 py-1">
          <span className="bg-primary size-1.5" />
          <span className="text-muted-foreground text-xs font-medium">
            Building the future of developer tools
          </span>
        </div>
        <div className="space-y-3">
          <h1 className="text-5xl font-bold tracking-tight lg:text-6xl xl:text-7xl">
            VOMLabs
          </h1>
          <h2 className="text-muted-foreground text-xl font-medium lg:text-2xl xl:text-3xl">
            Modern software, built by developers, for developers.
          </h2>
        </div>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          We create high-performance tools, premium libraries, and
          developer-focused solutions — crafted with care and built to last.
        </p>
        {mounted && (
          <div className="flex gap-3">
            <Dialog onOpenChange={setOpen} open={open}>
              <DialogTrigger
                render={
                  <Button
                    onClick={() => {
                      logger.info("GitHub dialog trigger clicked");
                    }}
                  >
                    <FontAwesomeIcon icon={faGithub} />
                    GitHub
                  </Button>
                }
              />
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Select an Organization</DialogTitle>
                  <DialogDescription>
                    Choose which GitHub organization you&apos;d like to visit.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex flex-col gap-2 pt-2">
                  {githubOrgs.map((org) => (
                    <a
                      className="border-border bg-muted hover:bg-accent flex items-center gap-3 border p-3 transition-colors"
                      href={org.url}
                      key={org.name}
                      onClick={() => {
                        try {
                          logger.info("GitHub org link clicked", {
                            name: org.name,
                            url: org.url,
                          });
                          setOpen(false);
                          toast.info(`Opening ${org.name}...`, {
                            duration: 2000,
                          });
                        } catch (error) {
                          logger.error("Failed to open GitHub org", {
                            name: org.name,
                            error:
                              error instanceof Error
                                ? error.message
                                : String(error),
                          });
                        }
                      }}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <FontAwesomeIcon className="size-5" icon={faGithub} />
                      <div className="flex flex-col text-left">
                        <span className="text-sm font-medium">{org.name}</span>
                        <span className="text-muted-foreground text-xs">
                          {org.description}
                        </span>
                      </div>
                    </a>
                  ))}
                </div>
              </DialogContent>
            </Dialog>
            <Button
              className="bg-[#5865F2] text-white hover:bg-[#4752c4]"
              onClick={() => {
                try {
                  logger.info("Discord button clicked", {
                    url: "https://discord.vomlabs.com",
                  });
                  toast.info("Opening Discord...", { duration: 2000 });
                  window.open(
                    "https://discord.vomlabs.com",
                    "_blank",
                    "noopener,noreferrer",
                  );
                } catch (error) {
                  logger.error("Failed to open Discord", {
                    error:
                      error instanceof Error ? error.message : String(error),
                  });
                  toast.error("Failed to open Discord. Please try again.");
                }
              }}
              variant="outline"
            >
              <FontAwesomeIcon icon={faDiscord} />
              Join the Discord
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
