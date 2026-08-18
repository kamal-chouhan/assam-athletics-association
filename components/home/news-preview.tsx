import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { SectionHeading } from "@/components/section-heading"
import { NewsCard } from "@/components/news-card"
import { NEWS } from "@/lib/data"

export function NewsPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading eyebrow="News & Updates" title="Latest from the Association" />
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:gap-3 transition-all"
        >
          All news
          <ArrowRight className="size-4" aria-hidden="true" />
        </Link>
      </div>
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {NEWS.slice(0, 3).map((n) => (
          <NewsCard key={n.id} item={n} />
        ))}
      </div>
    </section>
  )
}
