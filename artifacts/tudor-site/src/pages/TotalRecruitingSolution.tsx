import { useState } from "react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SubstackForm } from "@/components/SubstackForm";

const INCLUDES = [
  {
    label: "Weekly Coaching",
    headline: "A live call every week.",
    body: "Film sessions, game plans, and accountability — so you always know the next right move with a recruit, and you're never guessing alone.",
    image: "/images/hero-bg-5.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Recruit Messaging",
    headline: "Scripts for every stage.",
    body: "Texts and DMs written for you, for every point in the funnel — first contact through commitment — so you're never staring at a blank box.",
    image: "/images/hero-bg-3.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Recruiting Websites",
    headline: "A home base that converts.",
    body: "A site built to make the case for your program before a recruit ever steps on campus — designed to turn a visit into a commitment.",
    image: "/images/hero-bg-6.avif",
    imagePosition: "center 30%",
  },
];

const STATS = [
  { value: "500+", label: "Coaches Using The System" },
  { value: "4,000+", label: "Recruits Messaged Every Month" },
  { value: "97%", label: "Renewal Rate Year Over Year" },
];

function VideoPlaceholder() {
  const [hover, setHover] = useState(false);
  return (
    <div
      role="img"
      aria-label="Video overview coming soon"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="relative w-full rounded-2xl overflow-hidden"
      style={{ aspectRatio: "16 / 9", boxShadow: "0 30px 70px rgba(0,0,0,0.5)" }}
    >
      <img
        src="/images/hero-bg-2.avif"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 30%", filter: "brightness(0.55)" }}
      />
      <div className="absolute inset-0" style={{ background: "rgba(0,0,0,0.25)" }} />
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
        <span
          className="flex items-center justify-center rounded-full transition-transform"
          style={{
            width: 76,
            height: 76,
            backgroundColor: "#e07b2a",
            transform: hover ? "scale(1.08)" : "scale(1)",
          }}
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="white">
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span
          className="text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full"
          style={{ color: "#fff", backgroundColor: "rgba(0,0,0,0.4)", letterSpacing: "0.14em" }}
        >
          Video Coming Soon
        </span>
      </div>
    </div>
  );
}

export default function TotalRecruitingSolution() {
  return (
    <div style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Page header */}
      <section
        className="relative w-full flex flex-col"
        style={{
          minHeight: "70svh",
          backgroundImage: "url('/images/hero-bg-5.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.45) 30%, rgba(0,0,0,0.8) 75%, #000 100%)",
          }}
        />
        <Nav />
        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 md:px-10 pt-10 pb-14 sm:pb-20">
          <div className="max-w-[820px]">
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
            >
              The Solution
            </p>
            <h1
              className="uppercase mb-5 sm:mb-6"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(44px, 9vw, 110px)",
                lineHeight: 0.9,
                color: "#fff",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Total Recruiting<br /><span style={{ color: "#e07b2a" }}>Solution.</span>
            </h1>
            <p
              className="text-sm sm:text-lg"
              style={{ color: "#d3dae8", maxWidth: 620, lineHeight: 1.6 }}
            >
              Coaching, messaging, and a website — built and run together as one system,
              instead of three things you have to stitch together yourself.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full" style={{ backgroundColor: "#000" }}>
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24">
          <p className="text-base sm:text-xl" style={{ color: "#d3dae8", lineHeight: 1.75 }}>
            Most coaches piece recruiting together — a spreadsheet here, a group text
            there, a website nobody's updated since last season. The Total Recruiting
            Solution replaces the patchwork with one system: a coach on your weekly
            call, messaging that's ready to send, and a site built to close.
          </p>
          <p className="text-base sm:text-xl mt-6" style={{ color: "#d3dae8", lineHeight: 1.75 }}>
            You don't buy three products. You get one program, built around how
            recruiting actually happens in a season.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section className="w-full" style={{ backgroundColor: "#000" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pb-16 sm:pb-24">
          <h2
            className="uppercase mb-10 lg:mb-14"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(40px, 7vw, 90px)",
              lineHeight: 0.9,
              color: "#fff",
              fontWeight: 400,
            }}
          >
            What's Included.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {INCLUDES.map((item) => (
              <div
                key={item.label}
                className="relative overflow-hidden rounded-2xl flex flex-col"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="relative w-full" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={item.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.imagePosition }}
                  />
                </div>
                <div className="p-6 sm:p-7">
                  <p
                    className="mb-3"
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "#e07b2a",
                    }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                      fontSize: 24,
                      lineHeight: 1.1,
                      color: "#fff",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {item.headline}
                  </p>
                  <p className="text-sm" style={{ color: "#9aa6bf", lineHeight: 1.6 }}>
                    {item.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="w-full" style={{ backgroundColor: "#0a101e" }}>
        <div className="max-w-[1000px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-4"
            style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
          >
            See It In Action
          </p>
          <h2
            className="uppercase mb-8"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(32px, 5vw, 54px)",
              lineHeight: 0.95,
              color: "#fff",
              fontWeight: 400,
            }}
          >
            A walkthrough of the full system.
          </h2>
          <VideoPlaceholder />
        </div>
      </section>

      {/* Stats */}
      <section className="w-full" style={{ backgroundColor: "#0a101e" }}>
        <div
          className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pb-16 sm:pb-24 grid grid-cols-1 sm:grid-cols-3 gap-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: 48 }}
        >
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(40px, 5vw, 64px)",
                  color: "#e07b2a",
                  lineHeight: 1,
                  marginBottom: 8,
                }}
              >
                {stat.value}
              </p>
              <p className="text-sm" style={{ color: "#9aa6bf" }}>{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="w-full"
        style={{ background: "linear-gradient(135deg, #1a2744 0%, #101a30 55%, #0a101e 100%)" }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          <div className="max-w-[520px]">
            <h2
              className="mb-4"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(32px, 5vw, 50px)",
                lineHeight: 1,
                color: "#fff",
                fontWeight: 400,
              }}
            >
              Ready to run recruiting<br />as <span style={{ color: "#e07b2a" }}>one system?</span>
            </h2>
            <p className="text-sm sm:text-base" style={{ color: "#b0bdd4", lineHeight: 1.6 }}>
              Or start free with the newsletter — twice-a-month tactics, no commitment.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 shrink-0">
            <a
              href="#"
              className="flex items-center gap-2 px-7 py-4 font-bold text-white text-sm rounded-full transition-opacity hover:opacity-90 whitespace-nowrap"
              style={{ backgroundColor: "#e07b2a" }}
            >
              Get Started »
            </a>
            <SubstackForm
              formClassName="flex flex-col sm:flex-row gap-2"
              placeholder="Your email address"
              inputClassName="flex-1 min-w-0 px-4 py-3.5 rounded-full text-sm outline-none"
              inputStyle={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.2)", color: "#fff" }}
              buttonClassName="px-5 py-3.5 rounded-full font-bold text-white text-sm transition-colors hover:bg-white/10 whitespace-nowrap"
              buttonStyle={{ border: "2px solid #fff", backgroundColor: "transparent" }}
              buttonLabel="Subscribe »"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
