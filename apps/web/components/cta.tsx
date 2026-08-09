import Link from "next/link";
import { Button } from "@workspace/ui/components/button";

export function CTA() {
  return (
    <section className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <div className="max-w-lg">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Start building your second brain.
          </h2>
          <p className="mt-4 text-base text-muted-foreground">
            Free to get started. No credit card required.
          </p>
          <div className="mt-8">
            <Button size="lg" className="h-10 px-5 text-sm" render={<Link href="/login" />}>
              Get started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
