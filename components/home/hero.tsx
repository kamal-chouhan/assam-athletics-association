import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { ASSOCIATION } from "@/lib/site"

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[620px] items-center overflow-hidden">
      <img
        src="/images/hero-track.png"
        alt="Sprinters accelerating out of the starting blocks on a red athletics track"
        className="absolute inset-0 -z-10 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/40" aria-hidden="true" />

      <div className="mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="max-w-2xl text-primary-foreground">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em]">
            {ASSOCIATION.established}
          </p>
          <h1 className="mt-6 text-balance font-display text-5xl font-bold uppercase leading-[0.95] tracking-tight sm:text-6xl lg:text-7xl">
            {ASSOCIATION.name}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/85">
            The recognised governing body for the promotion, regulation and development of athletics across the State of
            Assam — serving athletes, district associations, officials and the sporting community.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/tournaments"
              className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3 text-sm font-semibold uppercase tracking-wide text-accent-foreground transition-colors hover:opacity-90"
            >
              View Championships
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              About the Association
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
