import {
  Code2,
  type LucideIcon,
  Paintbrush,
  RefreshCw,
  Settings,
  Shield,
  Zap,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: Code2,
    title: "Affordable Pricing",
    description: "High-quality products at prices that won't break the bank.",
  },
  {
    icon: Zap,
    title: "Performance Driven",
    description: "Optimized from the ground up for speed and efficiency.",
  },
  {
    icon: Paintbrush,
    title: "Modern Design",
    description:
      "Clean interfaces built with current best practices and tooling.",
  },
  {
    icon: Shield,
    title: "Security Focused",
    description:
      "Privacy-first approach with no telemetry and secure defaults.",
  },
  {
    icon: RefreshCw,
    title: "Auto Updates",
    description:
      "Seamless updates so you're always running the latest version.",
  },
  {
    icon: Settings,
    title: "Highly Configurable",
    description: "Fine-tune every aspect to fit your exact workflow and needs.",
  },
];

export function Features() {
  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex max-w-5xl min-w-0 flex-col items-center gap-6 text-center">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold tracking-tight lg:text-3xl">
            Why VOMLabs?
          </h2>
          <p className="text-muted-foreground text-sm leading-relaxed">
            What sets us apart.
          </p>
        </div>
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                className="border-border bg-muted flex flex-col items-start gap-2 border p-4 text-left"
                key={feature.title}
              >
                <Icon className="text-primary size-5" />
                <div className="space-y-0.5">
                  <h3 className="text-sm font-medium">{feature.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">
                    {feature.description}
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
