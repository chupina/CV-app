import React from "react";
import styles from './Box.module.scss';
export const Box = ({title, children}) => <section id={title} className={styles.box}><h2>{title}</h2><div>{children}</div></section>

