import React from "react";
import styles from './Feedback.module.scss';
import { Info } from './../Info/Info';
import { PhotoBox } from "../PhotoBox/PhotoBox";

const Feedback = ({data}) => {
  return (
    data.map((feedback)=>{
      return(
<figure className={styles.feedback}>
    <blockquote className={styles.feedback__text}  >
    <Info text={feedback.feedback} />
    </blockquote>
    <figcaption className={styles.feedback__caption}><PhotoBox size='small' avatar={feedback.reporter.photoUrl} /><cite className={styles.feedback__cite}><h3>{feedback.reporter.name} </h3> <a href={feedback.reporter.citeUrl}>{feedback.reporter.citeUrl}</a></cite></figcaption>
</figure>
      )
    }
    
 )
  )}


export default Feedback;