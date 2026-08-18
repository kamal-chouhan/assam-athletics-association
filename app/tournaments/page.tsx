import type { Metadata } from "next"
import { Calendar, MapPin, FileText } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { EventCard } from "@/components/event-card"
import { EVENTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "Tournaments & Events | Assam Athletics Association",
  description:
    "Upcoming championships, the event calendar, tournament information, announcements and circulars from the Assam Athletics Association.",
}

const CIRCULARS = [
  { title: "Entry norms — 68th State Senior Championship", date: "Jan 15, 2026" },
  { title: "Age verification guidelines for junior events", date: "Jan 10, 2026" },
  { title: "Officials nomination for the 2026 season", date: "Dec 22, 2025" },
]

export default function TournamentsPage() {
  return (
    <>
      <PageHeader
        title="Tournaments & Events"
        description="Championships, the season calendar, tournament information, event announcements and official circulars."
        crumbs={[{ label: "Tournaments" }]}
      />

      {/* Upcoming */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Championships" title="Upcoming & Open for Entry" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {EVENTS.map((e) => (
            <EventCard key={e.id} event={e} />
          ))}
        </div>
      </section>

      {/* Calendar + circulars */}
      <section className="bg-secondary py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:px-8">
          <div>
            <SectionHeading eyebrow="Season 2026" title="Event Calendar" />
            <div className="mt-8 overflow-hidden rounded-md border border-border bg-card">
              {EVENTS.map((e, i) => (
                <div
                  key={e.id}
                  className={`flex flex-col gap-3 p-5 sm:flex-row sm:items-center sm:justify-between ${
                    i !== EVENTS.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div>
                    <p className="font-display text-base font-semibold text-card-foreground">{e.title}</p>
                    <p className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="size-3.5 text-primary" aria-hidden="true" />
                      {e.venue}
                    </p>
                  </div>
                  <p className="flex shrink-0 items-center gap-2 text-sm font-medium text-primary">
                    <Calendar className="size-4" aria-hidden="true" />
                    {e.date}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Downloads" title="Circulars" />
            <ul className="mt-8 space-y-3">
              {CIRCULARS.map((c) => (
                <li key={c.title}>
                  <a
                    href="#"
                    className="flex items-start gap-3 rounded-md border border-border bg-card p-4 transition-colors hover:border-primary/40"
                  >
                    <FileText className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden="true" />
                    <span>
                      <span className="block text-sm font-medium text-card-foreground">{c.title}</span>
                      <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">{c.date}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
