import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Features.css'

gsap.registerPlugin(ScrollTrigger)

const FEATURES = [
  {
    icon: '🔥 ',
    title: 'Seamless Connections',
    desc: 'Stay in touch with friends, family and like-minded people with just a tap.',
  },
  {
    icon: '📸',
    title: 'Share Your Story',
    desc: 'Upload photos, videos, and updates to let the world know what\'s happening in your life.',
  },
  {
    icon: '💬 ',
    title: 'Real-Time Chat',
    desc: 'Whether it\'s a DM or a group conversation, connect instantly with smooth, lightning-fast messaging.',
  },
  {
    icon: '🔒',
    title: 'Privacy First',
    desc: 'Your data, your control. We protect your privacy with world-class security.',
  },
  {
    icon: '🌎',
    title: 'Discover & Explore',
    desc: 'Find trending content, join communities, and follow pages that match your interests.',
  },
  {
    icon: '💼',
    title: 'Grow Your Business',
    desc: 'Use our platform to market your brand, connect with customers, and build meaningful relationships.',
  },
]

export default function Features() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.features__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features__header',
            start: 'top 82%',
          }
        }
      )

      gsap.fromTo('.feature-card',
        { opacity: 0, y: 50, scale: 0.95 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: {
            trigger: '.features__grid',
            start: 'top 80%',
          }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleCardHover = (el, entering) => {
    gsap.to(el, {
      y:          entering ? -8 : 0,
      boxShadow:  entering
        ? '0 14px 40px rgba(249,87,56,0.18)'
        : '0 2px 12px rgba(0,0,0,0.07)',
      duration: 0.3,
      ease: 'power2.out',
    })
    gsap.to(el.querySelector('.feature-icon'), {
      scale: entering ? 1.2 : 1,
      duration: 0.3,
      ease: 'back.out(1.7)',
    })
  }

  return (
    <section ref={sectionRef} className="features" id="features">
      <div className='line'></div>
      <div className="features__inner">
        <div className="features__header">
          <h2 className="section-title">Features That Keep You Hooked!</h2>
          <p className="section-subtitle">Meet, Chat, Share – Anytime, Anywhere!</p>
        </div>

        <div className="features__grid">
          {FEATURES.map((f, i) => (
            <div
              key={i}
              className="feature-card"
              onMouseEnter={e => handleCardHover(e.currentTarget, true)}
              onMouseLeave={e => handleCardHover(e.currentTarget, false)}
            >
              <h3 className="feature-title">{f.icon}{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
