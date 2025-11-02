#!/usr/bin/env node
import { Command } from "commander";
import { initCommand } from "./commands/init.js";
import { addCommand } from "./commands/add.js";
import { listCommand } from "./commands/list.js";

const program = new Command();

program
  .name("qixel")
  .description("Add animated components to your React project")
  .version("0.1.0");

program
  .command("init")
  .description("Initialize your project for Qixel components")
  .action(async () => {
    await initCommand();
  });

program
  .command("list")
  .description("List all available components")
  .action(async () => {
    await listCommand();
  });

program
  .command("add")
  .description("Add a component to your project")
  .argument("<component>", "component slug to add")
  .action(async (component: string) => {
    await addCommand(component);
  });

program.parse();
