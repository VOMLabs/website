import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
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

  return (
    <section className="flex min-h-dvh flex-col items-center justify-center px-6">
      <div className="flex min-w-0 max-w-2xl flex-col items-center gap-6 text-center">
        <div className="inline-flex items-center gap-1.5 border border-border bg-muted px-3 py-1">
          <span className="size-1.5 bg-primary" />
          <span className="font-medium text-muted-foreground text-xs">
            Building the future of developer tools
          </span>
        </div>
        <div className="space-y-3">
          <h1 className="font-bold text-5xl tracking-tight lg:text-6xl xl:text-7xl">
            VOMLabs
          </h1>
          <h2 className="font-medium text-muted-foreground text-xl lg:text-2xl xl:text-3xl">
            Modern software, built by developers, for developers.
          </h2>
        </div>
        <p className="max-w-md text-muted-foreground text-sm leading-relaxed">
          We create high-performance tools, open-source libraries, and
          developer-focused solutions — crafted with care and built to last.
        </p>
        <div className="flex gap-3">
          <Dialog onOpenChange={setOpen} open={open}>
            <DialogTrigger
              render={
                <Button>
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
                    className="flex items-center gap-3 border border-border bg-muted p-3 transition-colors hover:bg-accent"
                    href={org.url}
                    key={org.name}
                    onClick={() => {
                      setOpen(false);
                      toast.info(`Opening ${org.name}...`, { duration: 2000 });
                    }}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FontAwesomeIcon className="size-5" icon={faGithub} />
                    <div className="flex flex-col text-left">
                      <span className="font-medium text-sm">{org.name}</span>
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
              toast.info("Opening Discord...", { duration: 2000 });
              window.open(
                "https://discord.vomlabs.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            variant="outline"
          >
            <FontAwesomeIcon icon={faDiscord} />
            Join the Discord
          </Button>
        </div>
      </div>
    </section>
  );
}
