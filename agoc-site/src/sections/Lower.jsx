import {
  ArrowRight,
  Building2,
  Check,
  ChevronLeft,
  ChevronRight,
  Eye,
  Gem,
  HandHeart,
  Network,
  ShieldCheck,
  Sprout,
  Target,
  Users,
} from 'lucide-react'
import missionImg from '../assets/img/mission.jpg'
import investImg from '../assets/img/invest.jpg'
import mapImg from '../assets/img/worldmap.jpg'
import news1 from '../assets/img/news1.jpg'
import news2 from '../assets/img/news2.jpg'
import news3 from '../assets/img/ventures.jpg'
import './Lower.css'

const WHY = [
  {
    icon: <Gem size={17} strokeWidth={1.8} />,
    bg: 'linear-gradient(135deg,#8a4dff,#5a3df0)',
    bar: '#6a3df0',
    title: 'Diverse Portfolio',
    text: 'Multiple industries, one strong vision.',
  },
  {
    icon: <HandHeart size={17} strokeWidth={1.8} />,
    bg: 'linear-gradient(135deg,#ffb23a,#ff7a1a)',
    bar: '#ff8a2a',
    title: 'Customer First',
    text: 'Committed to delivering exceptional experiences.',
  },
  {
    icon: <Sprout size={17} strokeWidth={1.8} />,
    bg: 'linear-gradient(135deg,#46d27a,#16a35f)',
    bar: '#22b866',
    title: 'Sustainable Growth',
    text: 'Building businesses that create long-term value.',
  },
  {
    icon: <ShieldCheck size={17} strokeWidth={1.8} />,
    bg: 'linear-gradient(135deg,#3da0ff,#2563eb)',
    bar: '#2f7bf5',
    title: 'Trusted Legacy',
    text: 'Built on trust, integrity and transparency.',
  },
]

const STATS2 = [
  { icon: <Users size={16} />, bg: '#efeafc', color: '#6d4fd8', value: '25+', label: 'Countries' },
  { icon: <Building2 size={16} />, bg: '#fdf0e1', color: '#f08a24', value: '50+', label: 'Companies' },
  { icon: <Users size={16} />, bg: '#e3f5ec', color: '#1f9d63', value: '10K+', label: 'Employees' },
  { icon: <Network size={16} />, bg: '#e4f0ff', color: '#2f7bf5', value: '$5B+', label: 'Combined Assets' },
]

const PINS = [
  { x: 11.7, y: 39.6, c: '#6d3df0' },
  { x: 27.4, y: 62.3, c: '#22b866' },
  { x: 47.4, y: 20, c: '#ff8a2a' },
  { x: 52.3, y: 65.6, c: '#ff9a2a', small: true },
  { x: 67.4, y: 39.6, c: '#2f7bf5' },
  { x: 80.6, y: 46.8, c: '#f0267a' },
  { x: 92.6, y: 42.9, c: '#18b5a3', small: true },
]

const NEWS = [
  {
    img: news1,
    tag: 'COMPANY',
    tagBg: '#ec2f8a',
    title: 'American Group Expands Global Operations',
    date: 'May 20, 2024',
  },
  {
    img: news2,
    tag: 'FINANCE',
    tagBg: '#f59a2b',
    title: 'Q1 2024 Financial Results Show Strong Growth',
    date: 'May 15, 2024',
  },
  {
    img: news3,
    tag: 'SUSTAINABILITY',
    tagBg: '#1fa862',
    title: 'Sustainability at the Core of Our Future',
    date: 'May 10, 2024',
  },
]

