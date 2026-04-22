import styles from "./PersonalHeader.module.css";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import StarIcon from '@mui/icons-material/Star';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import myImg from "../../assets/home_me-.png";
import { useNavigate } from 'react-router-dom';

const TICKER_ITEMS = [
  'FREELANCER', 'UI/UX DESIGNER', 'WEB DESIGN', 'BRANDING DESIGN',
  'FREELANCER', 'UI/UX DESIGNER', 'WEB DESIGN', 'BRANDING DESIGN',
];

const TickerRow = ({ reverse }) => (
  <div className={`${styles.tickerRow} ${reverse ? styles.tickerRowDark : ''}`}>
    <div className={`${styles.tickerTrack} ${reverse ? styles.tickerReverse : ''}`}>
      {[...TICKER_ITEMS, ...TICKER_ITEMS].map((label, i) => (
        <span key={i} className={styles.tickerItem}>
          <span className={styles.tickerDot}>
            <PlayArrowIcon style={{ fontSize: 11 }} />
          </span>
          {label}
        </span>
      ))}
    </div>
  </div>
);

const PersonalHeader = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.heroWrapper}>

      {/* ── Back button ── */}
      <button
        className={styles.backBtn}
        onClick={() => navigate('/')}
        aria-label="Back to home"
      >
        <ArrowBackIcon style={{ fontSize: 16 }} />
        <span>Home</span>
      </button>

      {/* ── Hero ── */}
      <main className={styles.mainContent}>

        <h1 className={styles.bgNameText} aria-hidden="true">ABDUL QADIR</h1>

        <div className={styles.contentGrid}>

          {/* Left */}
          <div className={styles.leftCol}>
            <h2 className={styles.subTitleLeft}> Web - Developer </h2>
            <p className={styles.description}>
              I break down complex user experience problems to create integrity
              focussed solutions that connect billions of people around the world.
            </p>
            <div className={styles.ctaRow}>
              <button className={styles.hireBtn}>
                <span className={styles.btnIconWrap}>
                  <ArrowOutwardIcon style={{ fontSize: 14 }} />
                </span>
                HIRE ME NOW
              </button>
              <button className={styles.videoBtn}>
                <div className={styles.playCircle}>
                  <PlayArrowIcon fontSize="small" />
                </div>
                INTRO VIDEO
              </button>
            </div>
          </div>

          {/* Center photo */}
          <div className={styles.imageCol}>
            <img src={myImg} alt="Abdul Qadir" className={styles.subjectImg} />
          </div>

          {/* Right */}
          <div className={styles.rightCol}>
            <h2 className={styles.subTitleRight}>Softaware Engineer</h2>
            <div className={styles.ratingCard}>
              <div className={styles.ratingLeft}>
                <span className={styles.ratingBig}>4.9</span>
                <span className={styles.reviewCount}>(32 reviews)</span>
              </div>
              <div className={styles.ratingRight}>
                <span className={styles.ratingLabel}>Average Rating</span>
                <div className={styles.starRow}>
                  {[...Array(5)].map((_, i) => (
                    <StarIcon key={i} className={styles.star} />
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>

      {/* ── Scrolling ticker ── */}
      </main>

      <div className={styles.tickerWrapper}>
        <TickerRow />
        <TickerRow reverse />
      </div>

    </div>
  );
};

export default PersonalHeader;
