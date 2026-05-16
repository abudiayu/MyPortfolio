import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './projucts.module.css'

/* ─── project data ──────────────────────────────────────── */
const PROJECTS = [
  {
    number: '01',
    category: 'Client',
    title: 'Tinabay E-commerce',
    live:   'https://tinabay.netlify.app/',
    github: 'https://tinabay.netlify.app/',
    images: {
      leftTop:    'https://play-lh.googleusercontent.com/vZzAzNNGUTxnNG43TWkzegqARRhJ5InumIRyxLhbB5qDRcJVHDJs1WzTJcs3ESOI1w=w526-h296-rw',
      leftBottom: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '02',
    category: 'Personal',
    title: 'Student Management',
    live:   'https://sms-thumblian.vercel.app/',
    github: 'https://sms-thumblian.vercel.app/',
    images: {
      leftTop:    'https://s3-alpha.figma.com/hub/file/2342803295004297908/da5c9b2e-dde3-483d-9439-00838f82be8f-cover.png',
      leftBottom: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '03',
    category: 'Client',
    title: 'Cafe Delivery',
    live:   'https://ourscafe.netlify.app',
    github: 'https://ourscafe.netlify.app',
    images: {
      leftTop:    'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
      leftBottom: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '04',
    category: 'Personal',
    title: 'Dental Clinic Site',
    live:   'https://dr-mz-clinick.vercel.app/',
    github: 'https://github.com/abudiayu/DR-DentalClinick',
    images: {
      leftTop:    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4w4-UzeaafEZlZYjK7WRW-sZRytZynkUPg&s',
      leftBottom: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiWuMNA_UGs24vmkapw7gn73v3qRpRLDQJg&s',
      right:      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bcf429213688141.69ca92ca6d5f8.png',
    },
  },
  {
    number: '05',
    category: 'Client',
    title: 'Abe Garage',
    live:   'https://garagefrontend-lime.vercel.app/',
    github: 'https://garagefrontend-lime.vercel.app/',
    images: {
      leftTop:    'https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=',
      leftBottom: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '06',
    category: 'Personal',
    title: 'Netflix Clone',
    live:   'https://abudiayu.github.io/netflix/',
    github: 'https://github.com/abudiayu/netflix',
    images: {
      leftTop:    'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      leftBottom: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '07',
    category: 'Client',
    title: 'Barber Shop',
    live:   'https://telwindberber.netlify.app/',
    github: 'https://telwindberber.netlify.app/',
    images: {
      leftTop:    'https://img.freepik.com/premium-vector/classic-barber-shop-banner-template_941802-3639.jpg',
      leftBottom: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '08',
    category: 'Personal',
    title: 'Airbnb Clone',
    live:   'https://babilon-air.netlify.app/',
    github: 'https://babilon-air.netlify.app/',
    images: {
      leftTop:    'https://c8.alamy.com/comp/2M0W154/smartphone-with-logo-of-american-homestay-marketplace-company-airbnb-inc-on-screen-in-front-of-business-website-focus-on-right-of-phone-display-2M0W154.jpg',
      leftBottom: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      right:      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=1200&fit=crop',
    },
  },
]

const TOTAL = PROJECTS.length

/* ─── single card ───────────────────────────────────────── */
function ProjectCard({ project, index, containerRef }) {
  const targetScale = 1 - (TOTAL - 1 - index) * 0.03

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  /* each card starts scaling at its own scroll band */
  const scaleStart = index / TOTAL
  const scaleEnd   = (index + 1) / TOTAL
  const scale = useTransform(scrollYProgress, [scaleStart, scaleEnd], [1, targetScale])

  return (
    <div
      className={styles.cardOuter}
      style={{ top: `calc(96px + ${index * 28}px)` }}
    >
      <motion.div
        className={styles.card}
        style={{ scale, transformOrigin: 'top center' }}
      >
        {/* ── top row ── */}
        <div className={styles.topRow}>
          <span className={styles.projectNumber}>{project.number}</span>

          <div className={styles.titleBlock}>
            <span className={styles.category}>{project.category}</span>
            <h3 className={styles.projectTitle}>{project.title}</h3>
            {/* visible only on very small screens where the pill button is hidden */}
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.liveBtnMobile}
            >
              Live ↗
            </a>
          </div>

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.liveBtn}
          >
            Live Project
          </a>
        </div>

        {/* ── action buttons ── */}
        <div className={styles.btnRow}>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnSee}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            See Project
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.btnGithub}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
            GitHub
          </a>
        </div>

        {/* ── image grid ── */}
        <div className={styles.imageGrid}>
          {/* left col — 2 stacked images */}
          <div className={styles.leftCol}>
            <img
              src={project.images.leftTop}
              alt={`${project.title} preview 1`}
              className={`${styles.img} ${styles.imgLeftTop}`}
              loading="lazy"
            />
            <img
              src={project.images.leftBottom}
              alt={`${project.title} preview 2`}
              className={`${styles.img} ${styles.imgLeftBottom}`}
              loading="lazy"
            />
          </div>

          {/* right col — 1 tall image */}
          <div className={styles.rightCol}>
            <img
              src={project.images.right}
              alt={`${project.title} preview 3`}
              className={`${styles.img} ${styles.imgRight}`}
              loading="lazy"
            />
          </div>
        </div>
      </motion.div>
    </div>
  )
}

/* ─── section ───────────────────────────────────────────── */
export default function Projucts() {
  const containerRef = useRef(null)

  return (
    <section id="projects" className={styles.section}>
      {/* heading */}
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Project</h2>
      </div>

      {/* scroll container — tall enough for stacking effect */}
      <div
        ref={containerRef}
        className={styles.stackContainer}
        style={{ height: `${TOTAL * 100}vh` }}
      >
        {PROJECTS.map((project, i) => (
          <ProjectCard
            key={project.number}
            project={project}
            index={i}
            containerRef={containerRef}
          />
        ))}
      </div>
    </section>
  )
}
