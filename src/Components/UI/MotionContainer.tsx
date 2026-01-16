// src/components/ui/MotionContainer.tsx
'use client'

import { motion, Variants } from "framer-motion";

interface MotionContainerProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  stagger?: boolean;
}

const MotionContainer = ({
  children,
  className = "",
  variants,
  stagger = true,
}: MotionContainerProps) => {
  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.div>
  );
};

export default MotionContainer;
