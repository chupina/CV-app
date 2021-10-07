import React from "react";
import Article from "../Article/Article";
import "./TimeLIneItem.scss";

const TimeLineItem = ({ date, title, text }) => {
  return (
    <div className="timeLineItem">
      <time className="timeLineItem__time" role="time">{date}</time>
      <div className="timeLineItem__scroll"></div>
      <div className="timeLineItem__info">
        <Article title={title} text={text} />
      </div>
    </div>
  );
};

export default TimeLineItem;
