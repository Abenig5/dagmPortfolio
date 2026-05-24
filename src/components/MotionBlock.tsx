"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  duration?: number;
};

const offsetByDirection = {
  up: { x: 0, y: 42 },
  down: { x: 0, y: -42 },
  left: { x: 54, y: 0 },
  right: { x: -54, y: 0 }
};

const MotionBlock = ({ children, className, delay = 0, direction = "up", duration = 0.7 }: MotionBlockProps) => {
  const offset = offsetByDirection[direction];

  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, x: offset.x, y: offset.y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.22, margin: "0px 0px -12% 0px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export default MotionBlock;
