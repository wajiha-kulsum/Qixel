import chalk from "chalk";
import { loadRegistry } from "../utils/registry.js";

export async function listCommand() {
  const registry = loadRegistry();

  console.log("");
  console.log(chalk.cyan("Available components:"));
  console.log("");

  const grouped: Record<string, any[]> = {};
  for (const item of registry) {
    if (!grouped[item.category]) grouped[item.category] = [];
    grouped[item.category].push(item);
  }

  for (const [category, items] of Object.entries(grouped)) {
    console.log(chalk.bold(category.toUpperCase()));
    for (const item of items) {
      console.log(`  ${chalk.green(item.slug)} - ${item.description || ""}`);
    }
    console.log("");
  }

  console.log(`Run ${chalk.cyan("qixel add <component>")} to add a component.`);
}
