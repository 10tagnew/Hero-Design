import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SubstackForm } from "@/components/SubstackForm";

// Admissions-specific nav (the default NAV_LINKS are all athletics/recruiting).
const ADMISSIONS_NAV_LINKS = [
  { label: "Admissions Solution", href: "#overview" },
  { label: "How It Works", href: "#included" },
  { label: "Articles", href: "/articles" },
];

// PLACEHOLDER: all copy below is draft — needs Tyler's sign-off before this page
// goes live to real admissions prospects.

const HERO_IMAGE = "/images/admissions-hero.jpg";

// PLACEHOLDER: card copy (and stand-in images) — replace with approved copy.
const INCLUDES = [
  {
    label: "Weekly Strategy Calls",
    headline: "A live call every week.",
    body: "A live call every week, focused on your funnel.",
    image: "/images/hero-bg-5.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Prospective Student Messaging",
    headline: "Scripts for every stage.",
    body: "Scripts for every stage, from first inquiry through deposit.",
    image: "/images/hero-bg-3.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Admissions Websites",
    headline: "A site built to convert.",
    body: "A site built to turn a campus visit into an application.",
    image: "/images/hero-bg-6.avif",
    imagePosition: "center 30%",
  },
];

// PLACEHOLDER: stat numbers — replace once Tyler has real figures.
const STATS = [
  { value: "[X]+", label: "Admissions Offices Using The System" },
  { value: "[X]+", label: "Prospective Students Messaged Every Month" },
  { value: "[X]%", label: "Renewal Rate Year Over Year" },
];

export default function Admissions() {
  return (
    <div style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Page header */}
      <section
        className="relative w-full flex flex-col"
        style={{
          minHeight: "70svh",
          backgroundImage: `url('${HERO_IMAGE}')`,
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
        <Nav links={ADMISSIONS_NAV_LINKS} />
        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 md:px-10 pt-10 pb-14 sm:pb-20">
          <div className="max-w-[820px]">
            {/* PLACEHOLDER: eyebrow, H1, and subhead */}
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
              Enrollment Marketing,<br /><span style={{ color: "#e07b2a" }}>Built Like Recruiting.</span>
            </h1>
            <p
              className="text-sm sm:text-lg"
              style={{ color: "#d3dae8", maxWidth: 620, lineHeight: 1.6 }}
            >
              The same weekly-coaching, direct-messaging, and website system that works
              for athletic recruiting — rebuilt for admissions and enrollment teams.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section id="overview" className="w-full" style={{ backgroundColor: "#000" }}>
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24">
          {/* PLACEHOLDER: overview copy — replace with approved copy */}
          <p className="text-base sm:text-xl" style={{ color: "#d3dae8", lineHeight: 1.75 }}>
            Most admissions offices are stretched thin — a CRM nobody fully uses,
            outreach that goes out in batches instead of a real cadence, a website that
            describes the campus but doesn't make the case. TCS runs admissions outreach
            the way we've run athletic recruiting for years: a coach on your team's weekly
            call, messaging that's ready to send to every stage of the funnel, and a site
            built to convert a visit into an application.
          </p>
        </div>
      </section>

      {/* What's included */}
      <section id="included" className="w-full" style={{ backgroundColor: "#000" }}>
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
            {/* PLACEHOLDER: CTA copy */}
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
              Ready to run admissions<br />as <span style={{ color: "#e07b2a" }}>one system?</span>
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
