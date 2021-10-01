import React from "react";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import styles from "./Panel.module.scss";

import { Link } from "react-router-dom";
import photo from '../../assets/images/avatar.png'
import ButtonSmall from "../ButtonSmall/ButtonSmall";
export const Panel = ({isOpen, toggle}) => {
 
  return (
    <div
      className={`${styles.panel} ${isOpen ? styles.expand : styles.shrink}`}
    >
            <div className={styles.sidebar}>
      <PhotoBox size="medium" name="John Doe" avatar={photo} />
        <Navigation />
        <Link to='./'><Button
          text="Go back"
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
        /></Link>
      </div>
           <ButtonSmall clickHandler={toggle} ><FontAwesomeIcon icon={faBars} /></ButtonSmall>
    </div>
  );
};
