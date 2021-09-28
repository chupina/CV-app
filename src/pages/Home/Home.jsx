import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import styles from "./Home.module.scss";
import photo from '../../assets/images/avatar.png'
export const Home = () => {
  return (
    <main className={styles.hero}>
      <PhotoBox
      size="large"
        name="John Doe"
        title="Programmer. Creative. Innovator"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        avatar={photo}
      />
      <NavLink to="/inner"><Button text="Know more"/></NavLink>
    </main>
  );
};
