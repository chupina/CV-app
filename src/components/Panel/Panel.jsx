import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Panel.module.scss";
import { Burger } from "../Burger/Burger";
import { Link } from "react-router-dom";

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
        <PhotoBox size="medium" name="John Doe" avatar="../assets/images/avatar.png" />
        <Navigation />
        <Link to='./'><Button
          text="Go back"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        /></Link>
      </div>
      <Burger clickHandler={togglePanel} />
    </div>
  );
};
