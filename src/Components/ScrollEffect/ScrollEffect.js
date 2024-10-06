// components/ScrollEffect.js
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const ScrollEffect = ({ children, background, nextBackground }) => {
  const { scrollYProgress } = useViewportScroll();

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const nextOpacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="relative">
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          opacity,
        }}
      />
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${nextBackground})`,
          backgroundSize: 'cover',
          opacity: nextOpacity,
        }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
};

export default ScrollEffect;
