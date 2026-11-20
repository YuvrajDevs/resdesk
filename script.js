/* ===== EDIT YOUR CONTACT DETAILS HERE ===== */
const CONFIG = {
  phone: "+919999999999",      // used for tel: and WhatsApp (digits with country code)
  phoneDisplay: "+91 99999 99999",
  email: "hello@residentialdesk.com"
};
/* ========================================== */

const wa = (text) => `https://wa.me/${CONFIG.phone.replace(/\D/g, "")}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const $$ = (s) => document.querySelectorAll(s);

$$("[data-call]").forEach(a => a.href = "tel:" + CONFIG.phone);
$$("[data-mail]").forEach(a => a.href = "mailto:" + CONFIG.email);
$$("[data-wa]").forEach(a => a.href = wa("Hi Vivek, I found you through ResidentialDesk."));
$$("[data-phone-text]").forEach(e => e.textContent = CONFIG.phoneDisplay);
$$("[data-mail-text]").forEach(e => e.textContent = CONFIG.email);
$$(".mail-link").forEach(e => e.textContent = "or email " + CONFIG.email);
document.getElementById("yr").textContent = new Date().getFullYear();

// Property "Enquire" prefills the form
$$("[data-enq]").forEach(a => a.addEventListener("click", () => {
  const m = document.querySelector("#enq [name=msg]");
  m.value = `I'd like to know more about ${a.dataset.enq}.`;
}));

// Enquiry form -> email or WhatsApp
const form = document.getElementById("enq");
let via = "mail";
form.querySelectorAll("button[data-via]").forEach(b => b.addEventListener("click", () => via = b.dataset.via));
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const d = Object.fromEntries(new FormData(form));
  const err = document.getElementById("err");
  if (!d.name.trim() || !d.phone.trim()) { err.hidden = false; return; }
  err.hidden = true;
  const body = `Name: ${d.name}\nPhone: ${d.phone}\nInterested in: ${d.topic}\n\n${d.msg}`;
  if (via === "wa") window.open(wa(body), "_blank", "noopener");
  else location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent("Enquiry via ResidentialDesk")}&body=${encodeURIComponent(body)}`;
});

// Fade-in on scroll
const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach(x => {
  if (x.isIntersecting) { x.target.classList.add("in"); io.unobserve(x.target); }
}), { threshold: .12 }) : null;
$$(".section, .card, .svc, .steps li").forEach(el => { el.classList.add("reveal"); io ? io.observe(el) : el.classList.add("in"); });

// Image fallback so layout never looks broken
$$("img").forEach(i => i.addEventListener("error", () => i.style.visibility = "hidden"));
