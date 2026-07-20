import type { Metadata } from "next";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Soulful Sessions psychology practice.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24">
      <section className="bg-section-bg px-4 py-16 md:px-8 md:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-heading text-4xl font-bold text-dark-text md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-4 text-gray-text">Last updated: January 2025</p>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="prose prose-lg mx-auto max-w-3xl text-gray-text">
          <h2 className="font-heading text-2xl font-semibold text-dark-text">
            Introduction
          </h2>
          <p>
            {SITE_CONFIG.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is committed to protecting
            your privacy. This Privacy Policy explains how we collect, use, and
            safeguard your personal information when you visit our website or use
            our services.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Information We Collect
          </h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6">
            <li>Personal identification information (name, email, phone number)</li>
            <li>Appointment and session preferences</li>
            <li>Messages submitted through contact forms</li>
            <li>Website usage data through cookies and analytics</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Confidentiality of Therapy
          </h2>
          <p>
            All therapy sessions are strictly confidential in accordance with
            professional ethical guidelines and applicable laws. Information shared
            during therapy sessions is protected and will not be disclosed without
            your written consent, except in cases required by law (such as imminent
            danger to self or others).
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            How We Use Your Information
          </h2>
          <ul className="list-disc pl-6">
            <li>To schedule and manage appointments</li>
            <li>To communicate with you about our services</li>
            <li>To improve our website and services</li>
            <li>To comply with legal obligations</li>
          </ul>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Data Security
          </h2>
          <p>
            We implement appropriate technical and organizational measures to
            protect your personal information against unauthorized access,
            alteration, disclosure, or destruction.
          </p>

          <h2 className="mt-8 font-heading text-2xl font-semibold text-dark-text">
            Contact Us
          </h2>
          <p>
            If you have questions about this Privacy Policy, please contact us at{" "}
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
