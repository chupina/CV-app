import React from "react";
import FeedbackItem from "./FeedbackItem";

const Feedback = ({ data }) => {
  return(
    <>
  {data.map(feedback =><FeedbackItem key={feedback.reporter.name} {...feedback} />)}
  </> 
  ) 
};

export default Feedback;
