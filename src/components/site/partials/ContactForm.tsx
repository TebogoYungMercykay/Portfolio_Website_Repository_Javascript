"use client";

import { useState, FormEvent } from "react";

interface FormField {
  id: string;
  type: string;
  placeholder: string;
}

const topFields: FormField[] = [
  { id: "name", type: "text", placeholder: "Full Name" },
  { id: "email", type: "text", placeholder: "Email Address" },
];

const bottomFields: FormField[] = [
  { id: "mobile_number", type: "number", placeholder: "Mobile Number" },
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
  "w-full h-full p-6 text-[1.7rem] text-theme-text bg-transparent rounded-[0.6rem] border-2 border-theme-main placeholder:text-theme-text focus:outline-none";

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const updateField = (id: string, value: string) =>
    setFormData((prev) => ({ ...prev, [id]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const error = validate(formData);
    if (error) {
      alert(error);
      return;
    }

    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, val]) =>
        form.append(`data[${key}]`, val)
      );

      await fetch("https://sheetdb.io/api/v1/cmmdvweoegki7", {
        method: "POST",
        body: form,
      });

      alert("Thank You for Contacting Me, You shall have a Great Day ahead.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error submitting form:", error);
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
            type={field.type}
            placeholder={field.placeholder}
            required
            value={formData[field.id]}
            onChange={(e) => updateField(field.id, e.target.value)}
            className={inputClasses}
          />
        </div>
      ))}
    </div>
  );

  return (
    <form
      id="contact-form"
      onSubmit={handleSubmit}
      className="w-full mt-[30px] mb-[30px] text-center ml-[60px] max-[848px]:w-[80%] max-[848px]:ml-0"
    >
      {renderFieldRow(topFields)}
      {renderFieldRow(bottomFields)}

      <div className="textarea-field relative my-3 mb-11 flex">
        <textarea
          id="message"
          cols={30}
          rows={10}
          placeholder="Your Message"
          required
          value={formData.message}
          onChange={(e) => updateField("message", e.target.value)}
          className={`${inputClasses} resize-none`}
        />
      </div>

      <div className="btn-box btns inline-block w-60">
        <button
          type="submit"
          className="btn relative inline-flex justify-center items-center w-60 h-full bg-theme-main border-2 border-theme-animation rounded-[0.8rem] text-[2.4rem] font-semibold tracking-wider text-theme-bg z-[1] overflow-hidden transition-all duration-500 cursor-pointer hover:text-theme-main group py-2 px-1.5"
        >
          <span className="absolute top-0 left-0 w-0 h-full bg-theme-bg -z-[1] transition-all duration-500 group-hover:w-full" />
          Submit
        </button>
      </div>
    </form>
  );
}
