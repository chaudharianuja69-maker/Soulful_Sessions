import type { Metadata } from "next";
import ConnectPageClient from "./ConnectPageClient";

export const metadata: Metadata = {
  title: "Connect",
  description:
    "Connect with Soulful Sessions to book an online appointment with Anuja Dange, based in Thane, Mumbai.",
};

export default function ConnectPage() {
  return <ConnectPageClient />;
}
