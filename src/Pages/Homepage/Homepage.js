import styles from "./Homepage.module.scss";
import AboutME from "./components/AboutME/AboutME";
import TimelineCV from "./components/TimelineCV/TimelineCV";

function Homepage() {
  return (
    <div
      className={`${styles.homepageContainer} d-flex flex-column flex-fill align-items-center`}
    >
      <div className={`${styles.homepageContent}`}>
        <AboutME />
        <TimelineCV />
      </div>
    </div>
  );
}

export default Homepage;
