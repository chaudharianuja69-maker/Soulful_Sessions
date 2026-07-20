import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="min-h-screen">
      {/* Hero skeleton */}
      <div className="flex min-h-screen items-center justify-center bg-section-bg px-4 pt-24">
        <div className="mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-2">
          <div className="space-y-6">
            <Skeleton className="h-8 w-48" />
            <Skeleton className="h-16 w-full max-w-lg" />
            <Skeleton className="h-6 w-64" />
            <Skeleton className="h-20 w-full max-w-md" />
            <div className="flex gap-4">
              <Skeleton className="h-12 w-40 rounded-full" />
              <Skeleton className="h-12 w-32 rounded-full" />
            </div>
          </div>
          <Skeleton className="aspect-[4/5] w-full max-w-md justify-self-center rounded-3xl lg:max-w-none" />
        </div>
      </div>
    </div>
  );
}
