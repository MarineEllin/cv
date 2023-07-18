import styles from "./Timeline.module.scss";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import SchoolIcon from "./components/SchoolIcon";
import WorkIcon from "./components/WorkIcon";
import StarIcon from "./components/StarIcon";
import "react-vertical-timeline-component/style.min.css";
import MaternityIcon from "./components/MaternityIcon";

const TimelineCV = () => {
  return (
    <VerticalTimeline className={`${styles.timelineContainer}`}>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Depuis mai 2023"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Développeuse Front-End
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          ScopeGuardian, start-up
        </h4>
        <p>
          Développement et implémentation de nouvelles features, en particulier
          un système de gestion multi-langues.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Depuis janvier 2023"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Développeuse Front-End
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Freelance</h4>
        <p>
          Développement de plusieurs mini-projets en React et initiation à
          React-Native
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`${styles.element} vertical-timeline-element--work`}
        contentStyle={{ background: "white", color: "#1d2731" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="Depuis décembre 2022"
        iconStyle={{
          background: "#0b3c5d",
          color: "#d9b310",
        }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Reconversion professionnelle
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Formation aux technologies du web
        </h4>
        <div className={styles.trainingDetails}>
          <details className={styles.details}>
            <summary>
              HTML5 / CSS3 / Sass : des bases à un niveau avancé
            </summary>
            <ul>
              <li>
                HTML5 : bases, structure d'une page, utilisation de Emmet,
                liens, listes, formulaires, éléments en ligne et en bloc, les
                div et les span.
              </li>
              <li>
                CSS3 et derniers modules CSS : boites flexible et grilles.
              </li>
              <li>
                Sass : les variables et les partials, imbrication, héritage,
                mixins et fonctions.
              </li>
              <li>
                Construction de pages responsives pour tablettes et mobiles.
              </li>
              <li>Introduction à Git et Github</li>
              <li>Utilisation de Netlify pour le déploiement de sites web.</li>
              <li>
                Réalisation de 4 projets : le site web d'un café, le site web
                d'une agence immobilière, une reproduction d'une page web
                complexe avec utilisation des grilles et boites flexibles et la
                création d'un tout premier site CV.
              </li>
            </ul>
          </details>
          <details className={styles.details}>
            <summary>JavaScript & TypeScript</summary>
            <ul>
              <li>
                Bases de JavaScript : variables, types, opérateurs et
                conversions.
              </li>
              <li>Conditions et boucles.</li>
              <li>Gestion des événements.</li>
              <li>
                Gestion de l'asynchrone : promesses et fonctions asynchrones.
              </li>
              <li>Requêtes Ajax.</li>
              <li>Utilisation de Webpack et Babel.</li>
              <li>Fonctionnement des classes et de l'héritage prototypal.</li>
            </ul>
          </details>
          <details className={styles.details}>
            <summary>React</summary>
            <ul>
              <li>Apprentissage de JSX</li>
              <li>Les bases de React : composants et props.</li>
              <li>Gestion de l'etat des composants avec Recoil.</li>
              <li>Création de formulaires avec Formik.</li>
              <li>Validation de formulaires avec Yup.</li>
              <li>Gestion de requêtes Ajax vers des API avec Fetch.</li>
              <li>Déployer une application react en production.</li>
              <li>Réalisation d'un projet complet de recettes de cuisine.</li>
            </ul>
          </details>
          <details className={styles.details}>
            <summary>Git</summary>
            <ul>
              <li>
                Bases de Git : suivi et état des fichiers, fonctionnement de
                l'index, création des sauvegardes et suppression de fichiers ou
                dossiers.
              </li>
              <li>Partage de répertoires Git avec Gitlab et Github.</li>
              <li>
                Commandes courantes : add, commit, push, fetch, pull, rebase,
                reset, checkout...
              </li>
              <li>Branches Git.</li>
              <li>Introduction à Git flow.</li>
              <li>Utilisation de git merge et git rebase.</li>
            </ul>
          </details>
          <details className={styles.details}>
            <summary>Java</summary>
            <ul>
              <li>
                Bases de Java : types de données de base, variables, méthodes,
                classes, tableaux, listes, collections, expressions
                conditionnelles et boucles.
              </li>
              <li>Introduction aux exceptions.</li>
              <li>
                Bases de la POO : héritage, encapsulation, polymorphismes et
                abstraction.
              </li>
              <li>Interfaces versus classes abstraites et héritage.</li>
              <li>
                Introduction aux threads : Thread, Runnable, start, joint,
                intercep, sleep, synchronized, volatile, yeld.
              </li>
              <li>
                Introduction aux flux : Reader/Writer, FileReader/FileWriter.
              </li>
              <li>Serialisation.</li>
            </ul>
          </details>
        </div>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Mai 2018 à novembre 2022"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Inspectrice du travail en Santé et Sécurité au travail
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Etat de Genève, Genève (Suisse)
        </h4>
        <p>
          Audit des systèmes de santé et de sécurité au travail des entreprises.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Janvier 2017 à avril 2018"
        iconStyle={{ background: "#fd50f2", color: "#0b3c5d" }}
        icon={<MaternityIcon />}
      >
        <h3 className="vertical-timeline-element-title">Congé maternité</h3>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        date="Avril 2014 à Juillet 2016"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Cheffe de projet Qualité, Santé, Sécurité
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Nestlé Nespresso Suisse, Paudex (Suisse)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Mai 2012 à mars 2014"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Spécialiste Assurance Qualité
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          Syngenta, Monthey (Suisse)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="Décembre 2010 à décembre 2011"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Adjointe Santé, Sécurité, Radioprotection, Environnement
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          SITES, Ecully (France)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        date="2002 - 2006"
        iconStyle={{ background: "#d9b310", color: "#0b3c5d" }}
        icon={<WorkIcon />}
      >
        <h3 className="vertical-timeline-element-title">
          Assistante Qualité, Sécurité, Environnement
        </h3>
        <h4 className="vertical-timeline-element-subtitle">
          SPPH groupe FAREVA, St-Quentin-Fallavier (France)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`${styles.element} vertical-timeline-element--work`}
        contentStyle={{ background: "white", color: "#1d2731" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="Septembre 2008 à septembre 2009"
        iconStyle={{
          background: "#0b3c5d",
          color: "#d9b310",
        }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Master 2 - Qualité</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Université Joseph Fourier, Grenoble (France)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className={`${styles.element} vertical-timeline-element--work`}
        contentStyle={{ background: "white", color: "#1d2731" }}
        contentArrowStyle={{ borderRight: "7px solid  white" }}
        date="Septembre 2007 à septembre 2008"
        iconStyle={{
          background: "#0b3c5d",
          color: "#d9b310",
        }}
        icon={<SchoolIcon />}
      >
        <h3 className="vertical-timeline-element-title">Master 1 - Chimie</h3>
        <h4 className="vertical-timeline-element-subtitle">
          Université Joseph Fourier, Grenoble (France)
        </h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        iconStyle={{ background: "#328cc1", color: "#fff" }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
};

export default TimelineCV;
