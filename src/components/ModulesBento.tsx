"use client";

import { motion } from "framer-motion";
import styles from "./ModulesBento.module.css";
import { 
  Users, Target, BarChart3, TrendingUp, 
  Bot, BookOpen, GitMerge, MessageSquare, 
  LayoutList, Award 
} from "lucide-react";
import Image from "next/image";

export default function ModulesBento() {
  const modules = [
    { id: "m1", title: "Référentiel Métiers", desc: "Création dynamique de profils agents et mapping complet des compétences attendues par poste.", icon: <Users size={24} />, col: "span 2", row: "span 1" },
    { id: "m2", title: "Module OKR & KPI", desc: "Définition en cascade des objectifs stratégiques, opérationnels et individuels avec suivi temps réel.", icon: <Target size={24} />, col: "span 2", row: "span 1" },
    { id: "m3", title: "Évaluation Continue", desc: "Saisie automatisée des performances journalières et historisation pour éviter la navigation à vue.", icon: <BarChart3 size={24} />, col: "span 1", row: "span 2" },
    { id: "m4", title: "Scoring & Analytics", desc: "Calcul d'un score de performance global, pondéré par l'importance des tâches, offrant un ranking objectif.", icon: <TrendingUp size={24} />, col: "span 1", row: "span 1" },
    { id: "m5", title: "Assistant Coach IA", desc: "Identification proactive des lacunes et recommandations personnalisées pour encourager chaque agent quotidiennement.", icon: <Bot size={24} />, col: "span 2", row: "span 2", featured: true },
    { id: "m6", title: "LMS Intégré", desc: "Catalogue de formations métiers avec recommandation intelligente selon les faiblesses détectées.", icon: <BookOpen size={24} />, col: "span 1", row: "span 1" },
    { id: "m7", title: "Workflow Formations", desc: "Validation hiérarchique fluide et suivi du ROI des plans de montée en compétences.", icon: <GitMerge size={24} />, col: "span 1", row: "span 1" },
    { id: "m8", title: "Feedback 360°", desc: "Évaluations collaboratives par les supérieurs, les pairs et les usagers pour une note équitable.", icon: <MessageSquare size={24} />, col: "span 1", row: "span 1" },
    { id: "m9", title: "Espace Collaboratif", desc: "Messagerie interne sécurisée et gestion documentaire par service.", icon: <LayoutList size={24} />, col: "span 1", row: "span 1" },
    { id: "m10", title: "Gamification", desc: "Badges virtuels et défis collectifs pour stimuler l'engagement des agents de l'État.", icon: <Award size={24} />, col: "span 2", row: "span 1" },
  ];

  return (
    <section className="section-container" style={{ minHeight: "auto", padding: "8rem 2rem" }}>
      <div className={`container-inner ${styles.bentoInner}`}>
        <motion.div 
          className={styles.header}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="badge">Périmètre Fonctionnel PGI</div>
          <h2 className="h2">Une couverture applicative totale</h2>
          <p className="p-lead" style={{ textAlign: "center" }}>
            Conçu spécifiquement pour les exigences de l'ANIP, le PGI intègre 10 modules synergiques.
          </p>
        </motion.div>

        <div className={styles.bentoGrid}>
          {/* Central Logo for branding */}
          <motion.div 
            className={styles.centerLogoWrapper}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className={styles.centerLogoOrb}>
               <Image src="/assets/ANIP-Logo-HD.png" alt="ANIP Center" width={100} height={100} className={styles.centerLogoImg} />
            </div>
          </motion.div>

          {modules.map((mod, idx) => (
            <motion.div 
              key={mod.id}
              className={`glass ${styles.bentoCard} ${mod.featured ? styles.featuredCard : ''}`}
              style={{ gridColumn: mod.col, gridRow: mod.row }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>{mod.icon}</div>
                <h3 className={styles.cardTitle}>{mod.title}</h3>
              </div>
              <p className={styles.cardDesc}>{mod.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
