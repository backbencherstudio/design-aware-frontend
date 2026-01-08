import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({ title, subtitle, align = "center", className }: SectionHeadingProps) {
  return (
    <div className={cn("mb-16 space-y-4", align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl md:text-4xl font-display font-medium text-primary leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
