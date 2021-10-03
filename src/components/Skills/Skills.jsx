import React, { useEffect } from "react";
import { Formik, Field, Form, useFormik } from 'formik';
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills, addSkills} from '../../features/skills/skillsSlice';
import "./Skills.scss";
import { Button } from './../Button/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen} from "@fortawesome/free-solid-svg-icons";



const  Skills = () => {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.skills.entities);
  useEffect(()=>{dispatch(fetchSkills())},[dispatch]);

  
    const formik = useFormik({
      initialValues: {
        title: '',
        level: '',
      },
      validationSchema: Yup.object({
       title: Yup.string()
         .required('Skill name is a required field'),
     level: Yup.number()
          .min(10, 'Must be greater than oe equal to 10')
          .max(100, 'Must be less than oe equal to 100')
          .required('Skill range is a required field'),
       
      }),
      onSubmit: values => {
        dispatch(addSkills(values))
        alert(JSON.stringify(values, null, 2));
      },
    });

  
  return (
    <>
    <div className='edit__wrapper'>
    <div className='skills__edit'><Button icon={<FontAwesomeIcon  icon={faPen}/>} text="Open edit"/> </div>
    <form className="skills__form" onSubmit={formik.handleSubmit}>
    <label htmlFor="skillNameName">Skill Name</label>
    <input
      id="skillName"
      name="title"
      type="text"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.title}
      placeholder="Enter skill name"
    />
    {formik.touched.title && formik.errors.title ? (
      <div>{formik.errors.title}</div>
    ) : null}

    <label htmlFor="skillRange">Skill Range</label>
    <input
      id="skillRange"
      name="level"
      type="text"
      placeholder="Enter skill range"
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}
      value={formik.values.level}
    />
    {formik.touched.level && formik.errors.level ? (
      <div>{formik.errors.level}</div>
    ) : null}

   
    <button type="submit" disabled={!formik.isValid}>Add skill</button>
  </form>

    </div>
    
  {data.map((item)=><div className='bar' style={{width:`${item.skills.item.level}%`}}>{item.skills.item.title}</div>)}
  </>
    
    
//     <> 
//     <form onSubmit={formik.handleSubmit}>
//      <label htmlFor="skillName">Skill Name</label>
//       <input
//         id="skillName"
//         name="skillName"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.skillName}
//       />
//       {formik.touched.skillName && formik.errors.skillName ? (
//         <div>{formik.errors.skillName}</div>
//       ) : null}

// <label htmlFor="skillRange">Skill range</label>
//       <input
//         id="skillRange"
//         name="skillRange"
//         type="text"
//         onChange={formik.handleChange}
//         onBlur={formik.handleBlur}
//         value={formik.values.skillRange}
//       />
//       {formik.touched.skillRange && formik.errors.skillRange ? (
//         <div>{formik.errors.skillRange}</div>
//       ) : null}

      

    
//       <button type="submit">Submit</button>
//     </form> */}
//     {data.map((item)=><div className='bar' style={{width:`${item.skills.item.level}%`}}>{item.skills.item.title}</div>)}
//     </>
  );
};

  



export default Skills;
