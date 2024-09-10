"use client";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const BlurIn = ({ word, className, variant, duration = 1 }) => {
  const defaultVariants = {
    hidden: { filter: "blur(10px)", opacity: 0 },
    visible: { filter: "blur(0px)", opacity: 1 },
  };
  const combinedVariants = variant || defaultVariants;

  return (
    <motion.p
      initial="hidden"
      animate="visible"
      transition={{ duration }}
      variants={combinedVariants}
      className={cn(className, "font-display text-start text-sm font-light tracking-[-0.02em] drop-shadow-sm md:leading-5")}
    >
      {word}
    </motion.p>
  );
};

export default BlurIn;
