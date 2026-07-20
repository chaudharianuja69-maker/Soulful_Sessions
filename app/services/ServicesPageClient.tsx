"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServiceCard } from "@/components/shared/ServiceCard";
import { CTASection } from "@/components/shared/CTASection";
import { services } from "@/lib/data/services";
import { therapyServices } from "@/lib/data/site-data";
import { staggerContainer } from "@/utils/animations";

export default function ServicesPageClient() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-text md:text-xl"
          >
            Comprehensive psychological support tailored to your unique needs
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Therapy Programs"
            subtitle="Specialized programs designed for different needs."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-4"
          >
            {therapyServices.map((service, index) => (
              <div key={service.slug} id={service.slug}>
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                  index={index}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Areas of Expertise"
            subtitle="Evidence-based treatment for a wide range of concerns."
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <ServiceCard
                key={service.slug}
                title={service.title}
                description={service.shortDescription}
                icon={service.icon}
                href={`/services/${service.slug}`}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
