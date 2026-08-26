import { useState, type CSSProperties, type FormEvent } from "react";

const SUBSTACK_URL = "https://dantudor.substack.com";

interface SubstackFormProps {
  inputClassName?: string;
  inputStyle?: CSSProperties;
  buttonClassName?: string;
  buttonStyle?: CSSProperties;
  buttonLabel?: string;
  formClassName?: string;
  formStyle?: CSSProperties;
  placeholder?: string;
}

export function SubstackForm({
  inputClassName = "",
  inputStyle = {},
  buttonClassName = "",
  buttonStyle = {},
  buttonLabel = "Subscribe »",
  formClassName = "",
  formStyle = {},
  placeholder = "Your email address",
}: SubstackFormProps) {
  const [email, setEmail] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // dantudor.substack.com handles the actual subscription — we hand off
    // the email as a prefill and let Substack take it from there.
    const url = `${SUBSTACK_URL}/subscribe${email ? `?email=${encodeURIComponent(email)}` : ""}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form className={formClassName} style={formStyle} onSubmit={handleSubmit}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={placeholder}
        className={inputClassName}
        style={inputStyle}
      />
      <button type="submit" className={buttonClassName} style={buttonStyle}>
        {buttonLabel}
      </button>
    </form>
  );
}
