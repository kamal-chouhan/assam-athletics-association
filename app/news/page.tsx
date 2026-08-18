import type { Metadata } from "next"
import { Bell } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { NewsCard } from "@/components/news-card"
import { NEWS } from "@/lib/data"

export const metadata: Metadata = {
  title: "News & Updates | Assam Athletics Association",
  description:
    "News articles, press releases, official notifications, circulars and important announcements from the Assam Athletics Association.",
}

const NOTICES = [
  "Trials for the National Inter-State Championship concluded at Sarusajai.",
  "Revised timing schedule published for the State Senior Championship.",
  "Coach accreditation renewals due before the start of the 2026 season.",
  "Anti-doping awareness workshop scheduled across all zones.",
]

export default function NewsPage() {
  const [featured, ...rest] = NEWS

  return (
    <>
      <PageHeader
        title="News & Updates"
        description="News articles, press releases, official notifications, circulars and important announcements."
        crumbs={[{ label: "News" }]}
      />

      {/* Notice ticker */}
      <div className="border-b border-border bg-accent text-accent-foreground">
        <div className="mx-auto flex max-w-7xl items-center gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <span className="flex shrink-0 items-center gap-2 text-xs font-bold uppercase tracking-widest">
            <Bell className="size-4" aria-hidden="true" />
            Notices
          </span>
          <p className="truncate text-sm text-accent-foreground/90">{NOTICES[0]}</p>
        </div>
      </div>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <SectionHeading eyebrow="Latest" title="News & Press Releases" />

            {/* Featured */}
            <article className="mt-8 overflow-hidden rounded-md border border-border bg-card">
              {featured.image && (
                <img src={featured.image || "/placeholder.svg"} alt="" className="aspect-[16/9] w-full object-cover" />
              )}
              <div className="p-6">
                <div className="flex items-center gap-3 text-xs">
                  <span className="rounded-sm bg-accent px-2 py-1 font-semibold uppercase tracking-wide text-accent-foreground">
                    {featured.category}
                  </span>
                  <span className="text-muted-foreground">{featured.date}</span>
                </div>
                <h3 className="mt-3 text-balance font-display text-2xl font-bold leading-tight text-card-foreground">
                  {featured.title}
                </h3>
                <p className="mt-3 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              </div>
            </article>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {rest.map((n) => (
                <NewsCard key={n.id} item={n} />
              ))}
            </div>
          </div>

          {/* Notices sidebar */}
          <aside>
            <SectionHeading eyebrow="Board" title="Important Announcements" />
            <ul className="mt-8 space-y-3">
              {NOTICES.map((notice) => (
                <li key={notice} className="flex gap-3 rounded-md border border-border bg-card p-4">
                  <span className="mt-2 size-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  <span className="text-sm leading-relaxed text-card-foreground">{notice}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </>
  )
}
