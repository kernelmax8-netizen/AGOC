import {
  ArrowRight,
  BarChart3,
  Building2,
  Car,
  Globe,
  LineChart,
  Play,
  Rocket,
  ShoppingCart,
  TrendingUp,
  Users,
} from 'lucide-react'
import logo from './assets/img/eagle-logo.png'
import heroImg from './assets/img/hero.jpg'
import financeImg from './assets/img/finance.jpg'
import carImg from './assets/img/car.jpg'
import commerceImg from './assets/img/commerce.jpg'
import venturesImg from './assets/img/ventures.jpg'
import Lower from './sections/Lower.jsx'
import Footer from './sections/Footer.jsx'
import './App.css'

const NAV = ['Home', 'About Us', 'Our Businesses', 'Investors', 'Careers', 'News', 'Contact Us']

const FLOATS = [
  {
    cls: 'float-finance',
    icon: <BarChart3 size={26} strokeWidth={1.6} color="#16a394" />,
    title: 'FINANCE',
    text: 'Smart financial solutions & investments',
  },
  {
    cls: 'float-commerce',
    icon: <ShoppingCart size={26} strokeWidth={1.6} color="#a23bd6" />,
    title: 'COMMERCE',
    text: 'Global trading & commerce excellence',
  },
  {
    cls: 'float-cars',
    icon: <Car size={26} strokeWidth={1.6} color="#222a45" />,
    title: 'CAR RENTALS',
    text: 'Premium mobility solutions for every journey',
  },
  {
    cls: 'float-ventures',
    icon: <Rocket size={26} strokeWidth={1.6} color="#b13bd6" />,
    title: 'OTHER VENTURES',
    text: 'Innovating today for tomorrow’s opportunities',
  },
]

const STATS = [
  { icon: <Globe size={19} />, color: '#6d4fd8', bg: '#efeafc', value: '25+', label: 'Countries' },
  { icon: <Building2 size={19} />, color: '#6d4fd8', bg: '#efeafc', value: '50+', label: 'Companies' },
  { icon: <Users size={19} />, color: '#f08a24', bg: '#fdf0e1', value: '10K+', label: 'Employees' },
  { icon: <TrendingUp size={19} />, color: '#1f9d63', bg: '#e3f5ec', value: '$5B+', label: 'Combined Assets' },
]

const BUSINESSES = [
  {
    img: financeImg,
    icon: <LineChart size={19} />,
    badge: 'linear-gradient(135deg,#3d8bff,#5b5bf0)',
    title: 'Finance',
    text: 'Investment management, advisory and financial solutions.',
    color: '#3a6df0',
  },
  {
    img: carImg,
    icon: <Car size={19} />,
    badge: 'linear-gradient(135deg,#ff4f8b,#e8368f)',
    title: 'Car Rentals',
    text: 'Reliable, flexible and premium car rental services.',
    color: '#e8368f',
  },
  {
    img: commerceImg,
    icon: <ShoppingCart size={19} />,
    badge: 'linear-gradient(135deg,#ffa23a,#ff7a1a)',
    title: 'Commerce',
    text: 'Global trading, distribution and supply chain solutions.',
    color: '#f2761a',
  },
  {
    img: venturesImg,
    icon: <Rocket size={19} />,
    badge: 'linear-gradient(135deg,#2fc27a,#14a35f)',
    title: 'Other Ventures',
    text: 'Exploring new industries and future-forward opportunities.',
    color: '#14a35f',
  },
]

function Navbar() {
  return (
    <header className="nav">
      <a href="#home" className="brand">
        <img src={logo} alt="" className="brand-logo" />
        <span className="brand-text">
          <span className="brand-name">American Group</span>
          <span className="brand-sub">Of Companies, Inc.</span>
        </span>
      </a>

      <nav className="nav-links">
        {NAV.map((item, i) => (
          <a key={item} href="#home" className={i === 0 ? 'active' : ''}>
            {item}
          </a>
        ))}
      </nav>

      <div className="nav-right">
        <a href="#contact" className="btn-touch">
          Get in Touch <ArrowRight size={14} />
        </a>
        <button className="burger" aria-label="Menu">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-visual">
        <img src={heroImg} alt="American Group of Companies skyline" />
      </div>

      {FLOATS.map((f) => (
        <div key={f.title} className={`float-card ${f.cls}`}>
          <div className="float-icon">{f.icon}</div>
          <div>
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        </div>
      ))}

      <div className="hero-copy">
        <span className="pill">BUILDING TODAY. EMPOWERING TOMORROW.</span>
        <h1>
          One Group.
          <br />
          Limitless
          <br />
          <span className="grad-text">Possibilities.</span>
        </h1>
        <p>
          American Group of Companies is a diversified business group driving growth across
          finance, mobility, commerce and beyond.
        </p>
        <div className="hero-actions">
          <a href="#businesses" className="btn-primary">
            Explore Our Businesses <ArrowRight size={14} />
          </a>
          <a href="#overview" className="btn-outline">
            <Play size={15} /> Watch Overview
          </a>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats">
      {STATS.map((s) => (
        <div key={s.label} className="stat">
          <span className="stat-icon" style={{ background: s.bg, color: s.color }}>
            {s.icon}
          </span>
          <div>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

function Businesses() {
  return (
    <section className="businesses" id="businesses">
      <div className="biz-intro">
        <span className="eyebrow">OUR BUSINESSES</span>
        <h2>
          Diverse Strengths.
          <br />
          <span className="purple-text">Unified Vision.</span>
        </h2>
        <p>
          From finance to mobility, from commerce to emerging ventures — we build, grow and scale
          businesses that create real impact.
        </p>
        <a href="#about" className="btn-ghost">
          More About Us <ArrowRight size={14} />
        </a>
      </div>

      <div className="biz-grid">
        {BUSINESSES.map((b) => (
          <article key={b.title} className="biz-card">
            <div className="biz-img">
              <img src={b.img} alt={b.title} />
            </div>
            <span className="biz-badge" style={{ background: b.badge }}>
              {b.icon}
            </span>
            <div className="biz-body">
              <h3>{b.title}</h3>
              <p>{b.text}</p>
              <a href="#more" style={{ color: b.color }}>
                Learn More <ArrowRight size={13} />
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div className="page">
      <div className="blob blob-left" />
      <div className="blob blob-right" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Businesses />
        <Lower />
      </main>
      <Footer />
    </div>
  )
}
