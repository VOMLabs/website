import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, SectionRow } from "@/components/ui/section";

export const Route = createFileRoute("/privacy")({ component: PrivacyPage });

function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      description="How VOMLabs handles your data."
    >
      <SectionRow index="01" title="Our Commitment">
        <p>
          VOMLabs is committed to protecting your privacy. We adhere to the
          principle of data minimization and collect only what is necessary to
          improve our software.
        </p>
      </SectionRow>
      <SectionRow index="02" title="Data Collection">
        <h3 className="text-foreground font-mono text-xs tracking-[0.15em] uppercase">
          Anonymous Usage Statistics
        </h3>
        <p>
          VOMLabs collects anonymous usage statistics from its Minecraft plugins
          via FastStats (faststats.dev). This data is limited to non-personal
          information such as plugin version and server platform, and is used
          solely to understand software adoption and guide development efforts.
        </p>
        <h3 className="text-foreground font-mono text-xs tracking-[0.15em] uppercase">
          No Personal Tracking
        </h3>
        <p>
          The FastStats telemetry described above is anonymous — VOMLabs does
          not collect personal data, browsing behavior on this website, or
          individual player information. We do not use cookies, analytics
          scripts, or similar tracking mechanisms on this website.
        </p>
        <h3 className="text-foreground font-mono text-xs tracking-[0.15em] uppercase">
          Opt-Out Policy
        </h3>
        <p>
          Anonymous usage statistics collection is enabled by default in plugins
          that implement it. Where supported, this feature may be disabled
          through the plugin&apos;s configuration files. Refer to the respective
          plugin&apos;s documentation for opt-out instructions.
        </p>
      </SectionRow>
      <SectionRow index="03" title="Your Rights">
        <p>
          To the extent that VOMLabs processes any personal data, you retain the
          right to access, rectify, or request deletion of such data. Because
          our data collection is limited to anonymous statistics, these rights
          will typically have no practical application. If you contact VOMLabs
          directly, any personal information you provide will be used
          exclusively for the purpose of responding to your inquiry and will not
          be retained longer than necessary.
        </p>
      </SectionRow>
      <SectionRow index="04" title="Contact">
        <p>
          For privacy-related inquiries, please contact us at:{" "}
          <a
            className="hover:text-foreground underline underline-offset-2"
            href="mailto:privacy@vomlabs.com"
          >
            privacy@vomlabs.com
          </a>
          .
        </p>
      </SectionRow>
    </LegalPage>
  );
}
