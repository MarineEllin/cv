import styles from "./WorkIcon.module.scss";

function WorkIcon() {
  return (
    <div className={styles.iconContainer}>
      <i className={`${styles.icon} fa-solid fa-briefcase`}></i>
    </div>
  );
}

export default WorkIcon;
