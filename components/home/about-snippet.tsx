import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"

const STATS = [
  { value: "16+", label: "District Associations" },
  { value: "75+", label: "Years of Service" },
  { value: "2,500+", label: "Registered Athletes" },
  { value: "40+", label: "Annual Events" },
]

export function AboutSnippet() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <div className="relative">
          <img
            src="/images/about-training.png"
            alt="Young athletes training on an outdoor track in Assam"
            className="aspect-[4/3] w-full rounded-md object-cover"
          />
          <div className="absolute -bottom-6 -right-4 hidden rounded-md bg-accent px-6 py-5 text-accent-foreground shadow-lg sm:block">
            <p className="font-display text-3xl font-bold leading-none">1948</p>
            <p className="mt-1 text-xs font-medium uppercase tracking-widest">Serving athletics</p>
          </div>
        </div>

        <div>
          <SectionHeading eyebrow="About the Association" title="A trusted institution for athletics in Assam" />
          <p className="mt-5 leading-relaxed text-muted-foreground">
            The Assam Athletics Association is the recognised governing body responsible for the promotion, regulation
            and development of athletics within the State of Assam. We enable transparent dissemination of information,
            timely publication of notices and circulars, and efficient management of institutional affairs.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Working closely with district associations, officials and stakeholders, we strive to build a strong pathway
            from grassroots participation to national representation.
          </p>

          <dl className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-md border border-border bg-border sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-card p-4 text-center">
                <dt className="sr-only">{s.label}</dt>
                <dd>
                  <span className="block font-display text-2xl font-bold text-primary">{s.value}</span>
                  <span className="mt-1 block text-[11px] font-medium uppercase tracking-wide text-muted-foreground">
                    {s.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>

          <Link
            href="/about"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:gap-3 transition-all"
          >
            Learn more about us
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  )
}
