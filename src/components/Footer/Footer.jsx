import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Footer.css'
import playStore from 'src\assets\google-play 1.png'
import appStore from 'src\assets\apple-logo.png'

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
             <img className='store-icon' src={appStore} alt="" />
              <div>
                <span className="store-label">Download on the</span><br />
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
             <img className='store-icon' src={playStore} alt="" />
              <div>
                <span className="store-label">Get it on</span><br />
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
