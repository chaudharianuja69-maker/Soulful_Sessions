import type { Metadata } from "next";
import ServicesPageClient from "./ServicesPageClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Explore therapy services at Soulful Sessions — anxiety, depression, OCD, relationship issues, career counselling, and more.",
};

export default function ServicesPage() {
  return <ServicesPageClient />;
}
