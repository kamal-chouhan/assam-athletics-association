import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function CtaBanner() {
  return (
    <section className="relative isolate overflow-hidden bg-accent text-accent-foreground">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-bold uppercase leading-tight tracking-tight sm:text-4xl">
            Affiliation, sponsorship or partnership enquiries?
          </h2>
          <p className="mt-3 text-pretty leading-relaxed text-accent-foreground/85">
            District associations, sponsors and partners are welcome to connect with the Assam Athletics Association for
            collaboration and support.
          </p>
        </div>
        <Link
          href="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-sm bg-accent-foreground px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-accent transition-transform hover:scale-[1.02]"
        >
          Get in touch
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  )
}
