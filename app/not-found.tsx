import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-section-bg px-4 pt-20 text-center">
      <div className="relative">
        <h1 className="font-heading text-[150px] font-bold leading-none text-primary/10 md:text-[200px]">
          404
        </h1>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h2 className="font-heading text-3xl font-bold text-dark-text md:text-4xl">
            Page Not Found
          </h2>
          <p className="mt-4 max-w-md text-gray-text">
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track.
          </p>
        </div>
      </div>

      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <Button asChild>
          <Link href="/">
            <Home className="h-4 w-4" />
            Go Home
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/connect">
            <ArrowLeft className="h-4 w-4" />
            Connect With Us
          </Link>
        </Button>
      </div>
    </div>
  );
}
