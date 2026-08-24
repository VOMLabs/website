import { toast } from "sonner";

import { authClient } from "@/lib/auth-client";
import { createLogger } from "@/lib/logger";

const logger = createLogger("Navbar");

/** Opens an external link with logging + toast feedback (SSR-safe call sites). */
export function openExternal(href: string, label: string) {
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

/** Signs the user out and navigates to the home page. */
export async function signOutUser() {
  try {
    logger.info("User signing out");
    await authClient.signOut();
    logger.info("User signed out successfully");
    window.location.href = "/";
  } catch (error) {
    logger.error("Sign out failed", {
      error: error instanceof Error ? error.message : String(error),
    });
    toast.error("Failed to sign out. Please try again.");
  }
}
