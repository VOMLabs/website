import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/sections/home/about";
import { BecomeDev } from "@/components/sections/home/become-dev";
import { Engineers } from "@/components/sections/home/engineers";
import { Faq } from "@/components/sections/home/faq";
import { Features } from "@/components/sections/home/features";
import { Hero } from "@/components/sections/home/hero";

export const Route = createFileRoute("/")({ component: App });

function App() {
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
        <Faq />
      </div>
    </div>
  );
}
