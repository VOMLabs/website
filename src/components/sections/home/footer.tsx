import LogoGithub from "@gravity-ui/icons/LogoGithub";

import { DiscordIcon } from "@/components/icons/discord";
import { Link } from "@/components/link";
import { Logo } from "@/components/logo";

const navigation = [
  { label: "Home", to: "/" },
  { label: "Blog", to: "/blog" },
  { label: "Products", to: "/products" },
  { label: "FAQ", to: "/faq" },
] as const;

const legalLinks = [
  { label: "Privacy Policy", to: "/privacy" },
  { label: "Terms of Service", to: "/tos" },
  { label: "Terms of Use", to: "/terms" },
  { label: "Legal Notice", to: "/legal" },
  { label: "Cookie Policy", to: "/cookies" },
  { label: "Disclaimer", to: "/disclaimer" },
  { label: "Return & Refund Policy", to: "/refund" },
] as const;

const socialLinks = [
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border bg-background border-t">
      <div className="mx-auto max-w-(--breakpoint-2xl) px-6 py-12">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link className="flex items-center gap-2.5" to="/">
              <Logo className="size-6" />
              <span className="text-sm font-bold">VOMLabs</span>
            </Link>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Privacy-first developer tools, plugins, and open-source software
              for a safer, faster web.
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map(({ icon: Icon, ...social }) => (
                <a
                  aria-label={social.label}
                  className="border-border text-muted-foreground hover:text-foreground inline-flex size-8 items-center justify-center rounded-lg border transition-colors"
                  href={social.href}
                  key={social.label}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
              Navigation
            </h2>
            <ul className="space-y-2">
              {navigation.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
              Legal
            </h2>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    className="text-muted-foreground hover:text-foreground text-xs transition-colors"
                    to={link.to}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-muted-foreground font-mono text-xs tracking-[0.15em] uppercase">
              Status
            </h2>
            <div className="flex items-center gap-2">
              <span className="relative flex size-2 bg-green-500">
                <span className="absolute inline-flex h-full w-full animate-ping bg-green-500 opacity-75" />
                <span className="relative inline-flex size-2 bg-green-500" />
              </span>
              <span className="text-muted-foreground text-xs">
                Systems Normal
              </span>
            </div>
            <p className="text-muted-foreground text-xs leading-relaxed">
              Powered by TanStack Start &amp; Bun
            </p>
          </div>
        </div>

        <div className="border-border mt-10 border-t pt-6">
          <p className="text-muted-foreground text-xs">
            &copy; {year} VOMLabs. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
