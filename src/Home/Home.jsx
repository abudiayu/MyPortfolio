import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import classes from "./Home.module.css";
import Aqadr from "../assets/Aqadr.png";
import qLogo from "../assets/q.png";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import aqadir from "../assets/aqadir.png"
import Link from '@mui/material/Link';

function Home({ showSidebar }) {
  const scrollToContact = () => {
    const contactSection = document.querySelector('.contact_container');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
        <header className= {classes.header_container}>
            <div className={`${classes.header_side_container} ${!showSidebar ? classes.hidden : ''}`}>
                <div className={ classes.header_side_wrapper}>
                    <img src={aqadir} alt="Profile" className={classes.profileImg} />
                    <div className={classes.header_side_icon}>
                        <Link href= "#"><HomeIcon/></Link>
                        <RouterLink to="/personal-info" className={classes.personalInfoLink}>
                            <PersonIcon/>
                        </RouterLink>
                        <Link href=" https://github.com/abudiayu" ><GitHubIcon/></Link>
                    </div>
                    <div className={classes.header_side_icon_contact}>
                        <Link href="https://www.instagram.com/abdul.qadir0101/"><InstagramIcon/></Link>
                        <Link href="https://web.telegram.org/@AbudyTy"><TelegramIcon /></Link>
                        <Link href="https://www.whatsapp.com/"><WhatsAppIcon/></Link>
                        <Link href="mailto:abudiayuu@gmail.com"><EmailIcon/></Link>
                    </div>
                </div>
            </div>
            <div className={ classes.header_main_container}>
                <div className={ classes.header_main_wrapper}>
                    <div>
                        <div className={classes.header_text_container}>
                            <span className={classes.hiText}>Hi,</span>
                            <br />
                            <span className={classes.imText}>I'm</span>{' '}
                            <img src={Aqadr} alt="Aqadr" className={classes.name_img} />
                            <br />
                            <span className={classes.webDeveloper}>Web Developer.</span>
                            <p>Software Developer Basic Skill's are JavaScript | React | NodeJs| Laravel | Python | MongoDB ...</p>
                        </div>
                        <div className={classes.header_contact}>
                            <button onClick={scrollToContact} className={classes.contactMe_page}>CONTACT ME</button>
                        </div>
                    </div>
                    <img src={qLogo} alt="q" className={classes.large_q_logo} />
                </div>
            </div>
        </header>  
    </>
  )
}

export default Home;