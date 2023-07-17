import styles from "./StarIcon.module.scss";

function StarIcon() {
  return (
    <div className={styles.iconContainer}>
      <i className={`${styles.icon} fa-solid fa-star`}></i>
    </div>
  );
}

export default StarIcon;
