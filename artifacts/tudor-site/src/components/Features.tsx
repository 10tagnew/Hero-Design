const CARDS = [
  {
    kind: "text",
    label: "Weekly Coaching",
    headline: "Film sessions.\nGame plans.\nAccountability.",
    bg: "#111827",
  },
  {
    kind: "image",
    gradient: "linear-gradient(160deg, #1a2a1a 0%, #0d1f0d 40%, #0a101e 100%)",
    accent: "rgba(224,123,42,0.08)",
  },
  {
    kind: "text",
    label: "Recruit Messaging",
    headline: "Texts and DMs that actually get responses.",
    bg: "#111827",
  },
  {
    kind: "image",
    gradient: "linear-gradient(160deg, #1a1a2a 0%, #0d0d1f 40%, #0a101e 100%)",
    accent: "rgba(14,36,78,0.4)",
  },
];

export function Features() {
  return (
    <section
      style={{
        backgroundColor: "#0a101e",
        marginTop: -120,
        paddingTop: 160,
        paddingBottom: 80,
        fontFamily: "'Inter', 'Arial', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 32px" }}>

        {/* Section headline */}
        <div className="flex items-start justify-between mb-12">
          <h2
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(72px, 10vw, 130px)",
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
            style={{
              color: "#6b7a9a",
              fontSize: 15,
              lineHeight: 1.7,
              maxWidth: 340,
              marginTop: 12,
            }}
          >
            Every coach who outrecruits their competition is pulling the same
            three levers. We've turned each one into a system you plug into
            starting week one.
          </p>
        </div>

        {/* Feature cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 16,
          }}
        >
          {CARDS.map((card, i) =>
            card.kind === "text" ? (
              <div
                key={i}
                style={{
                  backgroundColor: card.bg,
                  borderRadius: 16,
                  padding: "32px 28px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  minHeight: 320,
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "#e07b2a",
                    marginBottom: 20,
                  }}
                >
                  {card.label}
                </p>
                <p
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
              </div>
            ) : (
              <div
                key={i}
                style={{
                  borderRadius: 16,
                  minHeight: 320,
                  background: card.gradient,
                  border: "1px solid rgba(255,255,255,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Decorative accent blob */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: card.accent,
                    borderRadius: 16,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 20,
                    right: 20,
                    width: 48,
                    height: 48,
                    borderRadius: 99,
                    backgroundColor: "rgba(224,123,42,0.2)",
                    border: "2px solid rgba(224,123,42,0.4)",
                  }}
                />
              </div>
            )
          )}
        </div>

        {/* Bottom strip */}
        <div
          className="flex items-center justify-between mt-14"
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
