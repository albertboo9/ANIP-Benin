"use client";

import { motion } from "framer-motion";
import styles from "./Architecture.module.css";
import { Shield, Server, ArrowLeftRight, Lock } from "lucide-react";

export default function Architecture() {
  const cards = [
    {
      icon: <Lock size={28} />,
      title: "Sécurité de Grade Étatique",
      text: "Chiffrement AES-256 et isolation des données pour une protection absolue de la vie privée."
    },
    {
      icon: <Server size={28} />,
      title: "Infrastructure Scalable",
      text: "Déploiement en cluster haute disponibilité, capable d'absorber des millions de requêtes."
    },
    {
      icon: <ArrowLeftRight size={28} />,
      title: "Ouverture SI",
      text: "API RESTful et connecteurs natifs pour une intégration sans friction avec l'écosystème ANIP."
    }
  ];

  return (
    <section className="section-container" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className={`container-inner ${styles.archInner}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">Garanties Fondamentales</div>
          <h2 className="h2" style={{ textAlign: "center" }}>Souveraineté & Robustesse</h2>
          <p className="p-lead" style={{ textAlign: "center" }}>
            Un socle technique inébranlable conçu pour durer et accompagner la transformation numérique de l'ANIP sur le long terme.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {cards.map((card, idx) => (
            <motion.div 
              key={idx}
              className={`glass ${styles.archCard}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div className={styles.iconBox}>{card.icon}</div>
              <h3 className={styles.cardTitle}>{card.title}</h3>
              <p className={styles.cardText}>{card.text}</p>
            </motion.div>
          ))}
        </div>
        
        {/* Contact CTA in the final section */}
        <motion.div 
          className={styles.footerCTA}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
           <h3 className={styles.ctaTitle}>Prêt pour l'excellence opérationnelle ?</h3>
           <button className="btn-primary">Déployer la Solution</button>
        </motion.div>
      </div>
    </section>
  );
}
