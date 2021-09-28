import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Panel.module.scss";
import { Burger } from "../Burger/Burger";
import { Link } from "react-router-dom";
import photo from '../../assets/images/avatar.png'
export const Panel = () => {
  const [expanded, setExpanded] = useState(false);
  const togglePanel = () => {
    setExpanded(!expanded);
  };
  return (
    <div
      className={`${styles.panel} ${expanded ? styles.shrink : styles.expand}`}
    >
            <div className={styles.sidebar}>
      <PhotoBox size="medium" name="John Doe" avatar={photo} />
        <Navigation />
        <Link to='./'><Button
          text="Go back"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        /></Link>
      </div>
      <Burger clickHandler={togglePanel} ><FontAwesomeIcon icon={faBars} /></Burger>
    </div>
  );
};
