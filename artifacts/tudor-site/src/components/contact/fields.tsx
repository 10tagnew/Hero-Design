import {
  useEffect,
  useRef,
  type InputHTMLAttributes,
  type ReactNode,
  type SelectHTMLAttributes,
  type TextareaHTMLAttributes,
} from "react";
import { cn } from "@/lib/utils";
import { CONTACT_EMAIL, type ContactTransport } from "@/lib/contact-submit";

export const ORANGE = "#e07b2a";
// Light coral reads clearly on the near-black form card (about 8:1 contrast).
export const ERROR_COLOR = "#ff9b8a";
const MUTED = "#9aa6bf";

export function controlClass(hasError: boolean) {
  return cn(
    "block w-full min-h-[48px] rounded-xl px-4 py-3 text-base text-white bg-white/[0.06] border outline-none transition-colors",
    "placeholder:text-[#7d8aa6] hover:border-white/30",
    "focus-visible:border-[#e07b2a] focus-visible:ring-2 focus-visible:ring-[#e07b2a]/40",
    hasError ? "border-[#ff9b8a] hover:border-[#ff9b8a]" : "border-white/15",
  );
}

function describedBy(id: string, hint?: string, error?: string) {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

function RequiredMark({ required }: { required?: boolean }) {
  return required ? (
    <span aria-hidden="true" style={{ color: ORANGE }}>
      {" "}*
    </span>
  ) : (
    <span className="font-normal" style={{ color: MUTED }}>
      {" "}(optional)
    </span>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} className="mt-2 flex items-start gap-1.5 text-sm" style={{ color: ERROR_COLOR }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-[2px] shrink-0">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
        <path d="M12 7.5v5.5M12 16.5h.01" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      </svg>
      {message}
    </p>
  );
}

interface ShellProps {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: ReactNode;
}

function FieldShell({ id, label, required, error, hint, className, children }: ShellProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="block mb-2 text-sm font-semibold text-white">
        {label}
        <RequiredMark required={required} />
      </label>
      {hint && (
        <p id={`${id}-hint`} className="-mt-1 mb-2 text-xs" style={{ color: MUTED }}>
          {hint}
        </p>
      )}
      {children}
      <FieldError id={`${id}-error`} message={error} />
    </div>
  );
}

interface CommonProps {
  id: string;
  label: string;
  value: string;
  onValueChange: (value: string) => void;
  required?: boolean;
  error?: string;
  hint?: string;
  className?: string;
}

type TextFieldProps = CommonProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, "id" | "value" | "onChange" | "className" | "required">;

export function TextField({
  id,
  label,
  value,
  onValueChange,
  required,
  error,
  hint,
  className,
  type = "text",
  ...rest
}: TextFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={controlClass(Boolean(error))}
        {...rest}
      />
    </FieldShell>
  );
}

type TextAreaFieldProps = CommonProps &
  Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "id" | "value" | "onChange" | "className" | "required">;

export function TextAreaField({
  id,
  label,
  value,
  onValueChange,
  required,
  error,
  hint,
  className,
  rows = 5,
  ...rest
}: TextAreaFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <textarea
        id={id}
        name={id}
        rows={rows}
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
        aria-required={required || undefined}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy(id, hint, error)}
        className={cn(controlClass(Boolean(error)), "min-h-[140px] resize-y leading-relaxed")}
        {...rest}
      />
    </FieldShell>
  );
}

type SelectFieldProps = CommonProps & {
  options: readonly string[];
  placeholder?: string;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "id" | "value" | "onChange" | "className" | "required">;

export function SelectField({
  id,
  label,
  value,
  onValueChange,
  required,
  error,
  hint,
  className,
  options,
  placeholder = "Choose one",
  ...rest
}: SelectFieldProps) {
  return (
    <FieldShell id={id} label={label} required={required} error={error} hint={hint} className={className}>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onValueChange(e.target.value)}
          aria-required={required || undefined}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy(id, hint, error)}
          className={cn(controlClass(Boolean(error)), "appearance-none pr-11 cursor-pointer", !value && "text-[#7d8aa6]")}
          {...rest}
        >
          <option value="" disabled style={{ backgroundColor: "#141414", color: MUTED }}>
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option} value={option} style={{ backgroundColor: "#141414", color: "#fff" }}>
              {option}
            </option>
          ))}
        </select>
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          aria-hidden="true"
          className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
        >
          <path d="M6 9l6 6 6-6" stroke={ORANGE} strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </FieldShell>
  );
}

interface CheckboxGroupProps {
  id: string;
  legend: string;
  hint?: string;
  options: readonly string[];
  value: string[];
  onValueChange: (value: string[]) => void;
  required?: boolean;
  error?: string;
  className?: string;
}

