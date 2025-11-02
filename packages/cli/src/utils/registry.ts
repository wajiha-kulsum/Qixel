import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export type RegistryFile = {
  name: string;
  content: string;
};

export type RegistryItem = {
  name: string;
  slug: string;
  description?: string;
  category: string;
  dependencies?: string[];
  registryDependencies?: string[];
  files: RegistryFile[];
  type: string;
};

export function loadRegistry(): RegistryItem[] {
  const registryPath = path.resolve(__dirname, "../../../components/registry.json");
  const raw = fs.readFileSync(registryPath, "utf8");
  return JSON.parse(raw);
}

export function findBySlug(slug: string): RegistryItem | undefined {
  return loadRegistry().find((e) => e.slug === slug);
}

