import React from "react";
import "./Button.scss";

const Button = ({ icon, text, onClick }) => (
  <button className="button" onClick={onClick}>
    {icon}
    <span>{text}</span>
  </button>
);

export default Button;