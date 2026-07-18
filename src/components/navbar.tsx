"use client";

import { faDiscord, faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";
import { useState } from "react";
import { toast } from "sonner";
import { Link } from "@/components/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { label: "Store", href: "https://store.vomlabs.com" },
  { label: "Status", href: "https://status.vomlabs.com" },
] as const;

const externalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/VOMLabs",
    icon: faGithub,
  },
  {
    label: "Discord",
    href: "https://discord.vomlabs.com",
    icon: faDiscord,
  },
] as const;

function openExternal(href: string, label: string) {
  toast.info(`Opening ${label}...`, { duration: 2000 });
  window.open(href, "_blank", "noopener,noreferrer");
}

export function Navbar() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 border-border border-b bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-12 max-w-(--breakpoint-2xl) items-center justify-between px-6">
        <Link className="flex items-center gap-2" to="/">
          <span className="size-1.5 bg-primary" />
          <span className="font-bold text-sm">VOMLabs</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => setDrawerOpen(true)}
              size="icon-sm"
              variant="ghost"
            >
              <HugeiconsIcon icon={Menu01Icon} strokeWidth={2} />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                className="font-medium text-muted-foreground text-sm hover:text-foreground"
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <Link
              className="font-medium text-muted-foreground text-sm hover:text-foreground"
              to="/faq"
            >
              FAQ
            </Link>
            <ThemeToggle />
          </div>
        )}
      </nav>

      <Drawer onOpenChange={setDrawerOpen} open={drawerOpen}>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Navigation</DrawerTitle>
          </DrawerHeader>
          <div className="flex flex-col gap-1 px-4 pb-4">
            {navLinks.map((link) => (
              <button
                className="flex items-center gap-2 rounded-none border border-border bg-muted p-3 text-left font-medium text-sm transition-colors hover:bg-accent"
                key={link.label}
                onClick={() => {
                  setDrawerOpen(false);
                  openExternal(link.href, link.label);
                }}
                type="button"
              >
                {link.label}
              </button>
            ))}
            <Link
              className="flex items-center gap-2 rounded-none border border-border bg-muted p-3 font-medium text-sm transition-colors hover:bg-accent"
              onClick={() => setDrawerOpen(false)}
              to="/faq"
            >
              FAQ
            </Link>
            <div className="my-1 border-border border-t" />
            {externalLinks.map((link) => (
              <button
                className="flex items-center gap-2 rounded-none border border-border bg-muted p-3 text-left font-medium text-sm transition-colors hover:bg-accent"
                key={link.label}
                onClick={() => {
                  setDrawerOpen(false);
                  openExternal(link.href, link.label);
                }}
                type="button"
              >
                <FontAwesomeIcon className="size-4" icon={link.icon} />
                {link.label}
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
