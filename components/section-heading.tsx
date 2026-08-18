export function SectionHeading({
  eyebrow,
  title,
  align = "left",
}: {
  eyebrow?: string
  title: string
  align?: "left" | "center"
}) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      {eyebrow && (
        <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          <span className="inline-block h-px w-8 bg-accent" aria-hidden="true" />
          {eyebrow}
        </p>
      )}
      <h2 className="mt-3 text-balance font-display text-3xl font-bold uppercase leading-tight tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
