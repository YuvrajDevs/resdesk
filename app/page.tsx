import Image from "next/image";
import EnquiryForm from "@/components/EnquiryForm";
import Reveal from "@/components/Reveal";
import { Arrow, Check, Mail, Phone, Pin, Plus, WhatsApp } from "@/components/Icons";
import { faqs, mail, properties, services, site, stats, steps, tel, wa } from "@/lib/site";

export default function Home() {
  return (
    <>
      <Reveal />

      {/* ---------- NAV ---------- */}
      <header className="nav">
        <div className="nav-inner">
          <a href="#top" className="brand" aria-label={`${site.brand} home`}>
            <span className="brand-mark">R</span>
            <span>
              Residential<em>Desk</em>
            </span>
          </a>
          <nav className="nav-links" aria-label="Primary">
            <a href="#about">About</a>
            <a href="#properties">Properties</a>
            <a href="#services">Services</a>
            <a href="#faq">FAQ</a>
          </nav>
          <a href={tel} className="btn btn-dark btn-sm">
            <Phone size={15} /> <span>Call Vivek</span>
          </a>
        </div>
      </header>

      <main id="top">
        {/* ---------- HERO ---------- */}
        <section className="hero wrap">
          <div className="hero-card">
            <Image
              src="/images/hero.jpg"
              alt="Contemporary family home at dusk"
              fill
              priority
              sizes="(min-width: 1200px) 1200px, 100vw"
              className="hero-img"
            />
            <div className="hero-shade" />
            <div className="hero-top">
              <span className="glass-chip">
                <span className="dot" /> Available for consultations
              </span>
            </div>
            <div className="hero-content">
              <p className="kicker kicker-light">
                {site.name} · {site.role}
              </p>
              <h1>
                Find a home
                <br />
                <em>that feels right.</em>
              </h1>
              <p className="hero-lead">
                Curated properties, honest advice and a direct line to {site.name} — from the first viewing to the
                final keys.
              </p>
              <div className="hero-ctas">
                <a href={tel} className="btn btn-light">
                  <Phone /> Call now
                </a>
                <a href={wa()} target="_blank" rel="noopener" className="btn btn-wa">
                  <WhatsApp /> WhatsApp
                </a>
              </div>
            </div>
          </div>

          <dl className="stats" data-reveal>
            {stats.map((s) => (
              <div key={s.label}>
                <dt>{s.label}</dt>
                <dd>{s.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* ---------- ABOUT ---------- */}
        <section id="about" className="section wrap">
          <div className="bento">
            <figure className="bento-photo" data-reveal>
              <Image
                src="/images/vivek.jpg"
                alt={`Portrait of ${site.name}`}
                fill
                sizes="(min-width: 900px) 420px, 100vw"
              />
              <figcaption className="name-tag">
                <strong>{site.name}</strong>
                <span>Founder, {site.brand}</span>
              </figcaption>
            </figure>

            <div className="bento-text" data-reveal>
              <p className="kicker">About</p>
              <h2>
                One consultant.
                <br />
                <em>Your interests first.</em>
              </h2>
              <p>
                {site.brand} is built on a simple idea: finding a home should feel clear and calm. I work with a small
                number of clients at a time, so every enquiry gets my full attention — no pressure, no jargon.
              </p>
              <ul className="ticks">
                <li>
                  <Check size={14} /> Verified listings &amp; clean paperwork
                </li>
                <li>
                  <Check size={14} /> Transparent, fair pricing guidance
                </li>
                <li>
                  <Check size={14} /> With you from shortlist to handover
                </li>
              </ul>
            </div>

            <a href={wa()} target="_blank" rel="noopener" className="bento-cta" data-reveal>
              <span className="kicker kicker-light">Quick question?</span>
              <span className="bento-cta-title">Message Vivek on WhatsApp</span>
              <span className="round-arrow">
                <Arrow />
              </span>
            </a>
          </div>
        </section>

        {/* ---------- PROPERTIES ---------- */}
        <section id="properties" className="section">
          <div className="wrap section-head" data-reveal>
            <div>
              <p className="kicker">Featured</p>
              <h2>
                Handpicked <em>homes</em>
              </h2>
            </div>
            <p className="muted">A few current favourites. Many more off-market — just ask.</p>
          </div>

          <div className="rail" role="list">
            {properties.map((p) => (
              <article key={p.title} className="prop" role="listitem" data-reveal>
                <div className="prop-media">
                  <Image src={p.image} alt={p.title} fill sizes="(min-width: 900px) 380px, 82vw" />
                  <span className={`badge ${p.status === "For Rent" ? "badge-alt" : ""}`}>{p.status}</span>
                </div>
                <div className="prop-body">
                  <div className="prop-row">
                    <div>
                      <h3>{p.title}</h3>
                      <p className="prop-loc">
                        <Pin size={13} /> {p.location}
                      </p>
                    </div>
                    <p className="prop-price">{p.price}</p>
                  </div>
                  <ul className="specs">
                    {p.specs.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                  <a
                    className="btn btn-outline btn-block"
                    href={wa(`Hi Vivek, I'm interested in ${p.title} (${p.location}). Could you share more details?`)}
                    target="_blank"
                    rel="noopener"
                  >
                    Enquire about this home <Arrow size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          <p className="wrap fine">Sample listings — details, photos and prices are placeholders.</p>
        </section>

        {/* ---------- SERVICES ---------- */}
        <section id="services" className="section section-dark">
          <div className="wrap">
            <div className="section-head" data-reveal>
              <div>
                <p className="kicker kicker-light">Services</p>
                <h2>
                  How I can <em>help</em>
                </h2>
              </div>
              <p className="muted-light">Whether you’re buying your first home or growing a portfolio.</p>
            </div>
            <ol className="svc-list">
              {services.map((s, i) => (
                <li key={s.title} data-reveal>
                  <span className="svc-n">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ---------- PROCESS ---------- */}
        <section className="section wrap">
          <div className="section-head" data-reveal>
            <div>
              <p className="kicker">Process</p>
              <h2>
                Simple, from <em>day one</em>
              </h2>
            </div>
          </div>
          <ol className="steps">
            {steps.map((s, i) => (
              <li key={s.title} data-reveal>
                <span className="step-n">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* ---------- TESTIMONIAL ---------- */}
        <section className="section wrap">
          <figure className="quote" data-reveal>
            <blockquote>
              “Clear, patient and always reachable. Vivek made one of our biggest decisions feel easy.”
            </blockquote>
            <figcaption>
              A happy homeowner <span>· sample testimonial</span>
            </figcaption>
          </figure>
        </section>

        {/* ---------- FAQ ---------- */}
        <section id="faq" className="section wrap faq-wrap">
          <div data-reveal>
            <p className="kicker">FAQ</p>
            <h2>
              Good <em>questions</em>
            </h2>
            <p className="muted">Anything else? Vivek is a message away.</p>
          </div>
          <div className="faq">
            {faqs.map((f) => (
              <details key={f.q} data-reveal>
                <summary>
                  {f.q}
                  <span className="faq-icon">
                    <Plus size={16} />
                  </span>
                </summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* ---------- CONTACT ---------- */}
        <section id="contact" className="section wrap">
          <div className="contact" data-reveal>
            <div className="contact-intro">
              <p className="kicker kicker-light">Let’s talk</p>
              <h2>
                Ready when <em>you</em> are.
              </h2>
              <p className="muted-light">Call, WhatsApp or email — Vivek usually replies the same day.</p>

              <div className="contact-actions">
                <a href={tel} className="action">
                  <span className="action-ico">
                    <Phone />
                  </span>
                  <span>
                    <small>Call</small>
                    {site.phoneDisplay}
                  </span>
                  <Arrow size={16} />
                </a>
                <a href={wa()} target="_blank" rel="noopener" className="action">
                  <span className="action-ico action-ico-wa">
                    <WhatsApp />
                  </span>
                  <span>
                    <small>WhatsApp</small>Chat with Vivek
                  </span>
                  <Arrow size={16} />
                </a>
                <a href={mail} className="action">
                  <span className="action-ico">
                    <Mail />
                  </span>
                  <span>
                    <small>Email</small>
                    {site.email}
                  </span>
                  <Arrow size={16} />
                </a>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="footer wrap">
        <a href="#top" className="brand">
          <span className="brand-mark">R</span>
          <span>
            Residential<em>Desk</em>
          </span>
        </a>
        <p>
          Real estate consulting by {site.name} · © {new Date().getFullYear()}
        </p>
      </footer>

      {/* ---------- MOBILE CONTACT DOCK ---------- */}
      <nav className="dock" aria-label="Quick contact">
        <a href={tel} className="dock-call">
          <Phone size={17} /> Call
        </a>
        <a href={wa()} target="_blank" rel="noopener" className="dock-wa">
          <WhatsApp size={17} /> WhatsApp
        </a>
        <a href={mail} aria-label="Email Vivek" className="dock-mail">
          <Mail size={18} />
        </a>
      </nav>
    </>
  );
}
