import React from "react";
import styles from './TimeLIneItem.module.scss';

const TimeLineItem = ({date, title, text }) => {
  return (
   <div className={styles.timeLineItem}>
    <div className={styles.timeLine}><time>{date}</time><div className={styles.scroll}></div></div>
    <article className={styles.info}>
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
    </div>
 )
}

export default TimeLineItem;
