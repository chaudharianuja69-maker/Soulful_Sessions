"use client";

import { motion } from "framer-motion";
import { BookOpen, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { doctor } from "@/lib/data/site-data";
import { fadeUp, staggerContainer } from "@/utils/animations";

export default function AboutPageClient() {
  return (
    <div className="pt-24">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 text-center md:px-8 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl"
        >
          <span className="text-sm font-medium text-accent">About</span>
          <h1 className="mt-2 font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl">
            {doctor.name}
          </h1>
          <p className="mt-2 text-xl text-primary">{doctor.title}</p>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-text">
            {doctor.shortBio}
          </p>
        </motion.div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <SectionHeading title="About Me" centered={false} />
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="prose prose-lg max-w-none text-gray-text"
          >
            {doctor.fullBio.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-3xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="glass-card p-8 text-center md:p-12"
          >
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <BookOpen className="h-6 w-6" />
            </div>
            <h3 className="font-heading text-2xl font-semibold text-dark-text">
              Therapeutic Philosophy
            </h3>
            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-text">
              {doctor.philosophy}
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            eyebrow="Approach"
            title="What Guides My Practice"
          />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-6 sm:grid-cols-2"
          >
            {doctor.qualifications.map((q) => (
              <motion.div
                key={q}
                variants={fadeUp}
                className="flex items-start gap-4 rounded-2xl border border-primary/10 bg-white p-6 transition-shadow hover:shadow-md"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-secondary/50 text-primary">
                  <Sparkles className="h-5 w-5" />
                </div>
                <p className="text-gray-text">{q}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
