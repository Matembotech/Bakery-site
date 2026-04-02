"use client";

/* eslint-disable @next/next/no-html-link-for-pages */
import { FC, useState, FormEvent } from "react";
import Header from "@/components/Header";

// ─── types ───────────────────────────────────────────────────────
interface FormState {
  name: string;
  email: string;
  phone: string;
  cakeType: string;
  message: string;
}

type SubmitStatus = "idle" | "sending" | "sent" | "error";

// ─── info card data ───────────────────────────────────────────────
const INFO_CARDS = [
  {
    id: "location",
    label: "Find Us",
    value: "Msasani Peninsula, Dar es Salaam, Tanzania",
    href: "https://maps.google.com/?q=Msasani+Dar+es+Salaam",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 2C9.582 2 6 5.582 6 10c0 6.627 8 16 8 16s8-9.373 8-16c0-4.418-3.582-8-8-8z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
        <circle cx="14" cy="10" r="2.5" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    value: "+255 700 000 000",
    href: "https://wa.me/255700000000",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M14 2C7.373 2 2 7.373 2 14c0 2.09.54 4.057 1.49 5.766L2 26l4.383-1.47A11.935 11.935 0 0014 26c6.627 0 12-5.373 12-12S20.627 2 14 2z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M10 9.5c.2.6 1.2 2.4 1.5 2.8.3.4.1.7-.1.9-.2.2-.4.5-.3.7.6 1.1 1.5 2 2.6 2.6.2.1.5 0 .7-.3.2-.3.5-.5.9-.1.4.3 2.2 1.3 2.8 1.5.3.1.4.5.2.9-.8 1.8-2.9 2.2-4.3 1.4C11.4 18.2 9.8 16.6 9 14.5c-.8-1.4-.4-3.5 1-4.3.4-.2.8-.1.9.2z"
          stroke="#D4AF37"
          strokeWidth="1.2"
        />
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Call Us",
    value: "+255 700 000 001",
    href: "tel:+255700000001",
    icon: (
      <svg
        width="28"
        height="28"
        viewBox="0 0 28 28"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 4h4l2 5-2.5 1.5a11 11 0 005 5L18 13l5 2v4a2 2 0 01-2 2C8.954 21 4 16.046 4 10a2 2 0 012-2h2z"
          stroke="#D4AF37"
          strokeWidth="1.5"
          strokeLinejoin="round"
          fill="none"
        />
      </svg>
    ),
  },
];

// ─── cake type options ────────────────────────────────────────────
const CAKE_TYPES = [
  "Wedding Cake",
  "Birthday Cake",
  "Kitchen Party Cake",
  "Corporate Event Cake",
  "Custom Order",
  "Other",
];

