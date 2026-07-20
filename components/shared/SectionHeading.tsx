"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { fadeUp, viewportConfig } from "@/utils/animations";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
  light?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = true,
  className,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      className={cn("mb-12 md:mb-16", centered && "text-center", className)}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 text-sm font-semibold uppercase tracking-widest",
            light ? "text-accent" : "text-primary"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl",
          light ? "text-white" : "text-dark-text"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 max-w-2xl text-lg leading-relaxed",
            centered && "mx-auto",
            light ? "text-white/85" : "text-gray-text"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
