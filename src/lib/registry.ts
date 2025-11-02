import { type Registry } from "./types";
import type { ComponentType } from "react";

const magneticButtonCode = [
  '"use client";',
  '',
  'import { motion } from "framer-motion";',
  'import { useState } from "react";',
  '',
  'interface MagneticButtonProps {',
  '  children: React.ReactNode;',
  '  className?: string;',
  '  strength?: number;',
  '  stiffness?: number;',
  '  damping?: number;',
  '}',
  '',
  'export function MagneticButton({',
  '  children,',
  '  className = "",',
  '  strength = 0.3,',
  '  stiffness = 150,',
  '  damping = 15,',
  '}: MagneticButtonProps) {',
  '  const [position, setPosition] = useState({ x: 0, y: 0 });',
  '',
  '  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {',
  '    const rect = e.currentTarget.getBoundingClientRect();',
  '    const x = (e.clientX - rect.left - rect.width / 2) * strength;',
  '    const y = (e.clientY - rect.top - rect.height / 2) * strength;',
  '    setPosition({ x, y });',
  '  };',
  '',
  '  const handleMouseLeave = () => {',
  '    setPosition({ x: 0, y: 0 });',
  '  };',
  '',
  '  return (',
  '    <motion.button',
  '      className={"px-6 py-3 bg-blue-600 text-white rounded-lg font-medium " + className}',
  '      animate={{ x: position.x, y: position.y }}',
  '      transition={{ type: "spring", stiffness, damping }}',
  '      onMouseMove={handleMouseMove}',
  '      onMouseLeave={handleMouseLeave}',
  '    >',
  '      {children}',
  '    </motion.button>',
  '  );',
  '}',
].join('\n');

export const registry: Registry = [
  {
    slug: "magnetic-button",
    name: "Magnetic Button",
    category: "buttons",
    description: "Button subtly follows the cursor for a magnetic feel.",
    modulePath: "@/components/motioncraft/buttons/magnetic-button",
    exportName: "MagneticButton",
    sourceCode: magneticButtonCode,
    install: "npm i framer-motion",
    customization: "Tweak strength, stiffness, damping to change feel.",
    dependencies: ["framer-motion"],
    tags: ["interactive", "hover", "button"],
    props: [
      { name: "children", type: "React.ReactNode", required: true, description: "Button content" },
      { name: "className", type: "string", description: "Additional Tailwind classes" },
      { name: "strength", type: "number", defaultValue: "0.3", description: "Magnetic pull multiplier" },
      { name: "stiffness", type: "number", defaultValue: "150", description: "Spring stiffness" },
      { name: "damping", type: "number", defaultValue: "15", description: "Spring damping" },
    ],
    examples: [
      {
        title: "Default",
        code: "<MagneticButton>Hover Me!</MagneticButton>",
      },
      {
        title: "Soft Feel",
        code: "<MagneticButton strength={0.15} stiffness={120} damping={20}>Soft</MagneticButton>",
      },
    ],
  },
];

export async function loadComponentBySlug(slug: string): Promise<ComponentType<any> | null> {
  switch (slug) {
    case "magnetic-button": {
      const mod = await import("@/components/motioncraft/buttons/magnetic-button");
      return mod.MagneticButton as ComponentType<any>;
    }
    default:
      return null;
  }
}


