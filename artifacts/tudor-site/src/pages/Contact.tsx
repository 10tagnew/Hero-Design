import { useEffect, useRef, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { InquiryForm, WorkshopForm } from "@/components/contact/ContactForms";
import { CONTACT_EMAIL, type ContactFormType } from "@/lib/contact-submit";

// Deep links: /contact#workshop and /contact#inquiry open the matching form.
function formFromHash(hash: string): ContactFormType | null {
  const key = hash.replace(/^#/, "").toLowerCase();
  return key === "workshop" || key === "inquiry" ? key : null;
}

const TAB_OPTIONS: { value: ContactFormType; eyebrow: string; title: string; body: string }[] = [
  {
    value: "workshop",
    eyebrow: "Workshops & Speaking",
    title: "Book A Workshop",
    body: "Bring Dan to your campus, staff retreat, athletic department, or conference.",
  },
  {
    value: "inquiry",
    eyebrow: "Client Inquiries",
    title: "Work With Us",
    body: "Recruiting strategy, branding, and recruiting websites for your program.",
  },
];

const NEXT_STEPS = [
  { title: "Send the form", body: "It takes about two minutes." },
  { title: "We reply within 1 business day", body: "Dan's team reads every request." },
  { title: "We set up a call", body: "A quick conversation about your goals, dates, and next steps." },
];

const BEBAS = "'Bebas Neue', 'Arial Black', sans-serif";

export default function Contact() {
  const [active, setActive] = useState<ContactFormType>(
    () => formFromHash(window.location.hash) ?? "workshop",
  );
  const formsRef = useRef<HTMLElement>(null);
  // Set while we rewrite the hash ourselves so it doesn't trigger a scroll.
  const updatingHash = useRef(false);

  useEffect(() => {
    // Arriving with #workshop or #inquiry jumps to the forms; otherwise start
    // at the top (client-side navigation keeps the previous scroll position).
    if (formFromHash(window.location.hash)) {
      requestAnimationFrame(() => formsRef.current?.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo(0, 0);
    }

    // Wouter emits pushState/replaceState events; also cover back/forward and
    // plain hash links, so a CTA clicked while already on /contact still works.
    const onLocationChange = () => {
      if (updatingHash.current) {
        updatingHash.current = false;
        return;
      }
      const next = formFromHash(window.location.hash);
      if (!next) return;
      setActive(next);
      formsRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    const events = ["hashchange", "popstate", "pushState", "replaceState"];
    events.forEach((name) => window.addEventListener(name, onLocationChange));
    return () => events.forEach((name) => window.removeEventListener(name, onLocationChange));
  }, []);

  const onTabChange = (value: string) => {
    const next = formFromHash(value);
    if (!next) return;
    setActive(next);
    // Keep the URL shareable without adding history entries.
    updatingHash.current = true;
    window.history.replaceState(window.history.state, "", `#${next}`);
    updatingHash.current = false;
  };

  return (
    <div style={{ fontFamily: "'Inter', 'Arial', sans-serif" }}>
      {/* Page header */}
      <section
        className="relative w-full flex flex-col"
        style={{
          minHeight: "60svh",
          backgroundImage: "url('/images/hero-bg-4.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
        }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 30%, rgba(0,0,0,0.85) 75%, #000 100%)",
          }}
        />
        <Nav />
        <div className="relative z-10 flex-1 flex flex-col justify-end px-5 sm:px-8 md:px-10 pt-28 md:pt-40 pb-12 sm:pb-16">
          <div className="max-w-[820px]">
            <p
              className="text-xs sm:text-sm font-bold uppercase tracking-widest mb-4"
              style={{ color: "#e07b2a", letterSpacing: "0.2em" }}
            >
              Contact
            </p>
            <h1
              className="uppercase mb-5 sm:mb-6"
              style={{
                fontFamily: BEBAS,
                fontSize: "clamp(44px, 9vw, 110px)",
                lineHeight: 0.9,
                color: "#fff",
                fontWeight: 400,
                letterSpacing: "0.01em",
              }}
            >
              Let's Get<br /><span style={{ color: "#e07b2a" }}>To Work.</span>
            </h1>
            <p className="text-sm sm:text-lg" style={{ color: "#d3dae8", maxWidth: 620, lineHeight: 1.6 }}>
              Book Dan for a workshop or speaking event, or tell us about your program.
              Pick the form that fits and Dan's team will reply within 1 business day.
            </p>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section
        ref={formsRef}
        id="contact-forms"
        aria-label="Contact forms"
        className="w-full scroll-mt-4"
        style={{ backgroundColor: "#000" }}
      >
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 md:px-10 pt-6 sm:pt-10 pb-16 sm:pb-24">
          <Tabs.Root value={active} onValueChange={onTabChange}>
            <Tabs.List
              aria-label="Choose a contact form"
              className="grid grid-cols-2 gap-3 sm:gap-4 mb-4 sm:mb-6 lg:max-w-[calc(100%-360px)]"
            >
              {TAB_OPTIONS.map((tab) => (
                <Tabs.Trigger
                  key={tab.value}
                  value={tab.value}
                  className={[
                    "group relative text-left rounded-2xl p-4 sm:p-6 border transition-colors outline-none",
                    "focus-visible:ring-2 focus-visible:ring-[#e07b2a] focus-visible:ring-offset-2 focus-visible:ring-offset-black",
                    "border-white/10 bg-[#141414] hover:border-white/25",
                    "data-[state=active]:border-[#e07b2a] data-[state=active]:bg-[#1c140d]",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className="absolute left-4 right-4 sm:left-6 sm:right-6 top-0 h-[3px] rounded-b-full bg-[#e07b2a] opacity-0 transition-opacity group-data-[state=active]:opacity-100"
                  />
                  <span
                    className="block mb-1.5 sm:mb-2 text-[10px] sm:text-[11px] font-bold uppercase text-[#9aa6bf] group-data-[state=active]:text-[#e07b2a]"
                    style={{ letterSpacing: "0.14em" }}
                  >
                    {tab.eyebrow}
                  </span>
                  <span
                    className="block uppercase text-white"
                    style={{ fontFamily: BEBAS, fontSize: "clamp(24px, 3vw, 34px)", lineHeight: 1, fontWeight: 400 }}
                  >
                    {tab.title}
                  </span>
                  <span className="hidden sm:block mt-2 text-sm" style={{ color: "#9aa6bf", lineHeight: 1.5 }}>
                    {tab.body}
                  </span>
                </Tabs.Trigger>
              ))}
            </Tabs.List>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-8 lg:gap-10 items-start">
              <div
                className="rounded-2xl p-5 sm:p-8 lg:p-10"
                style={{ backgroundColor: "#0f0f0f", border: "1px solid rgba(255,255,255,0.08)" }}
              >
                {/* Both forms stay mounted so switching tabs never loses what
                    someone has already typed. */}
                <Tabs.Content value="workshop" forceMount className="outline-none data-[state=inactive]:hidden">
                  <FormIntro
                    title="Workshops & Speaking"
                    body="For coaches and athletic departments booking a Dan Tudor workshop, or event organizers looking for a speaker."
                  />
                  <WorkshopForm />
                </Tabs.Content>
                <Tabs.Content value="inquiry" forceMount className="outline-none data-[state=inactive]:hidden">
                  <FormIntro
                    title="Client Inquiries"
                    body="For programs interested in recruiting strategy, branding, or a recruiting website."
                  />
                  <InquiryForm />
                </Tabs.Content>
              </div>

              <aside aria-label="What happens next" className="flex flex-col gap-4">
                <div className="rounded-2xl p-6 sm:p-7" style={{ backgroundColor: "#0a101e", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p
                    className="mb-5 uppercase text-white"
                    style={{ fontFamily: BEBAS, fontSize: 28, lineHeight: 1, fontWeight: 400 }}
                  >
                    What Happens <span style={{ color: "#e07b2a" }}>Next.</span>
                  </p>
                  <ol className="flex flex-col gap-5">
                    {NEXT_STEPS.map((step, index) => (
                      <li key={step.title} className="flex gap-4">
                        <span
                          aria-hidden="true"
                          className="flex items-center justify-center shrink-0 rounded-full"
                          style={{
                            width: 32,
                            height: 32,
                            fontFamily: BEBAS,
                            fontSize: 18,
                            color: "#e07b2a",
                            border: "1.5px solid rgba(224,123,42,0.6)",
                          }}
                        >
                          {index + 1}
                        </span>
                        <div>
                          <p className="text-sm font-semibold text-white">{step.title}</p>
                          <p className="text-sm" style={{ color: "#9aa6bf", lineHeight: 1.5 }}>{step.body}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <div className="rounded-2xl p-6 sm:p-7" style={{ backgroundColor: "#141414", border: "1px solid rgba(255,255,255,0.06)" }}>
                  <p className="text-sm font-semibold text-white mb-1">Prefer email?</p>
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="text-sm font-semibold underline underline-offset-4 decoration-[#e07b2a]/60 hover:decoration-[#e07b2a] outline-none focus-visible:ring-2 focus-visible:ring-[#e07b2a] rounded-sm break-all"
                    style={{ color: "#e07b2a" }}
                  >
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </aside>
            </div>
          </Tabs.Root>
        </div>
      </section>

      <Footer />
    </div>
  );
}

function FormIntro({ title, body }: { title: string; body: string }) {
  return (
    <div className="mb-7 sm:mb-8">
      <h2
        className="uppercase mb-2"
        style={{ fontFamily: BEBAS, fontSize: "clamp(30px, 4vw, 44px)", lineHeight: 1, color: "#fff", fontWeight: 400 }}
      >
        {title}
      </h2>
      <p className="text-sm sm:text-base" style={{ color: "#9aa6bf", lineHeight: 1.6, maxWidth: 620 }}>
        {body}
      </p>
    </div>
  );
}
