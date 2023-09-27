import styles from "./GitHub.module.scss";

export default function GitHub() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoContent}>
        <div className={styles.TL}>
          <img src="ghubTL.png" alt="github" />
        </div>
        <div className={styles.TR}>
          <img src="ghubTR.png" alt="github" />
        </div>
        <div className={styles.BL}>
          <img src="ghubBL.png" alt="github" />
        </div>
        <div className={styles.BR}>
          <img src="ghubBR.png" alt="github" />
        </div>
        <div className={styles.link}>
          <a
            href="https://github.com/MarineEllin"
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <img src="github-logo-gold.png" alt="github" />
            MarineEllin
          </a>
        </div>
      </div>
    </div>
  );
}
