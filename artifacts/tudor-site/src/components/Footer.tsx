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
  { label: "X", path: "M18.9 2H22l-7.6 8.7L23.3 22h-7.1l-5.6-6.9L4.2 22H1l8.2-9.3L.7 2h7.3l5 6.3L18.9 2z" },
  { label: "LinkedIn", path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.14 1.44-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 110-4.12 2.06 2.06 0 010 4.12zM7.12 20.45H3.56V9h3.56v11.45z" },
];

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9aa6bf" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2.5" y="2.5" width="19" height="19" rx="5" />
      <circle cx="12" cy="12" r="4.3" />
      <circle cx="17.6" cy="6.4" r="1" fill="#9aa6bf" stroke="none" />
    </svg>
  );
}

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
        </div>

        {/* Attribution + social icons */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 24 }}
        >
          <p style={{ fontSize: 13, color: "#4a5570" }}>
            Website by Tudor Collegiate Strategies
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#"
              aria-label="Instagram"
              className="flex items-center justify-center rounded-full transition-colors hover:bg-white/10"
              style={{ width: 36, height: 36, border: "1px solid rgba(255,255,255,0.15)" }}
            >
              <InstagramIcon />
            </a>
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

        {/* Legal line */}
        <div
          className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: 20 }}
        >
          <a href="#" style={{ fontSize: 13, color: "#4a5570" }}>Privacy Policy</a>
          <a href="#" style={{ fontSize: 13, color: "#4a5570" }}>Terms of Service</a>
          <span style={{ fontSize: 13, color: "#4a5570" }}>© Tudor Collegiate Strategies</span>
        </div>
      </div>
    </footer>
  );
}
