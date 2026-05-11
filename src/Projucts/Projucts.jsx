import { useState, useRef, useEffect, useCallback } from 'react'
import styles from './projucts.module.css'

/* ─── data ──────────────────────────────────────────────── */
const PROJECTS = [
  {
    id: 1,
    title: 'Tinabay E-commerce',
    description: 'Full-featured e-commerce platform with shopping cart and checkout functionality.',
    tech: ['React', 'JavaScript', 'SQL DB', 'API'],
    live: 'https://tinabay.netlify.app/',
    image: 'https://play-lh.googleusercontent.com/vZzAzNNGUTxnNG43TWkzegqARRhJ5InumIRyxLhbB5qDRcJVHDJs1WzTJcs3ESOI1w=w526-h296-rw',
    color: '#2b2b2b',
  },
  {
    id: 2,
    title: 'Student Management System',
    description: 'Student management system for a private academy with full admin controls.',
    tech: ['JavaScript', 'Next.js', 'Node.js', 'Tailwind'],
    live: 'https://sms-thumblian.vercel.app/',
    image: 'https://s3-alpha.figma.com/hub/file/2342803295004297908/da5c9b2e-dde3-483d-9439-00838f82be8f-cover.png',
    color: '#1a3a2a',
  },
  {
    id: 3,
    title: 'Cafe Delivery',
    description: 'Modern cafe platform with menu browsing and order management.',
    tech: ['React', 'Node.js', 'MongoDB'],
    live: 'https://ourscafe.netlify.app',
    image: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
    color: '#1a2a3a',
  },
  {
    id: 4,
    title: 'Interactive Game',
    description: 'Browser-based snake game with smooth animations and gameplay.',
    tech: ['JavaScript', 'Canvas', 'HTML5'],
    live: 'https://github.com/abudiayu/snakeGame',
    image: 'https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=600&fit=crop',
    color: '#0f0f0f',
  },
  {
    id: 5,
    title: 'Abe Garage',
    description: 'Modern garage management app with smooth animations and responsive design.',
    tech: ['React', 'CSS Modules', 'Vite'],
    live: 'https://garagefrontend-lime.vercel.app/',
    image: 'https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=',
    color: '#2a1a1a',
  },
  {
    id: 6,
    title: 'Netflix Clone',
    description: 'Streaming platform interface with movie browsing and categories.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    live: 'https://abudiayu.github.io/netflix/',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
    color: '#1a0a0a',
  },
  {
    id: 7,
    title: 'Airbnb Clone',
    description: 'Travel booking platform with room listings and reservation flow.',
    tech: ['JSX', 'Tailwind', 'JavaScript'],
    live: 'https://babilon-air.netlify.app/',
    image: 'https://c8.alamy.com/comp/2M0W154/smartphone-with-logo-of-american-homestay-marketplace-company-airbnb-inc-on-screen-in-front-of-business-website-focus-on-right-of-phone-display-2M0W154.jpg',
    color: '#2a1a2a',
  },
  {
    id: 8,
    title: 'Barber Shop',
    description: 'Barbershop landing page with stylish and attractive hair style showcase.',
    tech: ['JSX', 'Tailwind', 'JavaScript'],
    live: 'https://telwindberber.netlify.app/',
    image: 'https://img.freepik.com/premium-vector/classic-barber-shop-banner-template_941802-3639.jpg',
    color: '#1a1a2a',
  },
]

const VISIBLE_BEHIND = 3
const FAN_X     = 42
const FAN_Y     = 30
const FAN_SCALE = 0.06
const FAN_ALPHA = 0.15
const COOLDOWN  = 600 // ms between scroll-triggered advances

function IconExternal() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  )
}

