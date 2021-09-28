import React from "react";
import styles from './Burger.module.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const Burger=({clickHandler})=><button className={styles.burger}><FontAwesomeIcon icon={faBars} onClick={clickHandler} /></button>