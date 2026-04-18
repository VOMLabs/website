import { readFileSync } from "node:fs";
import { join } from "node:path";
import yaml from "js-yaml";

export interface SocialLinks {
  github?: string;
  youtube?: string;
  discord?: string;
  email?: string;
  website?: string;
  twitter?: string;
}

export interface StaffMember {
  id: number;
  name: string;
  role: string;
  description: string;
  social?: SocialLinks;
  avatar: string;
}

interface StaffData {
  discordServer?: string;
  staff: StaffMember[];
}

let cachedData: StaffData | null = null;

export function getStaffData(): StaffData {
  if (cachedData) return cachedData;

  const filePath = join(process.cwd(), "src", "data", "staff.yaml");
  const fileContents = readFileSync(filePath, "utf8");
  const data = yaml.load(fileContents) as StaffData;
  cachedData = data;
  return data;
}

export function getStaff(): StaffMember[] {
  return getStaffData().staff;
}

export function getDiscordServer(): string {
  return getStaffData().discordServer || "https://dc.vomlabs.de";
}
