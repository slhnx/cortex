"use client";

import Link from "next/link";
import { useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@workspace/ui/components/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@workspace/ui/components/sheet";
import { IconMenu2, IconSun, IconMoon } from "@tabler/icons-react";

export function Navbar() {
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-lg">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        {/* Logo */}
        <Link
          href="/"
          className="text-[15px] font-semibold tracking-tight text-foreground"
        >
          Cortex
        </Link>

        {/* Desktop actions */}
        <div className="hidden items-center gap-1 md:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <IconSun className="size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
            <IconMoon className="absolute size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
          </Button>
          <Link
            href="/login"
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Log in
          </Link>
          <Button size="sm" render={<Link href="/signup" />}>
            Sign up
          </Button>
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-1 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            aria-label="Toggle theme"
          >
            <IconSun className="size-4 scale-100 rotate-0 transition-transform dark:scale-0 dark:-rotate-90" />
            <IconMoon className="absolute size-4 scale-0 rotate-90 transition-transform dark:scale-100 dark:rotate-0" />
          </Button>
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" aria-label="Open menu">
                  <IconMenu2 className="size-5" />
                </Button>
              }
            />
            <SheetContent side="right" className="w-64">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <nav className="flex flex-col gap-2 pt-8">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Sign up
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
