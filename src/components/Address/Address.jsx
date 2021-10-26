import React from "react";
import "./Address.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/fonts/iconsLib";

const Address = ({ contactData }) => {
  return (
    <>
      {contactData.map(({ id, title, address, icon, subtitle }) => {
        return (
          <address key={id}>
            <FontAwesomeIcon icon={icons[`${icon}`]} className="media__icon" />
            <a className="address" href={address}>
              <span className="address__title">{title}</span>
              {subtitle && <span className="address__url">{subtitle}</span>}
            </a>
          </address>
        );
      })}
    </>
  );
};

export default Address;
