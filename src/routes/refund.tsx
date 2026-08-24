import { createFileRoute } from "@tanstack/react-router";

import { LegalPage, SectionRow } from "@/components/ui/section";

export const Route = createFileRoute("/refund")({ component: RefundPage });

function RefundPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Return and Refund Policy"
      description="Information about returns, refunds, and cancellations."
    >
      <SectionRow index="01" title="Open Source Software">
        <p>
          Most VOMLabs software is provided as open source and is available free
          of charge. Because there is no monetary transaction for these
          products, standard return and refund rights do not apply. You may
          discontinue use at any time without penalty.
        </p>
      </SectionRow>
      <SectionRow index="02" title="Commercial Licenses">
        <p>
          If you have purchased a commercial license or paid service from
          VOMLabs and believe you are entitled to a refund, please contact us
          within 14 days of purchase. Each request will be evaluated on a
          case-by-case basis. Refunds are not guaranteed and are granted at the
          sole discretion of VOMLabs.
        </p>
      </SectionRow>
      <SectionRow index="03" title="Processing">
        <p>
          Approved refunds will be processed within 14 business days using the
          original payment method. VOMLabs is not responsible for any fees
          imposed by payment processors in connection with the transaction.
        </p>
      </SectionRow>
      <SectionRow index="04" title="Contact">
        <p>
          For return and refund inquiries, contact us at:{" "}
          <a
            className="hover:text-foreground underline underline-offset-2"
            href="mailto:support@vomlabs.com"
          >
            support@vomlabs.com
          </a>
          .
        </p>
      </SectionRow>
    </LegalPage>
  );
}
