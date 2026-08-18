import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { EventCard } from "@/components/event-card"
import { EVENTS } from "@/lib/data"

export function EventsPreview() {
  return (
    <section className="bg-secondary py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Tournaments & Events" title="Upcoming Championships" />
          <Link
            href="/tournaments"
            className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:gap-3 transition-all"
          >
            Full calendar
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </div>
    </section>
  )
}
