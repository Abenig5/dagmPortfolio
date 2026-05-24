"use client";

import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactForm = () => {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    window.setTimeout(() => {
      setStatus("sent");
      event.currentTarget.reset();

      window.setTimeout(() => {
        setStatus("idle");
      }, 3000);
    }, 900);
  };

  return (
    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
      <div className="grid gap-8 md:grid-cols-2">
        <label className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-outline">Full Name</span>
          <input
            className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Your name"
            type="text"
          />
        </label>
        <label className="flex flex-col gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-outline">Email Address</span>
          <input
            className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="you@example.com"
            type="email"
          />
        </label>
      </div>
      <label className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-outline">Subject</span>
        <select className="rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 text-base text-on-surface transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
          <option>New Project Inquiry</option>
          <option>Frontend Development</option>
          <option>Full Stack Collaboration</option>
          <option>General Consultation</option>
        </select>
      </label>
      <label className="flex flex-col gap-3">
        <span className="font-mono text-xs uppercase tracking-widest text-outline">Your Message</span>
        <textarea
          className="min-h-36 resize-none rounded-lg border border-outline-variant/30 bg-surface-container-lowest p-4 text-base text-on-surface placeholder:text-outline-variant/60 transition focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          placeholder="Tell me about your project..."
        />
      </label>
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
