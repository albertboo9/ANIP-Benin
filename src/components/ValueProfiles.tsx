"use client";

import { motion } from "framer-motion";
import styles from "./ValueProfiles.module.css";
import { User, Users, Briefcase, CheckCircle2 } from "lucide-react";

export default function ValueProfiles() {
  const profiles = [
    {
      role: "Agent",
      icon: <User size={32} />,
      title: "Épanouissement & Clarté",
      benefits: ["Objectifs quotidiens limpides", "Feedback bienveillant en continu", "Parcours de carrière personnalisé"]
    },
    {
      role: "Manager",
      icon: <Users size={32} />,
      title: "Pilotage & Sérénité",
      benefits: ["Vue 360° sur l'équipe", "Alertes intelligentes de dérive", "Aide à la décision objective"]
    },
    {
      role: "Direction",
      icon: <Briefcase size={32} />,
      title: "Stratégie & Impact",
      benefits: ["ROI mesurable sur l'upskilling", "Alignement État/Administration", "Vision prospective temps réel"]
    }
  ];

  return (
    <section className="section-container">
      <div className={`container-inner ${styles.valueInner}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">Bénéfices Directs</div>
          <h2 className="h2">Une transformation pour chaque acteur</h2>
          <p className="p-lead">
            Le PGI n'est pas seulement un outil de contrôle, c'est un partenaire de croissance pour toute l'institution.
          </p>
        </motion.div>
        
        <div className={styles.cardsContainer}>
          {profiles.map((prof, index) => (
            <motion.div 
              key={index}
              className={`glass ${styles.profileCard}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.iconWrapper}>{prof.icon}</div>
              <div className={styles.roleLabel}>{prof.role}</div>
              <h3 className={styles.roleTitle}>{prof.title}</h3>
              
              <div className={styles.divider}></div>
              
              <ul className={styles.benefitsList}>
                {prof.benefits.map((benefit, i) => (
                  <li key={i}>
                    <CheckCircle2 size={16} color="var(--color-green)" />
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
