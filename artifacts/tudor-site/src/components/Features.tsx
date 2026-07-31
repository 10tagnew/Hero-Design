const CARDS = [
  {
    label: "Weekly Coaching",
    headline: "Film sessions.\nGame plans.\nAccountability.",
    body: "A live call every week with a coach who's been in your seat — so you always know the next right move with a recruit.",
    gradient: "linear-gradient(160deg, #16213a 0%, #0d1526 55%, #0a101e 100%)",
  },
  {
    label: "Recruit Messaging",
    headline: "Texts and DMs that\nactually get responses.",
    body: "Scripted sequences for every stage of the funnel, so you're never staring at a blank text box before a big evaluation.",
    gradient: "linear-gradient(160deg, #1a2a1a 0%, #10241a 55%, #0a101e 100%)",
  },
  {
    label: "Recruiting Websites",
    headline: "Sites recruits actually\nspend time on.",
    body: "A home base for your program that makes the case for you — built to convert a visit into a commitment.",
    gradient: "linear-gradient(160deg, #2a1a12 0%, #241408 55%, #0a101e 100%)",
  },
];

export function Features() {
  return (
    <section
      className="pt-20 lg:pt-[190px] pb-20"
      style={{
        backgroundColor: "#0a101e",
        fontFamily: "'Inter', 'Arial', sans-serif",
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10">

        {/* Section headline */}
        <div className="max-w-[620px] mb-12 lg:mb-16">
          <h2
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(56px, 10vw, 130px)",
              lineHeight: 0.9,
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            THREE<br />
            <span style={{ color: "#e07b2a" }}>WEAPONS.</span>
          </h2>

          <p
            className="text-sm sm:text-[15px] mt-6"
            style={{ color: "#6b7a9a", lineHeight: 1.7, maxWidth: 440 }}
          >
            Every coach who outrecruits their competition is pulling the same
            three levers. We've turned each one into a system you plug into
            starting week one.
          </p>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          {CARDS.map((card) => (
            <div
              key={card.label}
              className="relative overflow-hidden rounded-2xl p-7 sm:p-8 flex flex-col justify-between"
              style={{
                background: card.gradient,
                minHeight: 320,
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div>
                <p
                  className="mb-5"
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
                  className="mb-4"
                  style={{
                    fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                    fontSize: 28,
                    lineHeight: 1.1,
                    color: "#fff",
                    fontWeight: 400,
                    letterSpacing: "0.02em",
                    textTransform: "uppercase",
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.headline}
                </p>
                <p className="text-sm" style={{ color: "#9aa6bf", lineHeight: 1.6 }}>
                  {card.body}
                </p>
              </div>

              {/* Decorative accent */}
              <div
                className="self-end mt-6"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 99,
                  backgroundColor: "rgba(224,123,42,0.16)",
                  border: "2px solid rgba(224,123,42,0.4)",
                }}
              />
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
          <p style={{ color: "#6b7a9a", fontSize: 14 }}>
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
