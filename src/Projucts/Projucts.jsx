import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import styles from './projucts.module.css'

const FALLBACK_IMG =
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop'

/* ─── project data ──────────────────────────────────────── */
const PROJECTS = [
  {
    number: '01',
    category: 'Client',
    title: 'Tinabay E-commerce',
    live: 'https://tinabay.netlify.app/',
    github: 'https://tinabay.netlify.app/',
    description:
      'An online store built for a client with a clean product catalog, cart and a smooth checkout flow, designed to feel fast and trustworthy on both desktop and mobile.',
    stack: ['React', 'Responsive UI', 'Netlify'],
    role: 'Creativity & Full-Stack development',
    images: {
      leftTop: 'https://play-lh.googleusercontent.com/vZzAzNNGUTxnNG43TWkzegqARRhJ5InumIRyxLhbB5qDRcJVHDJs1WzTJcs3ESOI1w=w526-h296-rw',
      leftBottom: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '02',
    category: 'Personal',
    title: 'Student Management',
    live: 'https://hidaya-project.vercel.app/',
    github: 'https://github.com/abudiayu/Hidaya_project',
    description:
      'The school management system behind Hidaya Islamic Academy. Students, classes and records live in one dashboard, so administrators spend less time on paperwork. It supports English and Amharic.',
    stack: ['React (Vite)', 'Supabase', 'React Router', 'EN / AM'],
    role: 'Full-stack development with chatbot',
    images: {
      leftTop: 'https://s3-alpha.figma.com/hub/file/2342803295004297908/da5c9b2e-dde3-483d-9439-00838f82be8f-cover.png',
      leftBottom: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '03',
    category: 'Client',
    title: 'Cafe Delivery',
    live: 'https://ourscafe.netlify.app',
    github: 'https://ourscafe.netlify.app',
    description:
      'A warm, appetizing website for a cafe where customers can browse the menu and order for delivery in a few taps.',
    stack: ['React', 'Ordering UI', 'Netlify'],
    role: 'Creativity & Full-Stack development',
    images: {
      leftTop: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop',
      leftBottom: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '04',
    category: 'Personal',
    title: 'Dental Clinic Site',
    live: 'https://dental-clinick-kamisse.vercel.app/',
    github: 'https://github.com/abudiayu/Dental',
    description:
      'A modern website for a dental clinic with services, appointment information and a staff login. It comes with a language switcher so patients can read it in their own language.',
    stack: ['React + Vite', 'TypeScript', 'Express', 'Supabase'],
    role: 'Full-stack development',
    images: {
      leftTop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv4w4-UzeaafEZlZYjK7WRW-sZRytZynkUPg&s',
      leftBottom: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFiWuMNA_UGs24vmkapw7gn73v3qRpRLDQJg&s',
      right: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/bcf429213688141.69ca92ca6d5f8.png',
    },
  },
  {
    number: '05',
    category: 'Client',
    title: 'Abe Garage',
    live: 'https://garagefrontend-lime.vercel.app/',
    github: 'https://garagefrontend-lime.vercel.app/',
    description:
      'A bold, trustworthy website for an auto garage that presents its services clearly and makes it easy for customers to get in touch.',
    stack: ['React', 'Responsive UI', 'Vercel'],
    role: 'Creativity & Full-Stack development',
    images: {
      leftTop: 'https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=',
      leftBottom: 'https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1625047509248-ec889cbff17f?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '06',
    category: 'Personal',
    title: 'Netflix',
    live: 'https://abudiayu.github.io/netflix/',
    github: 'https://github.com/abudiayu/netflix',
    description:
      'A Netflix-style streaming interface built to practice layout, carousels and pixel-accurate UI work.',
    stack: ['HTML', 'CSS', 'JavaScript'],
    role: 'Clone & Full-Stack development',
    images: {
      leftTop: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      leftBottom: 'https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '07',
    category: 'Client',
    title: 'Barber Shop',
    live: 'https://telwindberber.netlify.app/',
    github: 'https://telwindberber.netlify.app/',
    description:
      'A sharp, stylish website for a barber shop that shows off services and the shop atmosphere, and makes booking a visit simple.',
    stack: ['React', 'Booking UI', 'Netlify'],
    role: 'Creativity & Full-Stack development',
    images: {
      leftTop: 'https://img.freepik.com/premium-vector/classic-barber-shop-banner-template_941802-3639.jpg',
      leftBottom: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=800&h=600&fit=crop',
      right: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=800&h=1200&fit=crop',
    },
  },
  {
    number: '08',
    category: 'Personal',
    title: 'Airbnb',
    live: 'https://babilon-air.netlify.app/',
    github: 'https://babilon-air.netlify.app/',
    description:
      'A stay-booking interface inspired by Airbnb, with listing cards, search and a clean, photo-first layout.',
    stack: ['React', 'Listings UI', 'Netlify'],
    role: 'Clone & Full-Stack development',
    images: {
      leftTop: 'https://c8.alamy.com/comp/2M0W154/smartphone-with-logo-of-american-homestay-marketplace-company-airbnb-inc-on-screen-in-front-of-business-website-focus-on-right-of-phone-display-2M0W154.jpg',
      leftBottom: 'https://cdn.dribbble.com/userupload/26284611/file/original-9f4a1ae268e9fe9a835fff727dd8c423.jpg?format=webp&resize=400x300&vertical=center',
      right: 'https://screenshots.webflow.com/sites/6214ab9c9c02f62db5a16765/20220225040706_52b2d4264c949a71f2e1242205922d00.png',
    },
  },
  {
    number: '09',
    category: 'Private System',
    title: 'Pharmacy MS',
    live: 'https://babilon-air.netlify.app/',
    github: 'https://babilon-air.netlify.app/',
    description:
      'A private pharmacy management system for tracking stock, sales and daily operations. The code and live demo are not public.',
    stack: ['Inventory', 'Sales', 'Role-based access'],
    role: 'Full-stack development',
    images: {
      leftTop: 'https://i.pinimg.com/736x/67/01/ed/6701ed0883e4037a0632e927608e825d.jpg',
      leftBottom: 'https://i.pinimg.com/736x/69/4e/46/694e4695fb4c2c8f8690216d45da9d42.jpg',
      right: 'https://i.pinimg.com/1200x/5f/6f/d4/5f6fd46562acfa141249b2d92cb14f62.jpg',
    },
  },
  {
    number: '10',
    category: 'Information System',
    title: 'Wollo University Information System',
    live: 'https://wollo-info-hub.vercel.app/not',
    github: 'https://github.com/abudiay/Wollo-info-hub/',
    description:
      'An information hub for Wollo University that brings announcements and campus information together in one place, with account registration and login.',
    stack: ['React', 'Express', 'MySQL'],
    role: 'Full-stack development with AI inegratoion',
    images: {
      leftTop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8NQ4VW2DPfR3UqWm46R-b_XDRIpkd1xDj5-atAG4iYA&s',
      leftBottom: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTf_sOsQmHsDzqtJa9HysOXgi9iegZYJsLuLvn_MjHe8g&s',
      right: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe1n3abckkr9uhWQaoFrC4q2jO-0f-UiGFnK_bdgg-rQ&s=10',
    },
  },
  {
    number: '11',
    category: 'SAAS Donation web app',
    title: 'DEMERA NGO Donation System',
    live: 'https://demera.vercel.app/',
    github: 'https://github.com/abudiay/DEMERA/',
    description:
      'The DEMERA Non Profit Foundation Or NGO system that will help them as To express there goal and to conated the Donation from all Of the worlds volunteeris by APP,Google pay,Cradit car by this system',
    stack: ['React', 'Express', 'PostgresSQL'],
    role: 'Full-stack development with Payment System',
    images: {
      leftTop: 'https://teddyguday.com/wp-content/uploads/2023/09/demodemeralogoblue.png',
      leftBottom: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNVpvNsCFHLLzDALIcHICVi7-J5WDPRZNpSk6q5FlhTahMpFq2hZolkk&s=10',
      right: 'https://img.magnific.com/free-psd/waste-management-landing-page-post-design-template_23-2149111688.jpg?semt=ais_hybrid&w=740&q=80',
    },
  },
]

const TOTAL = PROJECTS.length

/* ─── timing (tweak these to change the feel) ───────────── */
const VH_PER_PROJECT = 180   // scroll length per project, in vh. Bigger = more time to read
const S = 1 / TOTAL          // each project's share of the scroll progress (0 → 1)
const ENTER = 0.25           // share of a project's turn used by the card sliding in
const TEXT_IN_START = 0.2    // text starts fading in (share of turn)
const TEXT_IN_LEN = 0.15     // how long the fade-in takes
const TEXT_OUT_LEN = 0.1     // how long the fade-out takes (starts when the NEXT card starts)

/* ─── stack look (tweak these to change the card pile) ──── */
const MAX_PEEK = 3           // how many cards behind the active one show their top edge
const PEEK = 18              // px between each visible edge
const STACK_TOP = 96 + MAX_PEEK * PEEK  // where the active card sits (px from top)

const clamp = (v, min = 0, max = 1) => Math.min(max, Math.max(min, v))
const easeOut = (t) => 1 - Math.pow(1 - t, 3)

const handleImgError = (e) => {
  e.currentTarget.onerror = null
  e.currentTarget.src = FALLBACK_IMG
}

/* ─── single card ───────────────────────────────────────── */
function ProjectCard({ project, index, progress }) {
  /* even index (01, 03, …) → text on the LEFT; odd (02, 04, …) → text on the RIGHT */
  const isLeft = index % 2 === 0

  /* card slides up from below, then stays put */
  const y = useTransform(progress, (v) => {
    if (index === 0) return '0vh'
    const t = clamp((v - index * S) / (ENTER * S))
    return `${(1 - easeOut(t)) * 105}vh`
  })

  /* how many newer cards have landed on top of this one (smooth, 0 → …) */
  const covered = (v) => {
    let c = 0
    for (let j = index + 1; j < TOTAL; j++) {
      c += easeOut(clamp((v - j * S) / (ENTER * S)))
    }
    return Math.min(c, MAX_PEEK)
  }

  /* older cards shrink a little and move up, but only MAX_PEEK levels deep */
  const scale = useTransform(progress, (v) => 1 - covered(v) * 0.03)
  const peekY = useTransform(progress, (v) => -covered(v) * PEEK)

  /* side text: fades in after the card settles, stays while you read,
     fades out only when the NEXT card starts to come */
  const textIn = (v) =>
    index === 0 ? 1 : clamp((v - (index * S + TEXT_IN_START * S)) / (TEXT_IN_LEN * S))
  const textOut = (v) =>
    index === TOTAL - 1 ? 0 : clamp((v - (index + 1) * S) / (TEXT_OUT_LEN * S))

  const textOpacity = useTransform(progress, (v) => textIn(v) * (1 - textOut(v)))
  const textX = useTransform(progress, (v) => {
    const shift = (1 - textIn(v)) * 40 + textOut(v) * 30
    return isLeft ? -shift : shift
  })

  return (
    <div
      className={styles.cardOuter}
      style={{ top: STACK_TOP, '--stack-top': `${STACK_TOP}px` }}
    >
      {/* ── side text (left for odd projects, right for even) ── */}
      <motion.aside
        className={`${styles.side} ${isLeft ? styles.sideLeft : styles.sideRight}`}
        style={{ opacity: textOpacity, x: textX }}
      >
        <span className={styles.sideLabel}>About the project</span>
        <span className={styles.sideRule} />
        <p className={styles.sideText}>{project.description}</p>

        <span className={`${styles.sideLabel} ${styles.sideLabelGap}`}>Tech stack</span>
        <span className={styles.sideRule} />
        <ul className={styles.chips}>
          {project.stack.map((tech) => (
            <li key={tech} className={styles.chip}>{tech}</li>
          ))}
        </ul>

        <span className={`${styles.sideLabel} ${styles.sideLabelGap}`}>My role</span>
        <span className={styles.sideRule} />
        <p className={styles.sideText}>{project.role}</p>
      </motion.aside>

      {/* wrapper moves up when newer cards cover this one */}
      <motion.div className={styles.cardWrap} style={{ y: peekY }}>
        <motion.div
          className={styles.card}
          style={{ y, scale, transformOrigin: 'top center' }}
        >
          {/* ── top row ── */}
          <div className={styles.topRow}>
            <span className={styles.projectNumber}>{project.number}</span>

            <div className={styles.titleBlock}>
              <span className={styles.category}>{project.category}</span>
              <h3 className={styles.projectTitle}>{project.title}</h3>
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
            <div className={styles.leftCol}>
              <img
                src={project.images.leftTop}
                alt={`${project.title} preview 1`}
                className={`${styles.img} ${styles.imgLeftTop}`}
                loading="lazy"
                onError={handleImgError}
              />
              <img
                src={project.images.leftBottom}
                alt={`${project.title} preview 2`}
                className={`${styles.img} ${styles.imgLeftBottom}`}
                loading="lazy"
                onError={handleImgError}
              />
            </div>

            <div className={styles.rightCol}>
              <img
                src={project.images.right}
                alt={`${project.title} preview 3`}
                className={`${styles.img} ${styles.imgRight}`}
                loading="lazy"
                onError={handleImgError}
              />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ─── section ───────────────────────────────────────────── */
export default function Projucts() {
  const containerRef = useRef(null)

  /* one shared progress value (0 → 1) for the whole stack */
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  return (
    <section id="projects" className={styles.section}>
      <div className={styles.headingWrap}>
        <h2 className={styles.heading}>Project</h2>
      </div>

      {/* tall scroll track: gives every project its own reading time */}
      <div
        ref={containerRef}
        className={styles.stackContainer}
        style={{ height: `${TOTAL * VH_PER_PROJECT}vh` }}
      >
        {/* pinned stage: stays on screen while the track scrolls */}
        <div className={styles.stage}>
          {PROJECTS.map((project, i) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={i}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  )
}