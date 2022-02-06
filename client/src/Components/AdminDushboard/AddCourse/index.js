import React,{useState} from 'react'
import {useDispatch} from 'react-redux'
import './AddCourse.css'
import {addCourse} from '../../../JS/actions/adminActions'

const AddCourse = () => {

  const dispatch=useDispatch()
   
  const [course,setCourse]=useState({
    title:"",
    subject:"",
    discription:"",
    grade:"",
    file:"",
  })

  const handleChange=(e)=>{
    setCourse({...course,[e.target.name]:e.target.value})
  }


    return (
      <div className="newCourse">
        <h1 className="newCoursetitle">New Course</h1>
        <form className="newCourseForm">
          <div className="newCourseItems">
            <label className="">Course Title</label>
            <input type="text" onChange={handleChange} name='title' placeholder="Course Title" />
          </div>
          <div className="newCourseItems">
            <label className="">Subject</label>
            <input type="text" onChange={handleChange} name='subject' placeholder="Subject" />
          </div>
          <div className="newCourseItems">
            <label className="">Discription</label>
            <input type="text" onChange={handleChange} name='discription' placeholder="Discription" />
          </div>
          <div className="newCourseItems">
           <label className="">Grade</label>
            <input type="text" onChange={handleChange} name='grade' placeholder="Grade" />
          </div>
          <div className="newCourseItems"> 
          <label className="fileStyle">File</label>
            <input type="file" onChange={handleChange} name='file' placeholder="File" />
            <button className="newCourseButton" onClick={()=>dispatch(addCourse(course))}>Create</button>
          </div>   
        </form>
      </div>
    );
  };

export default AddCourse
