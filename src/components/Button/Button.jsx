import React from "react";
import styles from './Button.module.scss';
export const Button = ({icon, text}) => <button className={styles.button}>{icon}<span>{text}</span></button>

