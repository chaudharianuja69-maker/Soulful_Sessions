import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/data/services";
import { FAQ } from "@/components/shared/FAQ";
import { CTASection } from "@/components/shared/CTASection";
import { Button } from "@/components/ui/button";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return { title: "Service Not Found" };

  return {
    title: `${service.title} Therapy`,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="pt-24">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary/10 via-section-bg to-accent/10 px-4 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-3xl">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4" />
              Back to Services
            </Link>
          </Button>
          <h1 className="font-heading text-4xl font-bold text-dark-text md:text-5xl lg:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-lg text-gray-text md:text-xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Symptoms */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark-text">
                Common Symptoms
              </h2>
              <ul className="mt-6 space-y-3">
                {service.symptoms.map((symptom) => (
                  <li key={symptom} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" />
                    <span className="text-gray-text">{symptom}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-heading text-3xl font-bold text-dark-text">
                Possible Causes
              </h2>
              <ul className="mt-6 space-y-3">
                {service.causes.map((cause) => (
                  <li key={cause} className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent" />
                    <span className="text-gray-text">{cause}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How Therapy Helps */}
      <section className="section-padding bg-section-bg">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center font-heading text-3xl font-bold text-dark-text md:text-4xl">
            How Therapy Helps
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {service.howTherapyHelps.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-3 rounded-xl bg-white p-5 shadow-sm dark:bg-gray-900"
              >
                <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-gray-text">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-background">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center font-heading text-3xl font-bold text-dark-text md:text-4xl">
            Benefits of Treatment
          </h2>
          <ul className="mt-10 space-y-4">
            {service.benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex items-center gap-4 rounded-xl border border-primary/10 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/10 text-sm font-bold text-accent">
                  {index + 1}
                </div>
                <span className="text-gray-text">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQ
        items={service.faq}
        title={`${service.title} FAQ`}
        subtitle="Common questions about this service."
      />

      <CTASection
        title={`Ready to Address ${service.title}?`}
        subtitle="Take the first step towards healing. Book a session with Anuja Dange today."
      />
    </div>
  );
}
