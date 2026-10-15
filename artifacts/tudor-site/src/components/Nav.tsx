import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";

type NavLink = { label: string; href: string };

const NAV_LINKS: NavLink[] = [
  { label: "Coaching", href: "#" },
  { label: "Recruiting", href: "/total-recruiting-solution" },
  { label: "Workshops", href: "/on-site-campus-workshops" },
  { label: "The Newsletter", href: "#" },
  { label: "Articles", href: "/articles" },
  { label: "Membership", href: "#" },
  { label: "Tudor University", href: "https://tudoruniversity.thinkific.com/" },
];

const MENU_LINK_STYLE = {
  fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
  fontSize: "clamp(36px, 7vw, 64px)",
  lineHeight: 1.05,
  letterSpacing: "0.02em",
  fontWeight: 400,
} as const;

export function Nav({ links = NAV_LINKS }: { links?: NavLink[] } = {}) {
  const [open, setOpen] = useState(false);
  const openButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const wasOpen = useRef(false);

  const close = () => setOpen(false);

  // While the menu is open: lock body scroll, close on Escape, keep Tab inside it.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || !menuRef.current) return;
      const focusable = menuRef.current.querySelectorAll<HTMLElement>("a[href], button");
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  // Hand focus back to the hamburger once the menu closes.
  useEffect(() => {
    if (wasOpen.current && !open) openButtonRef.current?.focus();
    wasOpen.current = open;
  }, [open]);

  return (
    <>
      {/* Soft dark gradient behind the header so the logo and hamburger stay
          readable over bright video frames. */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-[160px] z-20 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(0,0,0,0.65), rgba(0,0,0,0.35) 60%, transparent)" }}
      />
      <header className="absolute top-0 left-0 right-0 z-30 flex items-start justify-between p-5 md:p-8">
        {/* Logo. It re-opens the audience chooser. "?choose=1" tells the splash
            not to auto-redirect a returning visitor straight back here. */}
        <Link href="/?choose=1" className="flex items-center shrink-0">
          <img
            src="/images/tcs-logo.png"
            alt="Tudor Collegiate Strategies"
            className="h-14 md:h-[72px] w-auto"
            style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.55))" }}
          />
        </Link>

        <button
          ref={openButtonRef}
          type="button"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen(true)}
          className="flex flex-col items-center justify-center gap-[5px] w-11 h-11 shrink-0 rounded-full backdrop-blur-sm"
          style={{ backgroundColor: "rgba(0,0,0,0.45)" }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              aria-hidden="true"
              className="block h-[2px] w-6 rounded-full bg-white"
            />
          ))}
        </button>
      </header>

      {open && (
        <div
          ref={menuRef}
          id="site-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Site menu"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto"
          style={{ backgroundColor: "rgba(10, 16, 30, 0.96)", fontFamily: "'Inter', 'Arial', sans-serif" }}
        >
          <div className="flex justify-end p-5 md:p-8">
            <button
              ref={closeButtonRef}
              type="button"
              aria-label="Close menu"
              onClick={close}
              className="flex items-center justify-center w-11 h-11 text-white"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
                <path d="M5 5l14 14M19 5L5 19" />
              </svg>
            </button>
          </div>

          <nav aria-label="Main" className="flex-1 flex flex-col justify-center gap-2 sm:gap-3 px-6 sm:px-10 md:px-16 pb-10">
            {links.map((item) => {
              const className = "text-white uppercase hover:text-[#e07b2a] transition-colors w-fit";
              if (item.href.startsWith("/")) {
                return (
                  <Link key={item.label} href={item.href} onClick={close} className={className} style={MENU_LINK_STYLE}>
                    {item.label}
                  </Link>
                );
              }
              const external = item.href.startsWith("http");
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={close}
                  className={className}
                  style={MENU_LINK_STYLE}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {item.label}
                </a>
              );
            })}

            <div className="flex items-center gap-6 mt-6 sm:mt-8">
              <a
                href="#"
                onClick={close}
                className="text-sm font-semibold text-white hover:text-[#e07b2a] transition-colors"
              >
                Log In
              </a>
              <a
                href="#"
                onClick={close}
                className="flex items-center gap-1.5 px-6 py-3 rounded-full font-bold text-white text-sm transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#e07b2a" }}
              >
                Join Free <span aria-hidden="true">»</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </>
  );
}
