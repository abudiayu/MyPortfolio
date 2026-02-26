import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './personalInfo.module.css'
import img1 from './imgInfo/20251119_161631.jpg'
import img2 from './imgInfo/IMG_20240208_110133_817.jpg'
import img3 from './imgInfo/IMG_20240216_223507_399.jpg'
import img4 from './imgInfo/IMG_20250812_140018_619.jpg'
import qLogo from '../assets/q.png'
import aqadirLogo from '../assets/aqadir.png'
import reactIcon from '../assets/react_icon.webp'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch'
import FavoriteIcon from '@mui/icons-material/Favorite'
import CoffeeIcon from '@mui/icons-material/Coffee'
import MusicNoteIcon from '@mui/icons-material/MusicNote'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff'
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome'
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions'
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment'

function PersonalInfo() {
  const navigate = useNavigate()
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Array of personal images to rotate through
  const profileImages = [
    img1,  // 20251119_161631.jpg
    img2,  // IMG_20240208_110133_817.jpg
    img3,  // IMG_20240216_223507_399.jpg
    img4   // IMG_20250812_140018_619.jpg
  ]

  // Image rotation effect - changes every 3 seconds
  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length)
    }, 3000) // Change image every 3 seconds

    return () => clearInterval(imageInterval)
  }, [profileImages.length])

  const myStory = {
    intro: "Hey there! 👋 I'm Abdul Qadir, but you can call me Abudy. I'm not just a developer—I'm a digital craftsman who turns coffee ☕ into code and ideas into reality!",
    passion: "I fell in love with coding when I realized I could build anything I imagine. From simple websites to complex applications, every line of code is a step toward making the digital world more awesome! 🚀",
    philosophy: "I believe in clean code, beautiful designs, and user experiences that make people smile. My motto? 'Code with passion, design with purpose, and always keep learning!' 💡"
  }

  const timeline = [
    {
      year: "2020",
      title: "The Beginning 🌱",
      description: "Started my coding journey with HTML & CSS. Built my first website and fell in love with web development!",
      icon: "🎯",
      color: "#6366f1"
    },
    {
      year: "2021",
      title: "JavaScript Magic ✨",
      description: "Discovered JavaScript and React. Mind = Blown! Started building interactive web apps.",
      icon: "⚡",
      color: "#a855f7"
    },
    {
      year: "2022",
      title: "Full Stack Journey 🚀",
      description: "Learned Node.js, Laravel, and databases. Now I can build complete applications from scratch!",
      icon: "🔥",
      color: "#ec4899"
    },
    {
      year: "2023",
      title: "Professional Developer 💼",
      description: "Started working on real projects, collaborating with teams, and building amazing products!",
      icon: "🎨",
      color: "#3b82f6"
    },
    {
      year: "2024",
      title: "Innovation & Growth 🌟",
      description: "Mastering advanced technologies, mentoring others, and creating impactful solutions!",
      icon: "🏆",
      color: "#10b981"
    }
  ]

  const funFacts = [
    { icon: <CoffeeIcon />, text: "Coffee is my coding fuel ☕", color: "#8b4513" },
    { icon: <MusicNoteIcon />, text: "Code better with music 🎵", color: "#ff6b6b" },
    { icon: <SportsEsportsIcon />, text: "Gamer at heart 🎮", color: "#4ecdc4" },
    { icon: <FlightTakeoffIcon />, text: "Love exploring new tech 🚀", color: "#a855f7" },
    { icon: <FavoriteIcon />, text: "Passionate about UI/UX ❤️", color: "#ec4899" },
    { icon: <AutoAwesomeIcon />, text: "Always learning something new ✨", color: "#ffd93d" }
  ]

  const techStack = {
    frontend: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind"],
    backend: ["Node.js", "Laravel", "Python", "MongoDB"],
    tools: ["Git", "VS Code", "Figma", "Postman"]
  }

  const hobbies = [
    { emoji: "💻", title: "Coding", desc: "Building cool stuff" },
    { emoji: "🎨", title: "Design", desc: "Creating beautiful UIs" },
    { emoji: "📚", title: "Reading Books", desc: "Knowledge seeker" },
    { emoji: "🍳", title: "Cooking", desc: "Culinary adventures" },
    { emoji: "🎮", title: "Gaming", desc: "Relaxing time" },
    { emoji: "🎵", title: "Music", desc: "My inspiration" },
    { emoji: "✈️", title: "Travel", desc: "Exploring world" },
    { emoji: "📖", title: "Learning", desc: "Always curious" }
  ]

  return (
    <div className={styles.personalInfoContainer}>
      <button onClick={() => navigate('/')} className={styles.backButton}>
        <ArrowBackIcon />
        <span>Back to Home</span>
      </button>

      {/* Hero Section with Animated Profile */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <div className={styles.profileImageWrapper}>
            <div className={styles.imageRing}></div>
            <div className={styles.imageRing2}></div>
            <div className={styles.imageRing3}></div>
            <img src={profileImages[currentImageIndex]} alt="Abdul Qadir" className={styles.profileImage} />
            <div className={styles.statusBadge}>
              <span className={styles.statusDot}></span>
              Available for work
            </div>
          </div>
          
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.wave}>👋</span> Hi, I'm Abdul Qadir
            </h1>
            <p className={styles.heroSubtitle}>
              <RocketLaunchIcon className={styles.rocketIcon} />
              Full Stack Developer & Digital Creator
            </p>
            <div className={styles.heroLogos}>
              <img src={qLogo} alt="Q Logo" className={styles.floatingLogo} />
              <img src={aqadirLogo} alt="Aqadir" className={styles.floatingLogo2} />
              <img src={reactIcon} alt="React" className={styles.floatingLogo3} />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className={styles.storySection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <EmojiEmotionsIcon className={styles.titleIcon} />
            My Story
          </h2>
        </div>
        
        <div className={styles.storyCards}>
          <div className={styles.storyCard}>
            <div className={styles.storyEmoji}>🎯</div>
            <h3>The Beginning</h3>
            <p>{myStory.intro}</p>
          </div>
          
          <div className={styles.storyCard}>
            <div className={styles.storyEmoji}>❤️</div>
            <h3>The Passion</h3>
            <p>{myStory.passion}</p>
          </div>
          
          <div className={styles.storyCard}>
            <div className={styles.storyEmoji}>💡</div>
            <h3>The Philosophy</h3>
            <p>{myStory.philosophy}</p>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <LocalFireDepartmentIcon className={styles.titleIcon} />
            My Journey
          </h2>
        </div>
        
        <div className={styles.timeline}>
          {timeline.map((item, index) => (
            <div 
              key={index}
              className={`${styles.timelineItem} ${index % 2 === 0 ? styles.timelineLeft : styles.timelineRight}`}
            >
              <div className={styles.timelineContent}>
                <div className={styles.timelineIcon} style={{ background: item.color }}>
                  {item.icon}
                </div>
                <div className={styles.timelineYear}>{item.year}</div>
                <h3 className={styles.timelineTitle}>{item.title}</h3>
                <p className={styles.timelineDesc}>{item.description}</p>
              </div>
            </div>
          ))}
          <div className={styles.timelineLine}></div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className={styles.techSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <AutoAwesomeIcon className={styles.titleIcon} />
            Tech Arsenal
          </h2>
        </div>
        
        <div className={styles.techGrid}>
          <div className={styles.techCategory}>
            <h3 className={styles.techCategoryTitle}>
              <span className={styles.techEmoji}>🎨</span>
              Frontend
            </h3>
            <div className={styles.techTags}>
              {techStack.frontend.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.techCategory}>
            <h3 className={styles.techCategoryTitle}>
              <span className={styles.techEmoji}>⚙️</span>
              Backend
            </h3>
            <div className={styles.techTags}>
              {techStack.backend.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
          
          <div className={styles.techCategory}>
            <h3 className={styles.techCategoryTitle}>
              <span className={styles.techEmoji}>🛠️</span>
              Tools
            </h3>
            <div className={styles.techTags}>
              {techStack.tools.map((tech, i) => (
                <span key={i} className={styles.techTag}>{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Fun Facts Section */}
      <section className={styles.funFactsSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <EmojiEmotionsIcon className={styles.titleIcon} />
            Fun Facts About Me
          </h2>
        </div>
        
        <div className={styles.funFactsGrid}>
          {funFacts.map((fact, index) => (
            <div 
              key={index} 
              className={styles.funFactCard}
              style={{ '--fact-color': fact.color }}
            >
              <div className={styles.funFactIcon}>{fact.icon}</div>
              <p className={styles.funFactText}>{fact.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies Section */}
      <section className={styles.hobbiesSection}>
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>
            <FavoriteIcon className={styles.titleIcon} />
            When I'm Not Coding
          </h2>
        </div>
        
        <div className={styles.hobbiesGrid}>
          {hobbies.map((hobby, index) => (
            <div key={index} className={styles.hobbyCard}>
              <div className={styles.hobbyEmoji}>{hobby.emoji}</div>
              <h3 className={styles.hobbyTitle}>{hobby.title}</h3>
              <p className={styles.hobbyDesc}>{hobby.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <h2 className={styles.ctaTitle}>Let's Build Something Amazing Together! 🚀</h2>
          <p className={styles.ctaText}>
            Got a project in mind? Want to collaborate? Or just want to say hi? 
            I'm always excited to connect with fellow developers and creators!
          </p>
          <div className={styles.ctaButtons}>
            <button onClick={() => navigate('/')} className={styles.ctaButton}>
              <span>Get In Touch</span>
              <AutoAwesomeIcon />
            </button>
            <a href="mailto:abudiayuu@gmail.com" className={styles.ctaButtonSecondary}>
              <span>Send Email</span>
            </a>
          </div>
        </div>
      </section>

      {/* Floating Elements */}
      <div className={styles.floatingElements}>
        <div className={styles.floatingEmoji} style={{ top: '10%', left: '5%' }}>💻</div>
        <div className={styles.floatingEmoji} style={{ top: '20%', right: '8%' }}>🚀</div>
        <div className={styles.floatingEmoji} style={{ top: '50%', left: '3%' }}>⚡</div>
        <div className={styles.floatingEmoji} style={{ top: '70%', right: '5%' }}>✨</div>
        <div className={styles.floatingEmoji} style={{ bottom: '15%', left: '10%' }}>🎨</div>
      </div>

      {/* Background Shapes */}
      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
        <div className={styles.shape4}></div>
      </div>
    </div>
  )
}

export default PersonalInfo
