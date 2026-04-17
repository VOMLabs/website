import { getStaff } from "@/lib/staff";
import Link from "next/link";
import React from "react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.1-1.1-.2-2.2-.8-3.1-.3-.6-.8-1.1-1.4-1.4-.5-.3-.8-.8-.8-1.4V8.8c-4.2 1.3-7.3-1.6-7.3-6.7C1.4 3.3 4.7 0 9.3 0c3.2 0 5.7 2.1 5.7 5.3 0 1.2-.4 2.3-.7 3.4.5.2.9.4 1.4.7.5.3.9.8.9 1.4 0 2.7-2.1 4.7-4.1 6.1-.4.3-.7.7-.7 1.3v4.3" />
    <path d="M9 22v-4c0-1.5 1.2-3 3-3s3 1.5 3 3v4" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19.48 13.03A4 4 0 0 1 16 19h-4a4 4 0 1 1-3.52-6 4 4 0 0 1 .52-1.5l.12-.2A4 4 0 0 1 6.2 8.2a30.47 30.47 0 0 1 .52-2.6l-.12-.2A4 4 0 0 1 8.2 3a4 4 0 0 1 2-.5c1.03.01 2.15.01 3.1.1a4 4 0 0 1 2.56 1.5 4 4 0 0 1 1.2 2.1 4 4 0 0 1 .3 2.4v.03a4 4 0 0 1-.9 3.6 4 4 0 0 1-1.55 1.3z" />
    <path d="M10 13v.2a1 1 0 0 0 .7 1 1 1 0 0 0 1.4-.2l1.2-1.6a1 1 0 0 0-.2-1.4 1 1 0 0 0-1.4.2L10 13z" />
    <path d="M10 19v-7.5" />
    <path d="m9 21 1.5-1" />
  </svg>
);

const DiscordIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M9 12a1 1 0 1 0-2 0v.5a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-.5a1 1 0 0 0-2 0" />
    <path d="M16 8.5a1 1 0 1 1 2 0v1a1 1 0 0 1-2 0v-.5a1 1 0 0 0-2 0v.5a1 1 0 0 0 2 0" />
    <path d="M8 18a6 6 0 0 1 6-6 6 6 0 0 1 6 6" />
    <path d="M8 6a6 6 0 0 1 6 6 6 6 0 0 1-6 6" />
    <path d="M15 6a1 1 0 0 0-1 1v3.8l2.2 1.8c.4-.5.7-1 .9-1.5" />
    <path d="M9 10a1 1 0 0 0 1-1V5.2l-2.2-1.8a.5.5 0 0 1 .2-.8" />
    <path d="M8.2 17c-.2.4-.2.8-.2 1.2a6 6 0 0 0 8 0 6 6 0 0 0 0-8c-.4 0-.8 0-1.2.2" />
    <path d="M9.3 5.3c.1-.4.3-.7.6-1" />
  </svg>
);

const EmailIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9 13.9-18 11.6a18 18 0 0 1-8-5c0-8 6-12 12-12s12 4 12 12-4 12-12 12a18 18 0 0 1-5.2-10.8C22 6.1 22 4 22 4z" />
  </svg>
);

const GlobeIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

type IconComponent = ({ className }: { className?: string }) => React.ReactElement;

const socialIcons: Record<string, IconComponent> = {
  github: GithubIcon,
  youtube: YoutubeIcon,
  discord: DiscordIcon,
  email: EmailIcon,
  twitter: TwitterIcon,
  website: GlobeIcon,
};

function SocialLink({
  href,
  platform,
}: {
  href: string;
  platform: string;
}) {
  const Icon = socialIcons[platform];
  if (!Icon) return null;

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-8 w-8 items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
    >
      <Icon className="h-4 w-4 text-zinc-600 dark:text-zinc-400" />
    </Link>
  );
}

function StaffCard({ member }: { member: ReturnType<typeof getStaff>[0] }) {
  const socials = member.social || {};

  return (
    <div className="group relative flex flex-col gap-4 rounded-xl border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-center gap-4">
        {member.avatar ? (
          <img
            src={member.avatar}
            alt={member.name}
            className="h-14 w-14 rounded-full object-cover"
          />
        ) : (
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
            <span className="text-xl font-medium text-zinc-600 dark:text-zinc-400">
              {member.name.charAt(0)}
            </span>
          </div>
        )}
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-zinc-950 dark:text-zinc-50">
            {member.name}
          </h3>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">{member.role}</p>
        </div>
      </div>
      <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
        {member.description}
      </p>
      <div className="flex flex-wrap gap-2">
        {Object.entries(socials).map(([platform, href]) => (
          <SocialLink key={platform} href={href!} platform={platform} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const staff = getStaff();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-black">
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
          </nav>
        </div>
      </header>

      <main className="flex-1 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-semibold tracking-tight text-zinc-950 dark:text-zinc-50 sm:text-5xl">
            Meet the team
          </h1>
          <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
            The passionate people behind VOMLabs, building the future of web
            development.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {staff.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </main>
    </div>
  );
}