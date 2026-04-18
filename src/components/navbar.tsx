"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

interface NavbarProps {
  children?: React.ReactNode;
}

const navLinks = [
  { href: "/", label: "Products" },
  { href: "/", label: "Solutions" },
  { href: "https://docs.vomlabs.com", label: "Docs" },
];

export function Navbar({ children }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50"
        >
          {/*<span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-950 dark:bg-zinc-50">
            <span className="text-lg font-bold text-zinc-50 dark:text-zinc-950">
              V
            </span>
          </span>*/}
          <Image alt="Logo" src={"/logo.png"} height={32} width={32} />
          VOMLabs
        </Link>

        {children ? (
          children
        ) : (
          <>
            <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
              {navLinks.map((link) =>
                link.href.startsWith("http") ? (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  >
                    {link.label}
                  </Link>
                ),
              )}
              <ModeToggle />
            </nav>

            <button
              type="button"
              className="flex items-center justify-center p-2 md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
              ) : (
                <Menu className="h-5 w-5 text-zinc-900 dark:text-zinc-50" />
              )}
            </button>
          </>
        )}
      </div>

      {isOpen && (
        <div className="border-t border-zinc-200 bg-zinc-50 px-4 py-4 dark:border-zinc-800 dark:bg-black md:hidden">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            {navLinks.map((link) =>
              link.href.startsWith("http") ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </a>
              ) : (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ),
            )}
            <div className="pt-2">
              <ModeToggle />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
