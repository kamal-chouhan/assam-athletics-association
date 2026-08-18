import type { Metadata } from "next"
import { MapPin, Mail, Phone, Clock } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { SectionHeading } from "@/components/section-heading"
import { ContactForm } from "@/components/contact-form"
import { ASSOCIATION } from "@/lib/site"

export const metadata: Metadata = {
  title: "Contact | Assam Athletics Association",
  description:
    "Contact the Assam Athletics Association — office details, enquiry form, location and sponsorship & partnership enquiries.",
}

const DETAILS = [
  { icon: MapPin, label: "Office Address", value: ASSOCIATION.address },
  { icon: Mail, label: "Email", value: ASSOCIATION.email, href: `mailto:${ASSOCIATION.email}` },
  { icon: Phone, label: "Phone", value: ASSOCIATION.phone, href: `tel:${ASSOCIATION.phone}` },
  { icon: Clock, label: "Office Hours", value: "Mon – Sat, 10:00 AM – 5:00 PM" },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Get in touch with the Assam Athletics Association for general, affiliation, sponsorship and partnership enquiries."
        crumbs={[{ label: "Contact" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <SectionHeading eyebrow="Reach Us" title="Office Details" />
            <ul className="mt-8 space-y-4">
              {DETAILS.map((d) => (
                <li key={d.label} className="flex gap-4 rounded-md border border-border bg-card p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-sm bg-primary/10 text-primary">
                    <d.icon className="size-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">{d.label}</p>
                    {d.href ? (
                      <a href={d.href} className="mt-1 block text-sm font-medium text-card-foreground hover:text-primary">
                        {d.value}
                      </a>
                    ) : (
                      <p className="mt-1 text-sm font-medium text-card-foreground">{d.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-6 overflow-hidden rounded-md border border-border">
              <iframe
                title="Assam Athletics Association location"
                src="https://www.google.com/maps?q=Sarusajai%20Stadium%2C%20Guwahati%2C%20Assam&output=embed"
                className="h-64 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Enquiries" title="Send Us a Message" />
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
