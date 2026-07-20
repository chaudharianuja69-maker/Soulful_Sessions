"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { therapyServices } from "@/lib/data/site-data";
import { staggerContainer } from "@/utils/animations";

export function ServicesSection() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How I Help People"
          title="My Areas Of Expertise"
          subtitle="Personalized therapy approaches designed to meet your unique needs and goals."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {therapyServices.map((service, index) => (
            <ServiceCard
              key={service.slug}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={`/services/${service.slug}`}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
