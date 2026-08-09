"use client"

import * as React from "react"

import { cn } from "@workspace/ui/lib/utils"

function Label({ className, ...props }: React.ComponentProps<"label">) {
  return (
    <label
      data-slot="label"
      className={cn(
        "text-xs/relaxed font-medium select-none group-data-[disabled]:pointer-events-none group-data-[disabled]:opacity-50 group-data-[invalid]:text-destructive",
        className
      )}
      {...props}
    />
  )
}

export { Label }
