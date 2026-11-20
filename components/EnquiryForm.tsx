"use client";

import { useState } from "react";
import { site, wa } from "@/lib/site";
import { Mail, WhatsApp } from "./Icons";

export default function EnquiryForm() {
  const [error, setError] = useState(false);

  function send(via: "mail" | "wa", form: HTMLFormElement) {
    const d = Object.fromEntries(new FormData(form)) as Record<string, string>;
    if (!d.name?.trim() || !d.phone?.trim()) return setError(true);
    setError(false);
    const body = `Name: ${d.name}\nPhone: ${d.phone}\nInterested in: ${d.topic}\n\n${d.message ?? ""}`.trim();
    if (via === "wa") window.open(wa(body), "_blank", "noopener");
    else
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
        `Enquiry via ${site.brand}`
      )}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form
      id="enquiry"
      className="form"
      noValidate
      onSubmit={(e) => {
        e.preventDefault();
        const via = ((e.nativeEvent as SubmitEvent).submitter as HTMLButtonElement | null)?.value;
        send(via === "wa" ? "wa" : "mail", e.currentTarget);
      }}
    >
      <div className="form-grid">
        <label>
          <span>Name</span>
          <input name="name" autoComplete="name" placeholder="Your name" />
        </label>
        <label>
          <span>Phone</span>
          <input name="phone" type="tel" autoComplete="tel" placeholder="Your number" />
        </label>
      </div>
      <fieldset className="chips">
        <legend>I’m looking to</legend>
        {["Buy", "Sell", "Rent", "Invest"].map((t, i) => (
          <label key={t} className="chip">
            <input type="radio" name="topic" value={t} defaultChecked={i === 0} />
            <span>{t}</span>
          </label>
        ))}
      </fieldset>
      <label>
        <span>Message <em>(optional)</em></span>
        <textarea name="message" rows={3} placeholder="Area, budget, property type…" />
      </label>
      {error && (
        <p className="form-error" role="alert">
          Please add your name and phone number.
        </p>
      )}
      <div className="form-actions">
        <button className="btn btn-wa" type="submit" value="wa">
          <WhatsApp /> Send on WhatsApp
        </button>
        <button className="btn btn-outline" type="submit" value="mail">
          <Mail /> Send by email
        </button>
      </div>
    </form>
  );
}
