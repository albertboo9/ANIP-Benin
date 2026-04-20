"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { 
  Target, 
  Settings, 
  BarChart3, 
  BrainCircuit, 
  GraduationCap, 
  Users, 
  CheckCircle2, 
  TrendingUp, 
  Workflow, 
  MessageSquare,
  Gamepad2,
  LayoutDashboard,
  ShieldAlert,
  Zap
} from "lucide-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import Lenis from "@studio-freight/lenis";
import styles from "./CahierDesCharges.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? 100 : -100,
    y: direction === 0 ? 50 : 0,
    scale: 0.9,
    filter: "blur(15px)",
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1] as any, // Type cast for custom bezier
    },
  },
  exit: (direction: number) => ({
    opacity: 0,
    x: direction === 0 ? 0 : direction > 0 ? -50 : 50,
    y: direction === 0 ? -50 : 0,
    scale: 0.95,
    filter: "blur(10px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1] as any,
    },
  }),
} as const;

const cardHoverVariants = {
  rest: { 
    scale: 1,
    y: 0,
    boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)"
  },
  hover: { 
    scale: 1.02,
    y: -8,
    boxShadow: "0 25px 50px -12px rgba(30, 64, 175, 0.15)",
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const iconAnimation = {
  rest: { scale: 1, rotate: 0 },
  hover: {
    scale: 1.2,
    rotate: 5,
    transition: {
      type: "spring" as const,
      stiffness: 300,
      damping: 10
    }
  }
};

const titleVariants = {
  hidden: { 
    opacity: 0, 
    y: -20,
    filter: "blur(4px)"
  },
  visible: { 
    opacity: 1, 
    y: 0, 
    filter: "blur(0px)",
    transition: {
      duration: 1.8,
      ease: [0.33, 1, 0.68, 1] as any, // Type cast for custom bezier
    }
  }
};

const imageVariants = {
  hidden: { 
    opacity: 0, 
    scale: 1.1,
    filter: "blur(20px)",
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    filter: "blur(0px)",
    transition: { 
      duration: 1.6, 
      ease: [0.21, 0.47, 0.32, 0.98],
      delay: 0.5
    }
  }
} as const;

function Section({ title, icon: Icon, children, id }: { title: string, icon: React.ElementType, children: React.ReactNode, id?: string }) {
  return (
    <motion.section 
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-15% 0px -15% 0px" }}
      variants={containerVariants}
      id={id}
    >
      <motion.h2 
        className={styles.sectionTitle} 
        variants={itemVariants}
        custom={0}
      >
        {Icon && <Icon size={32} className="text-primary" />}
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

function Card({ title, children, icon: Icon, className = "", index = 0 }: { title?: string, children: React.ReactNode, icon?: React.ElementType, className?: string, index?: number }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const direction = index % 2 === 0 ? -1 : 1; // Alternating slide directions

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <motion.div
      className={`${styles.card} ${className}`}
      variants={itemVariants}
      custom={direction}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, margin: "-10% 0px -10% 0px" }}
      whileHover="hover"
      onMouseMove={handleMouseMove}
      style={{
        // @ts-ignore
        "--mouse-x": `${mousePosition.x}px`,
        "--mouse-y": `${mousePosition.y}px`,
      }}
    >
      <motion.div
        className={styles.cardGlow}
        variants={{
          rest: { opacity: 0 },
          hover: { opacity: 1 }
        }}
      />
      {title && (
        <div className={styles.cardHeader}>
          <h3 className={styles.cardHeaderTitle}>{title}</h3>
        </div>
      )}
      <motion.div
        style={{ position: 'relative', zIndex: 1 }}
        variants={{
          rest: { y: 0 },
          hover: { y: -2 }
        }}
      >
        {Icon && (
          <motion.div
            className={styles.iconWrapper}
            style={{ width: "40px", height: "40px", marginBottom:"1.5rem" }}
            variants={iconAnimation }
          >
            <Icon size={24} />
          </motion.div>
        )}
        {children}
      </motion.div>
    </motion.div>
  );
}

