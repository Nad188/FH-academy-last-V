import React,{useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import './ListOfStudents.css'
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { deleteStudent, getStudents } from '../../../JS/actions/adminActions';

const ListOfStudent = ({student}) => {

  const students = useSelector(state => state.admin.students)
  const dispatch=useDispatch()
  
  const getAllStudents=()=>{
   dispatch(getStudents())
 }

 useEffect(() => {
  getAllStudents()
 }, [])



    const columns = [
      { field: "id", headerName: "ID", width: 95 },
      {
        field: "firstName",
        headerName: "First name",
        width: 152,
        editable: true,
        renderCell: (params) => {
          return (
            <div className="StudentList">
              <img
                className="StudentListImg"
                src={params.row.avatar}
                alt="StudentPic"
              />
              {params.row.firstName}
            </div>
          );
        },
      },
      {
        field: "lastName",
        headerName: "Last name",
        width: 150,
        editable: true,
      },
      {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 105,
        editable: true,
      },
      {
        field: "gender",
        headerName: "Gender",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 105,
      },
      {
        field: "phone",
        headerName: "phone",
        type: "phoneNumber",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 98,
      },
      {
        field: "parentName",
        headerName: "Parent name",
        type: "phoneNumber",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 143,
      },
      {
        field: "parentPhone",
        headerName: "Parent phone",
        type: "phoneNumber",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 149,
      },
      {
        field: "action",
        haederName: "Action",
        width: 120,
        renderCell: (params) => {
          return (
            <>
              <DeleteOutline className="StudentListDelete" onClick={()=>dispatch(deleteStudent(params.id))}/>
            </>
          );
        },
      },
    ];


    let rows=[]

    rows = students.map((student, id) => {
      return (rows = {
        id: student._id,
        lastName: student.lastName,
        firstName: student.firstName,
        email:student.email,
        age: student.age,
        gander:student.gander,
        phone: student.phone,
        parentName:student.parentName,
        parentPhone:student.parentPhone,
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

export default ListOfStudent
