import React from "react";
import styles from './Burger.module.scss';



export const Burger=({clickHandler, children})=><button className={styles.burger}  onClick={clickHandler}>{children}</button>