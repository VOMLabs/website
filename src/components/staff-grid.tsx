import type { StaffMember } from "@/lib/staff";
import { StaffCard } from "./staff-card";

interface StaffGridProps {
  staff: StaffMember[];
  discordServer: string;
}

export function StaffGrid({ staff, discordServer }: StaffGridProps) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {staff.map((member) => (
        <StaffCard
          key={member.id}
          member={member}
          discordServer={discordServer}
        />
      ))}
    </div>
  );
}
