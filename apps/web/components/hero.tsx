import Link from "next/link";
import { Button } from "@workspace/ui/components/button";
import { Badge } from "@workspace/ui/components/badge";

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-24 pt-24 md:pb-32 md:pt-32">
      <div className="max-w-2xl">
        <Badge variant="secondary" className="mb-6">
          Early access
        </Badge>

        <h1 className="text-[2.5rem] leading-[1.1] font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Your knowledge,
          <br />
          connected.
        </h1>

        <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
          Cortex helps you capture ideas, organize information, and discover
          connections across everything you know — with AI that understands your
          thinking.
        </p>

        <div className="mt-10 flex items-center gap-3">
          <Button size="lg" className="h-10 px-5 text-sm" render={<Link href="/login" />}>
            Get started
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="h-10 px-5 text-sm"
            render={<Link href="#features" />}
          >
            Learn more
          </Button>
        </div>
      </div>
    </section>
  );
}
