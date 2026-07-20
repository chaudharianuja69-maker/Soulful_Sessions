import type { Metadata } from "next";
import { MessageCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/utils/constants";

export const metadata: Metadata = {
  title: "Book Appointment",
  description:
    "Book your therapy session with Anuja Dange at Soulful Sessions. Individual, couple, teen therapy and corporate workshops available.",
};

export default function BookAppointmentPage() {
  return (
    <div className="pt-24">
      <section className="bg-gradient-to-br from-primary/5 via-section-bg to-accent/5 px-4 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="font-heading text-4xl font-bold text-dark-text md:text-5xl">
            Book Your Appointment
          </h1>
          <p className="mt-4 text-lg text-gray-text">
            Take the first step towards healing. Message on WhatsApp with your
            preferred timing and concerns, and we&apos;ll confirm your session
            shortly.
          </p>

          <div className="glass-card mt-10 space-y-6 p-8 text-left md:p-10">
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                <MessageCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-dark-text">
                  Message on WhatsApp
                </h3>
                <p className="text-sm text-gray-text">
                  Share your name, concern, and preferred date/time.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Clock className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-dark-text">
                  Choose a Convenient Slot
                </h3>
                <p className="text-sm text-gray-text">
                  {SITE_CONFIG.workingHours.weekdays} &middot;{" "}
                  {SITE_CONFIG.workingHours.sunday}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Button asChild size="lg" variant="cta" className="group">
                <a
                  href={SITE_CONFIG.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
