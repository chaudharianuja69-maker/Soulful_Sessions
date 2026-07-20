"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp } from "@/utils/animations";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  href?: string;
  features?: string[];
  className?: string;
  index?: number;
}

function CardIcon({ name }: { name: string }) {
  const Icon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return <LucideIcons.Heart className="h-7 w-7" />;
  return <Icon className="h-7 w-7" />;
}

export function ServiceCard({
  title,
  description,
  icon,
  href,
  features,
  className,
  index = 0,
}: ServiceCardProps) {
  const content = (
    <motion.div
      variants={fadeUp}
      custom={index}
      whileHover={{ y: -4, transition: { duration: 0.3 } }}
      className={cn(
        "group flex h-full flex-col rounded-xl border border-primary/10 bg-white p-6 shadow-sm transition-all hover:border-primary/25 hover:shadow-md md:p-8",
        href && "cursor-pointer",
        className
      )}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-white">
        <CardIcon name={icon} />
      </div>
      <h3 className="font-heading text-xl font-semibold text-dark-text">
        {title}
      </h3>
      <p className="mt-3 flex-1 leading-relaxed text-gray-text">
        {description}
      </p>
      {features && features.length > 0 && (
        <ul className="mt-4 space-y-2">
          {features.map((feature) => (
            <li
              key={feature}
              className="flex items-center gap-2 text-sm text-gray-text"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-green-mid" />
              {feature}
            </li>
          ))}
        </ul>
      )}
      {href && (
        <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors group-hover:text-green-dark">
          Know More
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      )}
    </motion.div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return content;
}
