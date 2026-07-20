"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ConcernCard } from "@/components/shared/Cards";
import { concerns } from "@/lib/data/site-data";
import { staggerContainer } from "@/utils/animations";

export function WhatBringsYouHere() {
  return (
    <section className="section-padding bg-section-bg">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="What Brings You Here"
          title="You're Not Alone"
          subtitle="Whatever you're facing, you don't have to face it alone. We provide support for a wide range of concerns."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {concerns.map((concern, index) => (
            <ConcernCard
              key={concern.title}
              title={concern.title}
              description={concern.description}
              icon={concern.icon}
              color={concern.color}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
