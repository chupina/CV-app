import React from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";
import { Button } from "../../components/Button/Button";
import { PhotoBox } from "../../components/PhotoBox/PhotoBox";
import photo from "../../assets/images/avatar.jpg";
import data from '../../utils/data';
export const Home = () => {
  return (
    <main className='hero' data-testid="hero">
      <PhotoBox
        size="large"
        name={data.user.name}
        title={data.user.title}
        description={data.user.description}
        avatar={photo}
      />
      <NavLink to="/inner">
        <Button text="Know more" />
      </NavLink>
    </main>
  );
};
