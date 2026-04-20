"use client";

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
  Zap,
  Gamepad2,
  LayoutDashboard,
  ShieldAlert,
  Zap
} from "lucide-react";
import styles from "./CahierDesCharges.module.css";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Section({ title, icon: Icon, children, id }: { title: string, icon: React.ElementType, children: React.ReactNode, id?: string }) {
  return (
    <motion.section 
      className={styles.section}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      id={id}
    >
      <motion.h2 className={styles.sectionTitle} variants={itemVariants}>
        {Icon && <Icon size={32} className="text-primary" />}
        {title}
      </motion.h2>
      {children}
    </motion.section>
  );
}

function Card({ title, children, icon: Icon }: { title?: string, children: React.ReactNode, icon?: React.ElementType }) {
  return (
    <motion.div className={styles.card} variants={itemVariants}>
      {Icon && (
        <div className={styles.iconWrapper} style={{ width: &apos;40px&apos;, height: &apos;40px&apos;, marginBottom: &apos;1.5rem&apos; }}>
          <Icon size={24} />
        </div>
      )}
      {title && <h3 className={styles.subsectionTitle}>{title}</h3>}
      {children}
    </motion.div>
  );
}

function List({ items }: { items: (string | { text: string, subItems?: string[] })[] }) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => {
        const text = typeof item === &apos;string&apos; ? item : item.text;
        const subItems = typeof item === &apos;object&apos; ? item.subItems : null;
        
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
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <header className={styles.documentHeader}>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <span className={styles.badge}>Digitalisation Documentaire</span>
            <h1 className={styles.title}>
              Mini Cahier des Charges Fonctionnel<br />
              PGI de Pilotage et Optimisation de la Performance des Agents – ANIP Bénin
            </h1>
          </motion.div>
        </header>

        <Section title="1. Contexte et objectifs" icon={Target}>
          <div className={styles.grid}>
            <Card>
              <p className={styles.text}>L&apos;ANIP souhaite se doter d&apos;un progiciel de gestion intégré (PGI) permettant de :</p>
              <List items={[
                "Suivre et améliorer la performance des agents en temps réel",
                "Structurer l&apos;évaluation quotidienne des agents",
                "Identifier automatiquement les écarts de performance",
                "Proposer des actions correctives (coaching, formation, feedback)",
                "Développer les compétences via un système intelligent d&apos;upskilling"
              ]} />
            </Card>
          </div>
        </Section>

        <Section title="2. Objectifs fonctionnels principaux" icon={Settings}>
          <div className={styles.grid}>
            <Card title="Piloter la Performance">
               <p className={styles.text}>Le PGI doit permettre de :</p>
               <List items={[
                "Définir et piloter les OKR (Objectives & Key Results)",
                "Suivre les KPI métiers par agent",
                "Évaluer les performances quotidiennement et en temps réel",
                "Générer un scoring dynamique des agents"
              ]} />
            </Card>
            <Card title="Optimiser & Engager">
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

        <Section title="3. Périmètre fonctionnel" icon={Workflow}>
          <div className={styles.grid}>
            <Card title="3.1 Gestion des profils et référentiel métiers" icon={Users}>
              <p className={styles.text}>Création des profils agents :</p>
              <List items={["Identité", "Fonction / métier", "Service / direction", "Rôle et responsabilités"]} />
              <p className={styles.text}>Référentiel métiers :</p>
              <List items={["Définition des compétences attendues", "Mapping compétences ↔ postes"]} />
            </Card>

            <Card title="3.2 Module OKR & KPI" icon={BarChart3}>
              <p className={styles.text}>Définition des objectifs :</p>
              <List items={["Objectifs stratégiques (organisation)", "Objectifs opérationnels (service)", "Objectifs individuels (agent)"]} />
              <p className={styles.text}>Définition des KPI associés :</p>
              <List items={["Quantitatifs (ex : nombre de dossiers traités)", "Qualitatifs (ex : satisfaction usagers, taux de validation des dossiers )"]} />
              <p className={styles.text}>Suivi en temps réel :</p>
              <List items={["Tableau de bord dynamique", "Visualisation des écarts"]} />
            </Card>

            <Card title="3.3 Module d&apos;évaluation continue" icon={CheckCircle2}>
              <p className={styles.text}>Saisie automatique et/ou manuelle des performances</p>
              <p className={styles.text}>Évaluation journalière basée sur :</p>
              <List items={["KPI", "Tâches réalisées", "Qualité du travail", "Historisation des performances", "Alertes en cas de sous-performance"]} />
            </Card>

            <Card title="3.4 Module de scoring et analytics" icon={TrendingUp}>
              <p className={styles.text}>Calcul automatique d&apos;un score de performance global</p>
              <p className={styles.text}>Pondération par :</p>
              <List items={["KPI", "Importance des tâches", "Priorités stratégiques", "Classement des agents (ranking)"]} />
              <p className={styles.text}>Analyse :</p>
              <List items={["Progression", "Tendances", "Détection des anomalies"]} />
            </Card>

            <Card title="3.5 Module IA – Coaching & recommandations" icon={BrainCircuit}>
              <p className={styles.text}>Assistant intelligent (chat + suggestion + appel)</p>
              <p className={styles.text}>Fonctionnalités :</p>
              <List items={[
                "Analyse des performances individuelles",
                "Identification des lacunes",
                { text: "Recommandations personnalisées :", subItems: ["Actions correctives", "Conseils pratiques"] },
                { text: "Boîte de dialogue interactive :", subItems: ["Coaching quotidien", "Motivation et encouragement", "Aide à la priorisation"] }
              ]} />
            </Card>

            <Card title="3.6 Module LMS (formation en ligne)" icon={GraduationCap}>
              <p className={styles.text}>Catalogue de formations :</p>
              <List items={["Internes", "Externes"]} />
              <p className={styles.text}>Recommandation automatique de formations selon :</p>
              <List items={["Faiblesses détectées", "Objectifs à atteindre"]} />
              <p className={styles.text}>Suivi :</p>
              <List items={["Parcours de formation", "Taux de complétion", "Résultats", "Évaluations post-formation"]} />
            </Card>

            <Card title="3.7 Workflow de gestion des formations" icon={Workflow}>
              <List items={[
                "Demande de formation par agent",
                "Validation hiérarchique",
                "Suivi du plan de formation",
                "Engagement et suivi des résultats",
                "Historique des formations suivies"
              ]} />
            </Card>

            <Card title="3.8 Module de feedback 360°" icon={MessageSquare}>
              <p className={styles.text}>Feedback multi-acteurs :</p>
              <List items={["Supérieurs hiérarchiques", "Collègues (pairs)", "Usagers"]} />
              <List items={["Système de notation + commentaires", "Intégration dans le scoring global"]} />
            </Card>

            <Card title="3.9 Module collaboratif" icon={Users}>
              <List items={["Messagerie interne", "Espaces de travail par équipe/ service", "Partage de documents", "Gestion de projets simples"]} />
            </Card>

            <Card title="3.10 Module de gamification" icon={Gamepad2}>
              <p className={styles.text}>Système de points et badges pour stimuler les agents</p>
              <List items={["Classements?", "Défis et objectifs collectifs", "Récompenses symboliques"]} />
            </Card>
          </div>
        </Section>

        <Section title="4. Tableaux de bord" icon={LayoutDashboard}>
          <div className={styles.grid}>
            <Card title="Dashboard agent">
              <List items={["Score personnel", "KPI", "Objectifs", "Recommandations", "formation (demandées, validées, en cours)"]} />
            </Card>
            <Card title="Dashboard manager/ chef de service">
              <List items={["Performance équipe", "Alertes", "Analyse comparative", "Suivi des demandes de formation"]} />
            </Card>
            <Card title="Dashboard direction">
              <List items={["Performance globale", "Indicateurs stratégiques", "Suivi des engagements"]} />
            </Card>
          </div>
        </Section>

        <Section title="5. Exigences fonctionnelles clés" icon={Zap}>
          <Card>
            <List items={[
              "Mise à jour des données en temps réel",
              "Système de recommandation intelligent (IA)",
              "Personnalisation selon le métier de l&apos;utilisateur",
              "Accessibilité web et mobile",
              "Interface simple, ergonomique et intuitive"
            ]} />
          </Card>
        </Section>

        <Section title="6. Autres points clés du projet" icon={ShieldAlert}>
          <Card>
            <List items={[
              "Sécurité des données",
              "Haute disponibilité du progiciel",
              "Scalabilité (nombre d&apos;agents élevé)",
              "Interopérabilité avec systèmes existants ANIP à prévoir",
              "Traçabilité des actions"
            ]} />
          </Card>
        </Section>

        <Section title="7. Utilisateurs du système" icon={Users}>
          <Card>
            <div className={styles.grid} style={{ gridTemplateColumns: &apos;repeat(auto-fit, minmax(200px, 1fr))&apos; }}>
              <List items={["Agent ANIP", "Chef de service", "DRH"]} />
              <List items={["Direction générale", "Administrateur système", "Usager (pour feedback)"]} />
            </div>
          </Card>
        </Section>

        <Section title="8. Indicateurs de succès du projet" icon={TrendingUp}>
          <Card>
            <List items={[
              "Amélioration de la performance individuelle",
              "Augmentation du taux de formation complétée",
              "Réduction des écarts de performance",
              "Engagement des agents (usage plateforme)",
              "Progression de la satisfaction des usagers"
            ]} />
          </Card>
        </Section>

        <Section title="9. Évolutions possibles à moyen terme" icon={BrainCircuit}>
          <Card>
            <List items={[
              "Intégration biométrique (présence / activité)",
              "Analyse prédictive des performances",
              "IA avancée (recommandation proactive)",
              "Intégration avec outils gouvernementauxm Etc…"
            ]} />
          </Card>
        </Section>
      </div>
    </main>
  );
}