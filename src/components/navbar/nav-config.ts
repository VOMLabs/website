import LogoGithub from "@gravity-ui/icons/LogoGithub";

import { DiscordIcon } from "@/components/icons/discord";
import { authClient } from "@/lib/auth-client";

/** External links opened in a new tab. */
export const externalLinks = [
  { label: "Store", href: "https://store.vomlabs.com" },
  { label: "Status", href: "https://status.vomlabs.com" },
] as const;

/** Internal routes rendered with the router Link. */
export const navLinks = [
  { label: "Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
] as const;

/** Community links shown in the mobile drawer. */
export const socialLinks = [
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

export const authLabels = {
  signIn: "Sign In",
  signOut: "Sign Out",
  dashboard: "Dashboard",
  account: "Account",
} as const;

/** Shape of the auth session consumed by the navbar components. */
export type NavSession = ReturnType<typeof authClient.useSession>["data"];
