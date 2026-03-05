import { useState } from 'react'
import styles from './projucts.module.css'

function Projucts() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Amazon E-commerce",
      description: "Full-featured e-commerce platform with shopping cart and checkout functionality.",
      tech: ["React", "CSS", "JavaScript"],
      link: "https://babilons-amazon.netlify.app/",
      image: "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?w=800&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 2,
      title: "Abe Garage",
      description: "Modern garage with smooth animations and responsive design.",
      tech: ["React", "CSS Modules", "Vite"],
      link: "https://garagefrontend-lime.vercel.app/",
      image: "https://media.istockphoto.com/id/1347150429/photo/professional-mechanic-working-on-the-engine-of-the-car-in-the-garage.jpg?s=612x612&w=0&k=20&c=5zlDGgLNNaWsp_jq_L1AsGT85wrzpdl3kVH-75S-zTU=",
      gradient: "linear-gradient(135deg, #ff6b6b 0%, #feca57 100%)"
    },
   
    {
      id: 3,
      title: "Cafe Delivery",
      description: "Modern cafe platform with menu browsing and order management.",
      tech: ["React", "Node.js", "MongoDB"],
      link: "https://ourscafe.netlify.app",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=800&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      id: 4,
      title: "Interactive Game",
      description: "Browser-based game with smooth animations and gameplay.",
      tech: ["JavaScript", "Canvas", "HTML5"],
      link: "https://github.com/abudiayu/snakeGame",
      image: "https://images.unsplash.com/photo-1612287230202-1ff1d85d1bdf?w=800&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
    },
    {
      id: 5,
      title: "Chat Application",
      description: "Real-time messaging with user authentication.",
      tech: ["React", "Socket.io", "Node.js"],
      link: "https://github.com/abudiayu/CHAT-APP",
      image: "https://images.unsplash.com/photo-1611746872915-64382b5c76da?w=800&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    
    {
      id: 6,
      title: "Netflix Clone",
      description: "Streaming platform interface with movie browsing and categories.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://abudiayu.github.io/netflix/",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
  ];

  return (
    <section className={styles.projectsSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          
          <h1 className={styles.title}> Projects</h1>
          <p className={styles.subtitle}>
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className={styles.projectsGrid}>
          {projects.map((project, index) => (
            <article 
              key={project.id} 
              className={`${styles.projectCard} ${hoveredCard === project.id ? styles.hovered : ''}`}
              style={{ '--delay': `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredCard(project.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className={styles.cardImage}>
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                />
                <div 
                  className={styles.imageGradient}
                  style={{ background: project.gradient }}
                ></div>
              </div>

              <div className={styles.cardContent}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.description}</p>

                <div className={styles.techStack}>
                  {project.tech.map((tech, i) => (
                    <span key={i} className={styles.techTag}>{tech}</span>
                  ))}
                </div>

                {project.link !== "#" && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.viewBtn}
                  >
                    <span>View Project</span>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8h10m0 0l-3-3m3 3l-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </a>
                )}
              </div>

              <div className={styles.cardNumber}>0{project.id}</div>
            </article>
          ))}
        </div>
      </div>

      <div className={styles.bgShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>
    </section>
  );
}

export default Projucts;