// ─── page component ───────────────────────────────────────────────
const ContactPage: FC = () => {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    cakeType: "",
    message: "",
  });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your actual API / EmailJS / Resend call
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  return (
    <>
      {/* ── Google Fonts ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;500;600&family=Inter:wght@400;500&display=swap');

        /* ── tokens ── */
        .jb-contact {
          --pink:    #F7A1C0;
          --rose:    #FCE4EC;
          --deep:    #D81B60;
          --cream:   #FFFDF9;
          --gold:    #D4AF37;
          --purple:  #B39DDB;
          --brown:   #3E2723;
          --bg-dark: #2A1A17;
          --body-c:  #5A4A42;
          --border:  #F1E4E8;
          font-family: 'Inter', sans-serif;
          background: var(--cream);
          color: var(--body-c);
        }

        /* ── HERO ── */
        .jb-contact__hero {
          background: var(--rose);
          padding: 96px 64px 80px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        /* decorative dot grid */
        .jb-contact__hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(212,175,55,0.12) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
        .jb-contact__hero-eyebrow {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
          z-index: 1;
        }
        .jb-contact__hero-eyebrow::before,
        .jb-contact__hero-eyebrow::after {
          content: '';
          width: 36px;
          height: 1px;
          background: rgba(212,175,55,0.45);
        }
        .jb-contact__hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2.8rem, 6vw, 5rem);
          font-weight: 700;
          color: var(--pink);
          line-height: 1.1;
          margin: 0 0 20px;
          position: relative;
          z-index: 1;
        }
        .jb-contact__breadcrumb {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          font-family: 'Inter', sans-serif;
          font-size: 0.82rem;
          color: rgba(255,253,249,0.35);
          position: relative;
          z-index: 1;
        }
        .jb-contact__breadcrumb a {
          color: rgba(255,253,249,0.5);
          text-decoration: none;
          transition: color 0.2s;
        }
        .jb-contact__breadcrumb a:hover { color: var(--pink); }
        .jb-contact__breadcrumb span { color: var(--pink); }

        /* ── INFO CARDS ── */
        .jb-contact__cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 0;
          max-width: 960px;
          margin: -44px auto 0;
          position: relative;
          z-index: 10;
          padding: 0 40px;
        }
        @media (max-width: 720px) {
          .jb-contact__cards {
            grid-template-columns: 1fr;
            margin-top: -28px;
            padding: 0 20px;
          }
        }
        .jb-contact__card {
          background: var(--brown);
          padding: 36px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 14px;
          text-decoration: none;
          transition: background 0.25s;
          border: 1px solid rgba(212,175,55,0.15);
        }
        .jb-contact__card:first-child { border-radius: 12px 0 0 12px; }
        .jb-contact__card:last-child  { border-radius: 0 12px 12px 0; }
        @media (max-width: 720px) {
          .jb-contact__card:first-child { border-radius: 12px 12px 0 0; }
          .jb-contact__card:last-child  { border-radius: 0 0 12px 12px; }
        }
        .jb-contact__card:hover { background: #4e2820; }
        .jb-contact__card-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.35);
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(212,175,55,0.06);
          transition: border-color 0.2s, background 0.2s;
        }
        .jb-contact__card:hover .jb-contact__card-icon {
          border-color: rgba(212,175,55,0.7);
          background: rgba(212,175,55,0.12);
        }
        .jb-contact__card-label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 0.13em;
          text-transform: uppercase;
          color: var(--gold);
        }
        .jb-contact__card-value {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,253,249,0.7);
          line-height: 1.55;
        }

        /* ── FORM SECTION ── */
        .jb-contact__form-section {
          padding: 100px 40px 96px;
          max-width: 900px;
          margin: 0 auto;
        }
        .jb-contact__form-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .jb-contact__form-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 700;
          color: var(--brown);
          margin-bottom: 16px;
          line-height: 1.2;
        }
        .jb-contact__form-header h2 em {
          color: var(--deep);
          font-style: italic;
        }
        .jb-contact__form-header p {
          font-size: 0.93rem;
          color: var(--body-c);
          max-width: 520px;
          margin: 0 auto;
          line-height: 1.75;
        }
        /* gold rule under heading */
        .jb-contact__form-header::after {
          content: '';
          display: block;
          width: 48px;
          height: 2px;
          background: var(--gold);
          margin: 20px auto 0;
          border-radius: 2px;
        }

        /* ── FORM CARD ── */
        .jb-contact__form-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 52px 52px 44px;
          box-shadow: 0 2px 32px rgba(62,39,35,0.06);
        }
        @media (max-width: 600px) {
          .jb-contact__form-card { padding: 32px 24px 28px; }
        }
        .jb-contact__grid-2 {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px 28px;
          margin-bottom: 20px;
        }
        @media (max-width: 600px) {
          .jb-contact__grid-2 { grid-template-columns: 1fr; }
        }
        .jb-contact__field {
          display: flex;
          flex-direction: column;
          gap: 7px;
        }
        .jb-contact__field.full { grid-column: 1 / -1; }
        .jb-contact__label {
          font-family: 'Poppins', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.07em;
          text-transform: uppercase;
          color: var(--brown);
        }
        .jb-contact__label span { color: var(--deep); margin-left: 2px; }

        .jb-contact__input,
        .jb-contact__select,
        .jb-contact__textarea {
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          color: var(--brown);
          background: #FFFDF9;
          border: 1.5px solid var(--border);
          border-radius: 8px;
          padding: 13px 16px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          appearance: none;
        }
        .jb-contact__input::placeholder,
        .jb-contact__textarea::placeholder {
          color: rgba(90,74,66,0.35);
        }
        .jb-contact__input:focus,
        .jb-contact__select:focus,
        .jb-contact__textarea:focus {
          border-color: var(--pink);
          box-shadow: 0 0 0 3px rgba(247,161,192,0.18);
        }
        .jb-contact__select {
          cursor: pointer;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%233E2723' stroke-width='1.5' stroke-linecap='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 38px;
        }
        .jb-contact__textarea {
          resize: vertical;
          min-height: 140px;
          line-height: 1.65;
        }

        /* submit row */
        .jb-contact__submit-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-top: 28px;
          flex-wrap: wrap;
          gap: 16px;
        }
        .jb-contact__submit-hint {
          font-size: 0.78rem;
          color: rgba(90,74,66,0.5);
          font-style: italic;
        }
        .jb-contact__btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: var(--deep);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 0.85rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          border: none;
          border-radius: 8px;
          padding: 14px 32px;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .jb-contact__btn:hover:not(:disabled) { background: #b01550; }
        .jb-contact__btn:active:not(:disabled) { transform: scale(0.98); }
        .jb-contact__btn:disabled { opacity: 0.6; cursor: not-allowed; }

        /* success state */
        .jb-contact__success {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          padding: 40px 20px;
          text-align: center;
          animation: jb-fadein 0.4s ease;
        }
        .jb-contact__success-icon {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: var(--rose);
          border: 2px solid var(--pink);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .jb-contact__success h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.5rem;
          color: var(--brown);
          font-weight: 700;
        }
        .jb-contact__success p {
          font-size: 0.9rem;
          color: var(--body-c);
          max-width: 340px;
          line-height: 1.65;
        }

        /* ── LOCATION BAND ── */
        .jb-contact__location {
          background: var(--bg-dark);
          padding: 72px 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 48px;
          flex-wrap: wrap;
        }
        .jb-contact__location-copy h3 {
          font-family: 'Playfair Display', serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--pink);
          margin-bottom: 10px;
        }
        .jb-contact__location-copy p {
          font-size: 0.88rem;
          color: rgba(255,253,249,0.55);
          line-height: 1.7;
          max-width: 340px;
        }
        .jb-contact__location-details {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }
        .jb-contact__location-row {
          display: flex;
          align-items: flex-start;
          gap: 14px;
        }
        .jb-contact__location-row-icon {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid rgba(212,175,55,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .jb-contact__location-row-text strong {
          display: block;
          font-family: 'Poppins', sans-serif;
          font-size: 0.72rem;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: var(--gold);
          margin-bottom: 3px;
        }
        .jb-contact__location-row-text span {
          font-size: 0.85rem;
          color: rgba(255,253,249,0.6);
        }
        .jb-contact__map-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1.5px solid rgba(212,175,55,0.4);
          color: var(--gold);
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-decoration: none;
          border-radius: 8px;
          padding: 11px 22px;
          margin-top: 22px;
          transition: border-color 0.2s, color 0.2s, background 0.2s;
        }
        .jb-contact__map-btn:hover {
          border-color: var(--gold);
          background: rgba(212,175,55,0.08);
          color: #fff;
        }

        /* ── WA FLOATING HINT ── */
        .jb-contact__wa-strip {
          background: var(--rose);
          padding: 28px 64px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 18px;
          flex-wrap: wrap;
          border-top: 1px solid var(--border);
        }
        .jb-contact__wa-strip p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.95rem;
          color: var(--brown);
        }
        .jb-contact__wa-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--deep);
          color: #fff;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-decoration: none;
          border-radius: 8px;
          padding: 11px 24px;
          transition: background 0.2s;
        }
        .jb-contact__wa-btn:hover { background: #b01550; }

        @keyframes jb-fadein {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @media (max-width: 768px) {
          .jb-contact__hero { padding: 72px 24px 64px; }
          .jb-contact__form-section { padding: 72px 20px 64px; }
          .jb-contact__location { padding: 56px 24px; }
          .jb-contact__wa-strip { padding: 24px 20px; }
        }
      `}</style>

      <Header />

      <main className="jb-contact">
        {/* ── HERO ── */}
        <section className="jb-contact__hero" aria-labelledby="contact-heading">
          <p className="jb-contact__hero-eyebrow">
            We&rsquo;d love to hear from you
          </p>
          <h1 id="contact-heading">Contact Us</h1>
          <nav className="jb-contact__breadcrumb" aria-label="breadcrumb">
            <a href="/">Home</a>
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 2l4 4-4 4"
                stroke="currentColor"
                strokeWidth="1.2"
                strokeLinecap="round"
              />
            </svg>
            <span>Contact</span>
          </nav>
        </section>

        {/* ── INFO CARDS ── */}
        <div className="jb-contact__cards" role="list">
          {INFO_CARDS.map((card) => (
            <a
              key={card.id}
              href={card.href}
              className="jb-contact__card"
              target={card.href.startsWith("http") ? "_blank" : undefined}
              rel={card.href.startsWith("http") ? "noreferrer" : undefined}
              role="listitem"
            >
              <div className="jb-contact__card-icon">{card.icon}</div>
              <p className="jb-contact__card-label">{card.label}</p>
              <p className="jb-contact__card-value">{card.value}</p>
            </a>
          ))}
        </div>

        {/* ── FORM SECTION ── */}
        <section
          className="jb-contact__form-section"
          aria-labelledby="form-heading"
        >
          <div className="jb-contact__form-header">
            <h2 id="form-heading">
              Order Your <em>Dream Cake</em>
            </h2>
            <p>
              Tell us what you&rsquo;re celebrating — we&rsquo;ll get back to
              you within 24 hours with a personalised quote and flavour options.
            </p>
          </div>

          <div className="jb-contact__form-card">
            {status === "sent" ? (
              <div className="jb-contact__success" role="status">
                <div className="jb-contact__success-icon">
                  <svg
                    width="28"
                    height="28"
                    viewBox="0 0 28 28"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 14l5.5 5.5L22 9"
                      stroke="#D81B60"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <h3>Message sent!</h3>
                <p>
                  Thank you, {form.name.split(" ")[0] || "friend"}! We&rsquo;ll
                  be in touch shortly to discuss your cake order.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate>
                <div className="jb-contact__grid-2">
                  <div className="jb-contact__field">
                    <label className="jb-contact__label" htmlFor="name">
                      Full Name <span>*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="jb-contact__input"
                      placeholder="e.g. Amina Hassan"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="jb-contact__field">
                    <label className="jb-contact__label" htmlFor="email">
                      Email Address <span>*</span>
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      className="jb-contact__input"
                      placeholder="amina@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="jb-contact__field">
                    <label className="jb-contact__label" htmlFor="phone">
                      Phone / WhatsApp <span>*</span>
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="jb-contact__input"
                      placeholder="+255 7XX XXX XXX"
                      value={form.phone}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="jb-contact__field">
                    <label className="jb-contact__label" htmlFor="cakeType">
                      Cake Type
                    </label>
                    <select
                      id="cakeType"
                      name="cakeType"
                      className="jb-contact__select"
                      value={form.cakeType}
                      onChange={handleChange}
                    >
                      <option value="">Select cake type…</option>
                      {CAKE_TYPES.map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="jb-contact__field full">
                    <label className="jb-contact__label" htmlFor="message">
                      Tell Us More <span>*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      className="jb-contact__textarea"
                      placeholder="Event date, number of guests, flavour preferences, theme, dietary needs…"
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="jb-contact__submit-row">
                  <p className="jb-contact__submit-hint">
                    We reply within 24 hours · No spam, ever.
                  </p>
                  <button
                    type="submit"
                    className="jb-contact__btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? (
                      <>Sending…</>
                    ) : (
                      <>
                        Send Message
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2 8h12M9 3l5 5-5 5"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* ── LOCATION BAND ── */}
        <section
          className="jb-contact__location"
          aria-label="Location information"
        >
          <div className="jb-contact__location-copy">
            <h3>Visit Our Bakery</h3>
            <p>
              We&rsquo;re based in Dar es Salaam — pop in to taste our samples
              or discuss your event in person.
            </p>
            <a
              href="https://maps.google.com/?q=Msasani+Dar+es+Salaam"
              target="_blank"
              rel="noreferrer"
              className="jb-contact__map-btn"
            >
              Open in Google Maps
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2 7h10M7 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div className="jb-contact__location-details">
            {[
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M9 1C5.686 1 3 3.686 3 7c0 4.5 6 10 6 10s6-5.5 6-10c0-3.314-2.686-6-6-6z"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                    />
                    <circle
                      cx="9"
                      cy="7"
                      r="1.5"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                    />
                  </svg>
                ),
                label: "Address",
                value: "Msasani Peninsula, Dar es Salaam",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <circle
                      cx="9"
                      cy="9"
                      r="7.5"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                    />
                    <path
                      d="M9 5v4.5l3 1.5"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Hours",
                value: "Mon – Sat · 8 AM – 7 PM",
              },
              {
                icon: (
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M2 2h14v10H2z"
                      rx="2"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M2 5l7 5 7-5"
                      stroke="#D4AF37"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                    />
                  </svg>
                ),
                label: "Email",
                value: "hello@jejebakery.co.tz",
              },
            ].map((row) => (
              <div key={row.label} className="jb-contact__location-row">
                <div className="jb-contact__location-row-icon">{row.icon}</div>
                <div className="jb-contact__location-row-text">
                  <strong>{row.label}</strong>
                  <span>{row.value}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── WA STRIP ── */}
        <div className="jb-contact__wa-strip">
          <p>Prefer a faster reply? Reach us directly on WhatsApp.</p>
          <a
            href="https://wa.me/255700000000"
            target="_blank"
            rel="noreferrer"
            className="jb-contact__wa-btn"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 18 18"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M9 1C4.582 1 1 4.582 1 9c0 1.57.41 3.045 1.12 4.325L1 17l3.793-1.1A7.966 7.966 0 009 17c4.418 0 8-3.582 8-8S13.418 1 9 1z"
                stroke="white"
                strokeWidth="1.2"
                fill="none"
              />
              <path
                d="M6 6.5c.15.45.9 1.8 1.1 2.1.2.3.1.5-.1.7-.15.15-.3.38-.22.53.45.82 1.12 1.5 1.94 1.95.15.08.38 0 .53-.22.2-.3.4-.38.67-.08.3.23 1.65.98 2.1 1.13.22.08.3.38.15.67-.6 1.35-2.17 1.65-3.22 1.05C7.05 13.65 4.35 11 4 8.9c-.3-1.05.3-2.62 1.65-3.22.3-.15.6-.07.67.15z"
                stroke="white"
                strokeWidth="1"
              />
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </main>
    </>
  );
};

export default ContactPage;
