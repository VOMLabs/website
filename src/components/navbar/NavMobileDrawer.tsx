"use client";

import Xmark from "@gravity-ui/icons/Xmark";
import { useRouterState } from "@tanstack/react-router";
import { useEffect } from "react";

import { Link } from "@/components/link";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { createLogger } from "@/lib/logger";

import {
  authLabels,
  externalLinks,
  navLinks,
  socialLinks,
  type NavSession,
} from "./nav-config";
import { openExternal, signOutUser } from "./nav-utils";

const logger = createLogger("Navbar");

const itemClassName =
  "text-foreground/90 hover:bg-muted flex items-center gap-2 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors duration-200";

/**
 * Mobile (<lg) slide-out navigation drawer. Closes on route change and on
 * every link click so navigation never leaves a stale overlay behind.
 */
export function NavMobileDrawer({
  open,
  onOpenChange,
  session,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  session: NavSession;
}) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (open) {
      logger.debug("Mobile drawer opened");
    }
  }, [open]);

  useEffect(() => {
    onOpenChange(false);
  }, [pathname, onOpenChange]);

  const close = () => onOpenChange(false);

  return (
    <Drawer direction="right" onOpenChange={onOpenChange} open={open}>
      <DrawerContent>
        <DrawerHeader>
          <div className="flex items-center justify-between">
            <DrawerTitle>Navigation</DrawerTitle>
            <Button
              aria-label="Close menu"
              onClick={close}
              size="icon-sm"
              variant="ghost"
            >
              <Xmark strokeWidth={2} />
            </Button>
          </div>
        </DrawerHeader>
        <div className="flex flex-col gap-1 overflow-y-auto px-3 pb-6">
          {externalLinks.map((link) => (
            <button
              className={itemClassName}
              key={link.label}
              onClick={() => {
                close();
                openExternal(link.href, link.label);
              }}
              type="button"
            >
              {link.label}
            </button>
          ))}
          {navLinks.map((link) => (
            <Link
              className={itemClassName}
              key={link.to}
              onClick={close}
              to={link.to}
            >
              {link.label}
            </Link>
          ))}
          {session ? (
            <>
              {session.user.role === "admin" && (
                <Link className={itemClassName} onClick={close} to="/admin">
                  {authLabels.dashboard}
                </Link>
              )}
              <button
                className={itemClassName}
                onClick={() => {
                  close();
                  void signOutUser();
                }}
                type="button"
              >
                {authLabels.signOut}
              </button>
            </>
          ) : (
            <Link className={itemClassName} onClick={close} to="/login">
              {authLabels.signIn}
            </Link>
          )}
          <div className="bg-border my-2 h-px" />
          {socialLinks.map(({ icon: Icon, ...link }) => (
            <button
              className={itemClassName}
              key={link.label}
              onClick={() => {
                close();
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
  );
}
