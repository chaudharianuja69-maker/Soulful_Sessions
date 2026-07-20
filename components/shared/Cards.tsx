"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/utils/animations";

interface ConcernCardProps {
  title: string;
  description: string;
  icon: string;
  color?: string;
  index?: number;
}

function ConcernIcon({ name }: { name: string }) {
  const Icon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return <LucideIcons.Heart className="h-8 w-8" />;
  return <Icon className="h-8 w-8" />;
}

export function ConcernCard({
  title,
  description,
  icon,
  color = "#006837",
  index = 0,
}: ConcernCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
    >
      <div
        className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 transition-opacity group-hover:opacity-20"
        style={{ backgroundColor: color }}
      />

      <div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-transform group-hover:scale-105"
        style={{ backgroundColor: `${color}15`, color }}
      >
        <ConcernIcon name={icon} />
      </div>

      <h3 className="font-heading text-lg font-semibold text-dark-text">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-gray-text">
        {description}
      </p>
    </motion.div>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  index?: number;
}

export function FeatureCard({ title, description, icon, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4 }}
      className="rounded-xl border border-primary/10 bg-white p-6 text-center shadow-sm transition-all hover:border-primary/25 hover:shadow-md"
    >
      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-primary">
        <ConcernIcon name={icon} />
      </div>
      <h3 className="font-heading text-lg font-semibold text-dark-text">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-text">{description}</p>
    </motion.div>
  );
}
