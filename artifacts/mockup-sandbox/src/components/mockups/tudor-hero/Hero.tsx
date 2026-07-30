const NAV_LINKS = ["Coaching", "The Newsletter", "Articles", "Membership"];

export function Hero() {
  return (
    <div className="w-full font-sans" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200"
        style={{ minHeight: 64 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="flex flex-col leading-none">
            <span
              className="font-black tracking-widest uppercase"
              style={{ fontSize: 22, color: "#1a2744", letterSpacing: "0.18em" }}
            >
              TUDOR
            </span>
            <span
              className="font-semibold uppercase tracking-widest"
              style={{ fontSize: 8, color: "#1a2744", letterSpacing: "0.22em" }}
            >
              COLLEGIATE STRATEGIES
            </span>
          </div>
          {/* Divider + TCS badge */}
          <div className="flex items-center gap-2 ml-1">
            <div className="w-px bg-gray-300 self-stretch" style={{ height: 40 }} />
            <div className="flex flex-col items-center">
              <span
                className="font-black italic"
                style={{ fontSize: 20, color: "#1a2744", lineHeight: 1 }}
              >
                TCS
              </span>
              {/* Small decorative arrow/chevron */}
              <svg width="20" height="10" viewBox="0 0 20 10" fill="none">
                <path d="M10 0 L20 10 H0 Z" fill="#e07b2a" />
              </svg>
            </div>
          </div>
        </div>

        {/* Nav links */}
        <div className="flex items-center gap-7">
          {NAV_LINKS.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
              style={{ fontSize: 14 }}
            >
              {item}
            </a>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            style={{ fontSize: 14 }}
          >
            Log In
          </a>
          <a
            href="#"
            className="flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-white text-sm transition-colors hover:opacity-90"
            style={{ backgroundColor: "#e07b2a", fontSize: 13 }}
          >
            Join Free <span aria-hidden="true">&raquo;</span>
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="relative w-full overflow-hidden flex items-center"
        style={{
          minHeight: 640,
          // TODO: swap in the requested Unsplash photo (unsplash.com/photos/man-on-running-field-9HI8UJMSdZA)
          // once the file is available locally — outbound fetches to unsplash.com are blocked in this
          // environment. Placeholder gradient stands in for the full-bleed background photo for now.
          background:
            "linear-gradient(135deg, #101a30 0%, #1a2744 45%, #24334f 100%)",
        }}
      >
        {/* Darkening overlay for text legibility over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(10,16,30,0.88) 0%, rgba(10,16,30,0.6) 45%, rgba(10,16,30,0.25) 75%, rgba(10,16,30,0.15) 100%)",
          }}
        />

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-center px-12 py-20"
          style={{ maxWidth: 680 }}
        >
          {/* Eyebrow */}
          <p
            className="font-bold uppercase tracking-widest mb-5"
            style={{ color: "#e07b2a", fontSize: 13, letterSpacing: "0.2em" }}
          >
            For College Coaches
          </p>

          {/* Headline */}
          <h1
            className="font-black uppercase leading-none mb-6"
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            <span className="block text-white">DOMINATE YOUR</span>
            <span className="block text-white">RECRUITING</span>
            <span className="block" style={{ color: "#e07b2a" }}>
              COMPETITION
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="leading-relaxed mb-10"
            style={{ color: "#d3dae8", fontSize: 17, maxWidth: 460, lineHeight: 1.65 }}
          >
            The proven system, weekly coaching, and recruiting messaging that helps college coaches
            land the athletes they want — before the other school calls.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e07b2a", fontSize: 14 }}
            >
              Why This Works <span aria-hidden="true">&raquo;</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm rounded-full border-2 border-white transition-all hover:bg-white hover:text-gray-900"
              style={{ fontSize: 14 }}
            >
              Recruiting Websites <span aria-hidden="true">&raquo;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
