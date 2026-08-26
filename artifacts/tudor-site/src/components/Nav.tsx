import { Link } from "wouter";

const NAV_LINKS: { label: string; href: string }[] = [
  { label: "Coaching", href: "#" },
  { label: "The Solution", href: "/total-recruiting-solution" },
  { label: "The Newsletter", href: "#" },
  { label: "Articles", href: "#" },
  { label: "Membership", href: "#" },
];

export function Nav() {
  return (
    <nav
      className="relative z-10 flex items-center justify-between mx-4 mt-4 sm:mx-6 sm:mt-6 md:mx-10 md:mt-8 px-4 sm:px-6 py-2.5 sm:py-3 bg-white rounded-full"
      style={{ minHeight: 60, boxShadow: "0 8px 24px rgba(15, 23, 42, 0.18)" }}
    >
      {/* Logo */}
      <Link href="/" className="flex items-center shrink-0">
        <img
          src="/images/tudor-logo.jpeg"
          alt="Tudor Collegiate Strategies"
          className="h-9 sm:h-11 w-auto"
        />
      </Link>

      {/* Nav links */}
      <div className="hidden lg:flex items-center gap-7">
        {NAV_LINKS.map((item) =>
          item.href.startsWith("/") ? (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {item.label}
            </Link>
          ) : (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          )
        )}
      </div>

      {/* CTA buttons */}
      <div className="flex items-center gap-2 sm:gap-4">
        <a
          href="#"
          className="hidden sm:inline text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors"
        >
          Log In
        </a>
        <a
          href="#"
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full font-bold text-white text-xs sm:text-sm transition-colors hover:opacity-90"
          style={{ backgroundColor: "#e07b2a" }}
        >
          Join Free <span aria-hidden="true">»</span>
        </a>
      </div>
    </nav>
  );
}
