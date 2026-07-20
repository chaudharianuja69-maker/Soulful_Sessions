import type { Metadata } from "next";
import WhyTherapyPageClient from "./WhyTherapyPageClient";

export const metadata: Metadata = {
  title: "Why Therapy",
  description:
    "Discover the benefits of therapy, who should seek help, and common myths debunked. Learn why mental health support matters.",
};

export default function WhyTherapyPage() {
  return <WhyTherapyPageClient />;
}
