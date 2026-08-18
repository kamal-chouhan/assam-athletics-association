import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { GalleryGrid } from "@/components/gallery-grid"

export const metadata: Metadata = {
  title: "Media Gallery | Assam Athletics Association",
  description: "Photo and video highlights, event albums and featured images from athletics events across Assam.",
}

export default function GalleryPage() {
  return (
    <>
      <PageHeader
        title="Media Gallery"
        description="Photo highlights, event albums and featured images capturing athletics across the State of Assam."
        crumbs={[{ label: "Gallery" }]}
      />
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <GalleryGrid />
      </section>
    </>
  )
}
