import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const ARTICLES = [
  {
    category: "Messaging",
    title: "The 9PM Text That Actually Gets Answered",
    excerpt: "Timing matters more than wording. Here's when to send, and what to say when a recruit finally writes back.",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    image: "/images/hero-bg-1.avif",
    imagePosition: "center 30%",
  },
  {
    category: "Strategy",
    title: "How Top-25 Programs Build Their Board",
    excerpt: "The recruiting board isn't a spreadsheet. It's the single tool that keeps a whole staff pointed at the same targets.",
    date: "Jul 29, 2026",
    readTime: "8 min read",
    image: "/images/hero-bg-4.avif",
    imagePosition: "center 30%",
  },
  {
    category: "Coaching",
    title: "Turning A Campus Visit Into A Commitment",
    excerpt: "Most visits fail in the first ten minutes. A walkthrough of what the best staffs do differently.",
    date: "Jul 15, 2026",
    readTime: "5 min read",
    image: "/images/coaches.png",
    imagePosition: "center 15%",
  },
  {
    category: "Recruiting Websites",
    title: "What Makes A Recruit Actually Read Your Website",
    excerpt: "It's not the design. It's the first eight seconds. Here's what recruits are actually looking for.",
    date: "Jul 08, 2026",
    readTime: "7 min read",
    image: "/images/hero-bg-6.avif",
    imagePosition: "center 30%",
  },
  {
    category: "Messaging",
    title: "The Parent Call Framework Every Coach Needs",
    excerpt: "The recruit says yes. The parents decide. A simple structure for the call that actually matters.",
    date: "Jul 01, 2026",
    readTime: "6 min read",
    image: "/images/hero-bg-3.avif",
    imagePosition: "center 30%",
  },
  {
    category: "Culture",
    title: "Building A Culture Recruits Can Feel",
    excerpt: "Recruits can tell within a day whether a program is what it says it is. Here's how to make sure yours is.",
    date: "Jun 24, 2026",
    readTime: "9 min read",
    image: "/images/hero-bg-2.avif",
    imagePosition: "center 30%",
  },
];

export default function Articles() {
  return (
    <div style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Page header */}
      <section className="w-full flex flex-col" style={{ backgroundColor: "#000" }}>
        <Nav />
        <div className="px-5 sm:px-8 md:px-10 pt-14 pb-12 sm:pt-20 sm:pb-16">
          <p
            className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-4"
            style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
          >
            The Blog
          </p>
          <h1
            className="uppercase"
            style={{
              fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
              fontSize: "clamp(48px, 9vw, 120px)",
              lineHeight: 0.9,
              color: "#fff",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Articles.
          </h1>
        </div>
      </section>

      {/* Article cards */}
      <section className="w-full" style={{ backgroundColor: "#000" }}>
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pb-16 sm:pb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {ARTICLES.map((article) => (
              <a
                key={article.title}
                href="#"
                className="group relative overflow-hidden rounded-2xl flex flex-col transition-colors hover:bg-[#1a1a1a]"
                style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <div className="relative w-full overflow-hidden" style={{ aspectRatio: "16 / 10" }}>
                  <img
                    src={article.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    style={{ objectPosition: article.imagePosition }}
                  />
                </div>
                <div className="p-6 sm:p-7 flex flex-col flex-1">
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
                    {article.category}
                  </p>
                  <p
                    className="mb-3"
                    style={{
                      fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                      fontSize: 24,
                      lineHeight: 1.15,
                      color: "#fff",
                      fontWeight: 400,
                      textTransform: "uppercase",
                    }}
                  >
                    {article.title}
                  </p>
                  <p className="text-sm mb-5" style={{ color: "#9aa6bf", lineHeight: 1.6 }}>
                    {article.excerpt}
                  </p>
                  <div
                    className="mt-auto flex items-center justify-between pt-4"
                    style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <span className="text-xs" style={{ color: "#6b7a9a" }}>
                      {article.date} · {article.readTime}
                    </span>
                    <span
                      className="text-sm font-semibold transition-transform group-hover:translate-x-0.5"
                      style={{ color: "#e07b2a" }}
                    >
                      Read →
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
