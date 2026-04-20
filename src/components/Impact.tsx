"use client";

import { motion } from "framer-motion";
import styles from "./Impact.module.css";
import { ArrowUpRight, CheckCircle, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const Counter = ({ from, to, duration, suffix = "%" }: { from: number, to: number, duration: number, suffix?: string }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start: number | null = null;
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / (duration * 1000), 1);
      setCount(Math.floor(progress * (to - from) + from));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [from, to, duration]);

  return <span>{count}{suffix}</span>;
}

export default function Impact() {
  return (
    <section className="section-container" style={{ backgroundColor: "#0F172A", color: "white" }}>
      <div className={`container-inner ${styles.impactInner}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
             Métriques de Succès
          </div>
          <h2 className="h2" style={{ color: "white" }}>L'Impact sur l'Institution</h2>
          <p className="p-lead" style={{ color: "rgba(255,255,255,0.6)" }}>
            Des résultats tangibles qui témoignent de la transformation profonde de la performance publique.
          </p>
        </motion.div>

        <div className={styles.statsGrid}>
          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={styles.statIcon}><TrendingUp size={24} color="#2563EB" /></div>
            <div className={styles.statNumber}><Counter from={0} to={45} duration={2} /></div>
            <div className={styles.statLabel}>Engagement Collaborateurs</div>
          </motion.div>

          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className={styles.statIcon}><CheckCircle size={24} color="#10B981" /></div>
            <div className={styles.statNumber}><Counter from={0} to={92} duration={2} /></div>
            <div className={styles.statLabel}>Précision du Pilotage</div>
          </motion.div>

          <motion.div 
            className={styles.statCard}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className={styles.statIcon}><ArrowUpRight size={24} color="#60A5FA" /></div>
            <div className={styles.statNumber}><Counter from={0} to={30} duration={2} /></div>
            <div className={styles.statLabel}>Réduction des Risques</div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
