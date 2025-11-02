"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
  stiffness?: number;
  damping?: number;
}

export function MagneticButton({
  children,
  className = "",
  strength = 0.3,
  stiffness = 150,
  damping = 15,
}: MagneticButtonProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * strength;
    const y = (e.clientY - rect.top - rect.height / 2) * strength;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.button
      className={`px-6 py-3 bg-blue-600 text-white rounded-lg font-medium ${className}`}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness, damping }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.button>
  );
}


