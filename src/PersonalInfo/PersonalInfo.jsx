import PersonalHeader from '../components/PersonalInfoHeader/PersonalHeader';
import PersonalBody from '../components/PersonalInfoBody/PersonalBody';
import PersonalVideos from '../components/PersonlaVideos/PersonalVideos';
import Footer from '../components/Footer/Footer';
import HomeIcon from '@mui/icons-material/Home';
import { useNavigate } from 'react-router-dom';
import styles from './personalInfo.module.css';

function PersonalInfo() {
  const navigate = useNavigate();
  return (
    <>
      <button className={styles.homeBtn} onClick={() => navigate('/')} aria-label="Go to home">
        <HomeIcon style={{ fontSize: 18 }} />
        <span>Home</span>
      </button>
      {/* <PersonalHeader/> */}
      <PersonalBody/>
      <PersonalVideos/>
      <Footer/>
    </>
  )
}

export default PersonalInfo;
