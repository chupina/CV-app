import React from "react";
import "./CardInfo.scss";

export const CardInfo = ({ title, text, url }) => (
  <article>
    <h3 className="card__title">{title}</h3>
    <p className="card__content">{text}</p>
    <a className="card__link" href={url}>View resource</a>
  </article>
);

export default CardInfo;