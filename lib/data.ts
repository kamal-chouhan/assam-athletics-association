export type EventItem = {
  id: string
  title: string
  date: string
  venue: string
  category: string
  status: "Upcoming" | "Registration Open" | "Completed"
}

export const EVENTS: EventItem[] = [
  {
    id: "state-senior-2026",
    title: "68th Assam State Senior Athletics Championship",
    date: "March 12–15, 2026",
    venue: "Sarusajai Stadium, Guwahati",
    category: "Senior",
    status: "Registration Open",
  },
  {
    id: "junior-inter-district-2026",
    title: "Junior Inter-District Athletics Meet",
    date: "April 8–10, 2026",
    venue: "Nehru Stadium, Dibrugarh",
    category: "Junior",
    status: "Upcoming",
  },
  {
    id: "cross-country-2026",
    title: "State Cross-Country Championship",
    date: "May 4, 2026",
    venue: "Jorhat District Sports Complex",
    category: "Open",
    status: "Upcoming",
  },
  {
    id: "school-games-2026",
    title: "Assam School Games — Athletics",
    date: "June 20–23, 2026",
    venue: "Silchar District Stadium",
    category: "Sub-Junior",
    status: "Upcoming",
  },
]

export type NewsItem = {
  id: string
  title: string
  date: string
  category: string
  excerpt: string
  image?: string
}

export const NEWS: NewsItem[] = [
  {
    id: "national-selection-2026",
    title: "Assam names 24-member squad for National Inter-State Championship",
    date: "February 2, 2026",
    category: "Press Release",
    excerpt:
      "The Selection Committee has finalised the state contingent following trials held at Sarusajai. The squad features nine debutants across sprint and field events.",
    image: "/images/news-1.png",
  },
  {
    id: "coaching-clinic",
    title: "AAA to conduct district-level coaching clinics ahead of the season",
    date: "January 24, 2026",
    category: "Announcement",
    excerpt:
      "Certified coaches will lead structured clinics across all 12 zones to strengthen grassroots preparation and standardise training methodology.",
    image: "/images/about-training.png",
  },
  {
    id: "registration-circular",
    title: "Circular: Online registration window for the State Senior Championship",
    date: "January 15, 2026",
    category: "Circular",
    excerpt:
      "District associations are requested to submit entries through the official portal. Late entries will not be entertained beyond the notified deadline.",
    image: "/images/event-stadium.png",
  },
  {
    id: "record-broken",
    title: "State record rewritten in women's 400m at the winter meet",
    date: "December 28, 2025",
    category: "News",
    excerpt:
      "A standout performance in the winter classic saw the long-standing 400m mark bettered, signalling a strong outlook for the upcoming season.",
    image: "/images/gallery-3.png",
  },
]

export const OFFICE_BEARERS = [
  { name: "Dr. Bhupen Kalita", role: "President" },
  { name: "Smti. Anjali Sharma", role: "Vice President" },
  { name: "Shri. Ranjit Bora", role: "General Secretary" },
  { name: "Shri. Pallab Das", role: "Treasurer" },
  { name: "Smti. Rina Gogoi", role: "Joint Secretary" },
  { name: "Shri. Manash Deka", role: "Executive Member" },
]

export const COMMITTEES = [
  {
    name: "Technical Committee",
    desc: "Oversees officiating standards, competition rules, records ratification and technical delegate assignments.",
  },
  {
    name: "Selection Committee",
    desc: "Responsible for transparent selection of state contingents based on published criteria and trial performances.",
  },
  {
    name: "Coaches & Development Committee",
    desc: "Drives grassroots development, coach education programmes and talent identification across districts.",
  },
  {
    name: "Anti-Doping & Ethics Committee",
    desc: "Ensures compliance with NADA guidelines, athlete welfare and integrity of competition.",
  },
  {
    name: "Finance Committee",
    desc: "Manages budgeting, audits and financial governance in line with the Association's constitution.",
  },
  {
    name: "Media & Publicity Committee",
    desc: "Handles communications, event promotion and stakeholder engagement across platforms.",
  },
]

export const DISTRICTS = [
  "Kamrup Metropolitan",
  "Kamrup Rural",
  "Dibrugarh",
  "Jorhat",
  "Cachar (Silchar)",
  "Nagaon",
  "Sonitpur (Tezpur)",
  "Barpeta",
  "Tinsukia",
  "Sivasagar",
  "Golaghat",
  "Dhubri",
  "Bongaigaon",
  "Karimganj",
  "Nalbari",
  "Lakhimpur",
]

export type DocItem = {
  title: string
  category: string
  date: string
  size: string
  type: string
}

export const DOCUMENTS: DocItem[] = [
  { title: "Constitution of Assam Athletics Association", category: "Governance", date: "2024", size: "1.8 MB", type: "PDF" },
  { title: "Annual Report 2024–25", category: "Reports", date: "2025", size: "4.2 MB", type: "PDF" },
  { title: "AGM Minutes 2025", category: "Reports", date: "2025", size: "620 KB", type: "PDF" },
  { title: "Athlete Selection Criteria 2026", category: "Policies", date: "2026", size: "410 KB", type: "PDF" },
  { title: "Anti-Doping Policy", category: "Policies", date: "2024", size: "300 KB", type: "PDF" },
  { title: "Code of Conduct for Officials", category: "Policies", date: "2024", size: "280 KB", type: "PDF" },
  { title: "Circular — State Senior Championship Entries", category: "Circulars", date: "2026", size: "180 KB", type: "PDF" },
  { title: "Affiliation Guidelines for District Associations", category: "Governance", date: "2023", size: "540 KB", type: "PDF" },
]

export const GALLERY = [
  { src: "/images/gallery-1.png", caption: "Long jump final — State Championship" },
  { src: "/images/gallery-2.png", caption: "Javelin throw qualifying round" },
  { src: "/images/gallery-3.png", caption: "100m sprint finish" },
  { src: "/images/gallery-4.png", caption: "Medal ceremony" },
  { src: "/images/news-1.png", caption: "4x100m relay changeover" },
  { src: "/images/event-stadium.png", caption: "Championship under floodlights" },
]
