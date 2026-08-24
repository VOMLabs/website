import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@/components/link";
import { LegalPage, SectionRow } from "@/components/ui/section";

export const Route = createFileRoute("/legal")({ component: LegalPageInner });

function LegalPageInner() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Legal Notice"
      description="Publisher information and statutory disclosures pursuant to § 5 E-Commerce Act (ECG) and § 25 Media Act (MedienG), provided on behalf of the project by Tobias Ertl."
    >
      <SectionRow index="01" title="Publisher / Impressum">
        <div className="flex gap-2">
          <span className="text-muted-foreground shrink-0 text-sm">
            Project Leads:
          </span>
          <span className="text-foreground text-sm">
            <a
              className="hover:text-foreground underline underline-offset-2"
              href="mailto:tobics@vomlabs.com"
            >
              Tobics Ertl
            </a>
            {", "}
            <a
              className="hover:text-foreground underline underline-offset-2"
              href="mailto:jakob@vomlabs.com"
            >
              Jakob
            </a>
            {" & "}
            <a
              className="hover:text-foreground underline underline-offset-2"
              href="mailto:itzzmateo@vomlabs.com"
            >
              Mateo Sauer
            </a>
          </span>
        </div>
        <Row label="Media Owner">Tobias Ertl (VOMLabs)</Row>
        <Row label="Address">Ressavarstraße 33, 8230 Hartberg, Austria</Row>
        <Row external href="https://vomlabs.com" label="Website">
          vomlabs.com
        </Row>
        <Row href="mailto:support@vomlabs.com" label="Support">
          support@vomlabs.com
        </Row>
        <Row href="mailto:legal@vomlabs.com" label="Legal Contact">
          legal@vomlabs.com
        </Row>
        <Row href="tel:+436643811172" label="Phone">
          +43 664 3811172
        </Row>
        <p className="text-muted-foreground mt-1 text-xs leading-relaxed">
          * Legal representations, statutory compliance details, address
          information, and official correspondence are provided by and processed
          through Tobias Ertl (Tobics).
        </p>
      </SectionRow>
      <SectionRow index="02" title="Disclaimer">
        <p>
          Minecraft is a trademark of Microsoft Corporation and Mojang AB. This
          project is not endorsed by, sponsored by, or affiliated with Microsoft
          Corporation or Mojang AB.
        </p>
        <p>
          VOMLabs software is provided on an "as-is" and "as available" basis
          without any warranty of any kind, whether express or implied,
          including but not limited to the implied warranties of
          merchantability, fitness for a particular purpose, or
          non-infringement. The user assumes all risk arising from the use of
          the software.
        </p>
      </SectionRow>
      <SectionRow index="03" title="Telemetry">
        <p>
          VOMLabs Minecraft plugins collect anonymous usage statistics via
          FastStats (faststats.dev) to facilitate ongoing improvement and
          quality assurance. No personally identifiable information is gathered
          through this telemetry. For further information, please refer to our{" "}
          <Link
            className="hover:text-foreground underline underline-offset-2"
            to="/privacy"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </SectionRow>
      <SectionRow index="04" title="Open Source">
        <p>
          Most VOMLabs projects and this website are open source. The source
          code and applicable licenses can be accessed on{" "}
          <a
            className="hover:text-foreground underline underline-offset-2"
            href="https://github.com/vomlabs"
            rel="noopener noreferrer"
            target="_blank"
          >
            GitHub
          </a>
          .
        </p>
      </SectionRow>
    </LegalPage>
  );
}

function Row({
  label,
  href,
  external,
  children,
}: {
  label: string;
  href?: string;
  external?: boolean;
  children: React.ReactNode;
}) {
  const content = href ? (
    <a
      className="hover:text-foreground underline underline-offset-2"
      href={href}
      rel={external ? "noopener noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
    </a>
  ) : (
    children
  );
  return (
    <div className="flex gap-2">
      <span className="text-muted-foreground shrink-0 text-sm">{label}:</span>
      <span className="text-foreground text-sm">{content}</span>
    </div>
  );
}
