import chalk from "chalk";
import ora from "ora";
import path from "path";
import fs from "fs";
import { findBySlug } from "../utils/registry.js";
import { writeFile, fileExists } from "../utils/fs.js";
import { execSync } from "child_process";

export async function addCommand(slug: string) {
  const spinner = ora(`Adding ${slug}...`).start();

  const item = findBySlug(slug);
  if (!item) {
    spinner.fail(chalk.red(`Component not found: ${slug}`));
    process.exit(1);
  }

  // Load config
  const configPath = path.resolve(process.cwd(), "qixel.json");
  let config: any = { componentsPath: "./src/components/qixel" };
  
  if (fileExists(configPath)) {
    config = JSON.parse(fs.readFileSync(configPath, "utf8"));
  } else {
    spinner.warn("No qixel.json found. Run 'qixel init' first. Using default path.");
  }

  const targetDir = path.resolve(process.cwd(), config.componentsPath, item.category);

  // Write component files
  for (const file of item.files) {
    const targetPath = path.join(targetDir, file.name);
    writeFile(targetPath, file.content);
  }

  spinner.succeed(chalk.green(`✔ Added ${item.name}`));

  // Install dependencies
  if (item.dependencies && item.dependencies.length > 0) {
    console.log("");
    const depsSpinner = ora("Installing dependencies...").start();
    try {
      const pkgManager = fileExists(path.resolve(process.cwd(), "package-lock.json"))
        ? "npm"
        : fileExists(path.resolve(process.cwd(), "yarn.lock"))
        ? "yarn"
        : fileExists(path.resolve(process.cwd(), "pnpm-lock.yaml"))
        ? "pnpm"
        : "npm";

      const installCmd =
        pkgManager === "yarn"
          ? `yarn add ${item.dependencies.join(" ")}`
          : pkgManager === "pnpm"
          ? `pnpm add ${item.dependencies.join(" ")}`
          : `npm install ${item.dependencies.join(" ")}`;

      execSync(installCmd, { stdio: "inherit" });
      depsSpinner.succeed(chalk.green("✔ Dependencies installed"));
    } catch (error) {
      depsSpinner.fail(chalk.red("Failed to install dependencies"));
      console.log(chalk.yellow(`\nPlease install manually: ${item.dependencies.join(", ")}`));
    }
  }

  console.log("");
  console.log(chalk.cyan(`Component added to:`));
  console.log(chalk.gray(`  ${path.relative(process.cwd(), targetDir)}`));
}
