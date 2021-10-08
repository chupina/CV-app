import React from "react";
import { Button } from "../Button/Button";
import { Navigation } from "../Navigation/Navigation";
import { PhotoBox } from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faBars } from "@fortawesome/free-solid-svg-icons";
import data from '../../utils/data';
import "./Panel.scss";

import { Link } from "react-router-dom";
import photo from "../../assets/images/avatar.jpg";
import ButtonSmall from "../ButtonSmall/ButtonSmall";

export const Panel = ({ isOpen, toggle }) => {
  return (
    <div className={`panel ${isOpen ? "expand" : "shrink"}`} data-testid="sidebar">
      <div className="sidebar">
        <PhotoBox size="medium" name={data.user.name} avatar={photo} />
        <Navigation />
        <Link to="./">
          <Button
            text="Go back"
            icon={<FontAwesomeIcon icon={faChevronLeft} />}
        />
        </Link>
      </div>
      <ButtonSmall clickHandler={toggle}>
        <FontAwesomeIcon icon={faBars} />
      </ButtonSmall>
    </div>
  );
};
