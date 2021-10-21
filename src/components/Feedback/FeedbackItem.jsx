import React from "react";
import "./FeedbackItem.scss";
import Info from "./../Info/Info";
import PhotoBox from "../PhotoBox/PhotoBox";

const FeedbackItem = ({ feedback, reporter }) => {
  return (
    <figure className="feedback">
      <blockquote className="feedback__text">
        <Info text={feedback} />
      </blockquote>
      <figcaption className="feedback__caption">
        <PhotoBox size="small" avatar={reporter.photoUrl} />
        <cite className="feedback__cite">
          <h3>{reporter.name} </h3>{" "}
          <a href={reporter.citeUrl}>{reporter.citeUrl}</a>
        </cite>
      </figcaption>
    </figure>
  );
};

export default FeedbackItem;
