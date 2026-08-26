import { useEffect, useState } from "react";
import { Nav } from "@/components/Nav";
import { SubstackForm } from "@/components/SubstackForm";

const BG_IMAGES = [
  "/images/hero-bg.avif",
  "/images/hero-bg-1.avif",
  "/images/hero-bg-2.avif",
  "/images/hero-bg-3.avif",
  "/images/hero-bg-4.avif",
  "/images/hero-bg-5.avif",
  "/images/hero-bg-6.avif",
];

export function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % BG_IMAGES.length);
    }, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col"
      style={{
        fontFamily: "'Inter', 'Arial', sans-serif",
        minHeight: "100svh",
      }}
    >
      {/* Slideshow background layers */}
      {BG_IMAGES.map((src, i) => (
        <div
          key={src}
          className="absolute inset-0"
          style={{
            backgroundImage: `url('${src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center 30%",
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease-in-out",
          }}
        />
      ))}
      {/* Darkening overlay — fades to black to match the Features section
          below so the two sections blend with no visible seam. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.3) 22%, rgba(0,0,0,0.7) 65%, #000 100%)",
        }}
      />

      <Nav />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 md:px-10 lg:pr-[360px] xl:pr-[400px] pt-10 pb-14 sm:pb-16">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1
            className="uppercase mb-5 sm:mb-6"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(52px, 13vw, 160px)",
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
            className="leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base"
            style={{ color: "#d3dae8", maxWidth: 460, lineHeight: 1.65 }}
          >
            Coaches work with us for one reason: land their dream recruiting classes year after year. It's possible through our coaching, our recruit messaging, and our recruiting websites.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap mb-8 sm:mb-10">
            <a
              href="#"
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e07b2a" }}
            >
              Why This Works »
            </a>
            <a
              href="#"
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white text-sm rounded-full border-2 border-white transition-all hover:bg-white hover:text-gray-900"
            >
              Recruiting Websites »
            </a>
          </div>

          {/* Newsletter signup */}
          <div className="max-w-[420px]">
            <p
              className="text-xs font-bold uppercase tracking-widest mb-2.5"
              style={{ color: "#e07b2a", letterSpacing: "0.14em" }}
            >
              Get The Newsletter
            </p>
            <SubstackForm
              formClassName="flex flex-col sm:flex-row gap-2"
              placeholder="Your email address"
              inputClassName="flex-1 min-w-0 px-4 py-3 rounded-full text-sm outline-none"
              inputStyle={{ backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.25)", color: "#fff" }}
              buttonClassName="px-5 py-3 rounded-full font-bold text-white text-sm transition-colors hover:bg-white/10 whitespace-nowrap"
              buttonStyle={{ border: "2px solid #fff", backgroundColor: "transparent" }}
              buttonLabel="Subscribe »"
            />
          </div>
        </div>
      </div>

      {/* Recruiting websites preview card. On mobile/tablet it sits in normal
          flow, full width, right after the hero content. On large screens it's
          pinned to the hero's bottom-right corner and its bottom half bleeds
          down past the hero's edge into the Features section below — the
          section has extra top padding reserved for exactly this overlap. */}
      <div
        className="relative z-20 mx-5 mb-10 sm:mx-8 md:mx-10 sm:mb-14 lg:mx-0 lg:mb-0 lg:absolute lg:right-10 xl:right-14 lg:bottom-[-130px] lg:w-[300px] rounded-2xl overflow-hidden"
        style={{ boxShadow: "0 24px 64px rgba(0,0,0,0.45)" }}
      >
        <div style={{ backgroundColor: "#e07b2a", padding: "18px 20px 14px" }}>
          <p
            className="mb-1"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 11,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "rgba(255,255,255,0.75)",
            }}
          >
            Recruiting Websites
          </p>
          <p
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontWeight: 400,
              fontSize: 28,
              lineHeight: 1,
              color: "#fff",
              letterSpacing: "0.02em",
            }}
          >
            Sites That Demand Attention
          </p>
        </div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="block w-full h-[220px] sm:h-[260px] object-cover object-top"
        >
          <source src="/images/hero-demo.mp4" type="video/mp4" />
        </video>

        {/* CTA */}
        <a
          href="#"
          className="flex items-center justify-between px-5 py-4 transition-colors hover:bg-white/5"
          style={{ backgroundColor: "#12182a" }}
        >
          <span
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: "#fff",
            }}
          >
            See Live Examples
          </span>
          <span
            className="flex items-center justify-center rounded-full shrink-0"
            style={{ width: 30, height: 30, backgroundColor: "#e07b2a" }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
              <path d="M6 18L18 6M18 6H8M18 6V16" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </a>
      </div>
    </section>
  );
}
