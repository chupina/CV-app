import React from "react";
import "./PhotoBox.scss";

export const PhotoBox = ({ name, title, description, avatar, size }) => {
  return (
    <div className={`photoBox ${size}`}>
      <img className="photoBox__avatar" src={avatar} alt="user avatar" />
      <h1 className="photoBox__header">{name}</h1>
      <h2 className="photoBox__subheader">{title}</h2>
      <p className="photoBox__description">{description}</p>
    </div>
  );
};
