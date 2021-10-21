import React from "react";
import Article from "../Article/Article";
import "./ExpertiseItem.scss";

const ExpertiseItem = ({ data }) => {
  return (
    <div className="expertiseItem">
      <time className="expertiseItem__date">{data.date}</time>
      <div className="expertiseItem__company">{data.info.company}</div>
      <div className="expertiseItem__info">
        <Article title={data.info.job} text={data.info.description} />
      </div>
    </div>
  );
};

export default ExpertiseItem;
