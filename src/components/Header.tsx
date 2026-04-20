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
            width={60}
            height={60}
            className={styles.logo}
          />
          <div className={styles.divider}></div>
          <span className={styles.brandTitle}>ANIP Bénin</span>
        </div>
      </div>
    </header>
  );
}
