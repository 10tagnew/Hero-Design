import { Nav } from "@/components/Nav";

const TEXT_SHADOW = "0 2px 24px rgba(0,0,0,0.55), 0 1px 3px rgba(0,0,0,0.6)";

export function Hero() {
  return (
    <section
      className="relative w-full flex flex-col min-h-[100svh] lg:min-h-[clamp(560px,56.25vw,100svh)]"
      style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}
    >
      {/* Video background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-bg-video-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center center" }}
      >
        <source src="/images/hero-bg-video.mp4" type="video/mp4" />
      </video>
      {/* Darkening overlay. Light at the top (the header is transparent now),
          fading to black at the bottom to match the Features section below so
          the two sections blend with no visible seam. */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(0,0,0,0.05) 0%, rgba(0,0,0,0.18) 22%, rgba(0,0,0,0.7) 65%, #000 100%)",
        }}
      />

      {/* Extra shade behind the text block so white lettering holds up on light
          video frames: from the left on desktop, from the bottom on mobile.
          The right side of the video stays clear. */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to right, rgba(0,0,0,0.55), rgba(0,0,0,0.25) 45%, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="lg:hidden absolute inset-x-0 bottom-0 h-[75%] pointer-events-none"
        style={{ background: "linear-gradient(to top, rgba(0,0,0,0.55), rgba(0,0,0,0.25) 55%, transparent)" }}
      />

      <Nav />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 md:px-10 pt-28 md:pt-36 pb-14 sm:pb-16">
        <div className="max-w-[720px]">
          {/* Headline */}
          <h1
            className="uppercase mb-5 sm:mb-6 text-[clamp(44px,9vw,120px)] [@media(max-height:800px)]:text-[clamp(40px,min(9vw,13svh),96px)]"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              lineHeight: 0.87,
              letterSpacing: "0.01em",
              fontWeight: 400,
              textShadow: TEXT_SHADOW,
            }}
          >
            <span className="block text-white">OUT</span>
            <span className="block text-white">RECRUIT</span>
            <span className="block" style={{ color: "#e07b2a" }}>EVERYBODY</span>
          </h1>

          {/* Subtext */}
          <p
            className="leading-relaxed mb-8 sm:mb-10 text-sm sm:text-base"
            style={{ color: "#d3dae8", maxWidth: 460, lineHeight: 1.65, textShadow: TEXT_SHADOW }}
          >
            Coaches work with us for one reason: land their dream recruiting classes year after year. It's possible through our coaching, our recruit messaging, and our recruiting websites.
          </p>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
            <a
              href="#"
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90"
              style={{ backgroundColor: "#e07b2a" }}
            >
              Why This Works »
            </a>
            <a
              href="#recruiting-websites"
              className="flex items-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 font-bold text-white text-sm rounded-full border-2 border-white transition-all hover:bg-white hover:text-gray-900"
            >
              Recruiting Websites »
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
