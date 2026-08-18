"use client"

import { useMemo, useState } from "react"
import { FileText, Download } from "lucide-react"
import { DOCUMENTS } from "@/lib/data"
import { cn } from "@/lib/utils"

export function DocumentLibrary() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(DOCUMENTS.map((d) => d.category)))],
    [],
  )
  const [active, setActive] = useState("All")

  const filtered = active === "All" ? DOCUMENTS : DOCUMENTS.filter((d) => d.category === active)

  return (
    <div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Document categories">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            role="tab"
            aria-selected={active === c}
            onClick={() => setActive(c)}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium uppercase tracking-wide transition-colors",
              active === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-8 divide-y divide-border overflow-hidden rounded-md border border-border bg-card">
        {filtered.map((doc) => (
          <li key={doc.title}>
            <a
              href="#"
              className="flex items-center gap-4 p-5 transition-colors hover:bg-secondary"
              aria-label={`Download ${doc.title}`}
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                <FileText className="size-5" aria-hidden="true" />
              </span>
              <span className="min-w-0 flex-1">
                <span className="block font-medium text-card-foreground">{doc.title}</span>
                <span className="mt-1 block text-xs uppercase tracking-wide text-muted-foreground">
                  {doc.category} · {doc.type} · {doc.size} · {doc.date}
                </span>
              </span>
              <span className="flex shrink-0 items-center gap-2 rounded-sm border border-border px-3 py-2 text-xs font-semibold uppercase tracking-wide text-primary">
                <Download className="size-4" aria-hidden="true" />
                <span className="hidden sm:inline">Download</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
