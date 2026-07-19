"use client";

import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "@/components/link";
import { createLogger } from "@/lib/logger";

const logger = createLogger("Faq");

export function Faq({
  faqs,
}: {
  faqs: { id: string; question: string; answer: string }[];
}) {
  const [open, setOpen] = useState<string | null>(null);

  useEffect(() => {
    logger.debug("FAQ section mounted", { count: faqs.length });
  }, [faqs.length]);

  return (
    <section className="flex justify-center px-6 py-16 lg:py-24">
      <div className="flex min-w-0 max-w-2xl flex-col items-center gap-6 text-center">
        <h2 className="font-bold text-2xl tracking-tight lg:text-3xl">FAQ.</h2>
        <div className="flex w-full flex-col gap-2 text-left">
          {faqs.map((faq) => {
            const isOpen = open === faq.id;
            return (
              <div className="border border-border bg-muted" key={faq.id}>
                <button
                  className="flex w-full items-center justify-between p-4 text-left"
                  onClick={() => {
                    try {
                      const next = isOpen ? null : faq.id;
                      logger.debug("FAQ item toggled", {
                        id: faq.id,
                        question: faq.question,
                        isOpen: !isOpen,
                      });
                      setOpen(next);
                    } catch (error) {
                      logger.error("Failed to toggle FAQ item", {
                        id: faq.id,
                        error:
                          error instanceof Error
                            ? error.message
                            : String(error),
                      });
                    }
                  }}
                  type="button"
                >
                  <span className="font-medium text-sm">{faq.question}</span>
                  <ChevronDown
                    className={`size-4 shrink-0 text-muted-foreground transition-transform duration-150 ${isOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-[max-height] duration-150 ${isOpen ? "max-h-48" : "max-h-0"}`}
                >
                  <div className="px-4 pb-4">
                    <p className="text-muted-foreground text-xs leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <Link
          className="text-muted-foreground text-sm underline-offset-4 hover:text-foreground hover:underline"
          to="/faq"
        >
          View all FAQ &rarr;
        </Link>
      </div>
    </section>
  );
}
