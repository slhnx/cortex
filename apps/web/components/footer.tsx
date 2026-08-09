import Link from "next/link";
import { Separator } from "@workspace/ui/components/separator";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-5xl px-6 py-10">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <Link
            href="/"
            className="text-sm font-semibold tracking-tight text-foreground"
          >
            Cortex
          </Link>

          <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <Link href="#features" className="transition-colors hover:text-foreground">
              Features
            </Link>
            <Link href="/login" className="transition-colors hover:text-foreground">
              Sign in
            </Link>
            <Link href="/signup" className="transition-colors hover:text-foreground">
              Sign up
            </Link>
          </nav>
        </div>

        <Separator className="my-6 bg-border/40" />

        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Cortex. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
