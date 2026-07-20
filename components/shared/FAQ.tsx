"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading } from "@/components/shared/SectionHeading";
import type { FAQItem } from "@/types";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer } from "@/utils/animations";

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  showHeading?: boolean;
}

export function FAQ({
  items,
  title = "Frequently Asked Questions",
  subtitle = "Find answers to common questions about therapy and our services.",
  showHeading = true,
}: FAQProps) {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-3xl">
        {showHeading && (
          <SectionHeading
            eyebrow="Got A Question?"
            title={title}
            subtitle={subtitle}
          />
        )}

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="w-full">
            {items.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <AccordionItem value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-heading text-lg font-medium text-dark-text">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
