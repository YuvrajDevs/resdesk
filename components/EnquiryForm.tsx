"use client";

import { useState } from "react";
import { site, wa } from "@/lib/site";
import { Mail, WhatsApp } from "./Icons";

export default function EnquiryForm() {
  const [errors, setErrors] = useState<{ name?: boolean; phone?: boolean }>({});

  function send(via: "mail" | "wa", form: HTMLFormElement) {
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const next = { name: !d.name?.trim(), phone: !d.phone?.trim() };
    setErrors(next);
    if (next.name || next.phone) {
      (form.querySelector(next.name ? "[name=name]" : "[name=phone]") as HTMLInputElement)?.focus();
      return;
    }
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nLooking to: ${d.topic}${d.message ? `\n\n${d.message}` : ""}`;
    if (via === "wa") window.open(wa(body), "_blank", "noopener");
    else
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Enquiry via ${site.brand}`
      )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      className="form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const btn = (e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null;
        send(btn?.value === "mail" ? "mail" : "wa", e.currentTarget);
      }}
    >
      <div className="form-head">
        <h3 className="h3">Send a quick enquiry</h3>
        <p>Takes 30 seconds. No spam, ever.</p>
      </div>

      <div className="form-row">
        <div className="field">
          <label htmlFor="f-name">Name</label>
          <input
            id="f-name" name="name" autoComplete="name" placeholder="Your full name"
            aria-invalid={errors.name || undefined} aria-describedby={errors.name ? "f-name-err" : undefined}
          />
          {errors.name && <p id="f-name-err" className="field-error">Please enter your name</p>}
        </div>
        <div className="field">
          <label htmlFor="f-phone">Phone</label>
          <input
            id="f-phone" name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="+91"
            aria-invalid={errors.phone || undefined} aria-describedby={errors.phone ? "f-phone-err" : undefined}
          />
          {errors.phone && <p id="f-phone-err" className="field-error">Please enter your phone number</p>}
        </div>
      </div>

      <fieldset className="field">
        <legend>I’m looking to</legend>
        <div className="segmented">
          {["Buy", "Sell", "Rent", "Invest"].map((t, i) => (
            <label key={t}>
              <input type="radio" name="topic" value={t} defaultChecked={i === 0} />
              <span>{t}</span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="field">
        <label htmlFor="f-msg">
          Message <span className="optional">Optional</span>
        </label>
        <textarea id="f-msg" name="message" rows={3} placeholder="Preferred area, budget, property type…" />
      </div>

      <div className="form-actions">
        <button className="btn btn-whatsapp btn-lg" type="submit" value="wa">
          <WhatsApp /> Send on WhatsApp
        </button>
        <button className="btn btn-secondary btn-lg" type="submit" value="mail">
          <Mail /> Send by email
        </button>
      </div>
    </form>
  );
}
