import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from "../../features/education/educationSlice";
import Loader from "../Loader/Loader";
import ErrorMsg from "./../ErrorMsg/ErrorMsg";
import TimeLine from "../TimeLine/TimeLine";

  
const Education =  () =>{
  const dispatch = useDispatch();
  const { entities, loading, error } = useSelector((state) => state.education);

  useEffect(() => {
    dispatch(fetchEducation());
  }, []);

  return <div className="timeLine">
      {loading ? (
        <Loader />
      ) : error ? (
        <ErrorMsg message="Something went wrong. Please review your server connection" />
      ) : (
        <TimeLine data={entities}/>)
      }
    </div>

}

export default Education;