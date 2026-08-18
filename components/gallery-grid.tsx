"use client"

import { useEffect, useState } from "react"
import { X } from "lucide-react"
import { GALLERY } from "@/lib/data"

export function GalleryGrid() {
  const [open, setOpen] = useState<number | null>(null)

  useEffect(() => {
    if (open === null) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open])

  return (
    <>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {GALLERY.map((item, i) => (
          <button
            key={item.src}
            type="button"
            onClick={() => setOpen(i)}
            className="group relative aspect-[4/3] overflow-hidden rounded-md border border-border"
            aria-label={`View: ${item.caption}`}
          >
            <img
              src={item.src || "/placeholder.svg"}
              alt={item.caption}
              className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary/90 to-transparent p-3 text-left text-xs font-medium uppercase tracking-wide text-primary-foreground opacity-0 transition-opacity group-hover:opacity-100">
              {item.caption}
            </span>
          </button>
        ))}
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-foreground/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label={GALLERY[open].caption}
          onClick={() => setOpen(null)}
        >
          <button
            type="button"
            onClick={() => setOpen(null)}
            className="absolute right-4 top-4 flex size-11 items-center justify-center rounded-full bg-background/10 text-background"
            aria-label="Close"
          >
            <X className="size-6" />
          </button>
          <figure className="max-h-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <img
              src={GALLERY[open].src || "/placeholder.svg"}
              alt={GALLERY[open].caption}
              className="max-h-[80vh] w-full rounded-md object-contain"
            />
            <figcaption className="mt-3 text-center text-sm text-background/80">{GALLERY[open].caption}</figcaption>
          </figure>
        </div>
      )}
    </>
  )
}
