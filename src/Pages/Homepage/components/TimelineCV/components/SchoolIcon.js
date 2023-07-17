import styles from "./SchoolIcon.module.scss";

function SchoolIcon() {
  return (
    <div className={styles.iconContainer}>
      <i className={`${styles.icon} fa-solid fa-school`}></i>
    </div>
  );
}

export default SchoolIcon;