export function CheckboxGroup({
  id,
  legend,
  hint,
  options,
  value,
  onValueChange,
  required,
  error,
  className,
}: CheckboxGroupProps) {
  const toggle = (option: string, checked: boolean) => {
    // Keep selections in the on-screen order so the email reads consistently.
    onValueChange(options.filter((o) => (o === option ? checked : value.includes(o))));
  };

  return (
    <fieldset id={id} className={className} aria-describedby={describedBy(id, hint, error)}>
      <legend className="mb-2 text-sm font-semibold text-white">
        {legend}
        <RequiredMark required={required} />
      </legend>
      {hint && (
        <p id={`${id}-hint`} className="-mt-1 mb-3 text-xs" style={{ color: MUTED }}>
          {hint}
        </p>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {options.map((option, index) => {
          const optionId = `${id}-${index}`;
          const checked = value.includes(option);
          return (
            <label
              key={option}
              htmlFor={optionId}
              className={cn(
                "flex items-center gap-3 min-h-[52px] rounded-xl px-4 py-3 cursor-pointer border transition-colors",
                "has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-[#e07b2a]/60",
                checked
                  ? "border-[#e07b2a] bg-[#e07b2a]/10"
                  : error
                    ? "border-[#ff9b8a] bg-white/[0.04]"
                    : "border-white/15 bg-white/[0.04] hover:border-white/30",
              )}
            >
              <input
                id={optionId}
                type="checkbox"
                name={id}
                value={option}
                checked={checked}
                onChange={(e) => toggle(option, e.target.checked)}
                aria-invalid={error ? true : undefined}
                className="h-5 w-5 shrink-0 cursor-pointer rounded outline-none"
                style={{ accentColor: ORANGE }}
              />
              <span className="text-[15px] text-white">{option}</span>
            </label>
          );
        })}
      </div>
      <FieldError id={`${id}-error`} message={error} />
    </fieldset>
  );
}

/**
 * Hidden field that people never see or reach with the keyboard. Bots that
 * fill in every input will fill this too, and those submissions are dropped.
 */
export function Honeypot({ id, value, onValueChange }: { id: string; value: string; onValueChange: (v: string) => void }) {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-10000px", top: "auto", width: 1, height: 1, overflow: "hidden" }}
    >
      <label htmlFor={id}>Leave this field empty</label>
      <input
        id={id}
        name="tcs_hp_field"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        value={value}
        onChange={(e) => onValueChange(e.target.value)}
      />
    </div>
  );
}

export function RequiredNote() {
  return (
    <p className="text-xs" style={{ color: MUTED }}>
      Fields marked <span style={{ color: ORANGE }}>*</span> are required.
    </p>
  );
}

export function SubmitButton({ submitting, label }: { submitting: boolean; label: string }) {
  return (
    <button
      type="submit"
      aria-disabled={submitting || undefined}
      className={cn(
        "inline-flex items-center justify-center gap-2 w-full sm:w-auto min-h-[52px] px-8 py-4 rounded-full font-bold text-white text-sm transition-opacity",
        "outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]",
        submitting ? "opacity-80 cursor-wait" : "hover:opacity-90",
      )}
      style={{ backgroundColor: ORANGE }}
    >
      {submitting ? (
        <>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="animate-spin">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeOpacity="0.3" strokeWidth="3" />
            <path d="M21 12a9 9 0 00-9-9" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          </svg>
          Sending...
        </>
      ) : (
        <>
          {label} <span aria-hidden="true">»</span>
        </>
      )}
    </button>
  );
}

export function ValidationSummary({ count }: { count: number }) {
  return (
    <div role="alert" aria-live="assertive">
      {count > 0 && (
        <p className="text-sm font-medium" style={{ color: ERROR_COLOR }}>
          {count === 1
            ? "Please fix the highlighted field above."
            : `Please fix the ${count} highlighted fields above.`}
        </p>
      )}
    </div>
  );
}

export function ErrorBanner({ show }: { show: boolean }) {
  return (
    <div role="alert" aria-live="assertive">
      {show && (
        <div
          className="flex items-start gap-3 rounded-xl px-4 py-3 text-sm"
          style={{ backgroundColor: "rgba(255,155,138,0.1)", border: `1px solid ${ERROR_COLOR}`, color: "#ffd9d2" }}
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mt-[1px] shrink-0">
            <circle cx="12" cy="12" r="9" stroke={ERROR_COLOR} strokeWidth="2" />
            <path d="M12 7.5v5.5M12 16.5h.01" stroke={ERROR_COLOR} strokeWidth="2.2" strokeLinecap="round" />
          </svg>
          <p>
            Something went wrong and your message wasn't sent. Please try again, or email us at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold underline underline-offset-2 text-white">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </div>
      )}
    </div>
  );
}

export function SuccessPanel({
  transport,
  onReset,
}: {
  transport: ContactTransport | null;
  onReset: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  // Move focus here so keyboard and screen reader users land on the result.
  useEffect(() => {
    panelRef.current?.focus();
  }, []);

  return (
    <div
      ref={panelRef}
      role="status"
      tabIndex={-1}
      className="flex flex-col items-start gap-5 py-6 sm:py-10 outline-none"
    >
      <span
        className="flex items-center justify-center rounded-full"
        style={{ width: 56, height: 56, backgroundColor: "rgba(224,123,42,0.15)", border: `2px solid ${ORANGE}` }}
      >
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12.5l4.5 4.5L19 7.5" stroke={ORANGE} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <p
        style={{
          fontFamily: "'Bebas Neue', 'Arial Black', sans-serif",
          fontSize: "clamp(30px, 4vw, 44px)",
          lineHeight: 1,
          color: "#fff",
          fontWeight: 400,
          maxWidth: 560,
        }}
      >
        Thanks, Dan's team will be in touch within 1 business day.
      </p>
      {transport === "mailto" && (
        <p className="text-sm sm:text-base" style={{ color: "#b0bdd4", lineHeight: 1.6, maxWidth: 560 }}>
          We opened your email app with your details filled in. Be sure to hit send. If nothing opened, email{" "}
          <a href={`mailto:${CONTACT_EMAIL}`} className="font-semibold text-white underline underline-offset-2">
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      )}
      <button
        type="button"
        onClick={onReset}
        className="mt-1 inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-white text-sm border-2 border-white transition-colors hover:bg-white hover:text-gray-900 outline-none focus-visible:ring-2 focus-visible:ring-[#e07b2a] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0f0f0f]"
      >
        Send another message
      </button>
    </div>
  );
}
