import React from "react";
import styles from './ExpertiseItem.module.scss';
export const ExpertiseItem = ({data}) => {
 return(
   <div className={styles.grid}>
    <div className={styles.date}>{data.date}</div>
   <div className={styles.company}>{data.info.company}</div>
   <div className={styles.job}>{data.info.job}</div>
   <div className={styles.description}>{data.info.description}</div>
  </div>
 ) 
}