import { Hero } from "@/components/home/hero"
import { QuickLinks } from "@/components/home/quick-links"
import { AboutSnippet } from "@/components/home/about-snippet"
import { EventsPreview } from "@/components/home/events-preview"
import { NewsPreview } from "@/components/home/news-preview"
import { CtaBanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickLinks />
      <AboutSnippet />
      <EventsPreview />
      <NewsPreview />
      <CtaBanner />
    </>
  )
}
