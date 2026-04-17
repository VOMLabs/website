import yaml from "js-yaml";
import { readFileSync } from "node:fs";
import { join } from "node:path";

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

export function getStaff(): StaffMember[] {
  const filePath = join(process.cwd(), "src", "data", "staff.yaml");
  const fileContents = readFileSync(filePath, "utf8");
  return yaml.load(fileContents) as StaffMember[];
}