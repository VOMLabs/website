import ArrowRotateRight from "@gravity-ui/icons/ArrowRotateRight";
import Code from "@gravity-ui/icons/Code";
import Gear from "@gravity-ui/icons/Gear";
import Paintbrush from "@gravity-ui/icons/Paintbrush";
import Shield from "@gravity-ui/icons/Shield";
import Thunderbolt from "@gravity-ui/icons/Thunderbolt";

import { type IconComponent } from "@/components/icons";
import { Section } from "@/components/ui/section";

const features: {
  icon: IconComponent;
  title: string;
  description: string;
}[] = [
  {
    icon: Code,
    title: "Affordable Pricing",
    description: "High-quality products at prices that won't break the bank.",
  },
  {
    icon: Thunderbolt,
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
      "Privacy-first approach — only anonymous, opt-out usage statistics — with secure defaults.",
  },
  {
    icon: ArrowRotateRight,
    title: "Auto Updates",
    description:
      "Seamless updates so you're always running the latest version.",
  },
  {
    icon: Gear,
    title: "Highly Configurable",
    description: "Fine-tune every aspect to fit your exact workflow and needs.",
  },
];

export function Features() {
  return (
    <Section
      id="features"
      eyebrow="WHY VOMLABS"
      title="Why VOMLabs?"
      description="What sets us apart."
    >
      <ul className="bg-border grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <li
              className="group bg-background hover:bg-muted/40 p-6 transition-colors duration-200"
              key={feature.title}
            >
              <Icon className="text-lime-dim dark:text-lime size-4" />
              <h3 className="mt-3 text-base font-medium tracking-[-0.01em]">
                {feature.title}
              </h3>
              <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                {feature.description}
              </p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
