import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 36, filter: "blur(6px)" },
  show: (i: number = 0) => ({
    opacity: 1, y: 0, filter: "blur(0px)",
    transition: { duration: 0.9, ease: [0.2, 0.7, 0.2, 1], delay: i * 0.08 },
  }),
};

export function Reveal({
  children, delay = 0, className = "", as = "div",
}: { children: ReactNode; delay?: number; className?: string; as?: "div" | "section" | "li" | "h2" | "p" }) {
  const Tag = motion[as] as typeof motion.div;
  return (
    <Tag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      custom={delay}
    >
      {children}
    </Tag>
  );
}