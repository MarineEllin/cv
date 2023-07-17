import styles from "./MaternityIcon.module.scss";

function MaternityIcon() {
  return (
    <div className={styles.iconContainer}>
      <i className={`${styles.icon} fa-solid fa-baby-carriage`}></i>
    </div>
  );
}

export default MaternityIcon;