export default function Projucts() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animating, setAnimating] = useState(false)
  const [exitDir,   setExitDir]   = useState(null)
  const sectionRef  = useRef(null)
  const lastTime    = useRef(0)
  const touchStartY = useRef(null)

  /* ── transition helper ──────────────────────────────────── */
  const goTo = useCallback((newIdx, dir) => {
    if (animating) return
    if (newIdx < 0 || newIdx >= PROJECTS.length) return
    setExitDir(dir)
    setAnimating(true)
    setTimeout(() => {
      setActiveIdx(newIdx)
      setExitDir(null)
      setAnimating(false)
    }, 520)
  }, [animating])

  const next = useCallback(() => goTo(activeIdx + 1, 'next'), [activeIdx, goTo])
  const prev = useCallback(() => goTo(activeIdx - 1, 'prev'), [activeIdx, goTo])

  /* ── wheel: intercept only when section is centred in view ─ */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const onWheel = (e) => {
      const rect = el.getBoundingClientRect()
      const inView = rect.top < window.innerHeight * 0.5 && rect.bottom > window.innerHeight * 0.5

      if (!inView) return

      const now = Date.now()
      if (now - lastTime.current < COOLDOWN) {
        // section is active — eat the event so page doesn't scroll
        e.preventDefault()
        return
      }

      const goingDown = e.deltaY > 0

      // if we're at the edges, let the page scroll naturally
      if (goingDown && activeIdx === PROJECTS.length - 1) return
      if (!goingDown && activeIdx === 0) return

      e.preventDefault()
      lastTime.current = now
      if (goingDown) next()
      else prev()
    }

    // must be non-passive to call preventDefault
    el.addEventListener('wheel', onWheel, { passive: false })
    return () => el.removeEventListener('wheel', onWheel)
  }, [activeIdx, next, prev])

  /* ── touch swipe ────────────────────────────────────────── */
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const onTouchStart = (e) => { touchStartY.current = e.touches[0].clientY }
    const onTouchEnd   = (e) => {
      if (touchStartY.current === null) return
      const delta = touchStartY.current - e.changedTouches[0].clientY
      touchStartY.current = null
      if (Math.abs(delta) < 40) return
      if (delta > 0) next()
      else prev()
    }

    el.addEventListener('touchstart', onTouchStart, { passive: true })
    el.addEventListener('touchend',   onTouchEnd,   { passive: true })
    return () => {
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchend',   onTouchEnd)
    }
  }, [next, prev])

  /* ── drag (mouse) ───────────────────────────────────────── */
  const dragStartX = useRef(null)
  const onPointerDown = (e) => { dragStartX.current = e.clientX }
  const onPointerUp   = (e) => {
    if (dragStartX.current === null) return
    const delta = e.clientX - dragStartX.current
    dragStartX.current = null
    if (delta < -50) next()
    else if (delta > 50) prev()
  }

  /* ── build visible stack ────────────────────────────────── */
  const stackIndices = Array.from({ length: VISIBLE_BEHIND + 1 }, (_, i) =>
    Math.min(activeIdx + i, PROJECTS.length - 1)
  )

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={styles.inner}>

        {/* ── left col ── */}
        <div className={styles.leftCol}>
          <span className={styles.eyebrow}>Featured Projects</span>
          <h2 className={styles.sectionTitle}>What I<br />Build</h2>
          <p className={styles.sectionSub}>
            Scroll inside this section to explore projects.
          </p>

          <div className={styles.counterRow}>
            <span className={styles.counterCurrent}>
              {String(activeIdx + 1).padStart(2, '0')}
            </span>
            <span className={styles.counterSep} />
            <span className={styles.counterTotal}>
              {String(PROJECTS.length).padStart(2, '0')}
            </span>
          </div>

          <div className={styles.navBtns}>
            <button className={styles.navBtn} onClick={prev}
              disabled={animating || activeIdx === 0} aria-label="Previous project">←</button>
            <button className={styles.navBtn} onClick={next}
              disabled={animating || activeIdx === PROJECTS.length - 1} aria-label="Next project">→</button>
          </div>

          <div className={styles.dotTrack} aria-label="Project navigation">
            {PROJECTS.map((_, i) => (
              <button
                key={i}
                className={`${styles.dot} ${i === activeIdx ? styles.dotActive : ''}`}
                onClick={() => goTo(i, i > activeIdx ? 'next' : 'prev')}
                aria-label={`Go to project ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── right col: fan stack ── */}
        <div className={styles.rightCol}>
          <div
            className={styles.arena}
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {[...stackIndices].reverse().map((projIdx, rev) => {
              const stackPos = stackIndices.length - 1 - rev
              const project  = PROJECTS[projIdx]
              const isTop    = stackPos === 0

              const offsetX = stackPos * FAN_X
              const offsetY = stackPos * FAN_Y
              const scale   = 1 - stackPos * FAN_SCALE
              const opacity = 1 - stackPos * FAN_ALPHA

              const isExiting  = isTop && exitDir === 'next'
              const isEntering = isTop && exitDir === 'prev'

              return (
                <div
                  key={`${projIdx}-${stackPos}`}
                  className={[
                    styles.cardSlot,
                    isTop       ? styles.cardSlotTop   : '',
                    isExiting   ? styles.cardExitNext  : '',
                    isEntering  ? styles.cardEnterPrev : '',
                  ].join(' ')}
                  style={{
                    '--ox': `${offsetX}px`,
                    '--oy': `${offsetY}px`,
                    '--sc': scale,
                    '--op': opacity,
                    zIndex: VISIBLE_BEHIND + 1 - stackPos,
                  }}
                >
                  <div
                    className={`${styles.card} ${isTop ? styles.cardTop : styles.cardBehind}`}
                    style={{ '--bg': project.color }}
                  >
                    {isTop ? (
                      <div className={styles.cardInner}>
                        <div className={styles.cardLeft}>
                          <div className={styles.cardMeta}>
                            <span className={styles.cardNum}>
                              {String(projIdx + 1).padStart(2, '0')}.
                            </span>
                            <span className={styles.cardBadge}>Project</span>
                          </div>
                          <h3 className={styles.cardTitle}>{project.title}</h3>
                          <p className={styles.cardDesc}>{project.description}</p>
                          <div className={styles.tags}>
                            {project.tech.map((t, i) => (
                              <span key={i} className={styles.tag}>{t}</span>
                            ))}
                          </div>
                          <a href={project.live} target="_blank"
                            rel="noopener noreferrer" className={styles.cta}>
                            <IconExternal />
                            VIEW CASE STUDY
                          </a>
                        </div>
                        <div className={styles.cardRight}>
                          <img src={project.image} alt={project.title}
                            className={styles.cardImg} loading="lazy" />
                          <div className={styles.imgOverlay} />
                        </div>
                      </div>
                    ) : (
                      <div className={styles.cardPeek}>
                        <img src={project.image} alt={project.title}
                          className={styles.peekImg} loading="lazy" />
                        <div className={styles.peekOverlay} />
                        <span className={styles.peekTitle}>{project.title}</span>
                        <div className={styles.peekTags}>
                          {project.tech.slice(0, 2).map((t, i) => (
                            <span key={i} className={styles.tag}>{t}</span>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )
            })}

            {/* FAB */}
            <button className={styles.fab} onClick={next}
              disabled={animating || activeIdx === PROJECTS.length - 1}
              aria-label="Next project">
              NEXT<br />PROJECT →
            </button>
          </div>

          <p className={styles.hint} aria-hidden="true">↕ scroll to navigate</p>
        </div>

      </div>
    </section>
  )
}
