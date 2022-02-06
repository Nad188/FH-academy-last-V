import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {Link} from 'react-router-dom'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import './ListOfCourses.css'
import {deletecourse, getCourse, getCourses, toggleTrue} from '../../../JS/actions/adminActions'

const ListOfCourses = ({course}) =>{
  const dispatch=useDispatch()
  const courses = useSelector(state => state.admin.courses)
   const getAllCourses=()=>{
    dispatch(getCourses())
  }

  useEffect(() => {
    getAllCourses()
  }, [])

    const columns = [
      { field: "id", headerName: "ID", width: 95 },
      {
        field: "title",
        headerName: "Title",
        width: 210,
        editable: true,
      },
      {
        field: "subject",
        headerName: "Subject",
        width: 150,
        editable: true,
      },
      {
        field: "discription",
        headerName: "Discription",
        width: 220,
        editable: true,
      },
      {
        field: "grade",
        headerName: "Grade",
        type: "number",
        width: 200,
        editable: true,
      },
      {
        field: "file",
        headerName: "File",
        type: "number",
        width: 130,
        editable: true,
      },
     
      {
        field: "action",
        haederName: "Action",
        width: 150,
        renderCell: (params) => {
          return (
            <> 
            <Link to='/EditCourse/'>
              <button className="CourseListEdit" onClick={()=>{dispatch(getCourse(params.id));dispatch(toggleTrue())}}>Edit</button>
            </Link>
              <DeleteOutline className="CourseListDelete" onClick={()=>dispatch(deletecourse(params.id))}/>          
            </>
          );
        },
      },
    ];


    let rows=[]

    rows = courses.map((course, id) => {
      return (rows = {
        id: course._id,
        title: course.title,
        subject: course.subject,
        discription:course.discription,
        grade:course.grade,
        file: course.file,    
        avatar: "https://picsum.photos/200",
      });
    });
  
 
    return (
      <div className="DataGridStyle">
        <DataGrid
          rows={rows}
          columns={columns}
          checkboxSelection
          disableSelectionOnClick
        />
      </div>
    );
  }

export default ListOfCourses
