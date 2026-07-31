const TILES = [
  {
    title: "The Newsletter",
    sub: "Twice-a-month recruiting tactics",
    image: "/images/hero-bg-1.avif",
    imagePosition: "center 30%",
  },
  {
    title: "Recruiting Websites",
    sub: "See a live example",
    image: "/images/hero-bg-4.avif",
    imagePosition: "center 30%",
  },
  {
    title: "Membership",
    sub: "Join the coach community",
    image: "/images/coaches.png",
    imagePosition: "center 15%",
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
                style={{ aspectRatio: "4 / 3", backgroundColor: "#0a101e" }}
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: tile.imagePosition }}
                />
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
