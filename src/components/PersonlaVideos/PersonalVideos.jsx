import { useState } from 'react';
import styles from './PersonalVideos.module.css';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

const MY_YOUTUBE = [
  { id: 'QzKASrXApl8', label: 'My Work' },
  { id: 'd8v--v1A0T4', label: 'My Work' },
];

const CODING_VIDEOS = [
  { id: 'bMknfKXIFA8', title: 'React in 100 Seconds',           channel: 'Fireship'        },
  { id: 'Tn6-PIqc4UM', title: 'React in 2025 – Full Course',    channel: 'freeCodeCamp'    },
  { id: 'w7ejDZ8SWv8', title: 'JavaScript Full Course',         channel: 'freeCodeCamp'    },
  { id: 'fBNz5xF-Kx4', title: 'Node.js Crash Course',           channel: 'Traversy Media'  },
  { id: 'SqcY0GlETPk', title: 'React + TypeScript Tutorial',    channel: 'Jack Herrington' },
  { id: 'RVFAyFWO4go', title: 'CSS Tips Every Dev Should Know', channel: 'Kevin Powell'    },
];

/* ── YouTube card ── */
function VideoCard({ id, title, channel, label, featured }) {
  const [playing, setPlaying] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/maxresdefault.jpg`;

  return (
    <div className={`${styles.card} ${featured ? styles.featured : ''}`}>
      <div className={styles.cardMedia}>
        {playing ? (
          <iframe
            className={styles.iframe}
            src={`https://www.youtube.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
            title={title || id}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <div className={styles.thumb} onClick={() => setPlaying(true)}>
            <img src={thumb} alt={title || 'video'} className={styles.thumbImg} />
            <div className={styles.thumbOverlay}>
              <div className={styles.playRing}>
                <div className={styles.playBtn}>
                  <PlayArrowIcon style={{ fontSize: featured ? 40 : 30 }} />
                </div>
              </div>
            </div>
            {label && <span className={styles.myLabel}>{label}</span>}
          </div>
        )}
      </div>
      {title && (
        <div className={styles.cardInfo}>
          <p className={styles.cardTitle}>{title}</p>
          {channel && <span className={styles.cardChannel}>{channel}</span>}
        </div>
      )}
    </div>
  );
}

function PersonalVideos() {
  return (
    <section className={styles.container}>

      {/* ── My Videos ── */}
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <div className={styles.blockLabel}>
            <span className={styles.dot} style={{ background: '#5b52f0' }} />
            My Videos
          </div>
        </div>

        <div className={styles.myGrid}>
          {MY_YOUTUBE.map((v) => (
            <VideoCard key={v.id} id={v.id} label={v.label} featured />
          ))}
        </div>
      </div>

      {/* ── Coding Videos I Watch ── */}
      <div className={styles.block}>
        <div className={styles.blockHeader}>
          <div className={styles.blockLabel}>
            <span className={styles.dot} style={{ background: '#22c55e' }} />
            Coding Videos I Watch
          </div>
          <p className={styles.blockSub}>Resources that shaped how I code</p>
        </div>
        <div className={styles.codingGrid}>
          {CODING_VIDEOS.map((v) => (
            <VideoCard key={v.id} id={v.id} title={v.title} channel={v.channel} />
          ))}
        </div>
      </div>

    </section>
  );
}

export default PersonalVideos;
