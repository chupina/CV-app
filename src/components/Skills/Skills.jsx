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

const EditForm = () => {
  const isPending = useSelector((state) => state.skills.loading);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      title: "",
      level: "",
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Skill name is a required field"),
      level: Yup.number()
        .typeError("Skill range has to be a number")
        .min(10, "Must be greater than oe equal to 10")
        .max(100, "Must be less than oe equal to 100")
        .required("Skill range is a required field"),
    }),
    onSubmit: async (values) => {
         try {
        await  dispatch(addSkills(values)).unwrap()
       } catch (error) {
         alert(`${error.name} : ${error.message}`)
        }
        formik.resetForm()
    },
  });
  return (
    <form className="skills__form" onSubmit={formik.handleSubmit}>
      <div className="skills__form-field">
        <label htmlFor="skillNameName">Skill Name</label>
        <input
          className="skills__form-input"
          id="skillName"
          name="title"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.title}
          placeholder="Enter skill name"
        />
      </div>
      {formik.touched.title && formik.errors.title ? (
        <div className="skills__form__validation-error">
          {formik.errors.title}
        </div>
      ) : null}
      <div className="skills__form-field">
        <label htmlFor="skillRange">Skill Range</label>
        <input
          className={`skills__form-input ${
            formik.errors.level ? "danger" : ""
          }`}
          id="skillRange"
          name="level"
          type="text"
          placeholder="Enter skill range"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.level}
        />
      </div>
      {formik.touched.level && formik.errors.level ? (
        <div className="skills__form__validation-error">
          {formik.errors.level}
        </div>
      ) : null}

      <button
        type="submit"
        className="skills__form-submit"
        disabled={!formik.isValid || !formik.dirty || isPending}
      >
        Add skill
      </button>
    </form>
  );
};

const Skills = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.skills.entities);
   const editMode = useSelector((state) => state.skills.edit);
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
            text={editMode ? "Close edit" : "Open edit"}
            onClick={() => toggle()}
          />{" "}
        </div>
        {editMode ? <EditForm /> : <></>}
      </div>
      <Chart data={data} />
    </>
  );
};

export default Skills;