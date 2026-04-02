import { FC } from "react";

// ─── type helpers ────────────────────────────────────────────────
interface NavColumn {
  heading: string;
  links: { label: string; href: string }[];
}

// ─── data ────────────────────────────────────────────────────────
const NAV_COLUMNS: NavColumn[] = [
  {
    heading: "Pages",
    links: [
      { label: "Home", href: "/" },
      { label: "About", href: "/about" },
      { label: "Gallery", href: "/gallery" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { label: "Wedding Cakes", href: "/services#wedding" },
      { label: "Birthday Cakes", href: "/services#birthday" },
      { label: "Kitchen Party", href: "/services#kitchen-party" },
      { label: "Corporate Events", href: "/services#corporate" },
    ],
  },
  {
    heading: "Contact",
    links: [
      { label: "WhatsApp Us", href: "https://wa.me/255700000000" },
      { label: "Call Now", href: "tel:+255700000000" },
      { label: "Instagram", href: "https://instagram.com/jejebakery" },
      { label: "Facebook", href: "https://facebook.com/jejebakery" },
    ],
  },
  {
    heading: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms of Use", href: "/terms" },
    ],
  },
];

// ─── Logo SVG ────────────────────────────────────────────────────
const LogoMark: FC = () => (
  <svg
    width="56"
    height="56"
    viewBox="0 0 56 56"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    {/* outer circle */}
    <circle cx="28" cy="28" r="27" stroke="#D4AF37" strokeWidth="1.5" />
    {/* J */}
    <text
      x="12"
      y="37"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      fontSize="28"
      fill="#F7A1C0"
    >
      J
    </text>
    {/* B */}
    <text
      x="29"
      y="37"
      fontFamily="'Playfair Display', serif"
      fontWeight="700"
      fontSize="28"
      fill="#D4AF37"
    >
      B
    </text>
  </svg>
);

