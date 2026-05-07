import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Testimonials.css'

gsap.registerPlugin(ScrollTrigger)

const ALL_REVIEWS = [
  {
    stars: 5,
    text: 'This platform changed the way I stay in touch with my friends and family. The interface is smooth, and I love how easy it is to share my moments!',
    name: 'Emily R.',
    role: 'Artist',
  },
  {
    stars: 5,
    text: 'Finally, a social network that understands what I need! The privacy features are a game-changer, and I feel safer sharing my life online.',
    name: 'Amit K.',
    role: 'Student',
  },
  {
    stars: 5,
    text: 'I joined just to explore, but now I can\'t imagine my day without it. The real-time chat and engaging communities make every interaction special!',
    name: 'Sophie M.',
    role: 'Freelancer',
  },
  {
    stars: 5,
    text: 'Running my small business has never been easier! This platform helped me connect with customers, promote my products, and grow my brand.',
    name: 'Javier L.',
    role: 'Entrepreneur',
  },
  {
    stars: 5,
    text: 'The perfect blend of fun and functionality! Whether I want to go live, discover trending content, or just catch up with friends, everything is right here!',
    name: 'Lucas T.',
    role: 'Creator',
  },
  {
    stars: 4,
    text: 'I\'ve tried many social platforms, but this one stands out! The experience feels personal, the connections feel real, and every feature just makes sense.',
    name: 'Nora S.',
    role: 'Journalist',
  },
  {
    stars: 5,
    text: 'The platform brings people closer in the best way possible. From beautiful stories to insightful discussions, it truly enriches my daily life.',
    name: 'Priya V.',
    role: 'Designer',
  },
  {
    stars: 5,
    text: 'A social network that actually listens to its users. The design is sleek, the features are smooth, and the community is wonderfully supportive.',
    name: 'Mark D.',
    role: 'Developer',
  },
  {
    stars: 4,
    text: 'MyBindle has completely replaced all my other apps. It\'s the all-in-one platform I didn\'t know I needed. Highly recommend to everyone!',
    name: 'Sara H.',
    role: 'Teacher',
  },
]

const Stars = ({ count }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? 'star filled' : 'star'}>★</span>
    ))}
  </div>
)

export default function Testimonials() {
  const [showAll, setShowAll] = useState(false)
  const sectionRef = useRef(null)
  const gridRef    = useRef(null)

  const visible = showAll ? ALL_REVIEWS : ALL_REVIEWS.slice(0, 6)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.testimonials__header',
        { opacity: 0, y: 40 },
        {
          opacity: 1, y: 0, duration: 0.65, ease: 'power3.out',
          scrollTrigger: { trigger: '.testimonials__header', start: 'top 82%' }
        }
      )
      gsap.fromTo('.review-card',
        { opacity: 0, y: 50, scale: 0.96 },
        {
          opacity: 1, y: 0, scale: 1,
          duration: 0.55, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 80%' }
        }
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  /* Animate newly revealed cards when "See More" clicked */
  const handleSeeMore = () => {
    setShowAll(true)
    setTimeout(() => {
      const newCards = gridRef.current?.querySelectorAll('.review-card:nth-child(n+7)')
      if (newCards?.length) {
        gsap.fromTo(newCards,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, ease: 'power3.out' }
        )
      }
    }, 30)
  }

  const cardHover = (el, entering) => {
    gsap.to(el, {
      y: entering ? -6 : 0,
      boxShadow: entering
        ? '0 12px 36px rgba(249,87,56,0.14)'
        : '0 2px 12px rgba(0,0,0,0.07)',
      duration: 0.3,
    })
  }

  return (
    <section ref={sectionRef} className="testimonials" id="testimonials">
      <div className="testimonials__inner">
        <div className="testimonials__header">
          <h2 className="section-title">What Our Users Say</h2>
        </div>

        <div ref={gridRef} className="testimonials__grid">
          {visible.map((r, i) => (
            <div
              key={i}
              className="review-card"
              onMouseEnter={e => cardHover(e.currentTarget, true)}
              onMouseLeave={e => cardHover(e.currentTarget, false)}
            >
              <Stars count={r.stars} />
              <p className="review-text">"{r.text}"</p>
              <div className="review-author">
                <div
                  className="review-avatar"
                  style={{ background: `hsl(${i * 42 + 10}, 65%, 60%)` }}
                >
                  {r.name.charAt(0)}
                </div>
                <div>
                  <strong className="review-name">{r.name}</strong>
                  <span className="review-role">{r.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="testimonials__more">
            <button className="see-more-btn" onClick={handleSeeMore}>
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  )
}
