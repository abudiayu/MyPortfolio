import styles from './Footer.module.css';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import LanguageIcon from '@mui/icons-material/Language';
import qLogo from '../../assets/q.png';

function Footer() {
  return (
    <footer className={styles.footer}>

      {/* ── Main contact area ── */}
      <div className={styles.main}>

        {/* Left — social icons vertical */}
        <div className={styles.socials}>
          <a href="#" className={styles.socialBtn} aria-label="X"><XIcon style={{ fontSize: 16 }} /></a>
          <a href="#" className={styles.socialBtn} aria-label="Instagram"><InstagramIcon style={{ fontSize: 16 }} /></a>
          <a href="#" className={styles.socialBtn} aria-label="Website"><LanguageIcon style={{ fontSize: 16 }} /></a>
          <a href="#" className={styles.socialBtnPrimary} aria-label="Back"><ArrowBackIcon style={{ fontSize: 16 }} /></a>
        </div>

        {/* Center — contact info + nav */}
        <div className={styles.center}>
          <a href="tel:+251912345678" className={styles.phone}>+251-901-013-902</a>
          <a href="mailto:abdulkadir@gmail.com" className={styles.email}>abdulkadirayalsew@gmail.com</a>
          <a href="mailto:abdulkadir@gmail.com" className={styles.email}>abudiayuu@gmail.com</a>
          
          <nav className={styles.nav}>
            <a href="https://t.me/AbudyTy" target="_blank">Telegram</a>
            <a href="Abdul Kadir MD" target="_blank">UpWork</a>
            <a href="https://www.linkedin.com/in/abdulkadir-0b1aa637b/">Linkdin</a>
          </nav>
        </div>

        {/* Right — contact us today vertical button */}
        <div className={styles.rightBtns}>
          <a href="#contact" className={styles.contactVertical}>
            <span>CONTACT US TODAY</span>
          </a>
          <a href="#top" className={styles.arrowBtn} aria-label="Back to top">
            <ArrowOutwardIcon style={{ fontSize: 16 }} />
          </a>
        </div>

      </div>

      {/* ── Bottom bar ── */}
      <div className={styles.bottomBar}>
        <div className={styles.copyright}>
          <span className={styles.year}>2025:</span>
          <div className={styles.copyrightLine}>
            <a href="#" className={styles.brandName}>AbdulKadir</a>
            <span className={styles.rights}>, All Rights Reserved</span>
          </div>
        </div>

        <div className={styles.brand}>
          <img src={qLogo} alt="logo" className={styles.brandLogo} />
          <span>Qadire</span>
        </div>

        <div className={styles.address}>
          <span className={styles.addressLabel}>Address</span>
          <span className={styles.addressText}>Addis Ababa, Ethiopia</span>
        </div>
      </div>

      {/* ── Big tagline ── */}
      <div className={styles.tagline}>
        <span className={styles.taglineLight}>LET'S BUILD </span>
        <span className={styles.taglineBold}>TOGETHER</span>
      </div>

    </footer>
  );
}

export default Footer;
