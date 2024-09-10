"use client";
import { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function FadeImg({
  direction = "up",
  className,

  framerProps = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { type: "spring" } },
  },

  text
}) {
  const directionOffset = useMemo(() => {
    const map = { up: 10, down: -10, left: -10, right: 10 };
    return map[direction];
  }, [direction]);

  const axis = direction === "up" || direction === "down" ? "y" : "x";

  const FADE_ANIMATION_VARIANTS = useMemo(() => {
    const { hidden, show, ...rest } = framerProps;

    return {
      ...rest,
      hidden: {
        ...(hidden ?? {}),
        opacity: hidden?.opacity ?? 0,
        [axis]: hidden?.[axis] ?? directionOffset,
      },
      show: {
        ...(show ?? {}),
        opacity: show?.opacity ?? 1,
        [axis]: show?.[axis] ?? 0,
      },
    };
  }, [directionOffset, axis, framerProps]);

  return (
    (<motion.div
      initial="hidden"
      className="ml-4"
      animate="show"
      viewport={{ once: true }}
      variants={FADE_ANIMATION_VARIANTS}>
      <motion.span className={className}><Image className="opacity-100" src={text} alt="image" height={400} width={400}/></motion.span>
    </motion.div>)
  );
}
