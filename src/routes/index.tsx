import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/sections/home/about";
import { BecomeDev } from "@/components/sections/home/become-dev";
import { Engineers } from "@/components/sections/home/engineers";
import { Faq } from "@/components/sections/home/faq";
import { Features } from "@/components/sections/home/features";
import { Hero } from "@/components/sections/home/hero";
import { getHomeFaqs } from "@/lib/db/functions";
import { createLogger } from "@/lib/logger";

const logger = createLogger("HomePage");

export const Route = createFileRoute("/")({
  loader: async () => {
    try {
      const { faqs } = await getHomeFaqs();
      logger.debug("FAQs loaded for homepage", { count: faqs.length });
      return { faqs };
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
