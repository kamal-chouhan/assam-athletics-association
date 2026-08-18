import Link from "next/link"
import Image from "next/image"
import { MapPin, Mail, Phone } from "lucide-react"
import { NAV, ASSOCIATION } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <span className="flex shrink-0 items-center justify-center rounded-md bg-primary-foreground p-1.5">
                <Image
                  src="/images/aaa-logo.jpg"
                  alt={`${ASSOCIATION.name} official logo`}
                  width={40}
                  height={50}
                  className="h-12 w-auto"
                />
              </span>
              <span className="font-display text-lg font-bold uppercase leading-tight tracking-wide">
                {ASSOCIATION.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              The recognised governing body for the promotion, regulation and development of athletics in the State of
              Assam.
            </p>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              {NAV.filter((n) => n.href !== "/").map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-primary-foreground/80 transition-colors hover:text-primary-foreground">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Resources
            </h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/documents" className="text-primary-foreground/80 hover:text-primary-foreground">Constitution</Link></li>
              <li><Link href="/documents" className="text-primary-foreground/80 hover:text-primary-foreground">Selection Criteria</Link></li>
              <li><Link href="/documents" className="text-primary-foreground/80 hover:text-primary-foreground">Annual Reports</Link></li>
              <li><Link href="/tournaments" className="text-primary-foreground/80 hover:text-primary-foreground">Event Calendar</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <span>{ASSOCIATION.address}</span>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a href={`mailto:${ASSOCIATION.email}`} className="hover:text-primary-foreground">{ASSOCIATION.email}</a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
                <a href={`tel:${ASSOCIATION.phone}`} className="hover:text-primary-foreground">{ASSOCIATION.phone}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-primary-foreground/15 pt-6 text-xs text-primary-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} {ASSOCIATION.name}. All rights reserved.</p>
          <p>Developed by Khelo Tech &amp; Strategy Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  )
}
