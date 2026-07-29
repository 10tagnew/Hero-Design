export function Hero() {
  return (
    <div className="w-full font-sans" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Navbar */}
      <nav
        className="flex items-center justify-between px-6 py-3 bg-white border-b border-gray-200"
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
          {["Coaching", "The Newsletter", "Articles", "Membership", "About Dan"].map((item) => (
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
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
            style={{ fontSize: 14 }}
          >
            Log In
          </a>
          <a
            href="#"
            className="px-5 py-2 rounded font-bold text-white text-sm uppercase tracking-wide transition-colors"
            style={{ backgroundColor: "#e07b2a", fontSize: 13, letterSpacing: "0.05em" }}
          >
            JOIN FREE
          </a>
        </div>
      </nav>

      {/* Hero */}
      <div
        className="relative w-full overflow-hidden flex items-stretch"
        style={{ backgroundColor: "#1a2744", minHeight: 520 }}
      >
        {/* Left content */}
        <div
          className="flex flex-col justify-center z-10 pl-12 pr-8 py-14"
          style={{ maxWidth: 560, flex: "0 0 auto" }}
        >
          {/* Eyebrow */}
          <p
            className="font-bold uppercase tracking-widest mb-4"
            style={{ color: "#e07b2a", fontSize: 13, letterSpacing: "0.2em" }}
          >
            FOR COLLEGE COACHES
          </p>

          {/* Headline */}
          <h1
            className="font-black uppercase leading-none mb-4"
            style={{
              fontSize: 68,
              lineHeight: 0.95,
              letterSpacing: "-0.01em",
            }}
          >
            <span className="block text-white">DOMINATE YOUR</span>
            <span className="block text-white">RECRUITING</span>
            <span
              className="block"
              style={{ color: "#e07b2a" }}
            >
              COMPETITION
            </span>
          </h1>

          {/* Subtext */}
          <p
            className="leading-relaxed mb-10"
            style={{ color: "#b0bdd4", fontSize: 16, maxWidth: 380, lineHeight: 1.65 }}
          >
            The proven system, weekly coaching, and recruiting messaging that helps college coaches land the
            athletes they want — before the other school calls.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              className="px-7 py-4 font-black text-white uppercase tracking-widest text-sm rounded transition-opacity hover:opacity-90"
              style={{
                backgroundColor: "#e07b2a",
                fontSize: 13,
                letterSpacing: "0.12em",
              }}
            >
              WHY THIS WORKS
            </a>
            <a
              href="#"
              className="px-7 py-4 font-black text-white uppercase tracking-widest text-sm rounded border-2 border-white transition-all hover:bg-white hover:text-gray-900"
              style={{
                fontSize: 13,
                letterSpacing: "0.12em",
              }}
            >
              RECRUITING WEBSITES
            </a>
          </div>
        </div>

        {/* Coaches image – right side */}
        <div
          className="flex-1 relative flex items-end justify-center"
          style={{ minHeight: 520 }}
        >
          <img
            src="/__mockup/images/coaches.png"
            alt="College coaches celebrating"
            className="absolute bottom-0 right-0 h-full object-contain object-bottom"
            style={{ maxHeight: 520, right: 0 }}
          />
          {/* Subtle gradient fade on left edge of image area */}
          <div
            className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
            style={{
              background: "linear-gradient(to right, #1a2744 0%, transparent 100%)",
            }}
          />
        </div>
      </div>
    </div>
  );
}
