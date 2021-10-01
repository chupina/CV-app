import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchEducation } from '../../features/education/educationSlice';
import './TimeLine.scss';
import TimeLineItem from "./TimeLineItem";

 const TimeLine = () => {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.education.entities);
  //const dataIsFetching = useSelector((state)=>state.education.loading);


  useEffect(()=>{dispatch(fetchEducation())},[]);

console.log("D",data)

  return (
   <div className='timeLine'>
     {data.map(item =><TimeLineItem key={item.title} {...item}/>)}
    </div>
 )
}

export default TimeLine;