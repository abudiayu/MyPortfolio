import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './about.module.css'

/* ── decorative 3D objects ── */
const OBJECTS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    className: styles.objTopLeft,
    float: { y: [-14, 0, -14], rotate: [-6, 2, -6], duration: 7 },
    enter: { x: -100, opacity: 0 },
    glow: 'rgba(80,140,255,0.55)',
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    className: styles.objBottomLeft,
    float: { y: [0, -18, 0], rotate: [4, -3, 4], duration: 9 },
    enter: { x: -100, opacity: 0 },
    glow: 'rgba(60,200,180,0.45)',
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    className: styles.objTopRight,
    float: { y: [-10, 8, -10], rotate: [5, -4, 5], duration: 8 },
    enter: { x: 100, opacity: 0 },
    glow: 'rgba(180,80,255,0.5)',
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    className: styles.objBottomRight,
    float: { y: [0, -12, 0], rotate: [-3, 5, -3], duration: 11 },
    enter: { x: 100, opacity: 0 },
    glow: 'rgba(255,120,60,0.45)',
  },
]

const PARAGRAPH =
  "With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"

/* ── parallax mouse tracking ── */
function useMouseParallax(strength = 0.025) {
  const [offset, setOffset] = useState({ x: 0, y: 0 })
  useEffect(() => {
    const onMove = (e) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      setOffset({
        x: (e.clientX - cx) * strength,
        y: (e.clientY - cy) * strength,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [strength])
  return offset
}

/* ── floating 3D object ── */
function FloatObject({ obj, parallaxOffset, parallaxStrength = 1 }) {
  return (
    <motion.div
      className={`${styles.objWrap} ${obj.className}`}
      initial={obj.enter}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      animate={{
        x: parallaxOffset.x * parallaxStrength,
        y: parallaxOffset.y * parallaxStrength,
      }}
    >
      {/* glow halo behind the object */}
      <div
        className={styles.objGlow}
        style={{ background: `radial-gradient(circle, ${obj.glow} 0%, transparent 70%)` }}
      />
      <motion.img
        src={obj.src}
        alt=""
        aria-hidden="true"
        className={styles.objImg}
        animate={{
          y: obj.float.y,
          rotate: obj.float.rotate,
        }}
        transition={{
          duration: obj.float.duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        loading="lazy"
      />
    </motion.div>
  )
}

/* ── character scroll reveal ── */
function AnimatedParagraph() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.8', 'end 0.2'],
  })
  const chars = PARAGRAPH.split('')
  return (
    <p ref={ref} className={styles.paragraph} aria-label={PARAGRAPH}>
      {chars.map((char, i) => {
        const start = i / chars.length
        const end   = (i + 1) / chars.length
        const opacity = useTransform(scrollYProgress, [start, end], [0.15, 1])
        return (
          <span key={i} className={styles.charWrap} aria-hidden="true">
            <span className={styles.charPlaceholder}>{char === ' ' ? '\u00A0' : char}</span>
            <motion.span className={styles.charAnimated} style={{ opacity }}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          </span>
        )
      })}
    </p>
  )
}

/* ── contact button ── */
function ContactButton() {
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.button
      className={styles.contactBtn}
      onClick={scrollToContact}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.4 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      Contact Me
    </motion.button>
  )
}

/* ── section ── */
export default function About() {
  const mouse = useMouseParallax(0.022)

  return (
    <section id="about" className={styles.section}>

      {/* ambient background glow blobs */}
      <div className={styles.blobPurple} aria-hidden="true" />
      <div className={styles.blobBlue}   aria-hidden="true" />

      {/* floating 3D corner objects */}
      {OBJECTS.map((obj, i) => (
        <FloatObject
          key={i}
          obj={obj}
          parallaxOffset={mouse}
          parallaxStrength={i % 2 === 0 ? 1.4 : 0.8}
        />
      ))}

      {/* main content */}
      <div className={styles.content}>

        {/* floating 3D profile */}
        <motion.div
          className={styles.profileFloat}
          initial={{ opacity: 0, y: 60, scale: 0.85 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src="/img/my 3D img.png"
            alt="Profile"
            className={styles.profileImg}
            animate={{ y: [0, -12, 0], rotateY: [0, 4, 0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className={styles.profileGlow} aria-hidden="true" />
          <div className={styles.profileRing} aria-hidden="true" />
        </motion.div>

        {/* heading */}
        <motion.h2
          className={styles.heading}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          About me
        </motion.h2>

        {/* text + button */}
        <div className={styles.textBlock}>
          <AnimatedParagraph />
          <ContactButton />
        </div>

      </div>
    </section>
  )
}
