"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/animations/fade";
import { cn } from "@/lib/utils";

type MotionBlockProps = {
  children: ReactNode;
  className?: string;
};

const MotionBlock = ({ children, className }: MotionBlockProps) => {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};

export default MotionBlock;
