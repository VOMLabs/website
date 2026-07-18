import { Code2, type LucideIcon, Puzzle, Terminal, Wrench } from "lucide-react";

const items: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Puzzle,
    title: "Software Engineering",
    description:
      "Performant, modern, and well-crafted software designed to solve real problems without the bloat.",
  },
  {
    icon: Wrench,
    title: "Open Source Projects",
    description:
      "Feature-rich tools and libraries that empower developers and contribute back to the community.",
  },
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Clean, responsive, and performant websites built with modern frameworks and best-in-class tooling.",
  },
  {
    icon: Terminal,
    title: "Developer Tools",
    description:
      "Open-source resources, libraries, and tooling for the development community and beyond.",
  },
];

export function About() {
  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex min-w-0 max-w-4xl flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="font-bold text-2xl tracking-tight lg:text-3xl">
            What is VOMLabs
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We are a team of developers building modern software, open-source
            tools, and developer-focused solutions.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="flex flex-col items-start gap-2 border border-border bg-muted p-4 text-left"
                key={item.title}
              >
                <Icon className="size-5 text-primary" />
                <div className="space-y-1">
                  <h3 className="font-medium text-sm">{item.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
