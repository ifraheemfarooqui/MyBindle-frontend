import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import './Navbar.css'

const LINKS = [
  { label: 'Features',    href: '#features'     },
  { label: 'Why Us',      href: '#why'          },
  { label: 'How It Works',href: '#how'          },
  { label: 'Reviews',     href: '#testimonials' },
]

export default function Navbar() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  const navRef      = useRef(null)
  const logoRef     = useRef(null)
  const linksRef    = useRef([])
  const ctaRef      = useRef(null)
  const mobileRef   = useRef(null)
  const burgerRef   = useRef(null)

  /* entrance */
  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -70, opacity: 0 },
      { y: 0,   opacity: 1, duration: 0.7, ease: 'power3.out', delay: 0.1 }
    )
    gsap.fromTo(linksRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0,  duration: 0.5, stagger: 0.07, delay: 0.45, ease: 'power2.out' }
    )
  }, [])

  /* scroll shadow */
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  /* mobile menu */
  useEffect(() => {
    const el = mobileRef.current
    if (!el) return
    if (menuOpen) {
      el.style.display = 'flex'
      gsap.fromTo(el,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out' }
      )
    } else {
      gsap.to(el, { opacity: 0, y: -8, duration: 0.22, ease: 'power2.in',
        onComplete: () => { el.style.display = 'none' }
      })
    }
  }, [menuOpen])

  const toggleBurger = () => {
    setMenuOpen(p => !p)
    const bars = burgerRef.current.querySelectorAll('span')
    if (!menuOpen) {
      gsap.to(bars[0], { rotate: 45,  y: 7, duration: 0.28 })
      gsap.to(bars[1], { opacity: 0,        duration: 0.18 })
      gsap.to(bars[2], { rotate: -45, y:-7, duration: 0.28 })
    } else {
      gsap.to(bars[0], { rotate: 0, y: 0, duration: 0.28 })
      gsap.to(bars[1], { opacity: 1,       duration: 0.18 })
      gsap.to(bars[2], { rotate: 0, y: 0, duration: 0.28 })
    }
  }

  return (
    <header ref={navRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__inner">

        {/* Logo */}
        <a href="#" ref={logoRef} className="navbar__logo">
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <rect width="28" height="28" rx="8" fill="white"/>
            <path d="M7 14C7 10.13 10.13 7 14 7V7C17.87 7 21 10.13 21 14V14C21 17.87 17.87 21 14 21V21C10.13 21 7 17.87 7 14V14Z" fill="#F95738"/>
            <circle cx="14" cy="14" r="3.5" fill="white"/>
          </svg>
          <span>Mybindle</span>
        </a>

        {/* Desktop links */}
        <nav className="navbar__links">
          {LINKS.map(({ label, href }, i) => (
            <a
              key={href}
              href={href}
              ref={el => (linksRef.current[i] = el)}
              className="nav-link"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a href="#footer" ref={ctaRef} className="navbar__cta">
          Get Started
        </a>

        {/* Hamburger */}
        <button className="hamburger" ref={burgerRef} onClick={toggleBurger} aria-label="Menu">
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div ref={mobileRef} className="mobile-menu" style={{ display: 'none' }}>
        {LINKS.map(({ label, href }) => (
          <a key={href} href={href} className="mobile-link" onClick={() => setMenuOpen(false)}>
            {label}
          </a>
        ))}
        <a href="#footer" className="mobile-link mobile-cta" onClick={() => setMenuOpen(false)}>
          Get Started
        </a>
      </div>
    </header>
  )
}
