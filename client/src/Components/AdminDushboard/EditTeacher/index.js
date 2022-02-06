import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import {
  PermIdentity,
  LocationCity,
  AlternateEmail,
  Dialpad,
  Publish,
} from "@material-ui/icons";
import { Link } from "react-router-dom";
import "./EditTeacher.css";

const EditTeacher = () => {

 
  const isEdit = useSelector(state=>state.admin.isEdit)
  const teacherId = useSelector(state=>state.admin.teacherId)
  const [editingTeacher,setEditingTeacher]=useState({
    firstName:"",
    lastName:"",
    phone:"",
    address:"",
    email:"",
  })

useEffect(() => {
 if(isEdit){
  setEditingTeacher(teacherId)
 }else{
  setEditingTeacher({
    firstName:"",
    lastName:"",
    phone:"",
    address:"",
    email:"",
  })
 }
}, [isEdit,teacherId])


  const handleChange=(e)=>{
    setEditingTeacher({...editingTeacher,[e.target.name]:e.target.value})
  }

  return (
    <div className="teacher">
      <div className="TeacherNameContainer">
        <h1 className="teacherName">Edit Teacher</h1>
        <Link to="/addTeacher">
          <button className="teacherAddbutton">Create</button>
        </Link>
      </div>
      <div className="TeacherContainer">
        <div className="TeacherShow">
          <div className="TeacherShowtop">
            <img
              src="https://picsum.photos/200"
              alt="TeacherPic"
              className="TeacherPicSty"
            />
            <div className="TeacherShowTopTitle">
              <span className="TeacherShowTeacherName">Bilel Said</span>
              <span className="TeacherShowTeacherSubject">Informatique</span>
            </div>
          </div>
          <div className="TeacherShowBottom">
            <span className="TeacherShowTitle">Account Details</span>
            <div className="TeacherShowInfo">
              <PermIdentity className="TeacherShowIcon" />
              <span className="TeacherShowInfoTitle">Bilel Said</span>
            </div>
            <div className="TeacherShowInfo">
              <AlternateEmail className="TeacherShowIcon" />
              <span className="TeacherShowInfoTitle">BilelSaid@gmail.com</span>
            </div>
            <div className="TeacherShowInfo">
              <Dialpad className="TeacherShowIcon" />
              <span className="TeacherShowInfoTitle">58469823</span>
            </div>
            <div className="TeacherShowInfo">
              <LocationCity className="TeacherShowIcon" />
              <span className="TeacherShowInfoTitle">Ariana</span>
            </div>
          </div>
        </div>
        <div className="TeacherUpdate">
          <span className="TeacherUdpateTitle">Edit</span>
          <form className="TeacherUpdateForm">
            <div className="TeacherUpdateLeft">
              <div className="TeacherUpdateItems">
                <label className="">Full Name</label>
                <input
                  type="text"
                  name="firstName"
                  value={editingTeacher.firstName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="TeacherUpdateInput"
                />
              </div>
              <div className="TeacherUpdateItems">
                <label className="">E-mail</label>
                <input
                  type="text"
                  name="email"
                  value={editingTeacher.email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  className="TeacherUpdateInput"
                />
              </div>
              <div className="TeacherUpdateItems">
                <label className="">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={editingTeacher.phone}
                  onChange={handleChange}
                  placeholder="Phone"
                  className="TeacherUpdateInput"
                />
              </div>
              <div className="TeacherUpdateItems">
                <label className="">Address</label>
                <input
                  type="text"
                  name="address"
                  value={editingTeacher.address}
                  onChange={handleChange}
                  placeholder="Address"
                  className="TeacherUpdateInput"
                />
              </div>
            </div>
            <div className="TeacherUpdateRight">
              <div className="TeacherUpdateUpload">
                <img
                  className="TeacherUpdatePic"
                  src="https://picsum.photos/200"
                  alt="UpdateingPic"
                />
                <label htmlFor="file">
                  <Publish className="TeacherupdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="TeacherUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditTeacher;
