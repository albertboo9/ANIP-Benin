"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import styles from "./DashboardDemo.module.css";
import { Maximize2, Zap } from "lucide-react";

export default function DashboardDemo() {
  return (
    <section className="section-container" style={{ padding: 0 }}>
      {/* Immersive radial background */}
      <div className={styles.immersiveBg}>
        <div className={`container-inner ${styles.demoInner}`}>
          <div className={styles.textContent}>
            <div className="badge" style={{ background: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid rgba(255,255,255,0.2)' }}>
               Vision Opérationnelle
            </div>
            <h2 className="h2" style={{ color: 'white' }}>Une interface pensée pour la puissance.</h2>
            <p className="p-lead" style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '3rem' }}>
              Le tableau de bord centralise tous vos indicateurs clés dans un design épuré, permettant une lecture instantanée de la santé de votre administration.
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50, rotateX: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className={styles.perspectiveWrapper}
          >
            <div className={`glass ${styles.browserMockup}`}>
              <div className={styles.browserBar}>
                <div className={styles.circles}>
                  <span className={styles.circle} style={{ background: '#FF5F56' }}></span>
                  <span className={styles.circle} style={{ background: '#FFBD2E' }}></span>
                  <span className={styles.circle} style={{ background: '#27C93F' }}></span>
                </div>
                <div className={styles.urlBar}>pgi.anip.bj/performance_cockpit</div>
                <Maximize2 size={16} color="rgba(255,255,255,0.5)" />
              </div>
              
              <div className={styles.browserContent}>
                <Image 
                  src="/assets/V0 PGI PERFORMANCE ANIP 0426.png"
                  alt="Dashboard ANIP Performance"
                  width={1600}
                  height={900}
                  className={styles.dashboardImage}
                />
                
                {/* Floating Insight Tags */}
                <motion.div 
                  className={styles.insightTag}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.2 }}
                  style={{ top: '20%', right: '-30px' }}
                >
                  <Zap size={14} /> Score IA: 82/100
                </motion.div>
                
                <motion.div 
                  className={styles.insightTag}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.5 }}
                  style={{ bottom: '25%', left: '-20px' }}
                >
                   +15% Croissance
                </motion.div>
              </div>
            </div>
            
            {/* Soft Shadow under the mockup */}
            <div className={styles.mockupShadow}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
