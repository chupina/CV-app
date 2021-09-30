import React from "react";
import './Card.scss';
const Card = ({type, children}) => {
  return(
    <div className={`portfolio__card ${type}`}>
      <div className='portfolio__card__info'>{children}</div>
    </div>
  )
}

export default Card;