"use client";

import { motion } from "framer-motion";
import styles from "./HowItWorks.module.css";
import { Search, Zap, MessageSquare, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { 
      icon: <Search size={24} />, 
      title: "Collecte & Ingestion", 
      desc: "Synchronisation automatique des données de performance et d'activité métier." 
    },
    { 
      icon: <Zap size={24} />, 
      title: "Analyse Augmentée", 
      desc: "Détection instantanée des signaux faibles et des écarts de performance." 
    },
    { 
      icon: <MessageSquare size={24} />, 
      title: "Coaching Proactif", 
      desc: "L'IA génère des recommandations personnalisées pour chaque agent." 
    },
    { 
      icon: <TrendingUp size={24} />, 
      title: "Excellence Continue", 
      desc: "Validation des progrès et réajustement des objectifs en temps réel." 
    }
  ];

  return (
    <section className="section-container" style={{ backgroundColor: "rgba(37, 99, 235, 0.02)" }}>
      <div className={`container-inner ${styles.howInner}`}>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className={styles.header}
        >
          <div className="badge">Processus Opérationnel</div>
          <h2 className="h2">Du flux de données à l'excellence</h2>
        </motion.div>
        
        <div className={styles.timeline}>
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              className={styles.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <div className={styles.iconCircle}>{step.icon}</div>
              <div className={`glass ${styles.stepContent}`}>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDesc}>{step.desc}</p>
              </div>
              
              {/* Path line connection logic in CSS */}
            </motion.div>
          ))}
          
          <div className={styles.verticalLine}></div>
        </div>
      </div>
    </section>
  );
}
