import { React,useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Home/Home';
import Skill from './Skill/Skill';
import About from './About/About';
import Projucts from './Projucts/Projucts';
import Contact from './Contact/Contact';
import PersonalInfo from './PersonalInfo/PersonalInfo';
import { KeyboardArrowUp } from '@mui/icons-material';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sectionsToHide = [
      document.getElementById('contact'),
      document.getElementById('projects'),
    ].filter(Boolean);

    if (sectionsToHide.length === 0) return;

    const visible = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visible.add(entry.target);
          } else {
            visible.delete(entry.target);
          }
        });
        setShowSidebar(visible.size === 0);
      },
      { threshold: 0.1, rootMargin: '-100px 0px 0px 0px' }
    );

    sectionsToHide.forEach((el) => observer.observe(el));
    return () => sectionsToHide.forEach((el) => observer.unobserve(el));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Router>
      <Routes>
        <Route path="/personal-info" element={<PersonalInfo />} />
        <Route path="/" element={
          <>
            <Home showSidebar={showSidebar} />
            <Skill/>
            <About/>
            <Projucts/>
            <Contact/>
            
            {showScrollTop && (
              <button 
                onClick={scrollToTop} 
                className="scroll-to-top"
                aria-label="Scroll to top"
              >
                <KeyboardArrowUp />
              </button>
            )}
          </>
        } />
      </Routes>
    </Router>
  )
}

export default App;
