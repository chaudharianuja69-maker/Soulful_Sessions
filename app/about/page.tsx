import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Anuja Dange, clinical psychologist and founder of Soulful Sessions. Education, experience, and therapeutic philosophy.",
};

export default function Page() {
  return <AboutPageClient />;
}
