import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './HowToInstall.css'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  {
    num: '01',
    title: 'Download',
    desc: 'Open Play Store or App Store',
  },
  {
    num: '02',
    title: 'Install App',
    desc: 'The app will install automatically.',
  },
  {
    num: '03',
    title: 'Ready to Use',
    desc: 'Sign up or log in to start exploring!',
  },
]

export default function HowToInstall() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.how__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.how__header', start: 'top 82%' }
        }
      )

      gsap.fromTo('.how__num-row .step-num',
        { opacity: 0, y: -20 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: '.how__num-row', start: 'top 80%' }
        }
      )

      gsap.fromTo('.how__connector',
        { scaleX: 0 },
        {
          scaleX: 1, duration: 0.9, ease: 'power2.inOut',
          scrollTrigger: { trigger: '.how__num-row', start: 'top 80%' }
        }
      )

      gsap.fromTo('.step-card',
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.18, ease: 'power3.out',
          scrollTrigger: { trigger: '.how__steps', start: 'top 78%' }
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="how" id="how">
      <div className='line'></div>
      <div className="how__inner">
        <div className="how__header">
          <h2 className="section-title">How to Install Our App</h2>
          <p className="section-subtitle">
            Getting started is quick and easy! Follow these simple steps to install and start using MyBindle today.
          </p>
        </div>

        {/* Number row with connector lines */}
        <div className="how__num-row">
          {STEPS.map((s, i) => (
            <>
              <span key={s.num} className={`step-num${i === 0 ? ' step-num--active' : ''}`}>
                {s.num}
              </span>
              {i < STEPS.length - 1 && (
                <div key={`line-${i}`} className="how__connector" />
              )}
            </>
          ))}
        </div>

        {/* Cards row */}
        <div className="how__steps">
          {STEPS.map((s, i) => (
            <div key={i} className={`step-card${i === STEPS.length - 1 ? ' step-card--last' : ''}`}>
              <h3 className="step-title">{s.title}</h3>
              <p className="step-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}