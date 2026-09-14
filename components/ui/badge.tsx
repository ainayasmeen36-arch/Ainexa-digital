import * as React from "react";
import { cn } from "@/lib/utils";

const Badge = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement> & { variant?: "default" | "outline" | "electric" }>(
  ({ className, variant = "default", ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold",
        variant === "default" && "border-transparent bg-navy text-electric dark:bg-electric/15 dark:text-electric",
        variant === "outline" && "text-foreground",
        variant === "electric" && "border-electric/40 bg-electric/10 text-navy dark:text-electric",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
