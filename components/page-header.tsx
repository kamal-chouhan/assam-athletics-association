import Link from "next/link"
import { ChevronRight } from "lucide-react"

type Crumb = { label: string; href?: string }

export function PageHeader({
  title,
  description,
  crumbs = [],
}: {
  title: string
  description?: string
  crumbs?: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, currentColor 0 1px, transparent 1px 48px)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-16 lg:px-8">
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1 text-xs uppercase tracking-wide text-primary-foreground/70">
          <Link href="/" className="hover:text-primary-foreground">Home</Link>
          {crumbs.map((c) => (
            <span key={c.label} className="flex items-center gap-1">
              <ChevronRight className="size-3.5" aria-hidden="true" />
              {c.href ? (
                <Link href={c.href} className="hover:text-primary-foreground">{c.label}</Link>
              ) : (
                <span className="text-primary-foreground">{c.label}</span>
              )}
            </span>
          ))}
        </nav>
        <h1 className="mt-4 max-w-3xl text-balance font-display text-4xl font-bold uppercase leading-none tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-primary-foreground/80">{description}</p>
        )}
      </div>
    </section>
  )
}
