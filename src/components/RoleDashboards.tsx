"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./RoleDashboards.module.css";
import { User, Users, Briefcase, ListChecks, Bell, BarChart, GraduationCap, ArrowRight } from "lucide-react";

export default function RoleDashboards() {
  const [activeTab, setActiveTab] = useState("agent");

  const roles = [
    { id: "agent", label: "Agent ANIP", icon: <User size={20} /> },
    { id: "manager", label: "Chef de Service", icon: <Users size={20} /> },
    { id: "direction", label: "Direction Générale", icon: <Briefcase size={20} /> },
  ];

  const content = {
    agent: {
      title: "Dashboard Individuel",
      desc: "Une visualisation claire de l'impact personnel et des opportunités d'évolution.",
      kpis: ["Score Personnel", "Objectifs Quotidiens", "Recommandations IA", "Modules de Formation Requis"],
      color: "var(--color-primary)"
    },
    manager: {
      title: "Cockpit Managérial",
      desc: "Outils de pilotage d'équipe pour détecter les baisses de régime et réagir en temps réel.",
      kpis: ["Performance Équipe", "Alertes Dérives", "Analyse Comparative", "Suivi Formations Équipe"],
      color: "var(--color-accent)"
    },
    direction: {
      title: "Tour de Contrôle Stratégique",
      desc: "La vision macro de l'institution pour garantir un ROI optimal sur le capital humain.",
      kpis: ["Performance Globale", "Indicateurs Stratégiques", "Suivi des Engagements", "Synthèse RH État"],
      color: "var(--color-text-primary)"
    }
  };

  const current = content[activeTab as keyof typeof content];

  return (
    <section className="section-container" style={{ backgroundColor: "rgba(37, 99, 235, 0.02)", minHeight: "auto", padding: "8rem 2rem" }}>
      <div className={`container-inner ${styles.rolesInner}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">Vues Contextuelles</div>
          <h2 className="h2">Un pilotage adapté à chaque strate</h2>
          <p className="p-lead">
            Le système ajuste dynamiquement ses tableaux de bord selon le niveau de responsabilité de l'utilisateur.
          </p>
        </motion.div>

        <div className={styles.tabsContainer}>
          <div className={styles.tabsList}>
            {roles.map(role => (
              <button 
                key={role.id}
                className={`${styles.tabBtn} ${activeTab === role.id ? styles.activeTab : ''}`}
                onClick={() => setActiveTab(role.id)}
              >
                {role.icon} {role.label}
              </button>
            ))}
          </div>

          <div className={styles.tabContentPanel}>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className={`glass ${styles.activeCard}`}
              >
                 <div className={styles.cardHeader} style={{ borderLeft: `6px solid ${current.color}` }}>
                    <h3>{current.title}</h3>
                    <p>{current.desc}</p>
                 </div>
                 
                 <div className={styles.kpiGrid}>
                    {current.kpis.map((kpi, idx) => (
                      <div key={idx} className={styles.kpiItem}>
                         <div className={styles.checkIcon}><ListChecks size={18} color={current.color} /></div>
                         <span>{kpi}</span>
                      </div>
                    ))}
                 </div>

                 <button className={styles.demoLink} style={{ color: current.color }}>
                   Voir la maquette {current.title} <ArrowRight size={16} />
                 </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
