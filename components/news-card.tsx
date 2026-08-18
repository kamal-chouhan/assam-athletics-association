import { Calendar } from "lucide-react"
import type { NewsItem } from "@/lib/data"

export function NewsCard({ item }: { item: NewsItem }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-md border border-border bg-card transition-shadow hover:shadow-md">
      {item.image && (
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={item.image || "/placeholder.svg"}
            alt=""
            className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-xs">
          <span className="rounded-sm bg-primary/10 px-2 py-1 font-semibold uppercase tracking-wide text-primary">
            {item.category}
          </span>
          <span className="flex items-center gap-1 text-muted-foreground">
            <Calendar className="size-3.5" aria-hidden="true" />
            {item.date}
          </span>
        </div>
        <h3 className="mt-3 text-balance font-display text-lg font-semibold leading-tight text-card-foreground">
          {item.title}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.excerpt}</p>
      </div>
    </article>
  )
}
