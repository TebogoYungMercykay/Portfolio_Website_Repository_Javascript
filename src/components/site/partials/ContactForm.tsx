"use client";

import { useState, useRef, FormEvent } from "react";
import emailjs from "@emailjs/browser";

interface FormField {
  id: string;
  type: string;
  placeholder: string;
}

const topFields: FormField[] = [
  { id: "name", type: "text", placeholder: "Full Name" },
  { id: "email", type: "email", placeholder: "Email Address" },
];

const bottomFields: FormField[] = [
  { id: "mobile_number", type: "tel", placeholder: "Mobile Number" },
  { id: "subject", type: "text", placeholder: "Email Subject" },
];

type FormData = Record<string, string>;

const initialFormData: FormData = {
  name: "",
  email: "",
  mobile_number: "",
  subject: "",
  message: "",
};

type FormStatus = "idle" | "loading" | "success" | "error";

function validate(data: FormData): string | null {
  const { name, email, mobile_number, subject, message } = data;
  if (!name || !email || !mobile_number || !subject || !message)
    return "All fields must be filled out";
  if (!/^[a-zA-Z\s]+$/.test(name)) return "Name must contain only letters";
  if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email))
    return "Please enter a valid email address";
  if (!/^\d+$/.test(mobile_number))
    return "Mobile number must contain only digits";
  return null;
}

const inputClasses =
  "w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed";

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const isDisabled = status === "loading" || status === "success";
  const [isHovered, setIsHovered] = useState(false);

  const updateField = (id: string, value: string) =>
    setFormData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const error = validate(formData);
    if (error) {
      setErrorMsg(error);
      setStatus("error");
      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 3000);
      return;
    }

    if (!formRef.current) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus("success");

      setTimeout(() => {
        setStatus("idle");
        setFormData(initialFormData);
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setErrorMsg("Failed to send message. Please try again.");

      setTimeout(() => {
        setStatus("idle");
        setErrorMsg("");
      }, 5000);
    }
  };

  const renderFieldRow = (fields: FormField[]) => (
    <div className="input-box relative flex justify-between flex-wrap">
      {fields.map((field) => (
        <div
          key={field.id}
          className="input-field relative w-[49%] my-3 max-[462px]:w-full"
        >
          <input
            id={field.id}
            name={field.id}
            type={field.type}
            placeholder={field.placeholder}
            required
            disabled={isDisabled}
            value={formData[field.id]}
            onChange={(e) => updateField(field.id, e.target.value)}
            className={inputClasses}
          />
        </div>
      ))}
    </div>
  );

  // Loading dots component
  const LoadingDots = () => (
    <span className="inline-flex items-center gap-[5px] ml-2">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className="w-[6px] h-[6px] rounded-full animate-pulse"
          style={{
            backgroundColor: "var(--bg-color)",
            animationDelay: `${i * 0.15}s`,
            animationDuration: "0.8s",
          }}
        />
      ))}
    </span>
  );

  // Success checkmark component
  const SuccessCheck = () => (
    <svg className="w-6 h-6 ml-2" viewBox="0 0 24 24" fill="none">
      <circle
        cx="12"
        cy="12"
        r="10"
        fill="currentColor"
        fillOpacity="0.2"
      />
      <path
        d="M7 12.5l3.5 3.5 6.5-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <form
      ref={formRef}
      id="contact-form"
      onSubmit={handleSubmit}
      className="w-full mt-[30px] mb-[30px] text-center ml-[60px] max-[848px]:w-[80%] max-[848px]:ml-0"
    >
      {renderFieldRow(topFields)}
      {renderFieldRow(bottomFields)}

      <div className="textarea-field relative my-3 mb-11 flex">
        <textarea
          id="message"
          name="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          disabled={isDisabled}
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </div>

      {status === "error" && errorMsg && (
        <p className="text-red-500 mb-4 text-[1.4rem]">{errorMsg}</p>
      )}

      <div className="btn-box btns inline-block w-72">
        <button
          type="submit"
          disabled={isDisabled}
          onMouseEnter={() => status === "idle" && setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className={`btn relative inline-flex justify-center items-center w-72 h-[52px] border-2 rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider z-[1] overflow-hidden transition-all duration-300 py-2 px-1.5 ${
            status === "success"
              ? "bg-emerald-500 border-emerald-500 cursor-default"
              : status === "loading"
              ? "bg-theme-main border-theme-main cursor-not-allowed"
              : "bg-theme-main border-theme-animation cursor-pointer group"
          }`}
          style={{
            color: status === "success" 
              ? "white" 
              : isHovered && status === "idle"
              ? "var(--main-color)"
              : "var(--bg-color)",
          }}
        >
          {/* Hover effect - only for idle */}
          {status === "idle" && (
            <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
          )}

          {/* Button content based on status */}
          {status === "idle" && (
            <span style={{ color: "inherit" }}>Submit</span>
          )}
          
          {status === "loading" && (
            <span className="flex items-center" style={{ color: "inherit" }}>
              <span style={{ color: "inherit" }}>Sending</span>
              <LoadingDots />
            </span>
          )}
          
          {status === "success" && (
            <span className="flex items-center" style={{ color: "inherit" }}>
              <span style={{ color: "inherit" }}>Sent</span>
              <SuccessCheck />
            </span>
          )}
        </button>
      </div>
    </form>
  );
}
