"use client";

import { Link } from "@/components/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { authLabels, type NavSession } from "./nav-config";
import { signOutUser } from "./nav-utils";

function getInitials(name: string): string {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

/**
 * Right-side desktop actions: avatar dropdown when signed in,
 * Sign In link otherwise, always with the theme toggle.
 */
export function NavActions({ session }: { session: NavSession }) {
  if (!session) {
    return (
      <Link
        className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors duration-200"
        to="/login"
      >
        {authLabels.signIn}
      </Link>
    );
  }

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          render={
            <button
              aria-label={`${authLabels.account}: ${session.user.name}`}
              className="focus-visible:ring-ring/50 rounded-full outline-none focus-visible:ring-1 focus-visible:ring-offset-2"
              type="button"
            >
              <Avatar size="sm">
                {session.user.image ? (
                  <AvatarImage src={session.user.image} />
                ) : (
                  <AvatarFallback>
                    {getInitials(session.user.name)}
                  </AvatarFallback>
                )}
              </Avatar>
            </button>
          }
        />
        <DropdownMenuContent align="end" sideOffset={10}>
          <DropdownMenuLabel>
            {session.user.name}
            <span className="text-muted-foreground block text-[11px] font-normal">
              {session.user.email}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {session.user.role === "admin" && (
            <DropdownMenuItem render={<Link to="/admin" />}>
              {authLabels.dashboard}
            </DropdownMenuItem>
          )}
          <DropdownMenuItem
            onClick={() => {
              void signOutUser();
            }}
            variant="destructive"
          >
            {authLabels.signOut}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <ThemeToggle />
    </>
  );
}
