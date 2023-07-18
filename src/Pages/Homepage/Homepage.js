import styles from "./Homepage.module.scss";
import AboutME from "./components/AboutME/AboutME";
import Skills from "./components/Skills/Skills";
import TimelineCV from "./components/TimelineCV/TimelineCV";

function Homepage() {
  return (
    <div
      className={`${styles.homepageContainer} d-flex flex-column flex-fill align-items-center justify-content-center`}
    >
      <AboutME />
      <TimelineCV />
      <Skills />
    </div>
  );
}

export default Homepage;
