export function Newsletter() {
  return (
    <section
      className="w-full"
      style={{
        background: "linear-gradient(135deg, #1a2744 0%, #101a30 55%, #0a101e 100%)",
        fontFamily: "'Inter', 'Arial', sans-serif",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
        <div className="max-w-[520px]">
          <h2
            className="mb-4"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(38px, 6vw, 58px)",
              lineHeight: 1,
              color: "#fff",
              fontWeight: 400,
            }}
          >
            Join 4,000+ Coaches<br />Getting <span style={{ color: "#e07b2a" }}>The Newsletter.</span>
          </h2>
          <p className="text-sm sm:text-base" style={{ color: "#b0bdd4", lineHeight: 1.6 }}>
            Recruiting tactics, messaging templates, and real examples — twice a month, straight to your inbox. No fluff.
          </p>
        </div>

        <form
          className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0"
          style={{ maxWidth: 440 }}
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            type="email"
            required
            placeholder="Enter your email address"
            className="flex-1 px-5 py-3.5 rounded-full text-sm outline-none"
            style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
          />
          <button
            type="submit"
            className="px-7 py-3.5 rounded-full font-bold text-sm text-white transition-opacity hover:opacity-90 whitespace-nowrap"
            style={{ backgroundColor: "#e07b2a" }}
          >
            Subscribe »
          </button>
        </form>
      </div>
    </section>
  );
}
