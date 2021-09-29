import React from "react";
import Article from "../Article/Article";
import "./ExpertiseItem.scss";

const ExpertiseItem = ({ data }) => {
  return (
    <div className="expertiseItem">
      <div className="expertiseItem__date">{data.date}</div>
      <div className="expertiseItem__company">{data.info.company}</div>
      <Article
        className="expertiseItem__info"
        title={data.info.job}
        text={data.info.description}
      />
    </div>
  );
};

export default ExpertiseItem;
