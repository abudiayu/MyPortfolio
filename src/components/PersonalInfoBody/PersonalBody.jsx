import styles from "./PersonalBody.module.css";
import profileImg from '../../assets/abudy.jpg';
import CodeIcon from '@mui/icons-material/Code';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

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
          <h1 className={styles.name}>Abdul Kadir <span>Ayalsew</span></h1>
          <p className={styles.bio}>
            I'm a software developer who believes great code and great books share the same soul —
            clarity, purpose, and depth. When I'm not building web apps, I'm deep in a book,
            collecting ideas that shape how I think and build.
          </p>
          <div className={styles.statRow}>
            <div className={styles.stat}><span>3rd</span><small>Year Student</small></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><span>20+</span><small>Books Read</small></div>
            <div className={styles.statDivider} />
            <div className={styles.stat}><span>5+</span><small>Projects Built</small></div>
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

      {/* ── Quote ── */}
      <div className={styles.quoteBlock}>
        <FormatQuoteIcon className={styles.quoteIcon} />
        <p>"A reader lives a thousand lives before he dies. The man who never reads lives only one."</p>
        <span>— George R.R. Martin</span>
      </div>

      {/* ── Skills ── */}
      <div className={styles.skillsSection}>
        <div className={styles.sectionLabel}>
          <CodeIcon style={{ fontSize: 18 }} />
          <span>What I Build With</span>
        </div>
        <div className={styles.skillsGrid}>
          {[
            { name: 'React',          symbol: '⚛',  accent: '#61dafb', desc: 'UI Library'       },
            { name: 'JavaScript',     symbol: 'JS',  accent: '#f7df1e', desc: 'Core Language'    },
            { name: 'Node.js',        symbol: '⬡',  accent: '#68a063', desc: 'Backend Runtime'  },
            { name: 'Laravel',        symbol: '🜲',  accent: '#ff2d20', desc: 'PHP Framework'    },
            { name: 'MongoDB',        symbol: '◈',  accent: '#47a248', desc: 'NoSQL Database'    },
            { name: 'CSS / Tailwind', symbol: '✦',  accent: '#38bdf8', desc: 'Styling'          },
          ].map((s, i) => (
            <div
              key={i}
              className={styles.skillCard}
              style={{ '--accent': s.accent, animationDelay: `${i * 0.1}s` }}
            >
              <div className={styles.skillCornerTL} />
              <div className={styles.skillCornerBR} />
              <span className={styles.skillSymbol}>{s.symbol}</span>
              <span className={styles.skillName}>{s.name}</span>
              <span className={styles.skillDesc}>{s.desc}</span>
              <div className={styles.skillLine} />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default PersonalBody;
