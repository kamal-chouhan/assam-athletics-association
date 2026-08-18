import Link from "next/link"
import { Trophy, Newspaper, FileText, Images } from "lucide-react"

const LINKS = [
  { label: "Tournaments & Events", href: "/tournaments", icon: Trophy, desc: "Championships, calendar & circulars" },
  { label: "News & Updates", href: "/news", icon: Newspaper, desc: "Notifications & press releases" },
  { label: "Document Library", href: "/documents", icon: FileText, desc: "Constitution, reports & policies" },
  { label: "Media Gallery", href: "/gallery", icon: Images, desc: "Photos & event albums" },
]

export function QuickLinks() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid gap-px overflow-hidden rounded-md border border-border bg-border shadow-lg sm:grid-cols-2 lg:grid-cols-4">
        {LINKS.map((l) => (
          <Link
            key={l.href}
            href={l.href}
            className="group flex flex-col gap-3 bg-card p-6 transition-colors hover:bg-secondary"
          >
            <span className="flex size-12 items-center justify-center rounded-sm bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <l.icon className="size-6" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-semibold uppercase tracking-wide text-card-foreground">
              {l.label}
            </span>
            <span className="text-sm text-muted-foreground">{l.desc}</span>
          </Link>
        ))}
      </div>
    </section>
  )
}
