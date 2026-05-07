import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './WhySection.css'
import phoneBack from 'src\assets\phone 2 back.png'
import phoneFront from 'src\assets\phone 2 front.png'

gsap.registerPlugin(ScrollTrigger)

const POINTS = [
  {
    icon: '🎬',
    title: 'Short Videos & Reels',
    desc: 'Share engaging, bite-sized content that keeps everyone entertained.',
  },
  {
    icon: '🔔',
    title: 'Smart Notifications',
    desc: 'Stay updated on what matters without the noise.',
  },
  {
    icon: '👥',
    title: 'Interest-Based Communities',
    desc: 'Join groups and discussions that match your passion.',
  },
]

export default function WhySection() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.why__mockup',
        { opacity: 0, x: -60, scale: 0.94 },
        {
          opacity: 1, x: 0, scale: 1, duration: 0.85, ease: 'power3.out',
          scrollTrigger: { trigger: '.why__mockup', start: 'top 78%' }
        }
      )
      gsap.fromTo('.why__heading',
        { opacity: 0, y: 36 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.why__heading', start: 'top 80%' }
        }
      )
      gsap.fromTo('.why__point',
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.55, stagger: 0.14, ease: 'power3.out',
          scrollTrigger: { trigger: '.why__points', start: 'top 80%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="why" id="why">
      <div className="why__inner">

        {/* Phone mockups */}
        <div className="why__mockup">
          <div className="why-phone why-phone--back">
           <img src={phoneBack} alt="" />
          </div>
          <div className="why-phone why-phone--front">
           <img src={phoneFront} alt="" />
          </div>

          {/* Red circle accent */}
          <div className="why__circle" />
        </div>

        {/* Text */}
        <div className="why__content">
          <h2 className="why__heading section-title">
            Where Every Click Sparks a Connection!
          </h2>
          <p className="why__sub">
            A small act of kindness today can create a lifetime of impact for someone in
            need. Give from the heart and change a life!
          </p>

          <ul className="why__points">
            {POINTS.map((p, i) => (
              <li key={i} className="why__point">
                <span className="why__point-icon">{p.icon}</span>
                <div>
                  <strong>{p.title}</strong>
                  <p>{p.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  )
}
