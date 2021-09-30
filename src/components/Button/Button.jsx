import React from "react";
import styles from './Button.scss';
export const Button = ({icon, text}) => <button className='button'>{icon}<span>{text}</span></button>

