"use client";

import { motion } from "framer-motion";
import styles from "./Solution.module.css";
import { Database, LineChart, BrainCircuit, GraduationCap, ArrowRight } from "lucide-react";

export default function Solution() {
  const nodes = [
    { id: "data", icon: <Database size={24} />, label: "Gisements de Données", sub: "Collecte RH & Métier", color: "var(--color-primary)" },
    { id: "kpi", icon: <LineChart size={24} />, label: "Moteur de Pilotage", sub: "Calcul OKR/KPI Auto", color: "var(--color-accent)" },
    { id: "learn", icon: <GraduationCap size={24} />, label: "Hub de Compétences", sub: "Parcours LMS Adaptatif", color: "var(--color-green)" },
  ];

  return (
    <section className="section-container">
      <div className={`container-inner ${styles.solutionInner}`}>
        <div className={styles.grid}>
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={styles.textContent}
          >
            <div className="badge">L'Architecture du Succès</div>
            <h2 className="h2">Un écosystème de données piloté par l'IA</h2>
            <p className="p-lead">
              Le PGI ANIP n'est pas un outil isolé. C'est un moteur centralisé qui transforme chaque donnée brute en levier de performance stratégique.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <div className={styles.check}>✓</div>
                <span>Interconnexion temps réel avec les SI existants</span>
              </div>
              <div className={styles.featureItem}>
                <div className={styles.check}>✓</div>
                <span>Analyse prédictive des trajectoires agents</span>
              </div>
            </div>
          </motion.div>

          <div className={styles.diagramContainer}>
            <div className={styles.diagram}>
              {/* Central AI Orb */}
              <motion.div 
                className={styles.centralNode}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(37, 99, 235, 0.2)",
                    "0 0 60px rgba(37, 99, 235, 0.4)",
                    "0 0 20px rgba(37, 99, 235, 0.2)"
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <BrainCircuit size={48} color="white" />
                <span className={styles.nodeLabel}>Moteur IA</span>
              </motion.div>

              {/* Orbital Nodes */}
              {nodes.map((node, i) => (
                <motion.div
                  key={node.id}
                  className={`${styles.orbitalNode} ${styles[node.id]}`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.2), type: "spring" }}
                >
                  <div className={styles.orbIcon} style={{ background: node.color + "15", color: node.color }}>
                    {node.icon}
                  </div>
                  <div className={styles.orbText}>
                    <div className={styles.orbTitle}>{node.label}</div>
                    <div className={styles.orbSub}>{node.sub}</div>
                  </div>
                  
                  {/* Connecting Line Simulation */}
                  <div className={styles.connector}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
