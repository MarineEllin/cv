import { useEffect, useState } from "react";
import styles from "./Portfolio.module.scss";
import items from "./portfolioItems";

function Portfolio() {
  const [imageIndex, setImageIndex] = useState(0);
  const [itemIndex, setItemIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (imageIndex < 2) {
        setImageIndex(imageIndex + 1);
      } else {
        setImageIndex(0);
      }
    }, 5000);
  });

  function nextItem() {
    if (itemIndex < items.length - 1) {
      setItemIndex(itemIndex + 1);
    }
  }

  function backItem() {
    if (itemIndex > 0) {
      setItemIndex(itemIndex - 1);
    }
  }

  return (
    <div
      className={`${styles.portfolioContainer} d-flex flex-row flex-fill align-items-center justify-content-center`}
    >
      <i
        class={` ${
          itemIndex === 0 ? "font-color-transparent-04" : "font-color-gold"
        } fa-solid fa-circle-chevron-left`}
        onClick={() => backItem()}
      ></i>
      <div className={styles.portfolioContent}>
        <div className={styles.title}>{items[itemIndex].title}</div>
        <div className={styles.description}>{items[itemIndex].description}</div>
        <div className={styles.imageContainer}>
          <img
            src={`./portfolioItems/${items[itemIndex].title}/${items[itemIndex].images[imageIndex]}`}
            alt=""
          />
        </div>
        <div className="d-flex flex-row space-evenly">
          <a href={items[itemIndex].code} className={styles.btnCode}>
            Voir le code
          </a>
          <a href={items[itemIndex].website} className={styles.btnWebsite}>
            Voir le site
          </a>
        </div>
      </div>
      <i
        class={` ${
          itemIndex < items.length - 1
            ? "font-color-gold"
            : "font-color-transparent-04"
        } fa-solid fa-circle-chevron-right`}
        onClick={() => nextItem()}
      ></i>
    </div>
  );
}

export default Portfolio;
