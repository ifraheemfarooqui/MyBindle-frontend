import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'

gsap.registerPlugin(ScrollTrigger)

export default function Footer() {
  const sectionRef = useRef(null)
  const phoneRef   = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.footer__cta-text',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.75, ease: 'power3.out',
          scrollTrigger: { trigger: '.footer__cta-text', start: 'top 85%' }
        }
      )
      gsap.fromTo('.store-btn',
        { opacity: 0, y: 20, scale: 0.9 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.5, stagger: 0.12, ease: 'back.out(1.5)',
          scrollTrigger: { trigger: '.footer__store-btns', start: 'top 88%' }
        }
      )
      gsap.fromTo(phoneRef.current,
        { opacity: 0, y: 60, scale: 0.88 },
        {
          opacity: 1, y: 0, scale: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' }
        }
      )
      /* idle float */
      gsap.to(phoneRef.current, {
        y: -14, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <footer ref={sectionRef} className="footer" id="footer">
      <div className="footer__inner">

        {/* CTA text */}
        <div className="footer__cta-text">
          <h2 className="footer__title">
            Join the Fun – Download<br />MyBindle Now!
          </h2>
          <p className="footer__sub">
            Your Social Network, Your Way. Download MyBindle Now and Be a Part
            of a Community That's Always Evolving!
          </p>

          <div className="footer__store-btns">
            {/* App Store */}
            <a
              href="#"
              className="store-btn"
              onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.06, duration: 0.25 })}
              onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1,    duration: 0.25 })}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div>
                <span className="store-label">Download on the</span>
                <span className="store-name">App Store</span>
              </div>
            </a>

            {/* Google Play */}
            <a
              href="#"
              className="store-btn"
              onMouseEnter={e => gsap.to(e.currentTarget, { scale: 1.06, duration: 0.25 })}
              onMouseLeave={e => gsap.to(e.currentTarget, { scale: 1,    duration: 0.25 })}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="store-icon">
                <path d="M3 20.5v-17c0-.83 1-.95 1.46-.5l14 8.5c.4.24.4.83 0 1.07L4.46 21c-.46.45-1.46.33-1.46-.5zM5 7.07V12h5l-5-4.93zM5 12v4.93L10 12H5zm7.19 0L7.93 16.27 17.38 12l-5.19 0zm0 0l5.19 0L7.93 7.73 12.19 12z"/>
              </svg>
              <div>
                <span className="store-label">Get it on</span>
                <span className="store-name">Google Play</span>
              </div>
            </a>
          </div>
        </div>

        {/* Phone mockup */}
        <div ref={phoneRef} className="footer__phone-wrap">
          <div className="footer-phone">
            <div className="footer-screen">
              <div className="fp-status" />
              <div className="fp-logo">
                <svg width="32" height="32" viewBox="0 0 28 28" fill="none">
                  <rect width="28" height="28" rx="8" fill="white" opacity="0.15"/>
                  <circle cx="14" cy="14" r="6" stroke="white" strokeWidth="2" fill="none"/>
                  <circle cx="14" cy="14" r="2.5" fill="white"/>
                </svg>
              </div>
              <div className="fp-grid">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="fp-thumb" style={{ background: `hsl(${i * 55 + 10},55%,55%)` }} />
                ))}
              </div>
              <div className="fp-stories">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="fp-story" style={{ background: `hsl(${i * 40 + 200},60%,60%)` }} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <p>© {new Date().getFullYear()} MyBindle. All rights reserved.</p>
        <div className="footer__bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </footer>
  )
}
