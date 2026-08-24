"use client";

import Bars from "@gravity-ui/icons/Bars";
import { useEffect, useState } from "react";

import { Link } from "@/components/link";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { createLogger } from "@/lib/logger";
import { cn } from "@/lib/utils";

import { NavActions } from "./NavActions";
import { NavDesktop } from "./NavDesktop";
import { NavMobileDrawer } from "./NavMobileDrawer";

const logger = createLogger("Navbar");

/**
 * Fixed glassmorphism navbar. SSR-safe: the scroll listener is registered in
 * an effect only, so the server render never touches `window`.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { data: session } = authClient.useSession();

  useEffect(() => {
    logger.debug("Navbar mounted", { hasSession: !!session });
  }, [session]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-[background-color,border-color,box-shadow] duration-300 motion-reduce:transition-none",
        scrolled
          ? "border-border/80 bg-background/80 shadow-sm"
          : "border-transparent bg-background/60",
      )}
    >
      <nav
        aria-label="Main"
        className="mx-auto flex h-14 w-full max-w-(--breakpoint-2xl) items-center justify-between px-6 lg:grid lg:grid-cols-[1fr_auto_1fr]"
      >
        <Link className="flex items-center gap-2.5" to="/">
          <Logo className="size-6" />
          <span className="text-sm font-bold tracking-[-0.01em]">VOMLabs</span>
        </Link>

        <NavDesktop />

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <NavActions session={session} />
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            aria-label="Open menu"
            onClick={() => {
              logger.debug("Mobile menu opened");
              setDrawerOpen(true);
            }}
            size="icon-sm"
            variant="ghost"
          >
            <Bars strokeWidth={2} />
          </Button>
        </div>
      </nav>

      <NavMobileDrawer
        onOpenChange={setDrawerOpen}
        open={drawerOpen}
        session={session}
      />
    </header>
  );
}
