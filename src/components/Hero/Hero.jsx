import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import './Hero.css'
import phone from '../../assets/Phone1.png'
import logo from '../../assets/logo.png'

export default function Hero() {
  const sectionRef = useRef(null)
  const textRef    = useRef(null)
  const badge1Ref  = useRef(null)
  const badge2Ref  = useRef(null)
  const phoneRef   = useRef(null)
  const btnRef     = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {

      /* Main text entrance */
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' }, delay: 0.4 })
      tl.fromTo('.hero__eyebrow',
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.5 }
      )
      .fromTo('.hero__title',
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.7 },
        '-=0.25'
      )
      .fromTo('.hero__desc',
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 0.55 },
        '-=0.35'
      )
      .fromTo(btnRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 0.45 },
        '-=0.2'
      )
      .fromTo(phoneRef.current,
        { opacity: 0, x: 60, scale: 0.92 },
        { opacity: 1, x: 0,  scale: 1,   duration: 0.85, ease: 'power4.out' },
        '-=0.55'
      )
      .fromTo([badge1Ref.current, badge2Ref.current],
        { opacity: 0, scale: 0.7, y: 20 },
        { opacity: 1, scale: 1,   y: 0,  duration: 0.5, stagger: 0.2 },
        '-=0.4'
      )

      /* Floating badges loop */
      gsap.to(badge1Ref.current, {
        y: -10, duration: 2.2, repeat: -1, yoyo: true, ease: 'sine.inOut'
      })
      gsap.to(badge2Ref.current, {
        y: 10,  duration: 2.6, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 0.5
      })

      /* Phone gentle sway */
      gsap.to(phoneRef.current, {
        y: -12, duration: 3.5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="hero" id="hero">
      <div className='hero_logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className="hero__inner">

        
        <div ref={textRef} className="hero__left">

          <h1 className="hero__title">
            Stay Connected<br />
            Stay Social<br />
            Stay You!
          </h1>

          <p className="hero__desc">
            A place where friendships grow, communities thrive, and moments turn
            into unforgettable experiences. Whether you're looking to reconnect with
            old friends, build new relationships, or share what matters most to you —
            MyBindle is your home on the internet.
          </p>

          <a href="#features" ref={btnRef} className="hero__btn">
            Get Started
          </a>
        </div>

        {/* ── Right column — Phone mockup ──────────── */}
        <div className="hero__right">
          <div ref={phoneRef} className="phone-wrap">

            {/* Main phone */}
            <div className="phone phone--main">
            <img src={phone} alt="phone" />
            </div>

            {/* Floating badge 1 */}
            <div ref={badge1Ref} className="floating-badge badge--top">
              <span className="badge-text">🔥Seamless Connections</span>
            </div>

            {/* Floating badge 2 */}
            <div ref={badge2Ref} className="floating-badge badge--bottom">
              <span className="badge-text">🌎Discover &amp; Explore</span>
            </div>
          </div>
        </div>

      </div>


    </section>
  )
}
