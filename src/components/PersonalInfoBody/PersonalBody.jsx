import styles from "./PersonalBody.module.css";
import profileImg from '../../assets/home_me-.png';
import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

const clients = [
  {
    name: "Sara Ahmed",
    role: "Startup Founder",
    avatar: "SA",
    color: "#5b52f0",
    stars: 5,
    comment: "Abdul delivered our web app ahead of schedule. Clean code, great communication, and the UI looked exactly like the design. Highly recommend!",
  },
  {
    name: "Yonas Tesfaye",
    role: "E-commerce Owner",
    avatar: "YT",
    color: "#22c55e",
    stars: 5,
    comment: "He built our entire online store from scratch. Fast, responsive, and very professional. Our sales increased after the redesign.",
  },
  {
    name: "Liya Bekele",
    role: "NGO Project Manager",
    avatar: "LB",
    color: "#f59e0b",
    stars: 5,
    comment: "We needed a donation platform urgently. Abdul handled everything — backend, frontend, and deployment. Exceptional work under pressure.",
  },
  {
    name: "Dawit Haile",
    role: "Tech Blogger",
    avatar: "DH",
    color: "#a78bfa",
    stars: 5,
    comment: "Redesigned my blog and it now loads 3x faster. The attention to detail in the typography and layout was impressive. Will work with him again.",
  },
  {
    name: "Meron Girma",
    role: "Restaurant Owner",
    avatar: "MG",
    color: "#fb923c",
    stars: 5,
    comment: "Our restaurant website now gets more reservations online. Abdul made it mobile-friendly and easy to update. Great experience overall.",
  },
];

const books = [
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    color: "#1e3a5f",
    spine: "#5b52f0",
    tag: "Must Read",
  },
  {
    title: "The Pragmatic Programmer",
    author: "Hunt & Thomas",
    color: "#1a3a2a",
    spine: "#22c55e",
    tag: "Favorite",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    color: "#3a1a1a",
    spine: "#f59e0b",
    tag: "Life Changing",
  },
  {
    title: "Deep Work",
    author: "Cal Newport",
    color: "#1a1a3a",
    spine: "#a78bfa",
    tag: "Focus",
  },
  {
    title: "You Don't Know JS",
    author: "Kyle Simpson",
    color: "#2a1a0a",
    spine: "#fb923c",
    tag: "Technical",
  },
];

