"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/utils/constants";
import { fadeUp } from "@/utils/animations";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-gradient-to-b from-green-dark via-primary to-primary">
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-24 text-center md:px-8">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="font-body text-4xl font-bold leading-tight tracking-tight text-white md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Where There Is Mind
          <br />
          There Is Mental Health
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.15 }}
          className="mx-auto mt-6 max-w-2xl text-lg text-white/90 md:text-xl"
        >
          with {SITE_CONFIG.psychologist}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.25 }}
          className="mx-auto mt-4 max-w-xl font-heading text-lg italic text-accent md:text-xl"
        >
          &ldquo;A safe space for your inner world&rdquo;
        </motion.p>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button asChild size="lg" variant="cta" className="group">
            <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
              Book A Session
              <ArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white bg-transparent text-white hover:bg-white hover:text-primary"
          >
            <Link href="/about">Read My Story</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
