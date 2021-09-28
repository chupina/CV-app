import React from "react";
import './PhotoBox.scss';
import photo from '../../assets/images/avatar.png'
export const PhotoBox = ({name, title, description, avatar, size}) => {
  return (
   <div className={`photoBox ${size}`}>
         <img src={photo} alt="authors avatar"/>
         <h1>{name}</h1>
     <h2>{title}</h2>
     <p>{description}</p>
   </div>
 )
}