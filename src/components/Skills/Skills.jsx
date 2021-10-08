import React, { useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills, addSkills } from "../../features/skills/skillsSlice";
import { toggleEdit } from "../../features/skills/skillsSlice";
import "./Skills.scss";
import { Button } from "./../Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import Chart from "../Chart/Chart";
import SkillsForm from "./SkillsForm";

const Skills = () => {
  const dispatch = useDispatch();
  const { entities, edit, loading } = useSelector((state) => state.skills);

  useEffect(() => {
    dispatch(fetchSkills());
  }, [dispatch]);

  const toggle = () => dispatch(toggleEdit());
  return (
    <>
      <div className="edit__wrapper">
        <div className="skills__edit">
          <Button
            icon={<FontAwesomeIcon icon={faEdit} />}
            text={edit ? "Close edit" : "Open edit"}
            onClick={() => toggle()}
          />{" "}
        </div>
        {edit ? <SkillsForm isLoading={loading} /> : <></>}
      </div>
      <Chart data={entities} />
    </>
  );
};

export default Skills;
