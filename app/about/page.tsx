import type { Metadata } from "next"
import Link from "next/link"
import { Target, Compass, Users, ArrowRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { OFFICE_BEARERS, COMMITTEES } from "@/lib/data"

export const metadata: Metadata = {
  title: "About | Assam Athletics Association",
  description:
    "Learn about the Assam Athletics Association — its mandate, vision and mission, office bearers and committees governing athletics in Assam.",
}

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About the Association"
        description="The recognised governing body for the promotion, regulation and development of athletics in the State of Assam."
        crumbs={[{ label: "About" }]}
      />

      {/* About */}
      <section id="about" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <SectionHeading eyebrow="Who We Are" title="Building athletics from grassroots to podium" />
            <div className="mt-6 space-y-4 leading-relaxed text-muted-foreground">
              <p>
                The Assam Athletics Association is the apex body responsible for the promotion, regulation and
                development of athletics within the State of Assam. As the recognised authority, the Association
                represents the sport in institutional matters while strengthening communication with athletes, district
                associations, officials, stakeholders and the general public.
              </p>
              <p>
                Our work spans organising state-level competitions, standardising officiating and technical conduct,
                selecting state contingents through transparent criteria, and nurturing talent through structured
                development programmes across every district.
              </p>
              <p>
                We are committed to transparent governance — the timely publication of notices and circulars, efficient
                management of institutional documents, and open engagement with the sporting community that sustains
                athletics in Assam.
              </p>
            </div>
          </div>
          <img
            src="/images/about-training.png"
            alt="Athletes training on a track in Assam"
            className="h-full min-h-72 w-full rounded-md object-cover"
          />
        </div>
      </section>

      {/* Vision & Mission */}
      <section id="vision" className="scroll-mt-24 bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Our Direction" title="Vision & Mission" align="center" />
          <div className="mx-auto mt-10 grid max-w-4xl gap-6 md:grid-cols-2">
            <div className="rounded-md border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-sm bg-primary text-primary-foreground">
                <Compass className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-card-foreground">
                Vision
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To establish Assam as a leading contributor to Indian athletics by building a transparent, inclusive and
                high-performance ecosystem that inspires every athlete to reach the national and international stage.
              </p>
            </div>
            <div className="rounded-md border border-border bg-card p-8">
              <span className="flex size-12 items-center justify-center rounded-sm bg-accent text-accent-foreground">
                <Target className="size-6" aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-card-foreground">
                Mission
              </h3>
              <p className="mt-3 leading-relaxed text-muted-foreground">
                To promote athletics at all levels, deliver well-governed competitions, invest in coaching and
                infrastructure, and provide a clear, merit-based pathway for athletes from the grassroots to the podium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Bearers */}
      <section id="office-bearers" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Leadership" title="Office Bearers" />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {OFFICE_BEARERS.map((person) => (
            <div key={person.name} className="flex items-center gap-4 rounded-md border border-border bg-card p-5">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                {person.name.split(" ").filter((w) => !w.includes(".")).slice(-2).map((w) => w[0]).join("")}
              </span>
              <div>
                <p className="font-display text-base font-semibold text-card-foreground">{person.name}</p>
                <p className="text-sm font-medium uppercase tracking-wide text-accent">{person.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Committees */}
      <section id="committees" className="scroll-mt-24 bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Governance" title="Committees" />
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {COMMITTEES.map((c) => (
              <div key={c.name} className="rounded-md border border-border bg-card p-6">
                <span className="flex size-10 items-center justify-center rounded-sm bg-primary/10 text-primary">
                  <Users className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-card-foreground">{c.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            ))}
          </div>
          <Link
            href="/districts"
            className="mt-10 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-primary hover:gap-3 transition-all"
          >
            View District Associations
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  )
}
