import type { Metadata } from "next";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: "Terms and conditions for using Soulful Sessions website and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-24">
      <section className="bg-section-bg px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-dark-text md:text-5xl">
            Terms & Conditions
          </h1>
          <p className="mt-4 text-gray-text">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="prose prose-lg mx-auto max-w-3xl text-gray-text">
          <h2 className="font-heading text-2xl font-semibold text-dark-text">
            Agreement to Terms
          </h2>
          <p>
            By accessing and using the {SITE_CONFIG.name} website and services,
            you agree to be bound by these Terms and Conditions. If you do not
            agree, please do not use our services.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Services
          </h2>
          <p>
            {SITE_CONFIG.name} provides psychological counseling and therapy
            services conducted by {SITE_CONFIG.psychologist}, a licensed clinical
            psychologist. Our services are not a substitute for emergency medical
            care or psychiatric intervention.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Appointments & Cancellation
          </h2>
          <ul className="list-disc pl-6">
            <li>Appointments must be booked in advance</li>
            <li>Cancellations require at least 24 hours notice</li>
            <li>Late cancellations may be subject to a cancellation fee</li>
            <li>No-shows may be charged the full session fee</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Fees & Payment
          </h2>
          <p>
            Session fees are {SITE_CONFIG.consultationFee} for individual sessions
            lasting {SITE_CONFIG.sessionDuration}. Payment is due at the time of
            service unless otherwise arranged.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Emergency Disclaimer
          </h2>
          <p>
            This website and our services are not intended for emergency
            situations. If you are experiencing a mental health emergency, please
            contact your local emergency services or a crisis helpline immediately.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Limitation of Liability
          </h2>
          <p>
            While we strive to provide the highest quality care, therapy outcomes
            cannot be guaranteed. {SITE_CONFIG.name} is not liable for any
            indirect, incidental, or consequential damages arising from the use
            of our services.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Contact
          </h2>
          <p>
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-primary hover:underline">
              {SITE_CONFIG.email}
            </a>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
