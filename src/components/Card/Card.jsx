import React from "react";
import './Card.scss';
const Card = ({type, content}) => {
  return(
    <div className={`card card__${type}`}>
      <div className='card__preview'></div>
      <div className='card__info'>Lorem ipsum</div>
    </div>
  )
}

export default Card;