"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/utils/constants";
import { cn } from "@/lib/utils";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
  buttonText?: string;
  className?: string;
  variant?: "default" | "gradient";
}

export function CTASection({
  title = "Ready to Start Your Healing Journey?",
  subtitle = "Take the first step towards a healthier, happier mind. Message on WhatsApp to book your session today.",
  buttonText = "Book A Session",
  className,
  variant = "gradient",
}: CTASectionProps) {
  return (
    <section
      className={cn(
        "section-padding",
        variant === "gradient" ? "bg-primary" : "bg-section-bg",
        className
      )}
    >
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className={cn(
              "font-heading text-3xl font-bold md:text-4xl lg:text-5xl",
              variant === "gradient" ? "text-white" : "text-dark-text"
            )}
          >
            {title}
          </h2>
          <p
            className={cn(
              "mx-auto mt-4 max-w-2xl text-lg",
              variant === "gradient" ? "text-white/85" : "text-gray-text"
            )}
          >
            {subtitle}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="cta" className="group">
              <a href={SITE_CONFIG.social.whatsapp} target="_blank" rel="noopener noreferrer">
                {buttonText}
                <ArrowRight className="transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
