import {
  AppWindow,
  BotMessageSquare,
  CloudCog,
  LucideIcon,
  PanelsTopLeft,
  PenTool,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { cn } from "@/lib/utils";

/** One icon per service — chosen to match the practice, not decoration. */
export const SERVICE_ICONS: LucideIcon[] = [
  AppWindow,
  PanelsTopLeft,
  BotMessageSquare,
  TrendingUp,
  PenTool,
  Smartphone,
  CloudCog,
];

export function ServiceIcon({
  icon: Icon,
  className,
  size = "md",
}: {
  icon: LucideIcon;
  className?: string;
  size?: "md" | "lg";
}) {
  const box = size === "lg" ? "h-16 w-16 rounded-2xl" : "h-14 w-14 rounded-2xl";
  const glyph = size === "lg" ? "h-8 w-8" : "h-7 w-7";

  return (
    <span
      className={cn(
        "inline-flex items-center justify-center border border-electric/35 bg-gradient-to-br from-navy to-[#2A241C] text-electric shadow-[0_8px_24px_rgba(198,164,107,0.18)]",
        box,
        className
      )}
    >
      <Icon className={glyph} strokeWidth={2.4} />
    </span>
  );
}
