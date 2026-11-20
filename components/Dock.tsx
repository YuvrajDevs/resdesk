"use client";

import { useEffect, useState } from "react";
import { mail, tel, wa } from "@/lib/site";
import { Mail, Phone, WhatsApp } from "./Icons";

/** Floating contact bar on phones. Hides at the very top (hero already has CTAs) and over the contact section. */
export default function Dock() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const contact = document.getElementById("contact");
    let contactVisible = false;
    const update = () => setShow(window.scrollY > 480 && !contactVisible);
    const io = contact
      ? new IntersectionObserver(([e]) => { contactVisible = e.isIntersecting; update(); }, { threshold: 0.15 })
      : null;
    if (contact && io) io.observe(contact);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => { window.removeEventListener("scroll", update); io?.disconnect(); };
  }, []);

  return (
    <nav className={`dock ${show ? "is-visible" : ""}`} aria-label="Quick contact" aria-hidden={!show}>
      <a href={tel} className="dock-btn dock-call" tabIndex={show ? 0 : -1}>
        <Phone size={18} /> Call
      </a>
      <a href={wa()} target="_blank" rel="noopener" className="dock-btn dock-wa" tabIndex={show ? 0 : -1}>
        <WhatsApp size={18} /> WhatsApp
      </a>
      <a href={mail} className="dock-btn dock-mail" aria-label="Email" tabIndex={show ? 0 : -1}>
        <Mail size={19} />
      </a>
    </nav>
  );
}
