"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

type FormData = {
  email: string;
  message: string;
  name: string;
  subject: string;
};

type FormErrors = Partial<Record<keyof FormData, string>>;

const initialFormData: FormData = {
  email: "",
  message: "",
  name: "",
  subject: ""
};

const requiredMessage = "Please fill this in before sending.";

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"error" | "idle" | "sending" | "sent">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const validateForm = () => {
    const nextErrors: FormErrors = {};

    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        nextErrors[key as keyof FormData] = requiredMessage;
      }
    });

    setFormErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;

    setFormData((current) => ({ ...current, [name]: value }));
    setFormErrors((current) => ({ ...current, [name]: undefined }));
    setStatus("idle");
    setStatusMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      setStatusMessage("Please input everything before sending your message.");
      return;
    }

    setStatus("sending");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json"
        },
        method: "POST"
      });

      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setStatusMessage(result.message || "There was a problem sending your message.");
        return;
      }

      setStatus("sent");
      setStatusMessage("Message sent successfully.");
      setFormData(initialFormData);
    } catch {
      setStatus("error");
      setStatusMessage("There was a problem sending your message.");
    }
  };

  return (
    <form className="flex flex-col gap-8" noValidate onSubmit={handleSubmit}>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-outline">Full Name</span>
          <input
            aria-invalid={Boolean(formErrors.name)}
            className={`rounded-lg border bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
              formErrors.name ? "border-red-400" : "border-outline-variant/30"
            }`}
            name="name"
            onChange={handleChange}
            placeholder="Your name"
            required
            type="text"
            value={formData.name}
          />
          {formErrors.name ? <span className="text-sm text-red-300">{formErrors.name}</span> : null}
        </label>
        <label className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-outline">Email Address</span>
          <input
            aria-invalid={Boolean(formErrors.email)}
            className={`rounded-lg border bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
              formErrors.email ? "border-red-400" : "border-outline-variant/30"
            }`}
            name="email"
            onChange={handleChange}
            placeholder="you@example.com"
            required
            type="email"
            value={formData.email}
          />
          {formErrors.email ? <span className="text-sm text-red-300">{formErrors.email}</span> : null}
        </label>
      </div>
      <label className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-outline">Subject</span>
        <select
          aria-invalid={Boolean(formErrors.subject)}
          className={`rounded-lg border bg-surface-container-lowest p-4 text-base text-on-surface transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
            formErrors.subject ? "border-red-400" : "border-outline-variant/30"
          }`}
          name="subject"
          onChange={handleChange}
          required
          value={formData.subject}
        >
          <option value="">Select a topic</option>
          <option value="New Project Inquiry">New Project Inquiry</option>
          <option value="Frontend Development">Frontend Development</option>
          <option value="Full Stack Collaboration">Full Stack Collaboration</option>
          <option value="General Consultation">General Consultation</option>
        </select>
        {formErrors.subject ? <span className="text-sm text-red-300">{formErrors.subject}</span> : null}
      </label>
      <label className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-outline">Your Message</span>
        <textarea
          aria-invalid={Boolean(formErrors.message)}
          className={`min-h-36 resize-none rounded-lg border bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary ${
            formErrors.message ? "border-red-400" : "border-outline-variant/30"
          }`}
          name="message"
          onChange={handleChange}
          placeholder="Tell me about your project..."
          required
          value={formData.message}
        />
        {formErrors.message ? <span className="text-sm text-red-300">{formErrors.message}</span> : null}
      </label>
      {statusMessage ? (
        <p className={`text-sm ${status === "sent" ? "text-primary" : "text-red-300"}`} role="status">
          {statusMessage}
        </p>
      ) : null}
      <button
        className="flex w-full items-center justify-center gap-3 rounded-lg bg-primary px-6 py-4 font-mono text-xs font-bold uppercase tracking-widest text-on-primary transition duration-300 hover:scale-[1.02] active:scale-[0.98] md:w-fit md:px-12"
        disabled={status === "sending"}
        type="submit"
      >
        {status === "sending" ? "Sending..." : status === "sent" ? "Sent Successfully" : "Send Message"}
        <FiSend aria-hidden="true" />
      </button>
    </form>
  );
};

export default ContactForm;
