import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, SectionRow } from "@/components/ui/section";

export const Route = createFileRoute("/cookies")({ component: CookiesPage });

function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      description="How VOMLabs uses cookies and similar technologies."
    >
      <SectionRow index="01" title="Our Approach">
        <p>
          VOMLabs is committed to a privacy-first experience. This website does
          not use cookies, tracking scripts, or similar technologies for
          analytics or advertising. The only exception is a functional cookie (
          <code className="text-foreground">sidebar_state</code>) used by the
          admin area to remember your sidebar preference — and as the website
          develops, additional cookies may be introduced; this policy will be
          updated to reflect any such use.
        </p>
      </SectionRow>
      <SectionRow index="02" title="What Are Cookies">
        <p>
          Cookies are small text files stored on your device by a website. They
          are commonly used for session management, personalization, and
          tracking. VOMLabs does not use cookies for tracking purposes, and any
          cookies we do set are limited to functional preferences.
        </p>
      </SectionRow>
      <SectionRow index="03" title="Third-Party Services">
        <p>
          This website does not embed third-party services that would set
          cookies. Our Minecraft plugins use FastStats (faststats.dev) for
          anonymous usage statistics, which does not rely on cookies and
          collects no personally identifiable information. Refer to our{" "}
          <a
            className="hover:text-foreground underline underline-offset-2"
            href="/privacy"
          >
            Privacy Policy
          </a>{" "}
          for details.
        </p>
      </SectionRow>
      <SectionRow index="04" title="Updates">
        <p>
          This Cookie Policy may be updated if our data practices change. Any
          revisions will be posted on this page.
        </p>
      </SectionRow>
      <SectionRow index="05" title="Contact">
        <p>
          For questions about this Cookie Policy, contact us at:{" "}
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
