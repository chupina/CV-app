import React from "react";
import './TimeLine.scss';
import TimeLineItem from "./TimeLineItem";

 const TimeLine = ({data}) => {
  return (
   <div className='timeLine'>
     {data.map(item =><TimeLineItem key={item.title} {...item}/>)}
    </div>
 )
}

export default TimeLine;