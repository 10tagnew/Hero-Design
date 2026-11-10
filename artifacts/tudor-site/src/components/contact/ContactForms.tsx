import {
  CLIENT_INTERESTS,
  INQUIRY_INITIAL,
  WORKSHOP_INITIAL,
  WORKSHOP_INTERESTS,
  inquirySchema,
  inquirySubmission,
  workshopSchema,
  workshopSubmission,
} from "@/lib/contact-forms";
import { useContactForm } from "@/components/contact/useContactForm";
import {
  CheckboxGroup,
  ErrorBanner,
  Honeypot,
  RequiredNote,
  SelectField,
  SubmitButton,
  SuccessPanel,
  TextAreaField,
  TextField,
  ValidationSummary,
} from "@/components/contact/fields";

const FORM_STYLE = { colorScheme: "dark" } as const;

export function WorkshopForm() {
  const form = useContactForm({
    idPrefix: "workshop",
    initialValues: WORKSHOP_INITIAL,
    schema: workshopSchema,
    toSubmission: workshopSubmission,
  });
  const { values, errors, setField, fieldId } = form;

  if (form.status === "success") {
    return <SuccessPanel transport={form.transport} onReset={form.reset} />;
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit}
      aria-label="Workshop and speaking request"
      aria-busy={form.status === "submitting" || undefined}
      className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6"
      style={FORM_STYLE}
    >
      <TextField
        id={fieldId("name")}
        label="Name"
        required
        autoComplete="name"
        value={values.name}
        onValueChange={(v) => setField("name", v)}
        error={errors.name}
      />
      <TextField
        id={fieldId("title")}
        label="Title or role"
        required
        autoComplete="organization-title"
        placeholder="e.g. Head Coach, Athletic Director"
        value={values.title}
        onValueChange={(v) => setField("title", v)}
        error={errors.title}
      />
      <TextField
        id={fieldId("organization")}
        label="School or organization"
        required
        autoComplete="organization"
        className="sm:col-span-2"
        value={values.organization}
        onValueChange={(v) => setField("organization", v)}
        error={errors.organization}
      />
      <TextField
        id={fieldId("email")}
        label="Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        value={values.email}
        onValueChange={(v) => setField("email", v)}
        error={errors.email}
      />
      <TextField
        id={fieldId("phone")}
        label="Phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        value={values.phone}
        onValueChange={(v) => setField("phone", v)}
        error={errors.phone}
      />
      <SelectField
        id={fieldId("interest")}
        label="Workshop interest"
        required
        options={WORKSHOP_INTERESTS}
        value={values.interest}
        onValueChange={(v) => setField("interest", v)}
        error={errors.interest}
      />
      <TextField
        id={fieldId("attendees")}
        label="Estimated attendees"
        placeholder="e.g. 25"
        value={values.attendees}
        onValueChange={(v) => setField("attendees", v)}
        error={errors.attendees}
      />
      <TextField
        id={fieldId("timeframe")}
        label="Preferred dates or timeframe"
        required
        className="sm:col-span-2"
        placeholder="e.g. Late January, or any Friday this spring"
        value={values.timeframe}
        onValueChange={(v) => setField("timeframe", v)}
        error={errors.timeframe}
      />
      <TextAreaField
        id={fieldId("message")}
        label="Message"
        required
        className="sm:col-span-2"
        placeholder="Tell us about your staff or event, your goals, and anything else we should know."
        value={values.message}
        onValueChange={(v) => setField("message", v)}
        error={errors.message}
      />

      <Honeypot id="workshop-hp" value={form.honeypot} onValueChange={form.setHoneypot} />

      <FormFooter
        submitting={form.status === "submitting"}
        failed={form.status === "error"}
        errorCount={form.errorCount}
        submitLabel="Request A Workshop"
      />
    </form>
  );
}

export function InquiryForm() {
  const form = useContactForm({
    idPrefix: "inquiry",
    initialValues: INQUIRY_INITIAL,
    schema: inquirySchema,
    toSubmission: inquirySubmission,
  });
  const { values, errors, setField, fieldId } = form;

  if (form.status === "success") {
    return <SuccessPanel transport={form.transport} onReset={form.reset} />;
  }

  return (
    <form
      noValidate
      onSubmit={form.handleSubmit}
      aria-label="Client inquiry"
      aria-busy={form.status === "submitting" || undefined}
      className="relative grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6"
      style={FORM_STYLE}
    >
      <TextField
        id={fieldId("name")}
        label="Name"
        required
        autoComplete="name"
        value={values.name}
        onValueChange={(v) => setField("name", v)}
        error={errors.name}
      />
      <TextField
        id={fieldId("title")}
        label="Title or role"
        required
        autoComplete="organization-title"
        placeholder="e.g. Head Coach, Recruiting Coordinator"
        value={values.title}
        onValueChange={(v) => setField("title", v)}
        error={errors.title}
      />
      <TextField
        id={fieldId("school")}
        label="School or program"
        required
        autoComplete="organization"
        value={values.school}
        onValueChange={(v) => setField("school", v)}
        error={errors.school}
      />
      <TextField
        id={fieldId("sports")}
        label="Sport(s)"
        required
        placeholder="e.g. Women's soccer, baseball"
        value={values.sports}
        onValueChange={(v) => setField("sports", v)}
        error={errors.sports}
      />
      <TextField
        id={fieldId("email")}
        label="Email"
        type="email"
        required
        autoComplete="email"
        inputMode="email"
        value={values.email}
        onValueChange={(v) => setField("email", v)}
        error={errors.email}
      />
      <TextField
        id={fieldId("phone")}
        label="Phone"
        type="tel"
        autoComplete="tel"
        inputMode="tel"
        value={values.phone}
        onValueChange={(v) => setField("phone", v)}
        error={errors.phone}
      />
      <CheckboxGroup
        id={fieldId("interests")}
        legend="Interested in"
        hint="Choose all that apply."
        required
        className="sm:col-span-2"
        options={CLIENT_INTERESTS}
        value={values.interests}
        onValueChange={(v) => setField("interests", v)}
        error={errors.interests}
      />
      <TextAreaField
        id={fieldId("message")}
        label="Message"
        required
        className="sm:col-span-2"
        placeholder="Tell us about your program and what you'd like to improve."
        value={values.message}
        onValueChange={(v) => setField("message", v)}
        error={errors.message}
      />

      <Honeypot id="inquiry-hp" value={form.honeypot} onValueChange={form.setHoneypot} />

      <FormFooter
        submitting={form.status === "submitting"}
        failed={form.status === "error"}
        errorCount={form.errorCount}
        submitLabel="Send Inquiry"
      />
    </form>
  );
}

function FormFooter({
  submitting,
  failed,
  errorCount,
  submitLabel,
}: {
  submitting: boolean;
  failed: boolean;
  errorCount: number;
  submitLabel: string;
}) {
  return (
    <div className="sm:col-span-2 flex flex-col gap-4 pt-2">
      <ErrorBanner show={failed} />
      <ValidationSummary count={errorCount} />
      <div className="flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <RequiredNote />
        <SubmitButton submitting={submitting} label={submitLabel} />
      </div>
    </div>
  );
}
