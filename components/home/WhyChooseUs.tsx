"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { FeatureCard } from "@/components/shared/Cards";
import { features } from "@/lib/data/site-data";
import { staggerContainer } from "@/utils/animations";

export function WhyChooseUs() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="I Give People Tools They Need To"
          title="Start Feeling Better Today"
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
