import fs from "fs";
import path from "path";

export function writeFile(targetPath: string, content: string) {
  const dir = path.dirname(targetPath);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(targetPath, content, "utf8");
}

export function fileExists(filePath: string): boolean {
  return fs.existsSync(filePath);
}

