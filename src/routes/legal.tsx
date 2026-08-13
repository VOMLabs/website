import { createFileRoute } from "@tanstack/react-router";

import { Link } from "@/components/link";

export const Route = createFileRoute("/legal")({ component: LegalPage });

function LegalPage() {
  return (
    <main className="flex flex-col items-center px-6 py-24">
      <div className="flex w-full max-w-2xl flex-col gap-8">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold tracking-tight lg:text-4xl">
            Legal Notice
          </h1>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Publisher information and statutory disclosures pursuant to § 5
            E-Commerce Act (ECG) and § 25 Media Act (MedienG), provided on
            behalf of the project by Tobias Ertl.
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <Section title="Publisher / Impressum">
            <div className="flex gap-2">
              <span className="text-muted-foreground shrink-0 text-xs">
                Project Leads:
              </span>
              <span className="text-xs">
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
            <p className="text-muted-foreground mt-1 text-[11px] leading-relaxed">
              * Legal representations, statutory compliance details, address
              information, and official correspondence are provided by and
              processed through Tobias Ertl (Tobics).
            </p>
          </Section>

          <Section title="Disclaimer">
            <p className="text-muted-foreground text-xs leading-relaxed">
              Minecraft is a trademark of Microsoft Corporation and Mojang AB.
              This project is not endorsed by, sponsored by, or affiliated with
              Microsoft Corporation or Mojang AB.
            </p>
            <p className="text-muted-foreground text-xs leading-relaxed">
              VOMLabs software is provided on an "as-is" and "as available"
              basis without any warranty of any kind, whether express or
              implied, including but not limited to the implied warranties of
              merchantability, fitness for a particular purpose, or
              non-infringement. The user assumes all risk arising from the use
              of the software.
            </p>
          </Section>

          <Section title="Telemetry">
            <p className="text-muted-foreground text-xs leading-relaxed">
              VOMLabs software may collect anonymous usage statistics to
              facilitate ongoing improvement and quality assurance. No
              personally identifiable information is gathered through this
              telemetry. For further information, please refer to our{" "}
              <Link
                className="hover:text-foreground underline underline-offset-2"
                to="/privacy"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </Section>

          <Section title="Open Source">
            <p className="text-muted-foreground text-xs leading-relaxed">
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
          </Section>
        </div>
      </div>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-border bg-muted hover:border-foreground/20 border p-4 transition-colors duration-150">
      <h2 className="mb-3 text-sm font-semibold">{title}</h2>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
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
      <span className="text-muted-foreground shrink-0 text-xs">{label}:</span>
      <span className="text-xs">{content}</span>
    </div>
  );
}
