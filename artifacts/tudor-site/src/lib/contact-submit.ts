// Where contact form submissions go. This is the ONLY file that needs to
// change to point the forms somewhere else.
//
// Default transport: "mailto". On submit we open the visitor's email app with
// a message to Dan already addressed and filled in (subject plus one
// "Label: value" line per field). Nothing is stored and no service is called.
//
// Endpoint transport: set VITE_CONTACT_ENDPOINT at build time (for example
// "/api/contact" on the api-server, or a Formspree / Zapier / Make webhook URL)
// and each submission is POSTed there as JSON instead:
//   { "type": "workshop" | "inquiry", "subject": "...", ...field values }
// Any non-2xx response shows the form's error state.
//
// Typeform: Typeform has no endpoint that accepts a POST from a custom form.
// To use the TCS Typeform, either relay through a webhook (Zapier or Make)
// with the endpoint transport above, or swap `submitContact` to open the
// Typeform URL with these values passed as hidden fields.

export const CONTACT_EMAIL = "dan@dantudor.com";

export type ContactFormType = "workshop" | "inquiry";

export interface ContactSubmission {
  type: ContactFormType;
  subject: string;
  /** Human-readable label/value pairs, in the order they appear on the form. */
  fields: { label: string; value: string }[];
  /** Validated raw values, sent as-is by the endpoint transport. */
  data: Record<string, string | string[]>;
}

export type ContactTransport = "mailto" | "endpoint";

export interface ContactResult {
  transport: ContactTransport;
}

const ENDPOINT = String(import.meta.env.VITE_CONTACT_ENDPOINT ?? "").trim();
const ENDPOINT_TIMEOUT_MS = 15000;

export const ACTIVE_TRANSPORT: ContactTransport = ENDPOINT ? "endpoint" : "mailto";

export async function submitContact(submission: ContactSubmission): Promise<ContactResult> {
  if (ACTIVE_TRANSPORT === "endpoint") {
    await postToEndpoint(submission);
    return { transport: "endpoint" };
  }
  window.location.href = buildMailtoUrl(submission);
  return { transport: "mailto" };
}

export function buildMailtoUrl(submission: ContactSubmission): string {
  const lines = submission.fields.map(({ label, value }) => {
    const shown = value.trim() || "Not provided";
    // Multi-line answers (the message) get their own block for readability.
    return shown.includes("\n") ? `\n${label}:\n${shown}` : `${label}: ${shown}`;
  });
  const heading =
    submission.type === "workshop"
      ? "New workshop request from the TCS website"
      : "New client inquiry from the TCS website";
  const body = [heading, "", ...lines].join("\n").replace(/\r?\n/g, "\r\n");

  return (
    `mailto:${CONTACT_EMAIL}` +
    `?subject=${encodeURIComponent(submission.subject)}` +
    `&body=${encodeURIComponent(body)}`
  );
}

async function postToEndpoint(submission: ContactSubmission): Promise<void> {
  const controller = new AbortController();
  const timer = window.setTimeout(() => controller.abort(), ENDPOINT_TIMEOUT_MS);
  try {
    const response = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        type: submission.type,
        subject: submission.subject,
        ...submission.data,
      }),
      signal: controller.signal,
    });
    if (!response.ok) {
      throw new Error(`Contact endpoint responded with ${response.status}`);
    }
  } finally {
    window.clearTimeout(timer);
  }
}
