import React from "react";
import "./Panel.scss";
import Button from "../Button/Button";
import Navigation from "../Navigation/Navigation";
import PhotoBox from "../PhotoBox/PhotoBox";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/fonts/iconsLib";
import { Link } from "react-router-dom";
import ButtonSmall from "../ButtonSmall/ButtonSmall";
import photo from "../../assets/images/avatar.jpg";
import data from "../../utils/data";
const goBackIcon = <FontAwesomeIcon icon={icons["faChevronLeft"]} />;
const Panel = ({ isOpen, toggle }) => {

  return (
    <div
      className={`panel ${isOpen ? "expand" : "shrink"}`}
      data-testid="sidebar"
    >
      <div className="sidebar">
        <PhotoBox size="medium" name={data.user.name} avatar={photo} />
        <Navigation />
        <Link to="./">
          <Button
            text="Go back"
            icon={goBackIcon}
          />
        </Link>
      </div>
      <ButtonSmall clickHandler={toggle}>
        <FontAwesomeIcon icon={icons["faBars"]} />
      </ButtonSmall>
    </div>
  );
};

export default Panel;
