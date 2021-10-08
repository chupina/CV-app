import React from "react";
import "./Expertise.scss";
import ExpertiseItem from "./ExpertiseItem";

const Expertise = ({ data }) => {
  return (
    <div className="expertise">
      {data.map((item) => (
        <ExpertiseItem key={item.info.company} data={item} />
      ))}
    </div>
  );
};

export default Expertise;
