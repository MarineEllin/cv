import styles from "./Skills.module.scss";

const Skills = () => {
  return (
    <div
      className={`${styles.skillsContainer} d-flex flex-column align-items-center justify-content-center`}
    >
      <h2 className="mb-20">IT Skills</h2>
      <div className={styles.skillsContentIT}>
        <div className={`${styles.cardSkillContainer} d-flex flex-column`}>
          <div>
            <img src="html.png" alt="html" />
            <img src="css.png" alt="css" />
            <img src="sass.png" alt="sass" />
          </div>
          <div>
            <p>HTML</p>
            <p>CSS</p>
            <p>Sass</p>
          </div>
          <p className={styles.skillsLevel}>(très bonne maîtrise)</p>
        </div>
        <div className={`${styles.cardSkillContainer} d-flex flex-column`}>
          <div>
            <img src="js.png" alt="js" />
            <img src="typescript.png" alt="ts" />
            <br />
            <img src="react.png" alt="react" />
          </div>
          <div>
            <p>JavaScript</p>
            <p>TypeScript</p>
            <p>React / React-Native</p>
          </div>
          <p className={styles.skillsLevel}>(bonne maîtrise)</p>
        </div>
        <div className={`${styles.cardSkillContainer} d-flex flex-column`}>
          <div>
            <img src="git.png" alt="git" />
            <img src="vscode.png" alt="vscode" />
            <img src="intellij.png" alt="intellij" />
          </div>
          <div>
            <p>Git</p>
            <p>VSCode</p>
            <p>IntelliJ</p>
          </div>

          <p className={styles.skillsLevel}>
            (utilisation courante des commandes de base)
          </p>
        </div>
        <div className={`${styles.cardSkillContainer} d-flex flex-column`}>
          <div>
            <img src="java.png" alt="html" />
          </div>
          <div>
            <p>Java</p>
            <p>Spring</p>
            <p>Maven</p>
          </div>
          <p className={styles.skillsLevel}>(connaissances de base)</p>
        </div>
      </div>
      <h2 className="mb-20">Autres Skills</h2>
      <div className={styles.skillsContentOth}>
        <div className={`${styles.largeCardSkillContainer} space-between`}>
          <div>
            <img src="France.png" alt="html" />
            <p>Langue maternelle</p>
          </div>
          <div>
            <img src="United Kingdom.png" alt="html" />
            <p>B2</p>
          </div>
          <div>
            <img src="Germany.png" alt="html" />
            <p>B1</p>
          </div>
        </div>
        <div
          className={`${styles.largeCardSkillContainer} justify-content-center`}
        >
          <ul>
            <li>
              Formée à la Business Analyse (formation reconnue par l'IIBA)
            </li>
            <li>Formée à la gestion de projets</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills;
