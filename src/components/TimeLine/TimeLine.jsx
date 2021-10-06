import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../features/education/educationSlice";
import Loader from "../Loader/Loader";
import "./TimeLine.scss";
import TimeLineItem from "./TimeLineItem";

const TimeLine = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.education.entities);
  const isFetching = useSelector((state) => state.education.loading);
  const error = useSelector((state) => state.education.error);

  useEffect(() => {
    dispatch(fetchEducation());
  }, []);

  return (
    <div className="timeLine">
      {isFetching ? <Loader />: error ? <div>Something went wrong. Please review your server connection</div>:
      data.map((item) => (
        <TimeLineItem key={item.title} {...item} />
      ))}
    </div>
  );
};

export default TimeLine;
