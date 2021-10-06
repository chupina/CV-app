import React  from "react";
import "./Chart.scss";
const Chart =({data}) => {
     return (
    <div className='chart'>
   {data.map((skill)=><div className='chart__bar' style={{width:`${skill.item.level}%`}}>{skill.item.title}</div>)}
     <div className='chart__ruler'><div className='chart__range'></div></div> 
    </div>
  )
  }

  export default Chart;