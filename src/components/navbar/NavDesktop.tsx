"use client";

import { Link } from "@/components/link";

import { externalLinks, navLinks } from "./nav-config";

const linkClassName =
  "text-muted-foreground hover:text-foreground rounded-lg px-3 py-2 text-sm font-medium transition-colors duration-200";

/**
 * Desktop (lg+) centered primary links: external Store/Status anchors
 * followed by internal Products/Blog/FAQ router links.
 */
export function NavDesktop() {
  return (
    <div className="hidden items-center gap-1 lg:flex">
      {externalLinks.map((link) => (
        <a
          className={linkClassName}
          href={link.href}
          key={link.label}
          rel="noopener noreferrer"
          target="_blank"
        >
          {link.label}
        </a>
      ))}
      {navLinks.map((link) => (
        <Link className={linkClassName} key={link.to} to={link.to}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
