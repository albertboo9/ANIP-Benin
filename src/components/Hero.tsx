"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { ArrowRight, Activity, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="section-container">
      {/* Decorative Brand Background Element */}
      <motion.div 
        className={styles.watermark}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 2 }}
      >
        ANIP
      </motion.div>

      <div className={`container-inner ${styles.heroInner}`}>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={styles.textContent}
        >
          <motion.div 
            className="badge"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <ShieldCheck size={16} style={{ marginRight: '0.5rem' }} /> Solution d'Etat Certifiée
          </motion.div>
          
          <h1 className="h1">
            L'excellence du <span className={styles.textGradient}>pilotage</span> au service de la nation.
          </h1>
          
          <p className="p-lead">
            Mesurez, analysez et optimisez la performance de vos agents avec une précision inégalée. 
            Une plateforme intelligente conçue pour l'excellence opérationnelle de l'ANIP.
          </p>

          <motion.div 
            className={styles.ctaGroup}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <button className="btn-primary">
              Découvrir le PGI <ArrowRight size={18} />
            </button>
            <button className={styles.btnSecondary}>
              Voir la Démo
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className={styles.visualContent}
        >
          <div className={styles.premiumVisual}>
            {/* Animated Mesh/Data Orbs */}
            <motion.div 
              className={styles.orb}
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 90, 0],
              }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            
            <div className={styles.visualCard}>
              <div className={styles.cardHeader}>
                <Activity size={20} color="var(--color-primary)" />
                <span>Indice Performance</span>
              </div>
              <div className={styles.cardValue}>+24.8%</div>
              <div className={styles.cardChart}>
                {/* Animated bar simulation */}
                {[0.4, 0.7, 0.5, 0.9, 0.6].map((h, i) => (
                  <motion.div 
                    key={i} 
                    className={styles.bar} 
                    initial={{ height: 0 }}
                    animate={{ height: `${h * 100}%` }}
                    transition={{ delay: 1 + (i * 0.1), duration: 0.8 }}
                  />
                ))}
              </div>
            </div>

            {/* Floating particles */}
            {[1, 2, 3].map((_, i) => (
              <motion.div 
                key={i}
                className={styles.particle}
                animate={{ 
                  y: [0, -100, 0],
                  opacity: [0, 0.5, 0],
                  x: [0, (i - 1) * 50, 0]
                }}
                transition={{ 
                  duration: 5 + i, 
                  repeat: Infinity, 
                  delay: i * 2,
                  ease: "easeInOut" 
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
