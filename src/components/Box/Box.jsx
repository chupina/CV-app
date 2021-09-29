import React from "react";
import "./Box.scss";

const Box = ({ title, children }) => (
  <section id={title} className="box">
    <h2 className="box__title">{title}</h2>
    <div className="box__content">{children}</div>
  </section>
);

export default Box;
