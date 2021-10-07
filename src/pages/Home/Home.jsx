import React from "react";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import "./Home.scss";
import photo from "../../assets/images/avatar.jpg";
export const Home = () => {
  return (
    <main className='hero'>
      <PhotoBox
        size="large"
        name="Alena Chupina"
        title="Programmer. Creative. Innovator"
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque"
        avatar={photo}
      />
      <NavLink to="/inner">
        <Button text="Know more" />
      </NavLink>
    </main>
  );
};
