"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "./SplashLoader.module.css";

export default function SplashLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800); // Loader disappears after 2.8s
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div 
      className={styles.loaderContainer}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      animate={{ opacity: loading ? 1 : 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      onAnimationComplete={() => !loading}
    >
      <div className={styles.loaderContent}>
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image 
            src="/assets/ANIP-Logo-HD.png"
            alt="ANIP-Benin"
            width={180}
            height={180}
            priority
            className={styles.logo}
          />
        </motion.div>
        
        <motion.div 
          className={styles.textContainer}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
           <h1 className={styles.title}>PGI Performance</h1>
           <div className={styles.progressBarContainer}>
              <motion.div 
                className={styles.progressBar}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
           </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
