import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";

type Audience = "coaches" | "admissions";

const STORAGE_KEY = "tcs_audience";

const PANELS: {
  audience: Audience;
  href: string;
  label: string;
  description: string;
  image: string;
}[] = [
  {
    audience: "coaches",
    href: "/coaches",
    label: "Coaches & Recruiting",
    description: "Coaching, recruit messaging, and websites for athletic recruiting.",
    image: "/images/hero-bg-5.avif",
  },
  {
    audience: "admissions",
    href: "/admissions",
    label: "Admissions",
    description: "Weekly strategy, messaging, and websites for enrollment teams.",
    image: "/images/admissions-hero.jpg",
  },
];

function readStoredAudience(): Audience | null {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY);
    return value === "coaches" || value === "admissions" ? value : null;
  } catch {
    return null;
  }
}

function rememberAudience(audience: Audience) {
  try {
    window.localStorage.setItem(STORAGE_KEY, audience);
  } catch {
    /* storage unavailable (private mode etc.) — the choice just isn't remembered */
  }
}

export default function Splash() {
  const [, navigate] = useLocation();

  // The nav logo links here with ?choose=1 so a returning visitor can re-open
  // the chooser instead of being bounced straight back to their saved side.
  const [redirectTo] = useState<string | null>(() => {
    if (new URLSearchParams(window.location.search).has("choose")) return null;
    const stored = readStoredAudience();
    return stored ? `/${stored}` : null;
  });

  useEffect(() => {
    if (redirectTo) navigate(redirectTo, { replace: true });
  }, [redirectTo, navigate]);

  // Render nothing while redirecting so a returning visitor never sees the splash flash.
  if (redirectTo) return null;

  return (
    <div
      className="flex flex-col"
      style={{
        minHeight: "100svh",
        backgroundColor: "#000",
        fontFamily: "'Inter', 'Arial', sans-serif",
      }}
    >
      <header className="flex flex-col items-center gap-4 px-5 pt-8 pb-6 sm:pt-10 sm:pb-8 text-center">
        <img
          src="/images/tudor-logo.jpeg"
          alt="Tudor Collegiate Strategies"
          className="h-10 sm:h-12 w-auto rounded"
        />
        <h1
          className="uppercase"
          style={{
            fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
            fontSize: "clamp(40px, 7vw, 84px)",
            lineHeight: 0.95,
            color: "#fff",
            fontWeight: 400,
            letterSpacing: "0.01em",
          }}
        >
          Who are you <span style={{ color: "#e07b2a" }}>here for?</span>
        </h1>
      </header>

      <main className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-3 px-3 pb-3 sm:px-4 sm:pb-4">
        {PANELS.map((panel) => (
          <Link
            key={panel.audience}
            href={panel.href}
            onClick={() => rememberAudience(panel.audience)}
            className="group relative flex flex-col justify-end overflow-hidden rounded-2xl"
            style={{ minHeight: "clamp(280px, 42svh, 720px)" }}
          >
            <img
              src={panel.image}
              alt=""
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              style={{ objectPosition: "center 30%" }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.45) 45%, rgba(0,0,0,0.9) 100%)",
              }}
            />
            <div className="relative z-10 p-6 sm:p-8 md:p-10">
              <h2
                className="uppercase mb-3"
                style={{
                  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
                  fontSize: "clamp(36px, 5vw, 72px)",
                  lineHeight: 0.95,
                  color: "#fff",
                  fontWeight: 400,
                }}
              >
                {panel.label}
              </h2>
              <p
                className="text-sm sm:text-base mb-5"
                style={{ color: "#d3dae8", maxWidth: 420, lineHeight: 1.6 }}
              >
                {panel.description}
              </p>
              <span
                className="inline-flex items-center gap-2 px-6 py-3 font-bold text-white text-sm rounded-full transition-opacity group-hover:opacity-90"
                style={{ backgroundColor: "#e07b2a" }}
              >
                Enter »
              </span>
            </div>
          </Link>
        ))}
      </main>
    </div>
  );
}
