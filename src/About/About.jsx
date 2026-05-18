import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from "./About.module.css"

/* ── 3D decorative icons ── */
const LEFT_ICONS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png',
    delay: 0.1, floatDuration: 6,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png',
    delay: 0.25, floatDuration: 8,
  },
]

const RIGHT_ICONS = [
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png',
    delay: 0.15, floatDuration: 7,
  },
  {
    src: 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png',
    delay: 0.3, floatDuration: 9,
  },
]

const PARAGRAPH =
  "With more than five years of experience in software and website development, I specialize in building modern, user-focused digital solutions that combine performance, functionality, and great design. My focus includes web development, user experience, and creating strong online platforms that help businesses stand out and grow. I enjoy collaborating with ambitious brands and turning ideas into powerful, engaging digital experiences. Let’s build something incredible together!"

/* ── floating icon ── */
function Icon({ src, delay, floatDuration, fromX }) {
  return (
    <motion.div
      className={styles.iconWrap}
      initial={{ opacity: 0, x: fromX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      <motion.img
        src={src}
        alt=""
        aria-hidden="true"
        className={styles.iconImg}
        animate={{
          y: [0, -14, 0],
          rotateY: [0, 10, 0, -10, 0],
          rotateX: [6, 10, 6, 2, 6],
        }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: 'easeInOut',
          delay,
        }}
        loading="lazy"
      />
    </motion.div>
  )
}

/* ── scroll-driven character reveal ── */
function AnimatedText() {
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
        const end   = Math.min((i + 1) / chars.length, 1)
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1])
        return (
          <span key={i} className={styles.charWrap} aria-hidden="true">
            <span className={styles.charGhost}>{char === ' ' ? '\u00A0' : char}</span>
            <motion.span className={styles.charReal} style={{ opacity }}>
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
  const go = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <motion.button
      className={styles.contactBtn}
      onClick={go}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: 0.5 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      Contact Me
    </motion.button>
  )
}

/* ── section ── */
export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className={styles.grid}>

        {/* left icon column */}
        <div className={styles.leftIcons}>
          {LEFT_ICONS.map((icon, i) => (
            <Icon key={i} {...icon} fromX={-80} />
          ))}
        </div>

        {/* center content */}
        <div className={styles.center}>
          <motion.h2
            className={styles.heading}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            About me
          </motion.h2>

          <div className={styles.textGroup}>
            <AnimatedText />
            <ContactButton />
          </div>
        </div>

        {/* right icon column */}
        <div className={styles.rightIcons}>
          {RIGHT_ICONS.map((icon, i) => (
            <Icon key={i} {...icon} fromX={80} />
          ))}
        </div>

      </div>
    </section>
  )
}
