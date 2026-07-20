import type { Metadata } from "next";
import { FAQ } from "@/components/shared/FAQ";
import { CTASection } from "@/components/shared/CTASection";
import { homeFaq } from "@/lib/data/site-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about therapy, sessions, fees, and booking at Soulful Sessions.",
};

const additionalFaq = [
  {
    question: "What should I expect in my first session?",
    answer:
      "Your first session is about getting to know each other. Anuja Dange will ask about your concerns, history, and goals. It's a safe space to share at your own pace — no pressure.",
  },
  {
    question: "Are sessions online or in-person?",
    answer:
      "All sessions are conducted online only, via secure video call, so you can connect from wherever you're comfortable.",
  },
];

export default function FAQPage() {
  const allFaq = [...homeFaq, ...additionalFaq];

  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg text-gray-text md:text-xl">
            Everything you need to know about therapy at Soulful Sessions
          </p>
        </div>
      </section>

      <FAQ items={allFaq} showHeading={false} />

      <CTASection />
    </div>
  );
}
