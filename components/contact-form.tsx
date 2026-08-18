"use client"

import { useState } from "react"
import { Send, CheckCircle2 } from "lucide-react"

const SUBJECTS = ["General Enquiry", "Affiliation", "Sponsorship & Partnership", "Media", "Athlete Support"]

export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-md border border-border bg-card p-10 text-center">
        <CheckCircle2 className="size-12 text-primary" aria-hidden="true" />
        <h3 className="mt-4 font-display text-xl font-semibold text-card-foreground">Thank you for reaching out</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          Your enquiry has been received. The Association will respond to you shortly.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 rounded-sm border border-border px-5 py-2.5 text-sm font-semibold uppercase tracking-wide text-primary"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    "mt-1.5 w-full rounded-sm border border-border bg-card px-3 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/20"

  return (
    <form onSubmit={handleSubmit} className="rounded-md border border-border bg-card p-6 sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
          <input id="name" name="name" required className={inputClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="text-sm font-medium text-foreground">Email</label>
          <input id="email" name="email" type="email" required className={inputClass} placeholder="you@example.com" />
        </div>
        <div>
          <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</label>
          <input id="phone" name="phone" className={inputClass} placeholder="+91" />
        </div>
        <div>
          <label htmlFor="subject" className="text-sm font-medium text-foreground">Subject</label>
          <select id="subject" name="subject" className={inputClass} defaultValue={SUBJECTS[0]}>
            {SUBJECTS.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <label htmlFor="message" className="text-sm font-medium text-foreground">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={inputClass}
          placeholder="How can we help?"
        />
      </div>
      <button
        type="submit"
        className="mt-6 inline-flex items-center gap-2 rounded-sm bg-primary px-6 py-3 text-sm font-semibold uppercase tracking-wide text-primary-foreground transition-opacity hover:opacity-90"
      >
        Send message
        <Send className="size-4" aria-hidden="true" />
      </button>
    </form>
  )
}
