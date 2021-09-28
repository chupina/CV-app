import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navigation.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faGraduationCap, faPen, faPaperPlane, faGem, faBriefcase, faComment,  } from "@fortawesome/free-solid-svg-icons";

export const Navigation = () => {
  return (
    <nav>
      <ul className={styles.navigation}>
        <li className={styles.navigation__item}>
          <NavLink to="/" className={styles.navigation__link}
          activeClassName={styles.navigation__link_active}>
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faUser} />
            </span>
            <span className={styles.navigation__text}>About me</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink
            to="/"
            className={styles.navigation__link}
            activeClassName={styles.navigation__link_active}
          >
            <span className={styles.icon}>
              <FontAwesomeIcon icon={faGraduationCap} />
            </span>
            <span className={styles.navigation__text}>Education</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink to="/" className={styles.navigation__link}
           activeClassName={styles.navigation__link_active}
          >
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faPen} />
            </span>
            <span className={styles.navigation__text}>Experience</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink to="/" className={styles.navigation__link}
           activeClassName={styles.navigation__link_active}
          >
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faGem} />
            </span>
            <span className={styles.navigation__text}>Skills</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink to="/" className={styles.navigation__link}
           activeClassName={styles.navigation__link_active}
          >
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faBriefcase}/>
            </span>
            <span className={styles.navigation__text}>Portfolio</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink to="" className={styles.navigation__link}
           activeClassName={styles.navigation__link_active}
           >
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </span>
            <span className={styles.navigation__text}>Contacts</span>
          </NavLink>
        </li>
        <li className={styles.navigation__item}>
          <NavLink to="" className={styles.navigation__link}
           activeClassName={styles.navigation__link_active}
          >
          <span className={styles.icon}>
              <FontAwesomeIcon icon={faComment} />
            </span>
            <span className={styles.navigation__text}>Feedback</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
