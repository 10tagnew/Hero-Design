const NAV_LINKS = ["Coaching", "The Newsletter", "Articles", "Membership"];

export function Hero() {
  return (
    <div
      className="w-full font-sans p-4 md:p-6"
      style={{ fontFamily: "'Inter', 'Arial', sans-serif", backgroundColor: "#e7ebf1" }}
    >
      {/* Hero card: nav floats over the full-bleed photo, framed with a white border */}
      <div
        className="relative w-full overflow-hidden rounded-[28px] border-[6px] border-white flex flex-col"
        style={{
          minHeight: 700,
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.25)",
          backgroundImage: "url(/__mockup/images/hero-bg.avif)",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Darkening overlay for text legibility over the photo */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,16,30,0.15) 0%, rgba(10,16,30,0.25) 22%, rgba(10,16,30,0.55) 60%, rgba(10,16,30,0.8) 100%)",
          }}
        />

        {/* Navbar — floats with margin from the top edge, photo visible behind/around it */}
        <nav
          className="relative z-10 flex items-center justify-between mx-6 mt-6 md:mx-10 md:mt-8 px-6 py-3 bg-white rounded-full"
          style={{ minHeight: 64, boxShadow: "0 8px 24px rgba(15, 23, 42, 0.18)" }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/__mockup/images/tudor-logo.jpeg"
              alt="Tudor Collegiate Strategies"
              style={{ height: 64, width: "auto" }}
            />
          </div>

          {/* Nav links */}
          <div className="hidden md:flex items-center gap-7">
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

        {/* Content */}
        <div
          className="relative z-10 flex flex-col justify-center flex-1 px-8 md:px-14 py-14"
          style={{ maxWidth: 680 }}
        >
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
