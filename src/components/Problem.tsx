"use client";

import { motion } from "framer-motion";
import styles from "./Problem.module.css";
import { EyeOff, AlertTriangle, TrendingDown, BookX } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <EyeOff size={28} />,
      title: "Angle Mort Décisionnel",
      desc: "L'absence de données consolidées crée une navigation à vue, risquée pour les objectifs stratégiques."
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "Subjectivité de l'Évaluation",
      desc: "Sans métriques claires, l'évaluation de la performance devient arbitraire, impactant le moral des équipes."
    },
    {
      icon: <TrendingDown size={28} />,
      title: "Inertie du Pilotage",
      desc: "Les cycles de reporting trop longs empêchent toute réaction rapide face aux baisses de productivité."
    },
    {
      icon: <BookX size={28} />,
      title: "Formation Inadaptée",
      desc: "Des plans d'upskilling déconnectés des besoins réels, entraînant un gaspillage de ressources."
    }
  ];

  return (
    <section className="section-container" style={{ backgroundColor: "transparent" }}>
      <div className={`container-inner ${styles.problemInner}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className={styles.header}
        >
          <div className="badge">Diagnostic Institutionnel</div>
          <h2 className="h2">Comprendre les défis de l'administration moderne</h2>
          <p className="p-lead">
            Le pilotage manuel de milliers d'agents présente des limites structurelles que nous avons identifiées et résolues.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {problems.map((prob, idx) => (
            <motion.div 
              key={idx} 
              className={`glass ${styles.card}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className={styles.iconBox}>{prob.icon}</div>
              <h3 className={styles.cardTitle}>{prob.title}</h3>
              <p className={styles.cardDesc}>{prob.desc}</p>
              
              {/* Subtle inner glow effect */}
              <div className={styles.glow} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
