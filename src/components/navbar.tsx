import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";

interface NavbarProps {
  children?: React.ReactNode;
}

export function Navbar({ children }: NavbarProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-zinc-50/80 backdrop-blur-xl dark:border-zinc-800 dark:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-lg font-semibold text-zinc-950 dark:text-zinc-50"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-zinc-950 dark:bg-zinc-50">
            <span className="text-lg font-bold text-zinc-50 dark:text-zinc-950">
              V
            </span>
          </span>
          VOMLabs
        </Link>
        {children ?? (
          <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
            <Link
              href="/"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Solutions
            </Link>
            <Link
              href="#"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Docs
            </Link>
            <ModeToggle />
          </nav>
        )}
      </div>
    </header>
  );
}
