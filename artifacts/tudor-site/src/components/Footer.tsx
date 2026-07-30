const COLUMNS = [
  {
    heading: "Coaching",
    links: ["Weekly Calls", "Game Plans", "Accountability", "Staff Training", "All Coaching"],
  },
  {
    heading: "For Coaches",
    links: ["Recruit Messaging", "Recruiting Websites", "How It Works", "Success Stories", "Pricing"],
  },
  {
    heading: "Resources",
    links: ["The Newsletter", "Articles", "Recruiting Guides", "FAQs", "Membership"],
  },
  {
    heading: "Company",
    links: ["About Dan", "Testimonials", "Contact Us", "Log In"],
  },
];

const SOCIALS = [
  { label: "Facebook", path: "M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.2c0-.95.27-1.6 1.63-1.6h1.74V3.6C15.87 3.5 15 3.4 13.98 3.4c-2.4 0-4.05 1.47-4.05 4.16v2.75H7.1v3.3h2.83V22h3.57z" },
  { label: "Instagram", path: "M12 2.2c2.7 0 3 .01 4.1.06 1.05.05 1.62.23 2 .38.5.2.86.43 1.24.8.37.38.6.74.8 1.24.15.38.33.95.38 2 .05 1.1.06 1.4.06 4.1s-.01 3-.06 4.1c-.05 1.05-.23 1.62-.38 2-.2.5-.43.86-.8 1.24-.38.37-.74.6-1.24.8-.38.15-.95.33-2 .38-1.1.05-1.4.06-4.1.06s-3-.01-4.1-.06c-1.05-.05-1.62-.23-2-.38a3.35 3.35 0 01-1.24-.8 3.35 3.35 0 01-.8-1.24c-.15-.38-.33-.95-.38-2-.05-1.1-.06-1.4-.06-4.1s.01-3 .06-4.1c.05-1.05.23-1.62.38-2 .2-.5.43-.86.8-1.24.38-.37.74-.6 1.24-.8.38-.15.95-.33 2-.38 1.1-.05 1.4-.06 4.1-.06M12 0C9.25 0 8.9.01 7.8.07 6.7.12 5.94.3 5.28.56a5.6 5.6 0 00-2.02 1.32A5.6 5.6 0 001.94 3.9c-.25.66-.44 1.42-.49 2.52C1.4 7.5 1.39 7.85 1.39 10.6s.01 3.1.07 4.2c.05 1.1.23 1.86.49 2.52.27.68.63 1.26 1.32 1.94.56.56 1.24.99 1.94 1.32.66.25 1.42.44 2.52.49 1.1.06 1.45.07 4.2.07s3.1-.01 4.2-.07c1.1-.05 1.86-.24 2.52-.49a5.6 5.6 0 001.94-1.32c.56-.56.99-1.24 1.32-1.94.25-.66.44-1.42.49-2.52.06-1.1.07-1.45.07-4.2s-.01-3.1-.07-4.2c-.05-1.1-.24-1.86-.49-2.52a5.6 5.6 0 00-1.32-1.94A5.6 5.6 0 0018.72.56c-.66-.25-1.42-.44-2.52-.49C15.1.01 14.75 0 12 0z" },
  { label: "X", path: "M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.2 22H1l8.2-9.3L.7 2h7.3l5 6.3L18.9 2z" },
  { label: "LinkedIn", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" },
];

export function Footer() {
  return (
    <footer style={{ backgroundColor: "#080c16", fontFamily: "'Inter', 'Arial', sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-16 pb-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-6 mb-12">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <p className="mb-4 text-sm font-bold" style={{ color: "#fff" }}>
                {col.heading}
              </p>
              <ul className="space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm transition-colors" style={{ color: "#6b7a9a" }}>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 sm:col-span-4 lg:col-span-1 lg:justify-self-end">
            <p className="mb-4 text-sm font-bold" style={{ color: "#fff" }}>
              Social Media
            </p>
            <div className="flex items-center gap-3">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
                  style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)" }}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#9aa6bf">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}
        >
          <p style={{ fontSize: 13, color: "#4a5570" }}>
            Website by Tudor Collegiate Strategies
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a href="#" style={{ fontSize: 13, color: "#4a5570" }}>Privacy Policy</a>
            <a href="#" style={{ fontSize: 13, color: "#4a5570" }}>Terms of Service</a>
            <span style={{ fontSize: 13, color: "#4a5570" }}>© Tudor Collegiate Strategies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
