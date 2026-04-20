"use client";

import { motion } from "framer-motion";
import styles from "./AiSimulation.module.css";
import { Bot, Sparkles, UserRound, ArrowRight, Image as ImageIcon } from "lucide-react";
import Image from "next/image";

export default function AiSimulation() {
  const chatVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 15 }
    }
  };

  return (
    <section className="section-container" style={{ backgroundColor: "var(--color-bg)" }}>
      <div className={`container-inner ${styles.aiInner}`}>
        <div className={styles.textContent}>
          <div className="badge" style={{ background: 'var(--color-primary-soft)', color: 'var(--color-primary)' }}>
             Intelligence Artificielle
          </div>
          <h2 className="h2">Le Coach IA : Votre partenaire de croissance</h2>
          <p className="p-lead">
            Le vrai différenciateur. Notre IA ne se contente pas de surveiller, elle analyse les trajectoires et propose des solutions concrètes pour chaque agent.
          </p>
          
          <div className={styles.aiCapabilities}>
             <div className={styles.capItem}>
                <Sparkles size={18} color="var(--color-primary)" />
                <span>Recommandations personnalisées</span>
             </div>
             <div className={styles.capItem}>
                <ImageIcon size={18} color="var(--color-primary)" />
                <span>Insights visuels prédictifs</span>
             </div>
          </div>
        </div>

        <div className={styles.simulation}>
          <div className={`glass ${styles.chatWindow}`}>
             <div className={styles.chatHeader}>
                <div className={styles.aiStatus}>
                   <div className={styles.pulseDot}></div>
                   <span>Coach IA ANIP en ligne</span>
                </div>
                <Bot size={18} color="var(--color-primary)" />
             </div>
            
            <div className={styles.messages}>
              <motion.div 
                className={`${styles.message} ${styles.messageBot}`}
                variants={chatVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className={styles.avatar} style={{ background: "var(--color-primary)" }}><Bot size={18} color="white"/></div>
                <div className={styles.bubble}>
                  Bonjour Paul ! J'ai remarqué une baisse de 12% sur ton taux de traitement des dossiers biométriques ce matin.
                </div>
              </motion.div>

              <motion.div 
                className={`${styles.message} ${styles.messageUser}`}
                variants={chatVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 2 }}
              >
                <div className={styles.bubble}>
                  Oui, j'ai des difficultés sur les nouveaux formulaires.
                </div>
                <div className={styles.avatar} style={{ background: "var(--color-text-secondary)" }}><UserRound size={18} color="white"/></div>
              </motion.div>

              <motion.div 
                className={`${styles.message} ${styles.messageBot}`}
                variants={chatVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 3.5 }}
              >
                <div className={styles.avatar} style={{ background: "var(--color-primary)" }}><Bot size={18} color="white"/></div>
                <div className={styles.bubble}>
                  Pas de souci ! J'ai débloqué pour toi le module <span style={{fontWeight: 700}}>Fast-Track Biométrie</span> (10 min). Tu veux le lancer ?
                  <div className={styles.actionCard}>
                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem', width: '100%', justifyContent: 'center' }}>
                      Optimiser mes Compétences <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
