import React, { useEffect } from "react";
import "./Skills.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills, addSkills } from "../../features/skills/skillsSlice";
import { toggleEdit } from "../../features/skills/skillsSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import icons from "../../assets/fonts/iconsLib";
import Button from "./../Button/Button";
import Chart from "../Chart/Chart";
import SkillsForm from "./SkillsForm";

const Skills = () => {
  const dispatch = useDispatch();
  const { entities, edit, loading } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const toggle = () => dispatch(toggleEdit());

  const formSubmit = async (values) => {
    try {
      await dispatch(addSkills(values)).unwrap();
    } catch (error) {
      console.log(`${error.name} : ${error.message}`);
    }
  };
  const editIcon = <FontAwesomeIcon icon={icons["faEdit"]} />
  return (
    <>
      <div className="edit__wrapper">
        <div className="skills__edit">
          <Button
            icon={editIcon}
            text={edit ? "Close edit" : "Open edit"}
            onClick={() => toggle()}
          />
        </div>
        {edit ? (
          <SkillsForm isLoading={loading} submitHandler={formSubmit} />
        ) : (
          <></>
        )}
      </div>
      <Chart data={entities} />
    </>
  );
};

export default Skills;
