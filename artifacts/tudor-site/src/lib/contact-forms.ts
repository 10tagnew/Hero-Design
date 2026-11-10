// Field definitions, validation rules and email formatting for the two
// contact forms. Kept framework-free so a server endpoint can reuse the same
// zod schemas later.
import { z } from "zod";
import type { ContactSubmission } from "@/lib/contact-submit";

export const WORKSHOP_INTERESTS = [
  "Recruiting workshop for coaches",
  "Athletic department workshop",
  "Conference or event speaking",
  "Not sure yet",
] as const;

export const CLIENT_INTERESTS = [
  "Recruiting strategy",
  "Branding",
  "Recruiting website",
  "Other",
] as const;

const MESSAGE_MAX = 3000;

const requiredText = (message: string, max = 200) =>
  z
    .string()
    .trim()
    .min(1, message)
    .max(max, `Please keep this under ${max} characters.`);

const optionalText = (max = 100) =>
  z.string().trim().max(max, `Please keep this under ${max} characters.`);

const email = z
  .string()
  .trim()
  .min(1, "Please enter your email address.")
  .max(254, "Please enter a shorter email address.")
  .email("Please enter a valid email address, like coach@school.edu.");

const PHONE_PATTERN = /^[0-9\s()+.-]+((x|ext\.?)\s*[0-9]+)?$/i;

const phone = z
  .string()
  .trim()
  .max(40, "Please enter a shorter phone number.")
  .refine(
    (value) => value === "" || (PHONE_PATTERN.test(value) && value.replace(/\D/g, "").length >= 7),
    "Please enter a valid phone number, or leave this blank.",
  );

const message = requiredText("Please add a short message.", MESSAGE_MAX);

/* ------------------------------------------------------------------ */
/* Workshop / speaking requests                                        */
/* ------------------------------------------------------------------ */

// Key order here is the order fields appear on the form; the first invalid
// field in this order receives focus after a failed submit.
export type WorkshopValues = {
  name: string;
  title: string;
  organization: string;
  email: string;
  phone: string;
  interest: string;
  attendees: string;
  timeframe: string;
  message: string;
};

export const WORKSHOP_INITIAL: WorkshopValues = {
  name: "",
  title: "",
  organization: "",
  email: "",
  phone: "",
  interest: "",
  attendees: "",
  timeframe: "",
  message: "",
};

export const workshopSchema = z.object({
  name: requiredText("Please enter your name.", 120),
  title: requiredText("Please enter your title or role.", 120),
  organization: requiredText("Please enter your school or organization.", 160),
  email,
  phone,
  interest: z.enum(WORKSHOP_INTERESTS, {
    errorMap: () => ({ message: "Please choose the type of workshop you're interested in." }),
  }),
  attendees: optionalText(60),
  timeframe: requiredText("Please share your preferred dates or timeframe.", 200),
  message,
});

export function workshopSubmission(values: WorkshopValues): ContactSubmission {
  return {
    type: "workshop",
    subject: `Workshop request: ${values.organization} (${values.interest})`,
    fields: [
      { label: "Name", value: values.name },
      { label: "Title or role", value: values.title },
      { label: "School or organization", value: values.organization },
      { label: "Email", value: values.email },
      { label: "Phone", value: values.phone },
      { label: "Workshop interest", value: values.interest },
      { label: "Preferred dates or timeframe", value: values.timeframe },
      { label: "Estimated attendees", value: values.attendees },
      { label: "Message", value: values.message },
    ],
    data: values,
  };
}

/* ------------------------------------------------------------------ */
/* Client inquiries                                                    */
/* ------------------------------------------------------------------ */

export type InquiryValues = {
  name: string;
  title: string;
  school: string;
  sports: string;
  email: string;
  phone: string;
  interests: string[];
  message: string;
};

export const INQUIRY_INITIAL: InquiryValues = {
  name: "",
  title: "",
  school: "",
  sports: "",
  email: "",
  phone: "",
  interests: [],
  message: "",
};

export const inquirySchema = z.object({
  name: requiredText("Please enter your name.", 120),
  title: requiredText("Please enter your title or role.", 120),
  school: requiredText("Please enter your school or program.", 160),
  sports: requiredText("Please list the sport or sports.", 160),
  email,
  phone,
  interests: z
    .array(z.enum(CLIENT_INTERESTS))
    .min(1, "Please choose at least one option."),
  message,
});

export function inquirySubmission(values: InquiryValues): ContactSubmission {
  return {
    type: "inquiry",
    subject: `Client inquiry: ${values.school} (${values.sports})`,
    fields: [
      { label: "Name", value: values.name },
      { label: "Title or role", value: values.title },
      { label: "School or program", value: values.school },
      { label: "Sport(s)", value: values.sports },
      { label: "Email", value: values.email },
      { label: "Phone", value: values.phone },
      { label: "Interested in", value: values.interests.join(", ") },
      { label: "Message", value: values.message },
    ],
    data: values,
  };
}
