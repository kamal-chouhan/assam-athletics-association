import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { DISTRICTS } from "@/lib/data"

export const metadata: Metadata = {
  title: "District Associations | Assam Athletics Association",
  description: "Affiliated district athletics associations across the State of Assam.",
}

export default function DistrictsPage() {
  return (
    <>
      <PageHeader
        title="District Associations"
        description="Athletics in Assam is powered by affiliated district associations that organise local competitions and identify grassroots talent."
        crumbs={[{ label: "About", href: "/about" }, { label: "District Associations" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DISTRICTS.map((d, i) => (
            <div
              key={d}
              className="flex items-center gap-4 rounded-md border border-border bg-card p-5 transition-colors hover:border-primary/40"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-display text-base font-semibold text-card-foreground">{d}</p>
                <p className="text-xs uppercase tracking-wide text-muted-foreground">
                  District Athletics Association
                </p>
              </div>
              <span className="ml-auto font-display text-sm font-bold text-muted-foreground/40">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-md border border-dashed border-border bg-secondary p-8 text-center">
          <h2 className="font-display text-xl font-semibold uppercase tracking-wide text-foreground">
            Seeking Affiliation?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground">
            District bodies interested in affiliation with the Assam Athletics Association may refer to the affiliation
            guidelines in the Document Library or contact the General Secretary.
          </p>
        </div>
      </section>
    </>
  )
}
