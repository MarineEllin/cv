import styles from "./Contact.module.scss";

function Contact() {
  return (
    <div
      className={`${styles.contactContainer} d-flex flex-column flex-fill align-items-center justify-content-center`}
    >
      <div className={styles.contactContent}>
        <h2 className="mb-20">Social Media</h2>
        <a
          href="https://www.linkedin.com/in/marine-ellin-7b782366/"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <img
            src="linkedin-logo-prussianBlue.png"
            alt="github"
            className="mr-10"
          />
          Marine Ellin
        </a>

        <a
          href="https://github.com/MarineEllin"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <img src="github-logo-gold.png" alt="github" className="mr-10" />
          MarineEllin
        </a>
      </div>
      <div className={styles.contactContent}>
        <h2 className="mb-20">Coordonnées</h2>
        <a
          href="tel:41788206225"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i class="fa-solid fa-envelope mr-10"></i>
          078 820 62 25
        </a>
        <a
          href="mailto:marine.ellin@gmail.com"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i class="fa-solid fa-mobile-screen-button mr-10"></i>
          marine.ellin@gmail.com
        </a>
        <a
          href="https://www.google.ch/maps/place/Onex/@46.1854123,6.0790046,14z/data=!3m1!4b1!4m6!3m5!1s0x478c7b4494fc5133:0x13ce4dc8358017f1!8m2!3d46.183541!4d6.1002345!16zL20vMDg5bnA0?entry=ttu"
          className=" mb-20 d-flex flex-row justify-content-center align-items-center"
        >
          <i class="fa-solid fa-location-dot mr-10"></i>
          1213 Onex (Suisse)
        </a>
      </div>
    </div>
  );
}

export default Contact;
