import Image from "next/image";
import Link from "next/link";

const year = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-black">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            {/*<span className="flex h-5 w-5 items-center justify-center rounded-md bg-zinc-950 dark:bg-zinc-50">
              <span className="text-xs font-bold text-zinc-50 dark:text-zinc-950">
                V
              </span>
            </span>*/}
            <Image alt="Logo" src={"/logo.png"} height={24} width={24} />
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              © {year} VOMLabs. All rights reserved.
            </p>
          </div>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="#"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="text-zinc-600 transition-colors hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Terms of Service
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
