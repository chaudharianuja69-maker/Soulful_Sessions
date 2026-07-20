"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Heart,
  Users,
  XCircle,
  CheckCircle,
  Lightbulb,
  Shield,
} from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { CTASection } from "@/components/shared/CTASection";
import { fadeUp, staggerContainer } from "@/utils/animations";

const benefits = [
  "Improved emotional regulation and self-awareness",
  "Healthier relationships with yourself and others",
  "Effective coping strategies for stress and anxiety",
  "Greater clarity in life decisions",
  "Enhanced self-esteem and confidence",
  "Tools for breaking negative thought patterns",
];

const whoShouldSeek = [
  "Anyone feeling overwhelmed by emotions",
  "People going through major life transitions",
  "Those struggling with anxiety or depression",
  "Couples facing relationship challenges",
  "Parents needing guidance with children",
  "Professionals dealing with burnout",
  "Anyone wanting personal growth and self-discovery",
];

const myths = [
  {
    myth: "Therapy is only for people with serious mental illness",
    fact: "Therapy benefits anyone facing life's challenges, from everyday stress to major life events.",
  },
  {
    myth: "Asking for help is a sign of weakness",
    fact: "Seeking therapy shows courage and self-awareness — it's one of the strongest things you can do.",
  },
  {
    myth: "Therapists will judge you",
    fact: "Therapists provide a safe, non-judgmental space. Your experiences are validated, not criticized.",
  },
  {
    myth: "Therapy takes forever to work",
    fact: "Many people notice positive changes within just a few sessions. Progress depends on your goals.",
  },
];

export default function WhyTherapyPageClient() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl"
          >
            Why Therapy?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-text md:text-xl"
          >
            Understanding the power of professional psychological support
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <SectionHeading title="What is Therapy?" centered={false} />
              <p className="text-lg leading-relaxed text-gray-text">
                Therapy is a collaborative process between you and a trained
                mental health professional. It provides a confidential space to
                explore your thoughts, feelings, and behaviors — helping you
                understand yourself better and develop strategies for positive
                change.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-text">
                Unlike talking to friends or family, therapy offers an objective,
                expert perspective grounded in evidence-based techniques. It&apos;s
                not about being &ldquo;fixed&rdquo; — it&apos;s about being supported on your
                unique journey to wellness.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-primary/20 to-accent/20 md:h-80 md:w-80">
                <Brain className="h-32 w-32 text-primary/60 md:h-40 md:w-40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Benefits of Therapy" subtitle="How professional support can transform your life." />
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <p className="text-gray-text">{benefit}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="order-2 flex items-center justify-center lg:order-1"
            >
              <div className="relative flex h-64 w-64 items-center justify-center rounded-full bg-gradient-to-br from-accent/20 to-primary/20 md:h-80 md:w-80">
                <Users className="h-32 w-32 text-accent/60 md:h-40 md:w-40" />
              </div>
            </motion.div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <SectionHeading title="Who Should Seek Therapy?" centered={false} />
              <ul className="space-y-3">
                {whoShouldSeek.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Heart className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span className="text-gray-text">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            title="Myths vs Facts"
            subtitle="Let's clear up common misconceptions about therapy."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {myths.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="overflow-hidden rounded-2xl bg-white shadow-sm dark:bg-gray-900"
              >
                <div className="flex items-start gap-3 bg-destructive/5 p-5">
                  <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-destructive">
                      Myth
                    </p>
                    <p className="mt-1 text-dark-text">{item.myth}</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-5">
                  <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <div>
                    <p className="text-xs font-medium uppercase tracking-wide text-accent">
                      Fact
                    </p>
                    <p className="mt-1 text-gray-text">{item.fact}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl text-center">
          <Shield className="mx-auto h-16 w-16 text-primary" />
          <h2 className="mt-6 font-heading text-3xl font-bold text-dark-text">
            Your Mental Health Matters
          </h2>
          <p className="mt-4 text-lg text-gray-text">
            Taking care of your mind is just as important as taking care of your
            body. You deserve support, understanding, and the opportunity to
            live your fullest life.
          </p>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
