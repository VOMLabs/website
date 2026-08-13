"use client";

import Bars from "@gravity-ui/icons/Bars";
import LogoGithub from "@gravity-ui/icons/LogoGithub";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { DiscordIcon } from "@/components/icons/discord";
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
import { authClient } from "@/lib/auth-client";
import { createLogger } from "@/lib/logger";

const logger = createLogger("Navbar");

const externalLinks = [
  {
    label: "GitHub",
    href: "https://github.com/VOMLabs",
    icon: LogoGithub,
  },
  {
    label: "Discord",
    href: "https://discord.vomlabs.com",
    icon: DiscordIcon,
  },
] as const;

function openExternal(href: string, label: string) {
  try {
    logger.info("Opening external link", { label, href });
    toast.info(`Opening ${label}...`, { duration: 2000 });
    window.open(href, "_blank", "noopener,noreferrer");
  } catch (error) {
    logger.error("Failed to open external link", {
      label,
      href,
      error: error instanceof Error ? error.message : String(error),
    });
    toast.error(`Failed to open ${label}. Please try again.`);
  }
}

export function Navbar() {
  const isMobile = useIsMobile();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    logger.debug("Navbar rendered", { isMobile, hasSession: !!session });
  }, [isMobile, session]);

  const navLinks = [
    { label: "Store", href: "https://store.vomlabs.com" },
    { label: "Status", href: "https://status.vomlabs.com" },
  ] as const;

  return (
    <header className="border-border bg-background/80 fixed top-0 right-0 left-0 z-50 border-b backdrop-blur-sm">
      <nav className="mx-auto flex h-12 max-w-(--breakpoint-2xl) items-center justify-between px-6">
        <Link className="flex items-center gap-2" to="/">
          <span className="bg-primary size-1.5" />
          <span className="text-sm font-bold">VOMLabs</span>
        </Link>

        {isMobile ? (
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button
              onClick={() => {
                logger.debug("Mobile menu opened");
                setDrawerOpen(true);
              }}
              size="icon-sm"
              variant="ghost"
            >
              <Bars strokeWidth={2} className="size-4" />
            </Button>
          </div>
        ) : (
          <div className="flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                className="text-muted-foreground hover:text-foreground text-sm font-medium"
                href={link.href}
                key={link.label}
                rel="noopener noreferrer"
                target="_blank"
              >
                {link.label}
              </a>
            ))}
            <Link
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
              to="/products"
            >
              Products
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
              to="/faq"
            >
              FAQ
            </Link>
            {session ? (
              <>
                {session.user.role === "admin" && (
                  <Link
                    className="text-muted-foreground hover:text-foreground text-sm font-medium"
                    to="/admin"
                  >
                    Admin
                  </Link>
                )}
                <Button
                  onClick={async () => {
                    try {
                      logger.info("User signing out");
                      await authClient.signOut();
                      logger.info("User signed out successfully");
                      window.location.href = "/";
                    } catch (error) {
                      logger.error("Sign out failed", {
                        error:
                          error instanceof Error
                            ? error.message
                            : String(error),
                      });
                      toast.error("Failed to sign out. Please try again.");
                    }
                  }}
                  size="sm"
                  variant="ghost"
                >
                  Sign Out
                </Button>
              </>
            ) : (
              <Link
                className="text-muted-foreground hover:text-foreground text-sm font-medium"
                to="/login"
              >
                Sign In
              </Link>
            )}
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
                className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-left text-sm font-medium transition-colors"
                key={link.label}
                onClick={() => {
                  logger.debug("Drawer nav link clicked", {
                    label: link.label,
                  });
                  setDrawerOpen(false);
                  openExternal(link.href, link.label);
                }}
                type="button"
              >
                {link.label}
              </button>
            ))}
            <Link
              className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-sm font-medium transition-colors"
              onClick={() => {
                logger.debug("Drawer Products link clicked");
                setDrawerOpen(false);
              }}
              to="/products"
            >
              Products
            </Link>
            <Link
              className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-sm font-medium transition-colors"
              onClick={() => {
                logger.debug("Drawer Blog link clicked");
                setDrawerOpen(false);
              }}
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-sm font-medium transition-colors"
              onClick={() => {
                logger.debug("Drawer FAQ link clicked");
                setDrawerOpen(false);
              }}
              to="/faq"
            >
              FAQ
            </Link>
            {session ? (
              <>
                {session.user.role === "admin" && (
                  <Link
                    className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-sm font-medium transition-colors"
                    onClick={() => {
                      logger.debug("Drawer Admin link clicked");
                      setDrawerOpen(false);
                    }}
                    to="/admin"
                  >
                    Admin
                  </Link>
                )}
                <button
                  className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-left text-sm font-medium transition-colors"
                  onClick={async () => {
                    try {
                      logger.info("User signing out (drawer)");
                      setDrawerOpen(false);
                      await authClient.signOut();
                      logger.info("User signed out successfully");
                      window.location.href = "/";
                    } catch (error) {
                      logger.error("Sign out failed (drawer)", {
                        error:
                          error instanceof Error
                            ? error.message
                            : String(error),
                      });
                      toast.error("Failed to sign out. Please try again.");
                    }
                  }}
                  type="button"
                >
                  Sign Out
                </button>
              </>
            ) : (
              <Link
                className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-sm font-medium transition-colors"
                onClick={() => {
                  logger.debug("Drawer Sign In link clicked");
                  setDrawerOpen(false);
                }}
                to="/login"
              >
                Sign In
              </Link>
            )}
            <div className="border-border my-1 border-t" />
            {externalLinks.map(({ icon: Icon, ...link }) => (
              <button
                className="border-border bg-muted hover:bg-accent flex items-center gap-2 rounded-none border p-3 text-left text-sm font-medium transition-colors"
                key={link.label}
                onClick={() => {
                  setDrawerOpen(false);
                  openExternal(link.href, link.label);
                }}
                type="button"
              >
                <Icon className="size-4" />
                {link.label}
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
}
