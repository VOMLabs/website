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
    title: "Affordable Products",
    description:
      "High-quality, feature-rich tools and libraries offered at competitive prices.",
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
      "Powerful resources, libraries, and tooling for the development community and beyond.",
  },
];

export function About() {
  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex max-w-4xl min-w-0 flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
            What is VOMLabs
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            We are a team of developers building high-quality, modern software
            and developer-focused solutions at affordable prices.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 lg:gap-5">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div
                className="border-border bg-muted flex flex-col items-start gap-2 border p-4 text-left"
                key={item.title}
              >
                <Icon className="text-primary size-5" />
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">{item.title}</h3>
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
