import chalk from "chalk";
import prompts from "prompts";
import path from "path";
import { writeFile } from "../utils/fs.js";

export async function initCommand() {
  console.log(chalk.cyan("Welcome to Qixel!"));
  console.log("");

  const response = await prompts([
    {
      type: "text",
      name: "componentsPath",
      message: "Where should components be installed?",
      initial: "./src/components/qixel",
    },
  ]);

  if (!response.componentsPath) {
    console.log(chalk.red("Installation cancelled."));
    process.exit(1);
  }

  const configPath = path.resolve(process.cwd(), "qixel.json");
  const config = {
    componentsPath: response.componentsPath,
  };

  writeFile(configPath, JSON.stringify(config, null, 2));

  console.log("");
  console.log(chalk.green("✔ Qixel initialized!"));
  console.log("");
  console.log("Next steps:");
  console.log("  1. Run", chalk.cyan("qixel list"), "to see available components");
  console.log("  2. Run", chalk.cyan("qixel add magnetic-button"), "to add a component");
}
