import { IconBrandGithub, IconWorld } from "@tabler/icons-react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-6xl">
            Building the Future of{" "}
            <span className="text-indigo-600 dark:text-indigo-400">
              Digital Innovation
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            VOMLabs is a passionate team of developers, designers, and creators
            building cutting-edge web experiences and open-source projects that
            push the boundaries of what's possible.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="#staff"
              className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Meet the Team
            </Link>
            <Link
              href="https://github.com/vomlabs"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold leading-6 text-zinc-900 dark:text-zinc-50 flex items-center gap-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
            >
              Our Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-16 flow-root">
          <div className="-m-2 rounded-xl bg-zinc-900/5 dark:bg-zinc-50/5 p-2 ring-1 ring-inset ring-zinc-900/10 dark:ring-zinc-50/10 lg:-m-4 lg:rounded-2xl lg:p-4">
            <div className="rounded-md bg-zinc-100 dark:bg-zinc-900 p-8 ring-1 ring-zinc-900/10 dark:ring-zinc-50/10">
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                {[
                  { name: "Open Source", value: "2+" },
                  { name: "Contributors & Maintainer", value: "3" },
                  { name: "Projects", value: "1" },
                  { name: "Stars", value: "0" },
                ].map((stat) => (
                  <div key={stat.name} className="text-center">
                    <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                      {stat.value}
                    </div>
                    <div className="text-sm text-zinc-600 dark:text-zinc-400">
                      {stat.name}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 flex justify-center gap-6">
          <Link
            href="https://github.com/vomlabs"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            <IconBrandGithub className="h-5 w-5" />
            GitHub
          </Link>
          <Link
            href="https://vomlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50 transition-colors"
          >
            <IconWorld className="h-5 w-5" />
            Website
          </Link>
        </div>
      </div>
    </div>
  );
}
