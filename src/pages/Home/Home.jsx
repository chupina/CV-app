import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import photo from "../../assets/images/avatar.jpg";
import data from '../../utils/data';
export const Home = () => {
  return (
    <main className='hero'>
      <PhotoBox
        size="large"
        name={data.user.name}
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
