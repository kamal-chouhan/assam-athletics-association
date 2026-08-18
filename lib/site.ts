export const ASSOCIATION = {
  name: "Assam Athletics Association",
  shortName: "AAA",
  tagline: "Governing Athletics Across Assam",
  established: "Estd. 1948",
  email: "info@assamathletics.org",
  phone: "+91 361 245 0000",
  address: "Sarusajai Sports Complex, Guwahati, Assam 781040",
}

export type NavItem = {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

export const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "About",
    href: "/about",
    children: [
      { label: "About Association", href: "/about#about" },
      { label: "Vision & Mission", href: "/about#vision" },
      { label: "Office Bearers", href: "/about#office-bearers" },
      { label: "Committees", href: "/about#committees" },
      { label: "District Associations", href: "/districts" },
    ],
  },
  { label: "Tournaments", href: "/tournaments" },
  { label: "News", href: "/news" },
  { label: "Documents", href: "/documents" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
]
