import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="container flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-electric">404</p>
      <h1 className="mt-3 text-3xl font-semibold">This page is not on the roadmap.</h1>
      <p className="mt-3 max-w-md text-slate-600 dark:text-slate-300">
        The URL may be outdated. Head home or book a consultation and we will point you to the right capability.
      </p>
      <Button asChild className="mt-8" variant="electric">
        <Link href="/">Back to homepage</Link>
      </Button>
    </div>
  );
}
