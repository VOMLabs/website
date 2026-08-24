import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, SectionRow } from "@/components/ui/section";

export const Route = createFileRoute("/disclaimer")({
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Disclaimer"
      description="Important notices regarding VOMLabs software and this website."
    >
      <SectionRow index="01" title="General Information">
        <p>
          The information provided by VOMLabs on this website and through its
          software is for general informational and educational purposes only.
          All information is provided in good faith, but VOMLabs makes no
          representation or warranty of any kind regarding its accuracy,
          adequacy, or completeness.
        </p>
      </SectionRow>
      <SectionRow index="02" title="No Warranty">
        <p>
          VOMLabs software is distributed on an "as-is" and "as available" basis
          without any warranty of any kind, whether express or implied. This
          includes, but is not limited to, the implied warranties of
          merchantability, fitness for a particular purpose, and
          non-infringement. The entire risk arising from the use of the software
          rests with the user.
        </p>
      </SectionRow>
      <SectionRow index="03" title="Minecraft Disclaimer">
        <p>
          Minecraft is a trademark of Microsoft Corporation and Mojang AB.
          VOMLabs is an independent project and is not affiliated with, endorsed
          by, sponsored by, or otherwise associated with Microsoft Corporation
          or Mojang AB. Any references to Minecraft on this website or within
          VOMLabs software are purely descriptive and imply no official
          association.
        </p>
      </SectionRow>
      <SectionRow index="04" title="External Links">
        <p>
          This website may contain links to external websites or services that
          are not provided or maintained by VOMLabs. VOMLabs does not control
          and assumes no responsibility for the content, privacy policies, or
          practices of any third-party websites.
        </p>
      </SectionRow>
      <SectionRow index="05" title="Limitation of Liability">
        <p>
          To the fullest extent permitted by applicable law, VOMLabs and its
          contributors shall not be liable for any direct, indirect, incidental,
          special, consequential, or exemplary damages arising from your use of
          VOMLabs software or this website, including but not limited to data
          loss, server downtime, or business interruption.
        </p>
      </SectionRow>
      <SectionRow index="06" title="Contact">
        <p>
          For questions about this Disclaimer, contact us at:{" "}
          <a
            className="hover:text-foreground underline underline-offset-2"
            href="mailto:legal@vomlabs.com"
          >
            legal@vomlabs.com
          </a>
          .
        </p>
      </SectionRow>
    </LegalPage>
  );
}
