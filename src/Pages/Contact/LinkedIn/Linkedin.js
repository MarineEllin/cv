import styles from "./Linkedin.module.scss";

export default function LinkedIn() {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoContent}>
        <div className={styles.UP}>
          <img src="linkedinUp.png" alt="github" />
        </div>
        <div className={styles.BO}>
          <img src="linkedinBo.png" alt="github" />
        </div>

        <div className={styles.link}>
          <a
            href="https://www.linkedin.com/in/marine-ellin-7b782366/"
            className="d-flex flex-row justify-content-center align-items-center"
          >
            <i class="fa-brands fa-linkedin"></i>
            Marine Ellin
          </a>
        </div>
      </div>
    </div>
  );
}
