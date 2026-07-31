const ISSUES = [
  { tag: "AUG", num: "12", title: "The 9PM Text That Gets Answered", meta: "Issue 47 · Messaging" },
  { tag: "JUL", num: "29", title: "What Top-25 Programs Do Differently", meta: "Issue 46 · Strategy" },
  { tag: "JUL", num: "15", title: "Turning A Camp Visit Into A Commit", meta: "Issue 45 · Coaching" },
  { tag: "JUL", num: "01", title: "The Parent Call Framework", meta: "Issue 44 · Messaging" },
];

export function Highlights() {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0d1424", fontFamily: "'Inter', 'Arial', sans-serif" }}
    >
      {/* Background photo */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/images/hero-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, rgba(13,20,36,0.97) 0%, rgba(13,20,36,0.9) 35%, rgba(13,20,36,0.55) 65%, rgba(13,20,36,0.25) 100%)",
        }}
      />

      <div className="relative max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-20 sm:py-28">
        <div
          className="bg-white rounded-2xl p-7 sm:p-9"
          style={{ maxWidth: 480, boxShadow: "0 30px 70px rgba(0,0,0,0.4)" }}
        >
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: 30,
                lineHeight: 1.05,
                color: "#1a2744",
                fontWeight: 400,
              }}
            >
              Latest From<br />The Newsletter
            </h3>
            <a
              href="#"
              aria-label="View all newsletter issues"
              className="shrink-0 flex items-center justify-center rounded-full transition-transform hover:scale-105"
              style={{ width: 48, height: 48, backgroundColor: "#e07b2a" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
          <p className="text-sm mb-6" style={{ color: "#6b7280", lineHeight: 1.6 }}>
            Real recruiting tactics, twice a month, from a coach who's done it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
            {ISSUES.map((issue) => (
              <div key={issue.title} className="flex items-start gap-3">
                <div
                  className="shrink-0 flex flex-col items-center justify-center rounded-lg"
                  style={{ width: 48, height: 48, backgroundColor: "#111827" }}
                >
                  <span style={{ fontSize: 9, fontWeight: 700, letterSpacing: "0.08em", color: "#e07b2a" }}>
                    {issue.tag}
                  </span>
                  <span style={{ fontSize: 15, fontWeight: 700, color: "#fff", lineHeight: 1.1 }}>
                    {issue.num}
                  </span>
                </div>
                <div>
                  <p style={{ fontSize: 14, fontWeight: 600, color: "#1a2744", lineHeight: 1.35 }}>
                    {issue.title}
                  </p>
                  <p style={{ fontSize: 12, color: "#8b93a7", marginTop: 2 }}>{issue.meta}</p>
                </div>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="inline-block mt-7 mb-5 text-sm font-semibold"
            style={{ color: "#e07b2a" }}
          >
            View all issues →
          </a>

          {/* Newsletter signup CTA */}
          <form
            className="flex flex-col sm:flex-row gap-2 pt-5"
            style={{ borderTop: "1px solid #eceef2" }}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              required
              placeholder="Your email address"
              className="flex-1 min-w-0 px-4 py-3 rounded-full text-sm outline-none"
              style={{ backgroundColor: "#f3f5f9", border: "1px solid #e4e7ee", color: "#1a2744" }}
            />
            <button
              type="submit"
              className="px-5 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#e07b2a" }}
            >
              Subscribe »
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
