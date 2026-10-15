export function RecruitingWebsites() {
  return (
    <section
      id="recruiting-websites"
      className="scroll-mt-6 pt-12 sm:pt-16 pb-4 sm:pb-6"
      style={{ backgroundColor: "#000", fontFamily: "'Inter', 'Arial', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Copy */}
        <div className="max-w-[560px]">
          <p
            className="text-xs sm:text-sm font-bold uppercase mb-4"
            style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
          >
            Recruiting Websites
          </p>
          <h2
            className="uppercase mb-5 sm:mb-6"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(44px, 7vw, 96px)",
              lineHeight: 0.9,
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Sites That Demand <span style={{ color: "#e07b2a" }}>Attention</span>
          </h2>
          <p
            className="text-sm sm:text-lg mb-8 sm:mb-10"
            style={{ color: "#d3dae8", maxWidth: 500, lineHeight: 1.65 }}
          >
            Recruits judge your program by your website long before they ever set foot on campus.
            We build recruiting sites that look like a top program and are easy for your staff to keep updated.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-3 pl-6 pr-2 py-2 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#e07b2a" }}
          >
            See Live Examples
            <span
              className="flex items-center justify-center rounded-full shrink-0"
              style={{ width: 34, height: 34, backgroundColor: "rgba(0,0,0,0.2)" }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </div>

        {/* Browser-frame preview */}
        <div
          className="rounded-2xl overflow-hidden"
          style={{
            backgroundColor: "#141414",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 30px 70px rgba(0,0,0,0.5)",
          }}
        >
          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{ backgroundColor: "#12182a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            aria-hidden="true"
          >
            <div className="flex gap-1.5">
              {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
                <span key={c} className="block w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c, opacity: 0.85 }} />
              ))}
            </div>
            <div className="flex-1 h-6 rounded-full" style={{ backgroundColor: "rgba(255,255,255,0.06)" }} />
          </div>
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            aria-label="Preview of a recruiting website built by Tudor Collegiate Strategies"
            className="block w-full aspect-video object-cover object-top"
          >
            <source src="/images/hero-demo.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </section>
  );
}
