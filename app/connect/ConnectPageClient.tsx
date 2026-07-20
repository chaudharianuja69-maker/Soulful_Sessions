"use client";

import { motion } from "framer-motion";
import { Clock, MessageCircle, Phone, Mail } from "lucide-react";
import { SITE_CONFIG } from "@/utils/constants";

export default function ConnectPageClient() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl"
          >
            Connect
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-6 text-lg text-gray-text md:text-xl"
          >
            We&apos;re here to help. Reach out and start your healing journey today.
          </motion.p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          <div className="glass-card p-6">
            <h3 className="font-heading text-xl font-semibold text-dark-text">
              Working Hours
            </h3>
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-3 text-gray-text">
                <Clock className="h-5 w-5 shrink-0 text-accent" />
                {SITE_CONFIG.workingHours.weekdays}
              </li>
              <li className="flex items-center gap-3 text-gray-text">
                <Clock className="h-5 w-5 shrink-0 text-accent" />
                {SITE_CONFIG.workingHours.sunday}
              </li>
            </ul>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-heading text-xl font-semibold text-dark-text">
              Consultation Fee
            </h3>
            <p className="mt-4 text-2xl font-bold text-primary">
              {SITE_CONFIG.consultationFee}
            </p>
            <p className="mt-2 text-sm text-gray-text">
              Session duration: {SITE_CONFIG.sessionDuration}
            </p>
            <p className="mt-2 text-sm text-gray-text">
              All sessions are conducted online only.
            </p>
          </div>

          <div className="glass-card p-6">
            <h3 className="font-heading text-xl font-semibold text-dark-text">
              Contact Info
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${SITE_CONFIG.phone}`}
                  className="flex items-center gap-3 text-gray-text transition-colors hover:text-primary"
                >
                  <Phone className="h-5 w-5 shrink-0 text-primary" />
                  {SITE_CONFIG.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE_CONFIG.email}`}
                  className="flex items-center gap-3 text-gray-text transition-colors hover:text-primary"
                >
                  <Mail className="h-5 w-5 shrink-0 text-primary" />
                  {SITE_CONFIG.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* WhatsApp CTA Banner */}
      <section className="bg-section-bg px-4 pb-16 md:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-2xl shadow-lg">
          <div className="relative flex h-80 flex-col items-center justify-center gap-4 bg-gradient-to-br from-primary/20 to-accent/20 px-6 text-center">
            <MessageCircle className="h-12 w-12 text-primary" />
            <p className="font-heading text-lg font-semibold text-dark-text">
              Prefer to chat instantly?
            </p>
            <p className="max-w-md text-sm text-gray-text">
              Message on WhatsApp and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href={SITE_CONFIG.social.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-md transition-transform hover:scale-105"
            >
              <MessageCircle className="h-4 w-4" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
