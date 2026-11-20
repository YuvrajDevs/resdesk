import Image from "next/image";
import Dock from "@/components/Dock";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import {
  Area, ArrowRight, ArrowUpRight, Bed, Chart, Check, Home as HomeIcon, Key, Mail, Phone, Pin, Plus, Sparkle, Star, Tag, WhatsApp,
} from "@/components/Icons";
import { faqs, mail, properties, services, site, stats, steps, tel, wa } from "@/lib/site";

const serviceIcons = [HomeIcon, Tag, Key, Chart];

function Brand() {
  return (
    <a href="#top" className="brand" aria-label={`${site.brand} — back to top`}>
      <span className="brand-mark" aria-hidden>
        R
      </span>
      <span className="brand-word">
        Residential<span>Desk</span>
      </span>
    </a>
  );
}

export default function Page() {
  return (
    <>
      <Reveal />

      {/* ───────── Header ───────── */}
      <header className="header">
        <div className="container header-inner">
          <Brand />
          <nav className="header-nav" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={tel} className="btn btn-primary btn-sm">
            <Phone size={16} />
            <span>Call</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* ───────── Hero ───────── */}
        <section className="hero container" aria-labelledby="hero-title">
          <div className="hero-copy">
            <p className="status">
              <span className="status-dot" aria-hidden /> Taking new clients
            </p>
            <h1 id="hero-title" className="display">
              Find a home that <em>feels&nbsp;right.</em>
            </h1>
            <p className="lead">
              I’m {site.name} — a {site.role.toLowerCase()} helping families buy, sell and rent with honest advice and
              zero pressure.
            </p>
            <div className="hero-actions">
              <a href={tel} className="btn btn-primary btn-lg">
                <Phone /> Call {site.name}
              </a>
              <a href={wa()} target="_blank" rel="noopener" className="btn btn-whatsapp btn-lg">
                <WhatsApp /> WhatsApp
              </a>
            </div>
            <a href={mail} className="hero-mail">
              <Mail size={16} /> {site.email}
            </a>
          </div>

          <div className="hero-visual">
            <Image
              src="/images/hero.jpg"
              alt="Contemporary family home at dusk"
              fill
              priority
              sizes="(min-width: 1024px) 560px, 100vw"
            />
            <dl className="hero-stats">
              {stats.map((st) => (
                <div key={st.label}>
                  <dd>{st.value}</dd>
                  <dt>{st.label}</dt>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ───────── About ───────── */}
        <section id="about" className="section container about" aria-labelledby="about-title">
          <figure className="about-photo" data-reveal>
            <Image src="/images/vivek.jpg" alt={`Portrait of ${site.name}`} fill sizes="(min-width: 1024px) 480px, 100vw" />
            <figcaption className="about-tag">
              <span className="about-tag-name">{site.name}</span>
              <span className="about-tag-role">Founder, {site.brand}</span>
            </figcaption>
          </figure>

          <div className="about-copy" data-reveal>
            <p className="eyebrow">About</p>
            <h2 id="about-title" className="h2">
              One consultant. <em>Your interests first.</em>
            </h2>
            <p className="body-lg">
              {site.brand} is built on a simple idea — finding a home should feel clear and calm. I work with a small
              number of clients at a time, so you always get my full attention.
            </p>
            <ul className="checklist">
              <li><Check size={16} /> Verified listings and clean paperwork</li>
              <li><Check size={16} /> Transparent, fair pricing guidance</li>
              <li><Check size={16} /> With you from shortlist to handover</li>
            </ul>
            <a href={wa()} target="_blank" rel="noopener" className="text-link">
              Ask me anything on WhatsApp <ArrowRight size={18} />
            </a>
          </div>
        </section>

        {/* ───────── Properties ───────── */}
        <section id="properties" className="section" aria-labelledby="props-title">
          <div className="container section-head" data-reveal>
            <div>
              <p className="eyebrow">Featured</p>
              <h2 id="props-title" className="h2">
                Handpicked <em>homes</em>
              </h2>
            </div>
            <p className="section-sub">A few current favourites. Many more available privately — just ask.</p>
          </div>

          <ul className="rail">
            {properties.map((p) => (
              <li key={p.title} className="card" data-reveal>
                <div className="card-media">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 1024px) 380px, 80vw" />
                  <span className={`pill ${p.status === "For Rent" ? "pill-rent" : ""}`}>{p.status}</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-loc">
                    <Pin size={15} /> {p.location}
                  </p>
                  <ul className="card-specs">
                    <li><Bed size={16} /> {p.beds}</li>
                    <li><Area size={16} /> {p.area}</li>
                    <li><Sparkle size={16} /> {p.feature}</li>
                  </ul>
                  <div className="card-foot">
                    <p className="card-price">{p.price}</p>
                    <a
                      href={wa(`Hi ${site.name}, I'm interested in ${p.title} (${p.location}). Could you share more details?`)}
                      target="_blank"
                      rel="noopener"
                      className="btn btn-secondary btn-sm"
                      aria-label={`Enquire about ${p.title}`}
                    >
                      Enquire <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <p className="container footnote">Sample listings — photos, details and prices are placeholders.</p>
        </section>

        {/* ───────── Services ───────── */}
        <section id="services" className="section container" aria-labelledby="svc-title">
          <div className="section-head" data-reveal>
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="svc-title" className="h2">
                How I can <em>help</em>
              </h2>
            </div>
            <p className="section-sub">Whether it’s your first home or your fifth investment.</p>
          </div>
          <ul className="services">
            {services.map((sv, i) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <li key={sv.title} className="service" data-reveal>
                  <span className="icon-tile"><Icon size={22} /></span>
                  <h3 className="h3">{sv.title}</h3>
                  <p>{sv.text}</p>
                </li>
              );
            })}
          </ul>
        </section>

        {/* ───────── Process ───────── */}
        <section className="section section-tint" aria-labelledby="process-title">
          <div className="container">
            <div className="section-head" data-reveal>
              <div>
                <p className="eyebrow">How it works</p>
                <h2 id="process-title" className="h2">
                  Simple, from <em>day one</em>
                </h2>
              </div>
            </div>
            <ol className="steps">
              {steps.map((st, i) => (
                <li key={st.title} className="step" data-reveal>
                  <span className="step-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="h3">{st.title}</h3>
                  <p>{st.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ───────── Testimonial ───────── */}
        <section className="section container" aria-label="Client testimonial">
          <figure className="testimonial" data-reveal>
            <div className="stars" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => <Star key={i} />)}
            </div>
            <blockquote>
              “Clear, patient and always reachable. {site.name} made one of our biggest decisions feel easy.”
            </blockquote>
            <figcaption>
              <span className="avatar" aria-hidden>A</span>
              <span>
                <strong>A happy homeowner</strong>
                <small>Sample testimonial</small>
              </span>
            </figcaption>
          </figure>
        </section>

        {/* ───────── FAQ ───────── */}
        <section id="faq" className="section container faq-layout" aria-labelledby="faq-title">
          <div className="faq-intro" data-reveal>
            <p className="eyebrow">FAQ</p>
            <h2 id="faq-title" className="h2">
              Common <em>questions</em>
            </h2>
            <p className="section-sub">Can’t find what you need? I’m one message away.</p>
          </div>
          <div className="faq" data-reveal>
            {faqs.map((f) => (
              <details key={f.q}>
                <summary>
                  <span>{f.q}</span>
                  <span className="faq-toggle" aria-hidden><Plus size={18} /></span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ───────── Contact ───────── */}
        <section id="contact" className="section container" aria-labelledby="contact-title">
          <div className="contact">
            <div className="contact-copy" data-reveal>
              <p className="eyebrow eyebrow-inverse">Get in touch</p>
              <h2 id="contact-title" className="h2">
                Let’s find your <em>next home.</em>
              </h2>
              <p className="contact-sub">Call, WhatsApp or email — I usually reply the same day.</p>

              <div className="contact-list">
                <a href={tel} className="contact-item">
                  <span className="contact-icon"><Phone /></span>
                  <span className="contact-text"><small>Call</small>{site.phoneDisplay}</span>
                  <ArrowUpRight size={18} className="contact-arrow" />
                </a>
                <a href={wa()} target="_blank" rel="noopener" className="contact-item">
                  <span className="contact-icon contact-icon-wa"><WhatsApp /></span>
                  <span className="contact-text"><small>WhatsApp</small>Message {site.name}</span>
                  <ArrowUpRight size={18} className="contact-arrow" />
                </a>
                <a href={mail} className="contact-item">
                  <span className="contact-icon"><Mail /></span>
                  <span className="contact-text"><small>Email</small>{site.email}</span>
                  <ArrowUpRight size={18} className="contact-arrow" />
                </a>
              </div>
            </div>
            <div data-reveal>
              <EnquiryForm />
            </div>
          </div>
        </section>
      </main>

      {/* ───────── Footer ───────── */}
      <footer className="footer">
        <div className="container footer-inner">
          <Brand />
          <nav className="footer-nav" aria-label="Footer">
            <a href="#about">About</a>
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#contact">Contact</a>
          </nav>
          <p className="footer-copy">
            © {new Date().getFullYear()} {site.brand} · Real estate consulting by {site.name}
          </p>
        </div>
      </footer>

      <Dock />
    </>
  );
}
