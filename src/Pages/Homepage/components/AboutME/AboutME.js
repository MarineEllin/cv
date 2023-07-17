import styles from "./AboutME.module.scss";

const AboutME = () => {
  return (
    <div className={styles.aboutContainer}>
      <div
        className={`${styles.aboutContent} d-flex flex-column align-items-center`}
      >
        <h2>À mon sujet</h2>
        <h4 className="mb-20">Petit introduction me concernant</h4>
        <span className={styles.aboutIntroduction}>
          <p>
            Après un joli chemin dans les domaines de l'assurance qualité et de
            la prévention des risques professionnels, j'ai choisi de réorienter
            ma carrière dans le développement web.
          </p>
          <p>
            Accompagnée par un développeur expérimenté, j'ai défini un programme
            de formation auquel je me tiens depuis décembre 2022.
          </p>
          <p>Passsionnée par le front, je me suis spécialisée en React.</p>
          <p>
            Et pour repousser mes limites, j'ai choisi Java comme langage
            back-end : fin de formation prévue pour octobre 2023 !
          </p>
        </span>
      </div>
    </div>
  );
};

export default AboutME;
