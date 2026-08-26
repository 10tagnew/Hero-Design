export function Podcast() {
  return (
    <section
      className="w-full"
      style={{ backgroundColor: "#000", fontFamily: "'Inter', 'Arial', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        <div>
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
          >
            The Podcast
          </p>
          <h2
            className="uppercase mb-5"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(36px, 5vw, 56px)",
              lineHeight: 0.95,
              color: "#fff",
              fontWeight: 400,
            }}
          >
            Recruiting talk,<br />straight from the source.
          </h2>
          <p className="text-sm sm:text-base mb-8" style={{ color: "#9aa6bf", lineHeight: 1.65, maxWidth: 440 }}>
            New episodes on what's actually working in college recruiting right now — conversations with coaches, parents, and recruits about what gets a program noticed.
          </p>
          <a
            href="https://open.spotify.com/show/1Yhu3Q9YaybVkAXeXI7AOE"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
            style={{ backgroundColor: "#e07b2a" }}
          >
            Listen On Spotify »
          </a>
        </div>

        {/* Live Spotify embed — always reflects the latest episode */}
        <div className="rounded-2xl overflow-hidden" style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.5)" }}>
          <iframe
            title="Tudor Collegiate Strategies Podcast — Spotify player"
            src="https://open.spotify.com/embed/show/1Yhu3Q9YaybVkAXeXI7AOE?utm_source=generator&theme=0"
            width="100%"
            height="352"
            style={{ border: 0, display: "block" }}
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
