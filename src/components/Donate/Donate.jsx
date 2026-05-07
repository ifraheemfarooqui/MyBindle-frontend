import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Donate.css'

gsap.registerPlugin(ScrollTrigger)

const PAYMENT_METHODS = [
  { label: 'PayPal',            color: '#003087', letter: 'P' },
  { label: 'Bank Transfer',     color: '#2ecc71', letter: '$' },
  { label: 'American Express',  color: '#2196F3', letter: 'AE' },
  { label: 'Apple Pay',         color: '#000',    letter: '' },
  { label: 'Mastercard',        color: '#eb001b', letter: 'MC' },
  { label: 'Visa Card',         color: '#1a1f71', letter: 'VISA' },
]

export default function Donate() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.donate__text',
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.donate__text', start: 'top 80%' }
        }
      )
      gsap.fromTo('.donate__visual',
        { opacity: 0, x: 60, scale: 0.94 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.fromTo('.phone--thanks',
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1, scale: 1, y: 0, duration: 0.65, ease: 'back.out(1.4)', delay: 0.35,
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' }
        }
      )
      gsap.to('.phone--thanks', {
        y: -8, duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1.2
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <div className="donate-wrap">
      <section ref={sectionRef} className="donate" id="donate">
        <div className="donate__inner">

          {/* ── Left ── */}
          <div className="donate__text">
            <h2 className="donate__title">
              Be the Reason<br />Someone Smiles Today!
            </h2>
            <p className="donate__desc">
              Your generosity can change lives every donation brings hope, support, and a brighter
              future. Give today and make a difference!
            </p>
            <button
              className="donate__btn"
              onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.05, duration: 0.2 })}
              onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1.00, duration: 0.2 })}
            >
              Donate Now
            </button>
          </div>

          {/* ── Right — two phones ── */}
          <div className="donate__visual">

            {/* Front-left phone: Payment Methods */}
            <div className="phone phone--pay">
              <div className="phone__notch" />
              <div className="phone__screen">
                {/* navbar */}
                <div className="pscreen__nav">
                  <span className="pscreen__menu">☰</span>
                  <div className="pscreen__logo">
                    <svg viewBox="0 0 40 28" fill="none" width="32">
                      <path d="M20 4L36 14L20 24L4 14Z" fill="#e63e2a"/>
                      <path d="M20 10L30 16L20 22L10 16Z" fill="#ff6b52"/>
                    </svg>
                  </div>
                  <div className="pscreen__avatar" />
                </div>
                {/* back + title */}
                <div className="pscreen__back">
                  <span className="pscreen__chevron">‹</span>
                  <span>Settings</span>
                </div>
                <p className="pscreen__heading">Payment Methods</p>
                {/* grid */}
                <div className="pscreen__grid">
                  {PAYMENT_METHODS.map(m => (
                    <div key={m.label} className="pscreen__method">
                      <div className="pscreen__icon" style={{ background: m.color }}>
                        <span>{m.letter}</span>
                      </div>
                      <span className={`pscreen__name${m.label === 'Apple Pay' ? ' pscreen__name--red' : ''}`}>
                        {m.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Back-right phone: Thank You */}
            <div className="phone phone--thanks">
              <div className="phone__notch" />
              <div className="phone__screen">
                {/* navbar */}
                <div className="pscreen__nav">
                  <span className="pscreen__menu">☰</span>
                  <div className="pscreen__logo">
                    <svg viewBox="0 0 40 28" fill="none" width="32">
                      <path d="M20 4L36 14L20 24L4 14Z" fill="#e63e2a"/>
                      <path d="M20 10L30 16L20 22L10 16Z" fill="#ff6b52"/>
                    </svg>
                  </div>
                  <div className="pscreen__avatar" />
                </div>
                {/* gem heart */}
                <div className="gem-heart">
                  {GEM_POSITIONS.map((g, i) => (
                    <div
                      key={i}
                      className="gem"
                      style={{
                        left: g.x + '%',
                        top: g.y + '%',
                        width: g.s + 'px',
                        height: g.s + 'px',
                        background: g.c,
                        borderRadius: g.shape === 'round' ? '50%' : g.shape === 'rect' ? '3px' : '40% 10%',
                        transform: `rotate(${g.r}deg)`,
                        opacity: 0.92,
                      }}
                    />
                  ))}
                </div>
                {/* thank you text */}
                <div className="thanks-text">
                  <strong>Thank You!</strong>
                  <p><span className="thanks-name">John</span> You Are Very<br />Humble Person!</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}

/* ── Gem heart data ─────────────────────────────────── */
const GEM_POSITIONS = [
  { x: 18, y: 22, s: 16, c: '#e74c3c', shape: 'round',  r: 0   },
  { x: 26, y: 14, s: 14, c: '#e91e63', shape: 'oval',   r: 20  },
  { x: 35, y: 10, s: 18, c: '#9c27b0', shape: 'oval',   r: -15 },
  { x: 45, y: 8,  s: 14, c: '#3f51b5', shape: 'round',  r: 0   },
  { x: 55, y: 10, s: 18, c: '#2196f3', shape: 'oval',   r: 25  },
  { x: 64, y: 14, s: 14, c: '#00bcd4', shape: 'round',  r: 0   },
  { x: 71, y: 22, s: 16, c: '#4caf50', shape: 'oval',   r: -20 },
  { x: 10, y: 34, s: 14, c: '#ff9800', shape: 'round',  r: 0   },
  { x: 20, y: 30, s: 18, c: '#f44336', shape: 'rect',   r: 35  },
  { x: 31, y: 22, s: 16, c: '#e91e63', shape: 'oval',   r: 10  },
  { x: 41, y: 18, s: 20, c: '#ff5722', shape: 'oval',   r: -10 },
  { x: 52, y: 18, s: 16, c: '#673ab7', shape: 'round',  r: 0   },
  { x: 62, y: 22, s: 18, c: '#03a9f4', shape: 'rect',   r: -30 },
  { x: 72, y: 30, s: 14, c: '#8bc34a', shape: 'oval',   r: 15  },
  { x: 79, y: 36, s: 16, c: '#ffeb3b', shape: 'round',  r: 0   },
  { x: 14, y: 46, s: 18, c: '#ff9800', shape: 'oval',   r: -20 },
  { x: 25, y: 40, s: 16, c: '#e91e63', shape: 'rect',   r: 45  },
  { x: 36, y: 34, s: 20, c: '#9c27b0', shape: 'oval',   r: 5   },
  { x: 47, y: 30, s: 22, c: '#f44336', shape: 'round',  r: 0   },
  { x: 58, y: 34, s: 18, c: '#2196f3', shape: 'oval',   r: -5  },
  { x: 68, y: 40, s: 16, c: '#4caf50', shape: 'rect',   r: -40 },
  { x: 77, y: 46, s: 18, c: '#ff5722', shape: 'oval',   r: 20  },
  { x: 20, y: 56, s: 16, c: '#e74c3c', shape: 'round',  r: 0   },
  { x: 31, y: 48, s: 18, c: '#ffeb3b', shape: 'oval',   r: -25 },
  { x: 42, y: 44, s: 20, c: '#00bcd4', shape: 'rect',   r: 30  },
  { x: 53, y: 44, s: 18, c: '#8bc34a', shape: 'oval',   r: -10 },
  { x: 63, y: 48, s: 16, c: '#673ab7', shape: 'round',  r: 0   },
  { x: 72, y: 56, s: 16, c: '#ff9800', shape: 'oval',   r: 15  },
  { x: 27, y: 64, s: 14, c: '#f44336', shape: 'round',  r: 0   },
  { x: 37, y: 58, s: 18, c: '#e91e63', shape: 'oval',   r: -30 },
  { x: 47, y: 56, s: 20, c: '#9c27b0', shape: 'rect',   r: 20  },
  { x: 57, y: 58, s: 16, c: '#2196f3', shape: 'oval',   r: 10  },
  { x: 66, y: 64, s: 14, c: '#4caf50', shape: 'round',  r: 0   },
  { x: 34, y: 72, s: 14, c: '#ff5722', shape: 'oval',   r: -15 },
  { x: 44, y: 68, s: 18, c: '#ffeb3b', shape: 'round',  r: 0   },
  { x: 54, y: 72, s: 14, c: '#03a9f4', shape: 'oval',   r: 25  },
  { x: 41, y: 78, s: 14, c: '#e74c3c', shape: 'round',  r: 0   },
  { x: 50, y: 80, s: 12, c: '#e91e63', shape: 'oval',   r: -10 },
]