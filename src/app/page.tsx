import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { StaffGrid } from "@/components/staff-grid";
import { getDiscordServer, getStaff } from "@/lib/staff";

export default function Home() {
  const staff = getStaff();
  const discordServer = getDiscordServer();

  return (
    <>
      <Navbar />
      <main className="flex-1 mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <Hero />
        <div id="staff" className="mt-16">
          <StaffGrid staff={staff} discordServer={discordServer} />
        </div>
      </main>
    </>
  );
}
