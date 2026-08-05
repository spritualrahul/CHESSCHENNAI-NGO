import { cn } from "@/lib/utils";

type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  body?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionTitle({ eyebrow, title, body, align = "left", className }: SectionTitleProps) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="mt-4 max-w-4xl font-heading text-4xl font-extrabold leading-[1.06] text-[var(--ches-blue)] md:text-6xl">
        {title}
      </h2>
      {body ? (
        <p className="mt-5 max-w-3xl text-lg leading-8 text-[var(--ches-charcoal)]/72 md:text-xl">
          {body}
        </p>
      ) : null}
    </div>
  );
}
