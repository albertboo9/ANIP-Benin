import Image from "next/image";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container-inner ${styles.headerInner}`}>
        <div className={styles.logoGroup}>
          <Image
            src="/assets/ANIP-Logo-HD.png"
            alt="ANIP Benin"
            width={80}
            height={80}
            className={styles.logo}
          />
          <div className={styles.divider}></div>
          <div className={styles.brandInfo}>
            <span className={styles.brandTitle}>ANIP Benin</span>
            <span className={styles.brandSubtitle}>Agence Nationale d&apos;Identification des Personnes</span>
          </div>
        </div>
      </div>
    </header>
  );
}