function PersonalBody() {
  const navigate = useNavigate();
  return (
    <section className={styles.container}>

      {/* ── Personal Intro ── */}
      <div className={styles.introSection}>
        <div className={styles.profileWrap}>
          <img src={profileImg} alt="Abdul Kadir" className={styles.profileImg} />
          <div className={styles.profileGlow} />
        </div>
        <div className={styles.introText}>
          <span className={styles.badge}><CodeIcon style={{ fontSize: 14 }} /> Developer & Reader</span>
          <h1 className={styles.name}>Abdul Kadir <span>MD</span></h1>
          <p className={styles.bio}>
            I'm a software developer who believes great code and great books share the same soul —
            clarity, purpose, and depth. When I'm not building web apps, I'm deep in a book,
            collecting ideas that shape how I think and build.
          </p>
          <div className={styles.statRow}>
            <div className={styles.stat}><span>3rd</span><small>Year Student</small></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><span>19+</span><small>Books Read</small></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><span>49+</span><small>Projects Built</small></div>
          </div>
        </div>
      </div>

      {/* ── Reading Hobby ── */}
      <div className={styles.hobbySection}>
        <div className={styles.sectionLabel}>
          <AutoStoriesIcon style={{ fontSize: 18 }} />
          <span>My Hobby</span>
        </div>
        <h2 className={styles.sectionTitle}>I Love Reading</h2>
        <p className={styles.sectionSub}>
          Books are my second world. Here are the ones that hit different.
        </p>

        {/* Bookshelf */}
        <div className={styles.shelf}>
          <div className={styles.shelfSurface} />
          {books.map((book, i) => (
            <div
              key={i}
              className={styles.bookWrap}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className={styles.book} style={{ '--spine': book.spine, '--cover': book.color }}>
                {/* Spine */}
                <div className={styles.bookSpine}>
                  <span className={styles.spineTitle}>{book.title}</span>
                </div>
                {/* Cover */}
                <div className={styles.bookCover}>
                  <div className={styles.coverLines}>
                    <div /><div /><div />
                  </div>
                  <span className={styles.coverTitle}>{book.title}</span>
                  <span className={styles.coverAuthor}>{book.author}</span>
                  <span className={styles.coverTag}>{book.tag}</span>
                </div>
                {/* Pages edge */}
                <div className={styles.bookPages} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Client Comments ── */}
      <div className={styles.clientsSection}>
        <div className={styles.sectionLabel}>
          <FormatQuoteIcon style={{ fontSize: 18 }} />
          <span>What Clients Say</span>
        </div>
        <h2 className={styles.sectionTitle}>Happy Clients</h2>
        <p className={styles.sectionSub}>People I've worked with and what they think.</p>

        <div className={styles.scrollTrack}>
          {clients.map((c, i) => (
            <div key={i} className={styles.clientCard} style={{ '--accent': c.color }}>
              <div className={styles.clientTop}>
                <div className={styles.clientAvatar} style={{ background: c.color }}>
                  {c.avatar}
                </div>
                <div>
                  <p className={styles.clientName}>{c.name}</p>
                  <p className={styles.clientRole}>{c.role}</p>
                </div>
              </div>
              <div className={styles.clientStars}>
                {[...Array(c.stars)].map((_, s) => (
                  <StarIcon key={s} style={{ fontSize: 16, color: '#f59e0b' }} />
                ))}
              </div>
              <p className={styles.clientComment}>"{c.comment}"</p>
              <div className={styles.clientAccentLine} />
            </div>
          ))}
        </div>
      </div>

      {/* ── Skills ── */}
      <div className={styles.skillsSection}>
        <div className={styles.sectionLabel}>
          <CodeIcon style={{ fontSize: 18 }} />
          <span>What I Build With</span>
        </div>
        <h2 className={styles.sectionTitle}>My Stack 🛠️</h2>
        <p className={styles.sectionSub}>The tools I reach for every day — tried, tested, trusted.</p>

        <div className={styles.skillsGrid}>
          {[
            { name: 'React',       desc: 'UI Library',       accent: '#61dafb', bg: '#0d2a35', tilt: '-2deg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',       tag: '⚡ Favorite' },
            { name: 'JavaScript',  desc: 'Core Language',    accent: '#f7df1e', bg: '#2a2600', tilt: '1.5deg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', tag: '🔥 Daily Use' },
            { name: 'Node.js',     desc: 'Backend Runtime',  accent: '#68a063', bg: '#0d2010', tilt: '-1deg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',       tag: '🚀 Backend'   },
            { name: 'Laravel',     desc: 'PHP Framework',    accent: '#ff2d20', bg: '#2a0800', tilt: '2deg',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',     tag: '💼 Projects'  },
            { name: 'MongoDB',     desc: 'NoSQL Database',   accent: '#47a248', bg: '#0d2010', tilt: '-1.5deg', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',   tag: '🗄️ Data'     },
            { name: 'Tailwind',    desc: 'CSS Framework',    accent: '#38bdf8', bg: '#0d2535', tilt: '1deg',  icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', tag: '🎨 Styling' },
          ].map((s, i) => (
            <div
              key={i}
              className={styles.skillCard}
              style={{
                '--accent': s.accent,
                '--bg': s.bg,
                '--tilt': s.tilt,
                animationDelay: `${i * 0.1}s`
              }}
            >
              <div className={styles.skillTag}>{s.tag}</div>
              <div className={styles.skillIconWrap}>
                <img src={s.icon} alt={s.name} className={styles.skillIcon} />
              </div>
              <span className={styles.skillName}>{s.name}</span>
              <span className={styles.skillDesc}>{s.desc}</span>
              <div className={styles.skillDots}>
                <span /><span /><span />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default PersonalBody;
