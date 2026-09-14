import { Badge } from "@/components/ui/badge";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <Badge variant="electric" className="mb-3">
          {eyebrow}
        </Badge>
      )}
      <h2 className="text-3xl font-semibold text-navy dark:text-white sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-600 dark:text-slate-300">{description}</p>}
    </div>
  );
}
