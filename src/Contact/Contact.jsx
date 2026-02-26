import React from 'react'
import classes from "./contact.module.css";
import { Twitter, Instagram, LinkedIn, Facebook, GitHub, Email,Telegram } from '@mui/icons-material';
import abudy from "../assets/abudy.jpg";

function Contact() {
  const socialLinks = [
    {
      platform: "Telegram",
      text: "Add me on Facebook",
      username: "@abdulqadir",
      icon: <Telegram />,
      color: "#3ba1ef",
      link: "https://web.telegram.org/@AbudyTy"
    },
    {
      platform: "Facebook",
      text: "Add me on Facebook",
      username: "@abdulqadir",
      icon: <Facebook />,
      color: "#1877F2",
      link: "https://web.facebook.com/profile.php?id=61579876913486"
    },
    {
      platform: "Instagram",
      text: "My Vines on Instagram",
      username: "@abudy",
      icon: <Instagram />,
      color: "#e84a06",
      link: "https://www.instagram.com/abdul.qadir0101/"
    },
    {
      platform: "LinkedIn",
      text: "Connect on LinkedIn",
      username: "@abdulqadir",
      icon: <LinkedIn />,
      color: "#0077B5",
      link: "https://www.linkedin.com/in/abdul-kadir-0b1aa637b/"
    },
    {
      platform: "GitHub",
      text: "Check my GitHub",
      username: "@abudiayu",
      icon: <GitHub />,
      color: "#333",
      link: "https://github.com/@abudiayu"
    },
    {
      platform: "Email",
      text: "Send me an Email",
      username: "abudiayuu@gmail.com",
      icon: <Email />,
      color: "#EA4335",
      link: "mailto:abudiayuu@gmail.com"
    }
  ];

  return (
    <>
      <section id="contact" className={`${classes.contact_container} contact_container`}>
        <div className={classes.contact_wrapper}>
          <div className={classes.contact_left}>
            <div className={classes.profile_card}>
              <div className={classes.profile_image}>
                <img src={abudy} alt="Profile" />
              </div>
              <h2>Abdul Qadir</h2>
              <p className={classes.username}>@abdulqadir</p>
              <p className={classes.location}>Addis, Ethiopia</p>
              
              <div className={classes.stats}>
                <div className={classes.stat_item}>
                  <h3>1.2K</h3>
                  <p>Followers</p>
                </div>
                <div className={classes.stat_item}>
                  <h3>327</h3>
                  <p>Following</p>
                </div>
              </div>
              
              <p className={classes.bio}>
                Hi there! I'm a Programmer with more than 4 years of experience and want to help you to contact me with social media.
              </p>
              
              <div className={classes.action_buttons}>
                <button className={classes.follow_btn}>Follow</button>
                <button className={classes.message_btn}>Message</button>
              </div>
            </div>
          </div>
          
          <div className={classes.contact_right}>
            <h1>SOCIAL LINKS</h1>
            <div className={classes.social_links}>
              {socialLinks.map((social, index) => (
                <a 
                  key={index} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={classes.social_card}
                >
                  <div className={classes.social_icon} style={{ backgroundColor: social.color }}>
                    {social.icon}
                  </div>
                  <div className={classes.social_info}>
                    <h3>{social.text}</h3>
                    <p>{social.username}</p>
                  </div>
                  <div className={classes.arrow_icon}>→</div>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className={classes.copy}>@Copy wright is reserived to Abdul Qadir</div>
      </section>
    </>
  )
}

export default Contact;
