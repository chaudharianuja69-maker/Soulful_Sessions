import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingButtons } from "@/components/layout/FloatingButtons";
import { ErrorBoundary } from "@/components/ErrorBoundary";
import { SITE_CONFIG } from "@/utils/constants";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.psychologist}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "psychologist",
    "therapy",
    "mental health",
    "counseling",
    "Thane",
    "Mumbai",
    "Anuja Dange",
    "anxiety therapy",
    "depression counseling",
    "couples therapy",
  ],
  authors: [{ name: SITE_CONFIG.psychologist }],
  creator: SITE_CONFIG.name,
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: `${SITE_CONFIG.name} | Compassionate Psychological Support`,
    description: SITE_CONFIG.description,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: SITE_CONFIG.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    images: ["/logo.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${playfair.variable} font-body antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ErrorBoundary>
            <AnnouncementBar />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingButtons />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
