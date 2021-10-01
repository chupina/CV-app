import React, { useEffect } from "react";
import { Formik, Field, Form } from 'formik';
import { useDispatch, useSelector } from "react-redux";
import { fetchSkills, addSkills} from '../../features/skills/skillsSlice';
import "./Skills.scss";



const Skills = () => {

  const dispatch = useDispatch();
  const data = useSelector((state)=>state.skills.entities);

  useEffect(()=>{dispatch(fetchSkills())},[dispatch]);
  return(
   
    <>
     <Formik
      initialValues={{
        title: '',
       level: '',
             }}
      onSubmit={(values) => {
        dispatch(addSkills(values))
        alert(JSON.stringify(values, null, 2));
      }}
    >
      <Form>
        <label htmlFor="skillName">Skill Name</label>
        <Field id="skillName" name="title" placeholder="Enter Skill Name" />

        <label htmlFor="skillRange">Skill Range</label>
        <Field id="skillRange" name="level" placeholder="Enter Skill range" />

        
        <button type="submit">Add skill</button>
      </Form>
    </Formik>
    
    {data.map((item)=><div className='bar' style={{width:`${item.skills.item.level}%`}}>{item.skills.item.title}</div>)}
    </>

  )

};

export default Skills;
