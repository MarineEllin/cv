import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={`${styles.footer} d-flex justify-content-center align-items-center`}
    >
      ​© - Tous droits réservés
    </footer>
  );
}

export default Footer;
