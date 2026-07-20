"use client";

import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import type { TimelineStep } from "@/types";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { fadeUp, staggerContainer } from "@/utils/animations";

interface TimelineProps {
  steps: TimelineStep[];
  title?: string;
  subtitle?: string;
}

function StepIcon({ name }: { name: string }) {
  const Icon = LucideIcons[name as keyof typeof LucideIcons] as React.ComponentType<{
    className?: string;
  }>;
  if (!Icon) return <LucideIcons.Circle className="h-6 w-6" />;
  return <Icon className="h-6 w-6" />;
}

export function Timeline({
  steps,
  title = "Know How Process Works",
  subtitle = "Starting your healing journey is simple. Just three easy steps.",
}: TimelineProps) {
  return (
    <section className="section-padding bg-section-bg">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Want To Get Started"
          title={title}
          subtitle={subtitle}
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute left-8 top-0 hidden h-full w-0.5 bg-gradient-to-b from-primary via-green-mid to-green-light md:left-1/2 md:block md:-translate-x-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              variants={fadeUp}
              className={`relative mb-12 flex items-center gap-8 md:mb-16 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <div
                className={`flex-1 pl-20 md:pl-0 ${
                  index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"
                }`}
              >
                <span className="text-sm font-semibold text-primary">
                  Step {step.step}
                </span>
                <h3 className="mt-1 font-heading text-xl font-semibold text-dark-text md:text-2xl">
                  {step.title}
                </h3>
                <p className="mt-2 text-gray-text">{step.description}</p>
              </div>

              <div className="absolute left-0 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white shadow-md md:left-1/2 md:-translate-x-1/2">
                <StepIcon name={step.icon} />
              </div>

              <div className="hidden flex-1 md:block" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
