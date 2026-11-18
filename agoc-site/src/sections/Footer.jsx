import { ArrowRight, Mail, MapPin, Phone } from 'lucide-react'
import logo from '../assets/img/logo.png'
import './Footer.css'

const COLS = [
  { cls: 'f-company', title: 'COMPANY', links: ['About Us', 'Our Businesses', 'Our Leadership', 'News & Media'] },
  { cls: 'f-biz', title: 'BUSINESSES', links: ['Finance', 'Car Rentals', 'Commerce', 'Other Ventures'] },
  {
    cls: 'f-inv',
    title: 'INVESTORS',
    links: ['Investor Overview', 'Financial Reports', 'Corporate Governance', 'Resources'],
  },
  { cls: 'f-careers', title: 'CAREERS', links: ['Life at AGC', 'Open Positions', 'Learning & Development'] },
]

const SOCIALS = ['in', 'f', 'X', 'ig', '▶']

export default function Footer() {
  return (
    <footer className="footer">
      <svg className="footer-wave" viewBox="0 0 1024 112" preserveAspectRatio="none" aria-hidden>
        <defs>
          <linearGradient id="fgrad" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#4a4be4" />
            <stop offset="0.2" stopColor="#6a47ea" />
            <stop offset="0.38" stopColor="#c23fb4" />
            <stop offset="0.5" stopColor="#f0437f" />
            <stop offset="0.64" stopColor="#ff7f50" />
            <stop offset="0.76" stopColor="#ffa860" />
            <stop offset="0.86" stopColor="#c58de0" />
            <stop offset="0.93" stopColor="#5a8cf6" />
            <stop offset="1" stopColor="#2c7ef5" />
          </linearGradient>
        </defs>
        <path
          d="M0,22 C120,28 260,14 380,6 C470,0 560,-2 650,2 C760,8 880,16 1024,8 L1024,112 L0,112 Z"
          fill="url(#fgrad)"
        />
      </svg>

      <div className="footer-inner">
        <div className="f-brand">
          <div className="f-logo">
            <img src={logo} alt="" />
            <span>
              <b>AMERICAN</b>
              <small>GROUP OF COMPANIES</small>
            </span>
          </div>
          <p>
            Building businesses. Creating opportunities.
            <br />
            Empowering a better tomorrow.
          </p>
          <div className="f-social">
            {SOCIALS.map((s) => (
              <a key={s} href="#social" aria-label={s}>
                {s}
              </a>
            ))}
          </div>
        </div>

        {COLS.map((c) => (
          <div key={c.title} className={`f-col ${c.cls}`}>
            <h6>{c.title}</h6>
            {c.links.map((l) => (
              <a key={l} href="#link">
                {l}
              </a>
            ))}
          </div>
        ))}

        <div className="f-col f-news">
          <h6>STAY CONNECTED</h6>
          <p>Subscribe to our newsletter for the latest updates.</p>
          <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" />
            <button type="submit" aria-label="Subscribe">
              <ArrowRight size={13} />
            </button>
          </form>
        </div>

        <div className="f-col f-touch">
          <h6>GET IN TOUCH</h6>
          <div>
            <span>
              <Phone size={9} />
            </span>
            +1 (212) 555-0100
          </div>
          <div>
            <span>
              <Mail size={9} />
            </span>
            info@americangroup.com
          </div>
          <div>
            <span>
              <MapPin size={9} />
            </span>
            <em>
              200 Madison Avenue,
              <br />
              New York, NY 10036, USA
            </em>
          </div>
        </div>

        <p className="f-copy">© 2024 American Group of Companies. All Rights Reserved.</p>
        <p className="f-legal">
          <a href="#privacy">Privacy Policy</a>
          <i />
          <a href="#terms">Terms of Use</a>
        </p>
      </div>
    </footer>
  )
}
