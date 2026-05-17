import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

/**
 * Magnet — mouse-follow magnetic hover effect
 * @param {object} props
 * @param {React.ReactNode} props.children
 * @param {number} [props.strength=0.35] — how strong the pull is (0–1)
 * @param {string} [props.className]
 */
export default function Magnet({ children, strength = 0.35, className = '' }) {
  const ref = useRef(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    setPos({
      x: (e.clientX - cx) * strength,
      y: (e.clientY - cy) * strength,
    });
  };

  const handleMouseLeave = () => setPos({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: pos.x, y: pos.y }}
      transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      style={{ willChange: 'transform' }}
    >
      {children}
    </motion.div>
  );
}
