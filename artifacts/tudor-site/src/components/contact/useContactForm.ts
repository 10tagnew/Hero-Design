import { useState, type FormEvent } from "react";
import type { ZodTypeAny } from "zod";
import {
  submitContact,
  type ContactSubmission,
  type ContactTransport,
} from "@/lib/contact-submit";

export type FormStatus = "idle" | "submitting" | "success" | "error";
export type FieldErrors<V> = Partial<Record<keyof V, string>>;

type FormValues = Record<string, string | string[]>;

interface Options<V extends FormValues> {
  /** Prefix for element ids; field `name` renders as `${idPrefix}-name`. */
  idPrefix: string;
  /** Initial values. Key order must match the order of fields on the page. */
  initialValues: V;
  schema: ZodTypeAny;
  toSubmission: (values: V) => ContactSubmission;
}

function validate<V extends FormValues>(schema: ZodTypeAny, values: V) {
  const result = schema.safeParse(values);
  if (result.success) {
    return { data: result.data as V, errors: {} as FieldErrors<V> };
  }
  const errors: FieldErrors<V> = {};
  for (const issue of result.error.issues) {
    const key = issue.path[0] as unknown as keyof V | undefined;
    if (key !== undefined && !errors[key]) errors[key] = issue.message;
  }
  return { data: null, errors };
}

export function useContactForm<V extends FormValues>({
  idPrefix,
  initialValues,
  schema,
  toSubmission,
}: Options<V>) {
  const [values, setValues] = useState<V>(initialValues);
  const [errors, setErrors] = useState<FieldErrors<V>>({});
  const [status, setStatus] = useState<FormStatus>("idle");
  const [transport, setTransport] = useState<ContactTransport | null>(null);
  const [honeypot, setHoneypot] = useState("");
  // Errors only show after the first submit attempt; from then on each field
  // re-checks as it changes so messages clear as soon as they're fixed.
  const [attempted, setAttempted] = useState(false);

  const fieldId = (key: keyof V) => `${idPrefix}-${String(key)}`;

  function setField<K extends keyof V>(key: K, value: V[K]) {
    const next = { ...values, [key]: value } as V;
    setValues(next);
    if (attempted) {
      const { errors: found } = validate(schema, next);
      setErrors((current) => ({ ...current, [key]: found[key] }) as FieldErrors<V>);
    }
    if (status === "error") setStatus("idle");
  }

  function focusFirstError(found: FieldErrors<V>) {
    const firstKey = (Object.keys(initialValues) as (keyof V)[]).find((key) => found[key]);
    if (firstKey === undefined) return;
    const el = document.getElementById(fieldId(firstKey));
    if (!el) return;
    const target = el.matches("input, select, textarea")
      ? el
      : el.querySelector<HTMLElement>("input, select, textarea");
    target?.focus();
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "submitting") return;

    setAttempted(true);
    const { data, errors: found } = validate(schema, values);
    setErrors(found);
    if (!data) {
      focusFirstError(found);
      return;
    }

    // Spam bots fill every field, including the hidden one. Show them the
    // normal success screen but don't send anything.
    if (honeypot.trim() !== "") {
      setTransport(null);
      setStatus("success");
      return;
    }

    setStatus("submitting");
    try {
      const result = await submitContact(toSubmission(data));
      setTransport(result.transport);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  function reset() {
    setValues(initialValues);
    setErrors({});
    setHoneypot("");
    setAttempted(false);
    setTransport(null);
    setStatus("idle");
  }

  const errorCount = Object.values(errors).filter(Boolean).length;

  return {
    values,
    errors,
    errorCount,
    status,
    transport,
    honeypot,
    setHoneypot,
    setField,
    fieldId,
    handleSubmit,
    reset,
  };
}
