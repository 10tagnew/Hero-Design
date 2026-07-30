const NAV_LINKS = ["Coaching", "The Newsletter", "Articles", "Membership"];

export function Hero() {
  return (
    <div className="w-full font-sans p-4 md:p-6 relative" style={{ fontFamily: "'Inter', 'Arial', sans-serif", backgroundColor: "#e7ebf1", paddingBottom: "200px" }}>
      {/* Hero card */}
      <div
        className="relative w-full overflow-hidden rounded-[28px] border-[6px] border-white flex flex-col"
        style={{
          minHeight: 700,
          boxShadow: "0 20px 50px rgba(15, 23, 42, 0.25)",
          backgroundImage: "url('/images/hero-bg.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        {/* Darkening overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,16,30,0.15) 0%, rgba(10,16,30,0.25) 22%, rgba(10,16,30,0.55) 60%, rgba(10,16,30,0.8) 100%)",
          }}
        />

        {/* Navbar */}
        <nav
          className="relative z-10 flex items-center justify-between mx-6 mt-6 md:mx-10 md:mt-8 px-6 py-3 bg-white rounded-full"
          style={{ minHeight: 64, boxShadow: "0 8px 24px rgba(15, 23, 42, 0.18)" }}
        >
          {/* Logo */}
          <div className="flex items-center">
            <img
              src="/images/tudor-logo.jpeg"
              alt="Tudor Collegiate Strategies"
              style={{ height: 44, width: "auto" }}
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
            <a href="#" className="text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors" style={{ fontSize: 14 }}>
              Log In
            </a>
            <a
              href="#"
              className="flex items-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-white text-sm transition-colors hover:opacity-90"
              style={{ backgroundColor: "#e07b2a", fontSize: 13 }}
            >
              Join Free <span aria-hidden="true">»</span>
            </a>
          </div>
        </nav>

        {/* Hero content */}
        <div
          className="relative flex flex-col justify-end px-10"
          style={{ maxWidth: 760, zIndex: 10, marginTop: "auto", paddingBottom: 54, paddingTop: 48 }}
        >
          {/* Headline */}
          <h1
            className="uppercase mb-6"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(90px, 14vw, 160px)",
              lineHeight: 0.87,
              letterSpacing: "0.01em",
              fontWeight: 400,
            }}
          >
            <span className="block text-white">OUT</span>
            <span className="block text-white">RECRUIT</span>
            <span className="block" style={{ color: "#e07b2a" }}>EVERYBODY</span>
          </h1>

          {/* Subtext */}
          <p
            className="leading-relaxed mb-10"
            style={{ color: "#d3dae8", fontSize: 17, maxWidth: 460, lineHeight: 1.65 }}
          >
            Coaches work with us for one reason: land their dream draft classes year after year. It's possible through our coaching, our recruit messaging, and our recruiting websites.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-4 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e07b2a", fontSize: 14 }}
            >
              Why This Works »
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm rounded-full border-2 border-white transition-all hover:bg-white hover:text-gray-900"
              style={{ fontSize: 14 }}
            >
              Recruiting Websites »
            </a>
          </div>
        </div>
      </div>

      {/* Phone frame — bottom-right, bleeds into next section */}
      <div
        style={{
          position: "absolute",
          right: 56,
          bottom: 0,
          width: 248,
          height: 520,
          borderRadius: 44,
          border: "4px solid #e07b2a",
          backgroundColor: "#0a101e",
          overflow: "hidden",
          boxShadow:
            "0 0 0 8px rgba(224,123,42,0.12), 0 24px 64px rgba(0,0,0,0.55)",
          zIndex: 30,
        }}
      >
        {/* Top notch */}
        <div
          style={{
            position: "absolute",
            top: 12,
            left: "50%",
            transform: "translateX(-50%)",
            width: 72,
            height: 22,
            borderRadius: 99,
            backgroundColor: "#0a101e",
            zIndex: 10,
          }}
        />
        {/* Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "84%",
            height: "84%",
            objectFit: "cover",
            borderRadius: 28,
          }}
        >
          <source src="/images/hero-demo.mp4" type="video/mp4" />
        </video>
        {/* Home indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 10,
            left: "50%",
            transform: "translateX(-50%)",
            width: 80,
            height: 5,
            borderRadius: 99,
            backgroundColor: "rgba(255,255,255,0.35)",
            zIndex: 10,
          }}
        />
      </div>
    </div>
  );
}
