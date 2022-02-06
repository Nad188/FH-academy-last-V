import React, { useEffect, useState } from "react";
import { useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import {
    Subject,
    Class,
    Publish,
    AirlineSeatLegroomExtra
  } from "@material-ui/icons";
import './EditCourse.css'

const EditCourse = () => {

  const isEdit = useSelector(state=>state.admin.isEdit)
  const courseId = useSelector(state=>state.admin.courseId)
  const [editingCourse,setEditingCourse]=useState({
    title:"",
    subject:"",
    discription:"",
    grade:"",
    file:"",
  })
  
useEffect(() => {
 if(isEdit){
  setEditingCourse(courseId)
 }else{
  setEditingCourse({
    title:"",
    subject:"",
    discription:"",
    grade:"",
    file:"",
  })
 }
}, [isEdit,courseId])


  const handleChange=(e)=>{
    setEditingCourse({...editingCourse,[e.target.name]:e.target.value})
  }
  
    return (
      <div className="Course">
        <div className="CourseNameContainer">
          <h1 className="CourseName">Edit Course</h1>
          <Link to='/AddCours'>
            <button className="CourseAddbutton">Create</button>
          </Link>
        </div>
        <div className="CourseContainer">
          <div className="CourseShow">
            <div className="CourseShowtop">
              <img
                src="https://picsum.photos/200"
                alt="CoursePic"
                className="CoursePicSty"
              />
              <div className="CourseShowTopTitle">
                <span className="CourseShowCourseSubject">English</span>
              </div>
            </div>
            <div className="CourseShowBottom">
              <span className="CourseShowTitle">Course Details</span>
              <div className="CourseShowInfo">
                <Subject className="CourseShowIcon" />
                <span className="CourseShowInfoTitle">English</span>
              </div>
              <div className="CourseShowInfo">
                <Class className="CourseShowIcon" />
                <span className="CourseShowInfoTitle">Simple Past</span>
              </div>
              <div className="CourseShowInfo">
                <AirlineSeatLegroomExtra className="CourseShowIcon" />
                <span className="CourseShowInfoTitle">7éme année</span>
              </div>
            </div>
          </div>
          <div className="CourseUpdate">
            <span className="CourseUdpateTitle">Edit</span>
            <form className="CourseUpdateForm">
              <div className="CourseUpdateLeft">
                <div className="CourseUpdateItems">
                  <label className="">Course Title</label>
                  <input
                    type="text"
                    name="title"
                  value={editingCourse.title}
                  onChange={handleChange}
                    placeholder="Course Title"
                    className="CourseUpdateInput"
                  />
                </div>
                <div className="CourseUpdateItems">
                  <label className="">Subject</label>
                  <input
                    type="text"
                    name="subject"
                  value={editingCourse.subject}
                  onChange={handleChange}
                    placeholder="Subject"
                    className="CourseUpdateInput"
                  />
                </div>
                <div className="CourseUpdateItems">
                  <label className="">Discription</label>
                  <input
                    type="text"
                    name="discription"
                  value={editingCourse.discription}
                  onChange={handleChange}
                    placeholder="Subject"
                    className="CourseUpdateInput"
                  />
                </div>
                <div className="CourseUpdateItems">
                  <label className="">Grade</label>
                  <input
                    type="text"
                    name="grade"
                  value={editingCourse.grade}
                  onChange={handleChange}
                    placeholder="Grade"
                    className="CourseUpdateInput"
                  />
                </div>
                <div className="CourseUpdateItems">
                  <label className="">File</label>
                  <input
                    type="file"
                    name="file"
                  value={editingCourse.file}
                  onChange={handleChange}
                    placeholder="File"
                    className="CourseUpdateInput"
                  />
                </div>
              </div>
              <div className="CourseUpdateRight">
                <div className="CourseUpdateUpload">
                  <img
                    className="CourseUpdatePic"
                    src="https://picsum.photos/200"
                    alt="UpdateingPic"
                  />
                  <label htmlFor="file">
                    <Publish className="CourseupdateIcon" />
                  </label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="CourseUpdateButton">Update</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  };
  

export default EditCourse
