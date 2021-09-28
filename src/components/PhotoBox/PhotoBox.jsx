import React from "react";
import './PhotoBox.scss';

export const PhotoBox = ({name, title, description, avatar, size}) => {
  return (
   <div className={`photoBox ${size}`}>
         <img src={avatar} alt="authors avatar"/>
         <h1>{name}</h1>
     <h2>{title}</h2>
     <p>{description}</p>
   </div>
 )
}