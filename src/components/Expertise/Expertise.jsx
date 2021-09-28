import React from "react";
import styles from './Expertise.module.scss'
import { ExpertiseItem } from "./ExpertiseItem/ExpertiseItem";
export const Expertise = ({data}) => {
 return (
     <div className={styles.expertise}>
       {data.map(item=><ExpertiseItem data={item}/>)}
       </div> 
 ) 
}