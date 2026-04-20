"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <motion.header 
      className={`glass ${styles.header}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className={`container-inner ${styles.headerInner}`}>
        <div className={styles.logoGroup}>
          <Image 
            src="/assets/ANIP-Logo-HD.png"
            alt="ANIP Benin"
            width={60}
            height={60}
            className={styles.logo}
          />
          <div className={styles.divider}></div>
          <span className={styles.brandTitle}>ANIP Bénin</span>
        </div>
        
        <nav className={styles.nav}>
          <a href="#" className={styles.navLink}>À propos</a>
          <a href="#" className={styles.navLink}>Impact</a>
        </nav>
      </div>
    </motion.header>
  );
}
