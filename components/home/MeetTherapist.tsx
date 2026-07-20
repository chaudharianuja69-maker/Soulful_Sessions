"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Award, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { doctor } from "@/lib/data/site-data";
import { staggerContainer, fadeUp } from "@/utils/animations";

export function MeetTherapist() {
  return (
    <section className="section-padding bg-white">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          eyebrow="Meet Psychologist"
          title={doctor.name}
          subtitle="Welcome to Soulful Sessions! As your therapist, I offer a safe, compassionate space where you'll feel truly understood, free from judgment."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-lg leading-relaxed text-gray-text"
          >
            {doctor.shortBio}
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 grid grid-cols-3 gap-4"
          >
            <div className="rounded-xl border border-primary/10 bg-section-bg p-4 text-center">
              <Clock className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 font-heading text-xl font-bold text-dark-text">
                {doctor.experience}
              </p>
              <p className="text-xs text-gray-text">Experience</p>
            </div>
            <div className="rounded-xl border border-primary/10 bg-section-bg p-4 text-center">
              <Users className="mx-auto h-6 w-6 text-green-mid" />
              <p className="mt-2 font-heading text-xl font-bold text-dark-text">
                All Ages
              </p>
              <p className="text-xs text-gray-text">Kids to Adults</p>
            </div>
            <div className="rounded-xl border border-primary/10 bg-section-bg p-4 text-center">
              <Award className="mx-auto h-6 w-6 text-primary" />
              <p className="mt-2 font-heading text-xl font-bold text-dark-text">
                4+
              </p>
              <p className="text-xs text-gray-text">Programs</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8 text-left">
            <h4 className="text-center font-heading font-semibold text-dark-text">
              Qualifications
            </h4>
            <ul className="mt-3 space-y-2">
              {doctor.qualifications.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-2 text-sm text-gray-text"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-mid" />
                  {q}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-8">
            <Button asChild variant="cta" className="group">
              <Link href="/about">
                Read My Story
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