function List({ items }: { items: (string | { text: string, subItems?: string[] })[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => {
        const text = typeof item === 'string' ? item : item.text;
        const subItems = typeof item === 'object' ? item.subItems : null;
        
        return (
          <motion.li key={idx} className={styles.listItem} variants={itemVariants}>
            <div className={styles.iconWrapper}>
              <CheckCircle2 size={14} />
            </div>
            <div>
              <span>{text}</span>
              {subItems && (
                <ul className={styles.subList}>
                  {subItems.map((sub, sIdx) => (
                    <li key={sIdx} className={styles.subListItem}>{sub}</li>
                  ))}
                </ul>
              )}
            </div>
          </motion.li>
        );
      })}
    </ul>
  );
}

export default function CahierDesCharges() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className={styles.main}>
      {init && (
        <Particles
          id="tsparticles"
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            fpsLimit: 120,
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                repulse: {
                  distance: 100,
                  duration: 0.4,
                },
              },
            },
            particles: {
              color: {
                value: ["#2563eb", "#008751", "#FCD116"],
              },
              links: {
                color: "#cbd5e1",
                distance: 150,
                enable: true,
                opacity: 0.3,
                width: 1,
              },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: false,
                speed: 1.5,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  width: 800,
                  height: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.2,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 3 },
              },
            },
            detectRetina: true,
          }}
          className={styles.particles}
        />
      )}
      <div className={styles.container}>
        <header className={styles.documentHeader}>

          <motion.h1 
            className={styles.title} 
            variants={titleVariants}
            initial="hidden"
            animate="visible"
          >
            Mini Cahier des Charges Fonctionnel<br />
            <span className={styles.titleAccent}>PGI de Pilotage et Optimisation de la Performance des Agents – ANIP</span>
          </motion.h1>
          
          <motion.div 
            className={styles.v0Container}
            variants={imageVariants}
            initial="hidden"
            animate="visible"
          >
            <div className={styles.imageGlow}></div>
            <div className={styles.v0ImageWrapper}>
              <Image 
                src="/assets/V0 PGI PERFORMANCE ANIP 0426.png"
                alt="V0 PGI PERFORMANCE ANIP"
                width={1200}
                height={675}
                className={styles.v0Image}
                priority
              />
            </div>
            <p className={styles.imageCaption}>Aperçu de la Vision V0 du Progiciel</p>
          </motion.div>
        </header>

        <Section title=" Contexte et objectifs" icon={Target} id="contexte">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={0}>
              <p className={styles.text}>L'ANIP souhaite se doter d'un progiciel de gestion intégré (PGI) permettant de :</p>
              <div className={styles.grid} style={{ marginTop: 0 }}>
                <div style={{ gridColumn: 'span 6' }}>
                  <List items={[
                    "Suivre et améliorer la performance des agents en temps réel",
                    "Structurer l'évaluation quotidienne des agents",
                    "Identifier automatiquement les écarts de performance"
                  ]} />
                </div>
                <div style={{ gridColumn: 'span 6' }}>
                  <List items={[
                    "Proposer des actions correctives (coaching, formation, feedback)",
                    "Développer les compétences via un système intelligent d'upskilling"
                  ]} />
                </div>
              </div>
            </Card>
          </div>
        </Section>

        <Section title=" Objectifs fonctionnels principaux" icon={Settings} id="objectifs">
          <div className={styles.grid}>
            <Card title="Piloter la Performance" icon={TrendingUp} className={styles.cardMedium} index={1}>
               <p className={styles.text}>Le PGI doit permettre de :</p>
               <List items={[
                "Définir et piloter les OKR (Objectives & Key Results)",
                "Suivre les KPI métiers par agent",
                "Évaluer les performances quotidiennement et en temps réel",
                "Générer un scoring dynamique des agents"
              ]} />
            </Card>
            <Card title="Optimiser & Engager" icon={Zap} className={styles.cardMedium} index={2}>
               <List items={[
                "Identifier les écarts de performance vs objectifs",
                "Proposer des recommandations intelligentes (IA)",
                "Intégrer un système de formation continue (LMS)",
                "Favoriser la collaboration et le feedback 360°",
                "Mettre en place un système de gamification pour motiver"
              ]} />
            </Card>
          </div>
        </Section>

        <Section title=" Périmètre fonctionnel" icon={Workflow} id="perimetre">
          <div className={styles.grid}>
            <Card title="1 Gestion des profils et référentiel métiers" icon={Users} className={styles.cardMedium} index={3}>
              <p className={styles.text}>Création des profils agents :</p>
              <List items={["Identité", "Fonction / métier", "Service / direction", "Rôle et responsabilités"]} />
              <p className={styles.text}>Référentiel métiers :</p>
              <List items={["Définition des compétences attendues", "Mapping compétences ↔ postes"]} />
            </Card>

            <Card title="2 Module OKR & KPI" icon={BarChart3} className={styles.cardMedium} index={4}>
              <p className={styles.text}>Définition des objectifs :</p>
              <List items={["Objectifs stratégiques (organisation)", "Objectifs opérationnels (service)", "Objectifs individuels (agent)"]} />
              <p className={styles.text}>Définition des KPI associés :</p>
              <List items={["Quantitatifs (ex : nombre de dossiers traités)", "Qualitatifs (ex : satisfaction usagers, taux de validation des dossiers )"]} />
            </Card>

            <Card title="3 Module d'évaluation continue" icon={CheckCircle2} className={styles.cardSmall} index={5}>
              <p className={styles.text}>Saisie automatique et/ou manuelle des performances</p>
              <p className={styles.text}>Évaluation journalière basée sur :</p>
              <List items={["KPI", "Tâches réalisées", "Qualité du travail", "Historisation des performances", "Alertes en cas de sous-performance"]} />
            </Card>

            <Card title="4 Module de scoring et analytics" icon={TrendingUp} className={styles.cardSmall} index={6}>
              <p className={styles.text}>Calcul automatique d'un score de performance global</p>
              <p className={styles.text}>Pondération par :</p>
              <List items={["KPI", "Importance des tâches", "Priorités stratégiques", "Classement des agents (ranking)"]} />
            </Card>

            <Card title="5 Module IA – Coaching & recommandations" icon={BrainCircuit} className={styles.cardSmall} index={7}>
              <p className={styles.text}>Assistant intelligent (chat + suggestion + appel)</p>
              <p className={styles.text}>Fonctionnalités :</p>
              <List items={[
                "Analyse des performances individuelles",
                "Identification des lacunes",
                { text: "Recommandations personnalisées :", subItems: ["Actions correctives", "Conseils pratiques"] },
                { text: "Boîte de dialogue interactive :", subItems: ["Coaching quotidien", "Motivation et encouragement", "Aide à la priorisation"] }
              ]} />
            </Card>

            <Card title="6 Module LMS (formation en ligne)" icon={GraduationCap} className={styles.cardMedium} index={8}>
              <p className={styles.text}>Catalogue de formations :</p>
              <List items={["Internes", "Externes"]} />
              <p className={styles.text}>Recommandation automatique de formations selon :</p>
              <List items={["Faiblesses détectées", "Objectifs à atteindre"]} />
            </Card>

            <Card title="7 Workflow de gestion des formations" icon={Workflow} className={styles.cardMedium} index={9}>
              <List items={[
                "Demande de formation par agent",
                "Validation hiérarchique",
                "Suivi du plan de formation",
                "Engagement et suivi des résultats",
                "Historique des formations suivies"
              ]} />
            </Card>

            <Card title="8 Module de feedback 360°" icon={MessageSquare} className={styles.cardSmall} index={10}>
              <p className={styles.text}>Feedback multi-acteurs :</p>
              <List items={["Supérieurs hiérarchiques", "Collègues (pairs)", "Usagers"]} />
              <List items={["Système de notation + commentaires", "Intégration dans le scoring global"]} />
            </Card>

            <Card title="9 Module collaboratif" icon={Users} className={styles.cardSmall} index={11}>
              <List items={["Messagerie interne", "Espaces de travail par équipe/ service", "Partage de documents", "Gestion de projets simples"]} />
            </Card>

            <Card title="10 Module de gamification" icon={Gamepad2} className={styles.cardSmall} index={12}>
              <p className={styles.text}>Système de points et badges pour stimuler les agents</p>
              <List items={["Classements?", "Défis et objectifs collectifs", "Récompenses symboliques"]} />
            </Card>
          </div>
        </Section>

        <Section title=" Tableaux de bord" icon={LayoutDashboard} id="dashboards">
          <motion.div className={styles.dashboardShowcase} variants={itemVariants} custom={0}>
            <div className={styles.dashboardImageWrapper}>
              <Image
                src="/assets/V0 PGI PERFORMANCE ANIP 0426.png"
                alt="Dashboard PGI Performance ANIP"
                width={900}
                height={500}
                className={styles.dashboardImage}
              />
            </div>
            <p className={styles.dashboardCaption}>
              Vue d'ensemble du PGI - Suivi de la performance des agents en temps réel
            </p>
          </motion.div>
          <div className={styles.grid}>
            <Card title="Dashboard agent" icon={LayoutDashboard} className={styles.cardSmall} index={13}>
              <List items={["Score personnel", "KPI", "Objectifs", "Recommandations", "formation (demandees, validées, en cours)"]} />
            </Card>
            <Card title="Dashboard manager/ chef de service" icon={Users} className={styles.cardSmall} index={14}>
              <List items={["Performance equipe", "Alertes", "Analyse comparative", "Suivi des demandes de formation"]} />
            </Card>
            <Card title="Dashboard direction" icon={TrendingUp} className={styles.cardSmall} index={15}>
              <List items={["Performance globale", "Indicateurs strategiques", "Suivi des engagements"]} />
            </Card>
          </div>
        </Section>

        <Section title=" Exigences fonctionnelles clés" icon={Zap} id="exigences">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={16}>
              <List items={[
                "Mise à jour des données en temps réel",
                "Système de recommandation intelligent (IA)",
                "Personnalisation selon le métier de l'utilisateur",
                "Accessibilité web et mobile",
                "Interface simple, ergonomique et intuitive"
              ]} />
            </Card>
          </div>
        </Section>

        <Section title=" Autres points clés du projet" icon={ShieldAlert} id="points-cles">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={17}>
              <List items={[
                "Sécurité des données",
                "Haute disponibilité du progiciel",
                "Scalabilité (nombre d'agents élevé)",
                "Interopérabilité avec systèmes existants ANIP à prévoir",
                "Traçabilité des actions"
              ]} />
            </Card>
          </div>
        </Section>

        <Section title=" Utilisateurs du système" icon={Users} id="utilisateurs">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={18}>
              <List items={["Agent ANIP", "Chef de service", "DRH", "Direction générale", "Administrateur système", "Usager (pour feedback)"]} />
            </Card>
          </div>
        </Section>

        <Section title=" Indicateurs de succès" icon={CheckCircle2} id="succes">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={19}>
              <List items={[
                "Amélioration de la performance individuelle",
                "Augmentation du taux de formation complétée",
                "Réduction des écarts de performance",
                "Engagement des agents (usage plateforme)",
                "Progression de la satisfaction des usagers"
              ]} />
            </Card>
          </div>
        </Section>

        <Section title=" Évolutions possibles à moyen terme" icon={BrainCircuit} id="evolutions">
          <div className={styles.grid}>
            <Card className={styles.cardFull} index={20}>
              <List items={[
                "Intégration biométrique (présence / activité)",
                "Analyse prédictive des performances",
                "IA avancée (recommandation proactive)",
                "Intégration avec outils gouvernementaux Etc…"
              ]} />
            </Card>
          </div>
        </Section>
      </div>
    </main>
  );
}