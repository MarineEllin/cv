import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

function Header() {
  return (
    <header className={`${styles.headerContainer}`}>
      <div
        className={`${styles.headerContent} d-flex flex-column justify-content-flex-end`}
      >
        <div className={`${styles.nameAndJob} d-flex flex-column`}>
          <div className={`${styles.firstAndLastName} mt-10 mb-10`}>
            MARINE ELLIN
          </div>
          <div className={`${styles.jobTitle} mb-10`}>
            Développeuse React & Java
          </div>
        </div>
        <navbar className={`${styles.menu} mb-10`}>
          <ul className="d-flex flex-row justify-content-center align-items-center">
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn-menu-active" : "btn-menu"
              }
              to="/"
            >
              CV
            </NavLink>
            <li>
              <span className="menuSeparator" />{" "}
            </li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn-menu-active" : "btn-menu"
              }
              to="/portfolio"
            >
              PORTFOLIO{" "}
            </NavLink>
            <li>
              <span className="menuSeparator"></span>
            </li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn-menu-active" : "btn-menu"
              }
              to="/contact"
            >
              CONTACT
            </NavLink>
            <li>
              <span className="menuSeparator"></span>
            </li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "btn-menu-active" : "btn-menu"
              }
              to="/blog"
            >
              BLOG
            </NavLink>
          </ul>
        </navbar>
      </div>
    </header>
  );
}

export default Header;