// ─── Component ───────────────────────────────────────────────────
const Footer: FC = () => {
  const year = new Date().getFullYear();

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Poppins:wght@400;500;600&family=Inter:wght@400;500&display=swap');

        /* ── CSS tokens ── */
        .jb-footer {
          --pink:    #F7A1C0;
          --rose:    #FCE4EC;
          --deep:    #D81B60;
          --cream:   #FFFDF9;
          --gold:    #D4AF37;
          --purple:  #B39DDB;
          --brown:   #3E2723;
          --body:    #5A4A42;
          --border:  #F1E4E8;

          --bg:      #2A1A17;   /* very dark warm brown for footer */
          --surface: #3E2723;

          font-family: 'Inter', sans-serif;
          background: var(--bg);
          color: var(--cream);
          overflow: hidden;
        }

        /* ── top nav grid ── */
        .jb-footer__top {
          display: grid;
          grid-template-columns: 220px repeat(4, 1fr) 260px;
          gap: 0 2rem;
          padding: 72px 64px 56px;
          border-bottom: 1px solid rgba(212,175,55,0.18);
          position: relative;
          z-index: 1;
        }

        @media (max-width: 1100px) {
          .jb-footer__top {
            grid-template-columns: 1fr 1fr 1fr;
            padding: 52px 36px 44px;
            gap: 2.5rem;
          }
          .jb-footer__brand { grid-column: 1 / -1; }
          .jb-footer__note  { grid-column: 1 / -1; }
        }

        @media (max-width: 640px) {
          .jb-footer__top {
            grid-template-columns: 1fr 1fr;
            padding: 44px 24px 36px;
          }
        }

        /* ── brand block ── */
        .jb-footer__brand {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .jb-footer__brand-name {
          font-family: 'Playfair Display', serif;
          font-size: 1.45rem;
          font-weight: 700;
          color: var(--pink);
          letter-spacing: 0.01em;
          margin: 0;
          line-height: 1.2;
        }
        .jb-footer__tagline {
          font-family: 'Inter', sans-serif;
          font-size: 0.78rem;
          color: rgba(247,161,192,0.55);
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        /* ── gold divider under logo ── */
        .jb-footer__brand::after {
          content: '';
          display: block;
          width: 36px;
          height: 1px;
          background: var(--gold);
          margin-top: 8px;
          opacity: 0.6;
        }

        /* ── nav column ── */
        .jb-footer__col-heading {
          font-family: 'Poppins', sans-serif;
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 20px;
        }
        .jb-footer__col-links {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .jb-footer__col-links a {
          font-family: 'Inter', sans-serif;
          font-size: 0.88rem;
          color: rgba(255,253,249,0.65);
          text-decoration: none;
          transition: color 0.2s ease;
          display: inline-block;
          position: relative;
        }
        .jb-footer__col-links a::after {
          content: '';
          position: absolute;
          left: 0;
          bottom: -2px;
          width: 0;
          height: 1px;
          background: var(--pink);
          transition: width 0.25s ease;
        }
        .jb-footer__col-links a:hover {
          color: var(--pink);
        }
        .jb-footer__col-links a:hover::after {
          width: 100%;
        }

        /* ── note panel (right column) ── */
        .jb-footer__note {
          border-left: 1px solid rgba(212,175,55,0.25);
          padding-left: 28px;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          gap: 10px;
        }
        .jb-footer__note p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          font-size: 0.83rem;
          line-height: 1.75;
          color: rgba(255,253,249,0.55);
          margin: 0;
        }
        .jb-footer__note strong {
          font-style: normal;
          font-weight: 700;
          color: rgba(255,253,249,0.85);
        }
        .jb-footer__note-cta {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          margin-top: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 0.78rem;
          font-weight: 600;
          color: var(--gold);
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .jb-footer__note-cta:hover { color: var(--pink); }
        .jb-footer__note-cta svg { transition: transform 0.2s; }
        .jb-footer__note-cta:hover svg { transform: translateX(3px); }

        /* ── large brand stamp ── */
        .jb-footer__stamp-wrap {
          position: relative;
          overflow: hidden;
          height: clamp(120px, 20vw, 220px);
          display: flex;
          align-items: flex-end;
        }
        .jb-footer__stamp {
          font-family: 'Playfair Display', serif;
          font-weight: 700;
          font-size: clamp(96px, 16vw, 200px);
          line-height: 0.85;
          color: transparent;
          -webkit-text-stroke: 1px rgba(247,161,192,0.18);
          white-space: nowrap;
          padding: 0 64px 0;
          pointer-events: none;
          user-select: none;
          letter-spacing: -0.02em;
          /* subtle shimmer on hover via parent */
          transition: -webkit-text-stroke-color 0.4s;
        }
        .jb-footer__stamp-wrap:hover .jb-footer__stamp {
          -webkit-text-stroke-color: rgba(247,161,192,0.32);
        }

        /* gradient overlay on stamp */
        .jb-footer__stamp-wrap::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(to right,
            var(--bg) 0%,
            transparent 8%,
            transparent 92%,
            var(--bg) 100%
          );
          pointer-events: none;
        }

        /* ── bottom bar ── */
        .jb-footer__bar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 18px 64px;
          border-top: 1px solid rgba(212,175,55,0.12);
          flex-wrap: wrap;
          gap: 10px;
        }
        .jb-footer__bar-copy {
          font-family: 'Inter', sans-serif;
          font-size: 0.73rem;
          color: rgba(255,253,249,0.3);
          letter-spacing: 0.04em;
        }
        .jb-footer__bar-built {
          font-family: 'Inter', sans-serif;
          font-size: 0.73rem;
          color: rgba(255,253,249,0.25);
          letter-spacing: 0.02em;
        }
        .jb-footer__bar-built a {
          color: var(--gold);
          text-decoration: none;
          opacity: 0.7;
          transition: opacity 0.2s;
        }
        .jb-footer__bar-built a:hover { opacity: 1; }

        @media (max-width: 640px) {
          .jb-footer__bar { padding: 16px 24px; }
          .jb-footer__stamp { padding: 0 24px 0; }
        }
      `}</style>

      <footer className="jb-footer" role="contentinfo">

        {/* ── top grid ── */}
        <div className="jb-footer__top">

          {/* brand block */}
          <div className="jb-footer__brand">
            <LogoMark />
            <h2 className="jb-footer__brand-name">Jeje Bakery</h2>
            <span className="jb-footer__tagline">Made with love · Dar es Salaam</span>
          </div>

          {/* nav columns */}
          {NAV_COLUMNS.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <p className="jb-footer__col-heading">{col.heading}</p>
              <ul className="jb-footer__col-links">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* note panel */}
          <aside className="jb-footer__note">
            <p>
              Every cake at <strong>Jeje Bakery</strong> is baked fresh
              to order — from intimate birthday treats to grand{" "}
              <strong>wedding centrepieces</strong>. Flavour, beauty,
              and love in every layer.
            </p>
            <a
              href="https://wa.me/255700000000"
              className="jb-footer__note-cta"
              target="_blank"
              rel="noreferrer"
            >
              Order on WhatsApp
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
          </aside>
        </div>

        {/* ── large stamp ── */}
        <div className="jb-footer__stamp-wrap" aria-hidden="true">
          <span className="jb-footer__stamp">Jeje Bakery</span>
        </div>

        {/* ── bottom bar ── */}
        <div className="jb-footer__bar">
          <span className="jb-footer__bar-copy">
            © 2020 — {year} Jeje Bakery. All rights reserved.
          </span>
          <span className="jb-footer__bar-built">
            Crafted by{" "}
            <a
              href="https://matembotech.com"
              target="_blank"
              rel="noreferrer"
            >
              Matembo Tech
            </a>
          </span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
