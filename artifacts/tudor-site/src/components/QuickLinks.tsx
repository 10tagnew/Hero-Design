const TILES = [
  {
    title: "The Newsletter",
    sub: "Twice-a-month recruiting tactics",
    kind: "gradient" as const,
    gradient: "linear-gradient(155deg, #1a2744 0%, #101a30 60%, #0a101e 100%)",
  },
  {
    title: "Recruiting Websites",
    sub: "See a live example",
    kind: "image" as const,
    image: "/images/phone-screen.png",
  },
  {
    title: "Membership",
    sub: "Join the coach community",
    kind: "gradient" as const,
    gradient: "linear-gradient(155deg, #3a2416 0%, #241408 60%, #0a101e 100%)",
  },
];

export function QuickLinks() {
  return (
    <section className="w-full bg-white" style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6">
          {TILES.map((tile) => (
            <div key={tile.title} className="flex flex-col">
              <div
                className="w-full rounded-2xl overflow-hidden mb-4"
                style={{ aspectRatio: "4 / 3", ...(tile.kind === "gradient" ? { background: tile.gradient } : {}) }}
              >
                {tile.kind === "image" && (
                  <img
                    src={tile.image}
                    alt={tile.title}
                    className="w-full h-full object-cover object-top"
                  />
                )}
              </div>
              <p style={{ fontSize: 15, fontWeight: 700, color: "#1a2744" }}>{tile.title}</p>
              <p className="mb-2" style={{ fontSize: 13, color: "#6b7280" }}>{tile.sub}</p>
              <a
                href="#"
                className="text-sm font-semibold"
                style={{ color: "#e07b2a" }}
              >
                Learn More ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
