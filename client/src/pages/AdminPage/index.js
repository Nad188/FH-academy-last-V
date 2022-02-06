import React from "react";
import { useSelector } from "react-redux";
import { Pages } from "./AdminPageElements";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddCourse from "../../Components/AdminDushboard/AddCourse";
import AddTeacher from "../../Components/AdminDushboard/AddTeacher";
import AdminHomePage from "../../Components/AdminDushboard/AdminHomePage";
import ListOfCourses from "../../Components/AdminDushboard/ListOfCourses";
import ListOfStudent from "../../Components/AdminDushboard/ListOfStudents";
import ListOfTeachers from "../../Components/AdminDushboard/ListOfTeachers";
import Sidebar from "../../Components/AdminDushboard/Sidebar";
import EditTeacher from "../../Components/AdminDushboard/EditTeacher";
import EditCourse from "../../Components/AdminDushboard/EditCourse";



const AdminPage = () => {

 const teachers = useSelector(state => state.admin.teachers)
 const students = useSelector(state=>state.admin.students)
 const courses = useSelector(state=>state.admin.courses)
 
 


  return (
    <BrowserRouter>
      <Sidebar />
      <Pages>
        <Switch>
          <Route exact path="/AdminHomePage" render={() =><AdminHomePage  />}/>
           <Route exact path="/ListOfTeachers" render={() =><ListOfTeachers teacher={teachers}/>}/>   
          <Route exact path="/addTeacher" render={()=><AddTeacher />} />
          <Route exact path="/ListOfStudents" render={()=><ListOfStudent student={students}/>} />
          <Route exact path="/ListOfCourses" render={()=><ListOfCourses course={courses}/>} />
          <Route exact path="/AddCours" render={()=><AddCourse />} />
          <Route exact path='/EditTeacher' render={()=><EditTeacher />} />
          <Route exact path='/EditCourse' render={()=><EditCourse />} />
        </Switch>
      </Pages>
   </BrowserRouter>
  );
};

export default AdminPage;
