import React from 'react';
import classes from "./skill.module.css";

function Skill() {
  const skills = [
    { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg', color: '#e34c26' },
    { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg', color: '#264de4' },
    { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', color: '#f0db4f' },
    { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61dafb' },
    { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#68a063' },
    { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#336791' },
    { name: 'Tailwind', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg', color: '#06b6d4' },
    { name: 'Laravel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg', color: '#ff2d20' },
  ];

  return (
    <section className={classes.skill_container}>
      <h1>Skills</h1>
      <div className={classes.skill_icon_container}>
        {skills.map((skill, index) => (
          <div key={index} className={classes.skill_item} style={{ borderColor: skill.color }} data-name={skill.name}>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
        {skills.map((skill, index) => (
          <div key={`duplicate-${index}`} className={classes.skill_item} style={{ borderColor: skill.color }} data-name={skill.name}>
            <img src={skill.icon} alt={skill.name} />
          </div>
        ))}
      </div>

      {/* ── mountain wave divider → About section ── */}
      <div className={classes.dividerWrap} aria-hidden="true">

        {/* layer 1: blurred back dune — darkest, furthest */}
        <svg className={`${classes.divSvg} ${classes.divL1}`}
          viewBox="0 0 1440 260" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0,260 L0,160 C120,110 200,60 340,90 C480,120 520,190 680,165 C840,140 880,55 1060,80 C1200,100 1320,170 1440,150 L1440,260 Z"
            fill="rgba(180,195,210,0.35)" />
        </svg>

        {/* layer 2: mid dune — medium depth */}
        <svg className={`${classes.divSvg} ${classes.divL2}`}
          viewBox="0 0 1440 260" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="duneGrad2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(220,228,235,0)" />
              <stop offset="60%" stopColor="rgba(220,228,235,0.7)" />
              <stop offset="100%" stopColor="rgba(220,228,235,0.95)" />
            </linearGradient>
          </defs>
          <path d="M0,260 L0,175 C80,145 180,85 320,112 C460,139 500,210 660,185 C820,160 860,75 1040,100 C1180,120 1300,185 1440,162 L1440,260 Z"
            fill="url(#duneGrad2)" />
        </svg>

        {/* layer 3: front dune — brightest, closest */}
        <svg className={`${classes.divSvg} ${classes.divL3}`}
          viewBox="0 0 1440 260" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="duneGrad3" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(240,244,248,0)" />
              <stop offset="50%" stopColor="rgba(240,244,248,0.6)" />
              <stop offset="100%" stopColor="rgba(240,244,248,1)" />
            </linearGradient>
          </defs>
          <path d="M0,260 L0,195 C100,168 200,115 360,138 C520,161 540,225 720,200 C900,175 920,100 1100,122 C1240,140 1360,198 1440,178 L1440,260 Z"
            fill="url(#duneGrad3)" />
        </svg>

        {/* layer 4: floor fill — solid dark, seals the bottom */}
        <svg className={`${classes.divSvg} ${classes.divL4}`}
          viewBox="0 0 1440 260" preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M0,260 L0,230 C200,215 400,210 720,218 C1040,226 1240,222 1440,228 L1440,260 Z"
            fill="#0c0c0c" />
        </svg>

      </div>
    </section>
  )
}

export default Skill;