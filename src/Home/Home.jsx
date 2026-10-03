import React, { useEffect, useRef } from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from "./Home.module.css";
import Aqadr from "../assets/Aqadr.png";
import qLogo from "../assets/my-photo.png";
// 👇 STEP 1 (when you are ready): uncomment this line and put your real file name/extension
// import myPhoto from "../assets/my-photo.png";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Link from '@mui/material/Link';

/* ------------------------------------------------------------------
   👇 STEP 2: THE ONLY LINE YOU CHANGE TO SWAP THE IMAGE
   Now:   const heroImage = qLogo;
   Later: const heroImage = myPhoto;   (after un-commenting the import above)
------------------------------------------------------------------- */
const heroImage = qLogo;
function useParallax(ref, strength = 12, ease = 0.05) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (window.matchMedia('(hover: none)').matches) return; // skip on touch devices

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0, raf;

    const onMove = (e) => {
      targetX = (e.clientX / window.innerWidth - 0.5) * 2 * strength;
      targetY = (e.clientY / window.innerHeight - 0.5) * 2 * strength;
    };

    const tick = () => {
      currentX += (targetX - currentX) * ease;
      currentY += (targetY - currentY) * ease;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, [ref, strength, ease]);
}

function HeroImage({ src, alt = "Abdulqadir hero" }) {
  const parallaxRef = useRef(null);
  useParallax(parallaxRef);

  return (
    <div className={classes.hero_image_stage}>
      {/* soft glowing blob that drifts very slowly */}
      <div className={classes.hero_blob} aria-hidden="true" />
      <div className={classes.hero_blob_two} aria-hidden="true" />

      {/* outer = mouse parallax, inner = slow floating loop */}
      <div ref={parallaxRef} className={classes.hero_parallax}>
        <div className={classes.hero_float}>
          <img src={src} alt={alt} className={classes.hero_img} draggable="false" />
        </div>
      </div>

      {/* gradient fade so the image blends into the background */}
      <div className={classes.hero_fade} aria-hidden="true" />
    </div>
  );
}

/* ---------------------------- Home ---------------------------- */
function Home({ showSidebar }) {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact_container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projects = document.querySelector('.projects_container');
    if (projects) {
      projects.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header className={classes.header_container}>
        {/* ---------- NAV BAR (logic and links unchanged) ---------- */}
        <div className={`${classes.header_side_container} ${!showSidebar ? classes.hidden : ''}`}>
          <div className={classes.header_side_wrapper}>
            <div className={classes.header_side_icon}>
              <Link href="#" className={`${classes.navLink} ${classes.navActive}`}><HomeIcon /></Link>
              <RouterLink to="/personal-info" className={classes.personalInfoLink}>
                <PersonIcon />
                <span>abudi</span>
              </RouterLink>
              <Link href=" https://github.com/abudiayu" className={classes.navLink}><GitHubIcon /></Link>
            </div>
            <div className={classes.header_side_icon_contact}>
              <Link href="https://www.instagram.com/abdul.qadir0101/" className={classes.navLink}><InstagramIcon /></Link>
              <Link href="https://web.telegram.org/@AbudyTy" className={classes.navLink}><TelegramIcon /></Link>
              <Link href="https://www.whatsapp.com/" className={classes.navLink}><WhatsAppIcon /></Link>
              <Link href="mailto:abudiayuu@gmail.com" className={`${classes.navLink} ${classes.emailLink}`}><EmailIcon /></Link>
            </div>
          </div>
        </div>

        {/* ---------------------- HERO ---------------------- */}
        <div className={classes.header_main_container}>
          <div className={classes.header_main_wrapper}>
            {/* LEFT: text */}
            <div className={classes.hero_text}>
              <div className={classes.pills} style={{ '--d': '0.1s' }}>
                <span className={classes.pill}>Full-Stack</span>
                <span className={classes.pill}>Problem Solver</span>
              </div>

              <div className={classes.header_text_container}>
                <h1 className={classes.hero_title}>
                  <span className={`${classes.line} ${classes.hiText}`} style={{ '--d': '0.25s' }}>Hellow,</span>
                  <span className={`${classes.line} ${classes.imRow}`} style={{ '--d': '0.4s' }}>
                    <span className={classes.imText}>I am</span>
                    <img src={Aqadr} alt="Aqadr" className={classes.name_img} />
                  </span>
                  <span className={`${classes.line} ${classes.devRow}`} style={{ '--d': '0.55s' }}>
                    <span className={classes.thinWord}>Full-Stack</span>{' '}
                    <span className={classes.webDeveloper}>Developer.</span>
                  </span>
                </h1>
                <p className={classes.skills} style={{ '--d': '0.7s' }}>
                  Software Developer Basic Skill's are JavaScript | React | NodeJs| Laravel | Python | MongoDB ...
                </p>
              </div>

              <div className={classes.header_contact} style={{ '--d': '0.85s' }}>
                <button onClick={scrollToContact} className={classes.contactMe_page}>
                  <span>CONTACT ME</span>
                  <span className={classes.arrowCircle}><ArrowForwardIcon fontSize="inherit" /></span>
                </button>
                <button onClick={scrollToProjects} className={classes.ghost_btn}>View Projects</button>
              </div>

              <p className={classes.description} style={{ '--d': '1s' }}>
                I design and build fast, modern web applications, from clean interfaces to
                reliable back-end systems, with a focus on details that feel smooth and
                make people's work easier.
              </p>
            </div>

            {/* RIGHT: hero image */}
            <div className={classes.hero_image_col}>
              <HeroImage src={heroImage} />
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

export default Home;