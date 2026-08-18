"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronDown } from "lucide-react"
import { NAV, ASSOCIATION } from "@/lib/site"
import { cn } from "@/lib/utils"

function Brand() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/images/aaa-logo.jpg"
        alt={`${ASSOCIATION.name} official logo`}
        width={44}
        height={56}
        className="h-12 w-auto shrink-0"
        priority
      />
      <span className="flex flex-col leading-tight">
        <span className="font-display text-base font-bold uppercase tracking-wide text-foreground sm:text-lg">
          {ASSOCIATION.name}
        </span>
        <span className="text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
          {ASSOCIATION.established}
        </span>
      </span>
    </Link>
  )
}

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/75">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Brand />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {NAV.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href)
            return (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-sm px-3 py-2 text-sm font-medium uppercase tracking-wide transition-colors hover:text-primary",
                    active ? "text-primary" : "text-foreground/80",
                  )}
                >
                  {item.label}
                  {item.children && <ChevronDown className="size-3.5" aria-hidden="true" />}
                </Link>
                {item.children && (
                  <div className="invisible absolute left-0 top-full min-w-56 rounded-md border border-border bg-popover p-1 opacity-0 shadow-lg transition-all group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block rounded-sm px-3 py-2 text-sm text-popover-foreground transition-colors hover:bg-secondary hover:text-primary"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-sm border border-border text-foreground lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-3 sm:px-6" aria-label="Mobile">
            {NAV.map((item) => (
              <div key={item.href} className="border-b border-border/60 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm font-semibold uppercase tracking-wide text-foreground"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <div className="pb-2 pl-4">
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpen(false)}
                        className="block py-1.5 text-sm text-muted-foreground"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}