const PARTNERS = [
  { name: 'Deloitte.', style: { fontWeight: 800, fontSize: 1.0, letterSpacing: '-0.3px' } },
  { name: 'KPMG', style: { fontWeight: 800, fontSize: 0.9, color: '#2b3f9c', fontStyle: 'italic' } },
  { name: 'pwc', style: { fontWeight: 700, fontSize: 1.0, color: '#d64a0f' } },
  { name: 'EY', style: { fontWeight: 800, fontSize: 1.05, color: '#2b2b33' } },
  { name: 'Microsoft', style: { fontWeight: 500, fontSize: 0.92, color: '#4a4a52' }, square: true },
  { name: 'aws', style: { fontWeight: 700, fontSize: 1.05, color: '#232f3e' } },
  { name: 'ORACLE', style: { fontWeight: 600, fontSize: 0.85, color: '#d6261e', letterSpacing: '1px' } },
  { name: 'SAP', style: { fontWeight: 800, fontSize: 0.95, color: '#fff', background: '#1b7fd6' }, tag: true },
]

function WhyChoose() {
  return (
    <section className="why">
      <div className="why-copy">
        <span className="eyebrow2">WHY CHOOSE US</span>
        <h2 className="h2">
          Experience. Innovation.
          <br />
          <span className="grad-pink">Impact.</span>
        </h2>
        <p>
          We combine deep industry expertise with innovative thinking to build businesses that
          create sustainable value and a better tomorrow.
        </p>
        <a href="#advantage" className="btn-grad">
          Discover Our Advantage <ArrowRight size={13} />
        </a>
      </div>

      <div className="why-cards">
        {WHY.map((w) => (
          <div className="why-card" key={w.title}>
            <span className="why-icon" style={{ background: w.bg }}>
              {w.icon}
            </span>
            <h4>{w.title}</h4>
            <p>{w.text}</p>
            <i style={{ background: w.bar }} />
          </div>
        ))}
      </div>
    </section>
  )
}

