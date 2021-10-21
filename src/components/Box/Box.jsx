import React from "react";
import "./Box.scss";

const Box = ({ id, title, children }) => (
  <section id={id} className="box">
    <h2 className="box__title">{title}</h2>
    <div className="box__content">{children}</div>
  </section>
);

export default Box;
