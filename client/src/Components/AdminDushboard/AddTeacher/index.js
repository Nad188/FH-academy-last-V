import React,{useState} from "react";
import {useDispatch} from 'react-redux'
import "./AddTeacher.css";
import { addTeacher } from "../../../JS/actions/adminActions";

const AddTeacher = () => {


const dispatch=useDispatch()
   
  const [teacher,setTeacher]=useState({
    firstName:"",
    lastName:"",
    age:"",
    phone:"",
    address:"",
    email:"",
    password:""
  })

  const handleChange=(e)=>{
    setTeacher({...teacher,[e.target.name]:e.target.value})
  }

  return (
    <div className="newTeacher">
      <h1 className="newTeachertitle">New Teacher</h1>
      <form className="newTeacherForm" >
        <div className="newTeacherItems">
          <label className="">First name</label>
          <input type="text" onChange={handleChange} name='firstName' placeholder="First name" />
        </div>
        <div className="newTeacherItems">
          <label className="">Last name</label>
          <input type="text" onChange={handleChange} name='lastName' placeholder="Last Name" />
        </div>
        <div className="newTeacherItems">
          <label className="">Address</label>
          <input type="text" onChange={handleChange} name="address" placeholder="Address" />
        </div>
        <div className="newTeacherItems">
          <label className="">Phone</label>
          <input type="number" onChange={handleChange} name="phone" placeholder="Phone" />
        </div>
        <div className="newTeacherItems">
          <label className="">E-mail</label>
          <input type="email" onChange={handleChange} name="email" placeholder="Email" />
        </div>
        <div className="newTeacherItems">
          <label className="">Password</label>
          <input type="password" onChange={handleChange} name='password' placeholder="Password" />
          <div className="newTeacherItems">
            <label className="">Gender</label>
            <div className="newTeacherGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label htmlFor="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label htmlFor="female">Female</label>
            </div>
          </div> 
          <button className="newTeacherButton" onClick={()=>dispatch(addTeacher(teacher))}>Create</button>
        </div>
       
      </form>
    </div>
  );
};

export default AddTeacher;
