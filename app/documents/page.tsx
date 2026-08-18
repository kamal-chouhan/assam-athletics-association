import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { DocumentLibrary } from "@/components/document-library"

export const metadata: Metadata = {
  title: "Document Library | Assam Athletics Association",
  description:
    "Download official documents — AGM reports, annual reports, constitution, policies, selection criteria and circulars.",
}

export default function DocumentsPage() {
  return (
    <>
      <PageHeader
        title="Document Library"
        description="A structured repository for the publication and download of official documents — reports, constitution, policies, selection criteria and circulars."
        crumbs={[{ label: "Documents" }]}
      />
      <section className="mx-auto max-w-5xl px-4 py-20 sm:px-6 lg:px-8">
        <DocumentLibrary />
      </section>
    </>
  )
}
