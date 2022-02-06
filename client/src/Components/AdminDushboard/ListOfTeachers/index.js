import React,{useEffect} from "react";
import {useDispatch,useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import "./ListOfTeacher.css";
import { deleteteacher, getTeachers , getTeacher, toggleTrue } from "../../../JS/actions/adminActions";

const ListOfTeachers = ({teacher}) => {
  const dispatch=useDispatch()
  const teachers = useSelector(state => state.admin.teachers)
   const getAllTeachers=()=>{
    dispatch(getTeachers())
  }

  useEffect(() => {
    getAllTeachers()
  }, [])
 
  const columns = [
    { field: "id", headerName: "ID", width: 110 },
    {
      field: "firstName",
      headerName: "First name",
      width: 200,
      editable: true,
      renderCell: (params) => {
        return (
          <div className="TeacherList">
            <img
              className="TeacherListImg"
              src={params.row.avatar}
              alt="teacherPic"
            />
            {params.row.firstName}
          </div>
        );
      },
    },
    {
      field: "lastName",
      headerName: "Last name",
      width: 200,
      editable: true,
    },
    {
      field: "email",
      headerName: "E-mail",
      type: "email",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 200,
    },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 110,
      editable: true,
    },
    {
      field: "phone",
      headerName: "phone",
      type: "phoneNumber",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 150,
    },
    {
      field: "action",
      haederName: "Action",
      width: 135,
      renderCell: (params) => {
        return (
          <>
            <Link to="/EditTeacher/"    >
              <button className="teacherListEdit" onClick={()=>{dispatch(getTeacher(params.id));dispatch(toggleTrue())}}>Edit</button>
            </Link>
            <DeleteOutline className="teacherListDelete" onClick={()=>dispatch(deleteteacher(params.id))}/>
          </>
        );
      },
    },
  ];
  let rows=[]

  rows = teachers.map((teacher, id) => {
    return (rows = {
      id: teacher._id,
      lastName: teacher.lastName,
      firstName: teacher.firstName,
      email:teacher.email,
      age: teacher.age,
      phone: teacher.phone,
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
};

export default ListOfTeachers;
