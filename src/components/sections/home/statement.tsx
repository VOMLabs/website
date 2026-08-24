import { Section } from "@/components/ui/section";

/**
 * Editorial statement band. Re-uses existing copy from the old sections.
 */
export function Statement() {
  return (
    <Section eyebrow="WHO WE ARE">
      <div className="max-w-4xl">
        <p className="text-foreground text-2xl font-medium tracking-[-0.02em] md:text-4xl">
          We create high-performance tools, premium libraries, and
          developer-focused solutions — crafted with care and built to last.
        </p>
        <p className="lead mt-6 max-w-2xl">
          We are a team of developers building high-quality, modern software and
          developer-focused solutions at affordable prices.
        </p>
      </div>
    </Section>
  );
}
