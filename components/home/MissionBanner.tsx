"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "@/utils/animations";

export function MissionBanner() {
  return (
    <section className="bg-accent/20 py-16 text-dark-text md:py-20">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-heading text-2xl font-bold leading-snug md:text-3xl lg:text-4xl"
        >
          I&apos;ve made it my mission to empower people to change their lives
          for the better.
        </motion.h2>
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8"
        >
          <Button
            asChild
            size="lg"
            className="group bg-primary text-white shadow-sm hover:bg-primary/90 hover:shadow-md"
          >
            <Link href="/why-therapy">
              Know About Therapy
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
