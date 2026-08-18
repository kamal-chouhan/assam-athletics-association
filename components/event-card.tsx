import { Calendar, MapPin } from "lucide-react"
import type { EventItem } from "@/lib/data"
import { cn } from "@/lib/utils"

const STATUS_STYLES: Record<EventItem["status"], string> = {
  "Registration Open": "bg-accent text-accent-foreground",
  Upcoming: "bg-primary/10 text-primary",
  Completed: "bg-muted text-muted-foreground",
}

export function EventCard({ event }: { event: EventItem }) {
  return (
    <article className="flex flex-col gap-4 rounded-md border border-border bg-card p-6 transition-shadow hover:shadow-md">
      <div className="flex items-center justify-between gap-3">
        <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {event.category}
        </span>
        <span className={cn("rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide", STATUS_STYLES[event.status])}>
          {event.status}
        </span>
      </div>
      <h3 className="text-balance font-display text-xl font-semibold leading-tight text-card-foreground">
        {event.title}
      </h3>
      <div className="mt-auto space-y-2 text-sm text-muted-foreground">
        <p className="flex items-center gap-2">
          <Calendar className="size-4 shrink-0 text-primary" aria-hidden="true" />
          {event.date}
        </p>
        <p className="flex items-center gap-2">
          <MapPin className="size-4 shrink-0 text-primary" aria-hidden="true" />
          {event.venue}
        </p>
      </div>
    </article>
  )
}
