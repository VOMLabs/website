import { createFileRoute } from "@tanstack/react-router";
import { desc } from "drizzle-orm";

import { About } from "@/components/sections/home/about";
import { BecomeDev } from "@/components/sections/home/become-dev";
import { Engineers } from "@/components/sections/home/engineers";
import { Faq } from "@/components/sections/home/faq";
import { Features } from "@/components/sections/home/features";
import { Hero } from "@/components/sections/home/hero";
import { db } from "@/lib/db";
import { faqs } from "@/lib/db/schema";
import { createLogger } from "@/lib/logger";

const logger = createLogger("HomePage");

export const Route = createFileRoute("/")({
  loader: async () => {
    try {
      const items = await db
        .select()
        .from(faqs)
        .orderBy(desc(faqs.createdAt))
        .limit(7);
      logger.debug("FAQs loaded for homepage", { count: items.length });
      return { faqs: items };
    } catch (error) {
      logger.error("Failed to load FAQs for homepage", {
        error: error instanceof Error ? error.message : String(error),
      });
      return { faqs: [] };
    }
  },
  component: App,
});

function App() {
  const { faqs } = Route.useLoaderData();
  return (
    <div className="flex flex-col">
      <Hero />
      <div id="features">
        <Features />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="become-a-developer">
        <BecomeDev />
      </div>
      <div id="engineers">
        <Engineers />
      </div>
      <div id="faq">
        <Faq faqs={faqs} />
      </div>
    </div>
  );
}
