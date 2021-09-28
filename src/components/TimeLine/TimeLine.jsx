import React from "react";
import styles from './TimeLine.module.scss';
import TimeLineItem from "./TimeLineItem";

export const TimeLine = ({data}) => {
  return (
   <div className={styles.timeLine}>
     {data.map(item =><TimeLineItem {...item}/>)}
    </div>
 )
}