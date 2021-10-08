import React, { useEffect } from "react";
import "./TimeLine.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../features/education/educationSlice";
import Loader from "../Loader/Loader";
import TimeLineItem from "./TimeLineItem";
import ErrorMsg from "./../ErrorMsg/ErrorMsg";

const TimeLine = () => {
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducation());
  }, []);

  return (
    <div className="timeLine">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg message="Something went wrong. Please review your server connection" />
      ) : (
        entities.map((item) => <TimeLineItem key={item.id} {...item} />)
      )}
    </div>
  );
};

export default TimeLine;
