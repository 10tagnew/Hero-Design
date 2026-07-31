const CARDS = [
  {
    label: "Weekly Coaching",
    headline: "Film sessions.\nGame plans.\nAccountability.",
    image: "/images/hero-bg-3.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Recruit Messaging",
    headline: "Texts and DMs that\nactually get responses.",
    image: "/images/hero-bg.avif",
    imagePosition: "center 20%",
  },
  {
    label: "Recruiting Websites",
    headline: "Sites recruits actually\nspend time on.",
    image: "/images/hero-bg-6.avif",
    imagePosition: "center 30%",
  },
];

export function Features() {
  return (
    <section
      className="pt-20 lg:pt-[190px] pb-20"
      style={{ backgroundColor: "#000", fontFamily: "'Inter', 'Arial', sans-serif" }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10">

        {/* Section headline */}
        <div className="mb-10 lg:mb-14">
          <h2
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(96px, 22vw, 260px)",
              lineHeight: 0.82,
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "-0.01em",
            }}
          >
            NEXT<br />LEVEL.
          </h2>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="relative overflow-hidden rounded-2xl flex"
              style={{ backgroundColor: "#141414", minHeight: 300, border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div className="flex-1 min-w-0 p-6 sm:p-7 flex flex-col justify-center">
                <p
                  className="mb-4"
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#e07b2a",
                  }}
                >
                  {card.label}
                </p>
                <p
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    fontSize: 24,
                    lineHeight: 1.15,
                    color: "#fff",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.headline}
                </p>
              </div>
              <div className="relative w-[36%] shrink-0">
                <img
                  src={card.image}
                  alt=""
                  aria-hidden="true"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: card.imagePosition }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom strip */}
        <div
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-14"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.08)",
            paddingTop: 32,
          }}
        >
          <p style={{ color: "#7a8399", fontSize: 14 }}>
            Trusted by coaches at D1, D2, D3 &amp; NAIA programs.
          </p>
          <a
            href="#"
            style={{
              backgroundColor: "#e07b2a",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13,
              padding: "12px 28px",
              borderRadius: 99,
              textDecoration: "none",
              letterSpacing: "0.02em",
            }}
          >
            See How It Works »
          </a>
        </div>
      </div>
    </section>
  );
}
