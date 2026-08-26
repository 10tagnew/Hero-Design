import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { SubstackForm } from "@/components/SubstackForm";

const TOPICS = [
  {
    label: "Team Culture",
    headline: "Buy-in that outlasts you.",
    body: "A working session with your full staff on building a culture recruits can feel the moment they walk on campus.",
    image: "/images/coaches.png",
    imagePosition: "center 15%",
  },
  {
    label: "Recruiting Communication",
    headline: "What to say, and when.",
    body: "Hands-on practice with the calls, texts, and in-person conversations that actually move a recruit toward a decision.",
    image: "/images/hero-bg-1.avif",
    imagePosition: "center 30%",
  },
  {
    label: "Building Your Board",
    headline: "A recruiting board that works.",
    body: "Leave with a real board — built live, on your whiteboard, with your actual recruits — not a template you'll never open again.",
    image: "/images/hero-bg-4.avif",
    imagePosition: "center 30%",
  },
];

const FACTS = [
  { value: "Half or Full Day", label: "Format That Fits Your Schedule" },
  { value: "On Your Campus", label: "We Come To You" },
  { value: "Whole Staff", label: "Everyone In The Room, Together" },
];

export default function OnSiteCampusWorkshops() {
  return (
    <div style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Page header */}
      <section
        className="relative w-full flex flex-col"
        style={{
          minHeight: "70svh",
          backgroundImage: "url('/images/hero-bg-3.avif')",
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
              Workshops
            </p>
            <h1
              className="uppercase mb-5 sm:mb-6"
              style={{
                fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                fontSize: "clamp(40px, 8vw, 100px)",
                lineHeight: 0.9,
                color: "#fff",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              On-Site Campus<br /><span style={{ color: "#e07b2a" }}>Workshops.</span>
            </h1>
            <p
              className="text-sm sm:text-lg"
              style={{ color: "#d3dae8", maxWidth: 620, lineHeight: 1.6 }}
            >
              We come to your campus and work with your whole staff, face to face — on
              the culture, the conversations, and the board that actually wins recruits.
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="w-full" style={{ backgroundColor: "#000" }}>
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24">
          <p className="text-base sm:text-xl" style={{ color: "#d3dae8", lineHeight: 1.75 }}>
            A staff meeting won't fix your recruiting. A day spent working through it
            together might. Our on-site workshops put your entire staff in one room for
            a focused session on what's actually slowing your program down — and we
            leave you with a plan, not just notes.
          </p>
          <p className="text-base sm:text-xl mt-6" style={{ color: "#d3dae8", lineHeight: 1.75 }}>
            Every workshop is built around your program, your roster, and your
            recruiting board — not a generic deck.
          </p>
        </div>
      </section>

      {/* What we cover */}
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
            What We Cover.
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            {TOPICS.map((item) => (
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

      {/* Facts */}
      <section className="w-full" style={{ backgroundColor: "#0a101e" }}>
        <div
          className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 py-16 sm:py-24 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          {FACTS.map((fact) => (
            <div key={fact.label}>
              <p
                className="mb-2"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(26px, 3vw, 36px)",
                  color: "#e07b2a",
                  lineHeight: 1.05,
                }}
              >
                {fact.value}
              </p>
              <p className="text-sm" style={{ color: "#9aa6bf" }}>{fact.label}</p>
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
              Bring the workshop<br />to <span style={{ color: "#e07b2a" }}>your campus.</span>
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
              Book A Workshop »
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
