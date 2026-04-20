"use client";

import { motion } from "framer-motion";
import styles from "./Upskilling.module.css";
import { BookOpen, TrendingUp, RefreshCw, Layers } from "lucide-react";

export default function Upskilling() {
  const steps = [
    { icon: <BookOpen size={24} />, label: "Formation" },
    { icon: <TrendingUp size={24} />, label: "Performance" },
    { icon: <RefreshCw size={24} />, label: "Ajustement" },
    { icon: <Layers size={24} />, label: "Expertise" }
  ];

  return (
    <section className="section-container">
      <div className={`container-inner ${styles.upInner}`}>
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className={styles.header}
        >
          <div className="badge">Amélioration Continue</div>
          <h2 className="h2">Le Cycle de l'Excellence</h2>
          <p className="p-lead">
            Notre plateforme crée une boucle d'apprentissage perpétuelle où chaque action métier devient une opportunité de développement.
          </p>
        </motion.div>
        
        <div className={styles.loopContainer}>
           {/* Connecting Path (SVG) */}
           <svg className={styles.svgPath} viewBox="0 0 400 400">
              <motion.circle 
                cx="200" cy="200" r="160" 
                fill="none" 
                stroke="var(--color-primary-soft)" 
                strokeWidth="2"
                strokeDasharray="10 10"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
           </svg>

           {steps.map((step, i) => {
              const angle = (i * (360 / steps.length)) - 90;
              const radius = 160;
              const x = Math.cos(angle * Math.PI / 180) * radius;
              const y = Math.sin(angle * Math.PI / 180) * radius;

              return (
                <motion.div
                  key={i}
                  className={styles.node}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  style={{ 
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                  }}
                >
                  <div className={styles.iconBox}>{step.icon}</div>
                  <span className={styles.nodeLabel}>{step.label}</span>
                </motion.div>
              );
           })}

           <div className={styles.centerOrb}>
              <div className={styles.orbInner}>ANIP</div>
           </div>
        </div>
      </div>
    </section>
  );
}
