import { HeroSection } from "@/components/home/HeroSection";
import { MissionBanner } from "@/components/home/MissionBanner";
import { MeetTherapist } from "@/components/home/MeetTherapist";
import { WhatBringsYouHere } from "@/components/home/WhatBringsYouHere";
import { ServicesSection } from "@/components/home/ServicesSection";
import { Timeline } from "@/components/shared/Timeline";
import { WhyChooseUs } from "@/components/home/WhyChooseUs";
import { FAQ } from "@/components/shared/FAQ";
import { CTASection } from "@/components/shared/CTASection";
import {
  howItWorksSteps,
  homeFaq,
} from "@/lib/data/site-data";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <MissionBanner />
      <MeetTherapist />
      <WhyChooseUs />
      <ServicesSection />
      <WhatBringsYouHere />
      <Timeline steps={howItWorksSteps} />
      <FAQ items={homeFaq} />
      <CTASection />
    </>
  );
}