function Stats2() {
  return (
    <div className="stats2">
      {STATS2.map((s) => (
        <div className="stats2-item" key={s.label}>
          <span className="stats2-icon" style={{ background: s.bg, color: s.color }}>
            {s.icon}
          </span>
          <div>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

function Global() {
  return (
    <section className="global">
      <div className="global-copy">
        <span className="eyebrow2">GLOBAL PRESENCE</span>
        <h2 className="h2">
          A Global Footprint.
          <br />
          <span className="grad-pink">Local Impact.</span>
        </h2>
        <p>
          With operations across continents, we bring global expertise and local understanding to
          every opportunity.
        </p>
        <a href="#presence" className="btn-line">
          Explore Our Presence <ArrowRight size={13} />
        </a>
      </div>

      <div className="map">
        <img src={mapImg} alt="" />
        <svg className="map-arcs" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M11.7 38 Q 30 0 47.4 21" />
          <path d="M47.4 21 Q 58 4 67.4 38" />
          <path d="M47.4 21 Q 66 14 80.6 45" />
          <path d="M67.4 38 Q 80 18 92.6 41" />
          <path d="M11.7 38 Q 18 62 27.4 59" />
          <path d="M47.4 21 Q 50 45 52.3 62" />
        </svg>
        {PINS.map((p, i) => (
          <svg
            key={i}
            className={`pin ${p.small ? 'pin-sm' : ''}`}
            style={{ left: `${p.x}%`, top: `${p.y}%` }}
            viewBox="0 0 24 32"
          >
            <path
              d="M12 0C5.4 0 0 5.2 0 11.7 0 20 12 32 12 32s12-12 12-20.3C24 5.2 18.6 0 12 0z"
              fill={p.c}
            />
            <circle cx="12" cy="11.5" r="4.4" fill="#fff" />
          </svg>
        ))}
      </div>
    </section>
  )
}

function Mission() {
  return (
    <section className="mission">
      <img src={missionImg} alt="" className="mission-bg" />
      <div className="mission-text">
        <div className="mv">
          <span className="mv-icon" style={{ color: '#ec2f8a' }}>
            <Target size={17} strokeWidth={1.7} />
          </span>
          <div>
            <h4 style={{ color: '#e8368f' }}>Our Mission</h4>
            <p>
              To empower businesses and communities through innovation, integrity and
              excellence.
            </p>
          </div>
        </div>
        <div className="mv-line" />
        <div className="mv">
          <span className="mv-icon" style={{ color: '#3a4bd6' }}>
            <Eye size={17} strokeWidth={1.7} />
          </span>
          <div>
            <h4 style={{ color: '#6b46d9' }}>Our Vision</h4>
            <p>
              To be a globally respected group, creating limitless opportunities and positive
              impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

function Invest() {
  const bars = [18, 26, 34, 44, 54, 66, 80, 96]
  return (
    <section className="invest">
      <div className="invest-copy">
        <span className="eyebrow2">INVEST WITH US</span>
        <h2 className="h2">
          Investing in Today.
          <br />
          <span className="grad-orange">Building Tomorrow.</span>
        </h2>
        <p>
          Partner with a group that is committed to growth, innovation and creating sustainable
          value for generations to come.
        </p>
        <ul>
          {['Strong financial performance', 'Diverse investment opportunities', 'Future-ready businesses'].map(
            (t) => (
              <li key={t}>
                <span>
                  <Check size={9} strokeWidth={3} />
                </span>
                {t}
              </li>
            ),
          )}
        </ul>
        <a href="#investors" className="btn-grad">
          Explore Investor Relations <ArrowRight size={13} />
        </a>
      </div>

      <div className="invest-visual">
        <img src={investImg} alt="" />
        <div className="growth-card">
          <h5>Growth, Consistency, Trust.</h5>
          <div className="chart">
            <svg className="chart-arrow" viewBox="0 0 100 60" preserveAspectRatio="none">
              <path d="M2 50 Q 40 40 98 6" />
              <path d="M88 5 L98 6 L94 15" />
            </svg>
            {bars.map((h, i) => (
              <span key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
          <div className="growth-foot">
            <b>Sustainable Growth</b>
            <div>
              <small>Year over Year</small>
              <em>+22.4%</em>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function News() {
  return (
    <section className="news">
      <div className="news-head">
        <span className="eyebrow2">LATEST NEWS</span>
        <a href="#news">
          View All News <ArrowRight size={10} />
        </a>
      </div>
      <div className="news-grid">
        {NEWS.map((n) => (
          <article key={n.title} className="news-card">
            <div className="news-img">
              <img src={n.img} alt="" />
              <span style={{ background: n.tagBg }}>{n.tag}</span>
            </div>
            <h5>{n.title}</h5>
            <small>{n.date}</small>
          </article>
        ))}
      </div>
    </section>
  )
}

function Partners() {
  return (
    <section className="partners">
      <div className="partners-head">
        <span className="eyebrow2">OUR PARTNERS</span>
        <div className="arrows">
          <button aria-label="Previous">
            <ChevronLeft size={11} />
          </button>
          <button aria-label="Next">
            <ChevronRight size={11} />
          </button>
        </div>
      </div>
      <div className="partner-row">
        {PARTNERS.map((p) => (
          <span
            key={p.name}
            className={`partner ${p.tag ? 'partner-tag' : ''}`}
            style={{
              fontWeight: p.style.fontWeight,
              fontSize: `calc(var(--u) * ${p.style.fontSize * 14})`,
              color: p.style.color,
              letterSpacing: p.style.letterSpacing,
              fontStyle: p.style.fontStyle,
              background: p.style.background,
            }}
          >
            {p.square && (
              <i className="ms">
                <b />
                <b />
                <b />
                <b />
              </i>
            )}
            {p.name}
          </span>
        ))}
      </div>
    </section>
  )
}

export default function Lower() {
  return (
    <div className="lower">
      <div className="lower-grid">
        <div className="col-left">
          <WhyChoose />
          <Stats2 />
          <Global />
        </div>
        <div className="col-right">
          <Mission />
          <Invest />
        </div>
      </div>

      <div className="lower-bottom">
        <News />
        <Partners />
      </div>
    </div>
  )
}
