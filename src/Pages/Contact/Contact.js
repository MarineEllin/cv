import styles from "./Contact.module.scss";
import GitHub from "./GitHub/GitHub";
import LinkedIn from "./LinkedIn/Linkedin";

function Contact() {
  return (
    <div className={`${styles.contactContainer}`}>
      <h2>Social Media</h2>
      <div className={styles.contactContent}>
        <div className={styles.logoContainer}>
          <GitHub />
        </div>
        <div className={styles.logoContainer}>
          <LinkedIn />
        </div>
      </div>
      <h2 className="mb-20">Coordonnées</h2>
      <div className={styles.coord}>
        <a
          href="tel:41788206225"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i className="fa-solid fa-mobile-screen-button mr-10"></i>
          <span>078 820 62 25</span>
        </a>
        <a
          href="mailto:marine.ellin@gmail.com"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i className="fa-solid fa-envelope mr-10"></i>
          <span>marine.ellin@gmail.com</span>
        </a>
        <a
          href="https://www.google.ch/maps/place/Onex/@46.1854123,6.0790046,14z/data=!3m1!4b1!4m6!3m5!1s0x478c7b4494fc5133:0x13ce4dc8358017f1!8m2!3d46.183541!4d6.1002345!16zL20vMDg5bnA0?entry=ttu"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i class="fa-solid fa-location-dot mr-10"></i>
          <span>1213 Onex (Suisse)</span>
        </a>
      </div>
    </div>
  );
}

export default Contact;
