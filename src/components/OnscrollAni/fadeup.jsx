import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

// fadeUpOnScroll.jsx
export default function FadeUp({ children, delay = 0, className = "" }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (inView) {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay }
      });
    }
  }, [controls, inView, delay]);

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 100 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
}
