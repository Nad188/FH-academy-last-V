import axios from "axios";
import {
  ADMIN_LOGIN,
  ADMIN_LOGIN_FAILED,
  ADMIN_LOGIN_SUCCESS,
  GET_PROFIL,
  GET_PROFIL_FAILED,
  GET_PROFIL_SUCCESS,
  GET_TEACHERS,
  GET_STUDENTS,
  TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_TEACHER,
  GET_COURSES,
  GET_COURSE
} from "../contants/actionTypes";

export const adminLogin = (adminCred) => async (dispatch) => {
  dispatch({ type: ADMIN_LOGIN });

  try {
    const res = await axios.post(
      "http://localhost:7979/admin/adminLogIn",
      adminCred
    );
    localStorage.setItem("token", res.data.token);
    dispatch({ type: ADMIN_LOGIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: ADMIN_LOGIN_FAILED, payload: error.response.data });
  }
};
export const getProfile = () => async (dispatch) => {
  dispatch({ type: GET_PROFIL });

  const config = {
    headers: {
      Authorization: localStorage.getItem("token"),
    },
  };

  try {
    const res = await axios.get(
      "http://localhost:7979/admin/adminPage",
      config
    );

    dispatch({ type: GET_PROFIL_SUCCESS, payload: res.data });
    ;
  } catch (error) {
    dispatch({ type: GET_PROFIL_FAILED, payload: error.response.data });
 }
};


export const getTeachers = () =>async (dispatch) =>{
  try {
    const res=await axios.post('http://localhost:7979/admin/getTeachers')
    dispatch({ type: GET_TEACHERS, payload: res.data })
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const getTeacher=(id)=>async(dispatch)=>{
try {
  const res=await axios.post(`http://localhost:7979/admin/getTeacher/${id}`)
  dispatch({type:GET_TEACHER,payload:res.data})
} catch (error) {
  (err) => console.log("err", err)
}
}

export const getStudents = () =>async (dispatch) =>{
  try {
    const res=await axios.post('http://localhost:7979/admin/getStudents')
    dispatch({ type: GET_STUDENTS, payload: res.data })
  
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const addTeacher=(newTeacher)=>async(dispatch)=>{
  try {
   await  axios.post("http://localhost:7979/admin/addteacher", newTeacher)
     dispatch(getTeachers())
  } catch (error) {
    (err) => console.log("err", err)
  }
}
  




export const deleteteacher=(id)=>async(dispatch)=>{
  try {
    await axios.delete(`http://localhost:7979/admin/deleteTeacher/${id}`)
    dispatch((getTeachers()))
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const deleteStudent=(id)=>async(dispatch)=>{
  try {
    await axios.delete(`http://localhost:7979/admin/deleteStudent/${id}`)
    dispatch((getStudents()))
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const toggleTrue = () => {
  return { type: TOGGLE_TRUE };
};

export const toggleFalse = () => {
  return { type: TOGGLE_FALSE };
};

export const Update=(id,updateTeacher)=>(dispatch)=>{
  try {
    axios.put(`http://localhost:7979/admin//updateTeacher/${id}`,updateTeacher)
    dispatch((getTeachers()))
  } catch (error) {
    (err=>console.log('err',err))
  }
}

export const getCourses = () =>async (dispatch) =>{
  try {
    const res=await axios.post('http://localhost:7979/admin/getCourses')
    dispatch({ type: GET_COURSES, payload: res.data })
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const getCourse=(id)=>async(dispatch)=>{
  try {
    const res=await axios.post(`http://localhost:7979/admin/getCourse/${id}`)
    dispatch({type:GET_COURSE,payload:res.data})
  } catch (error) {
    (err) => console.log("err", err)
  }
  }

export const addCourse=(newCourse)=>async(dispatch)=>{
  try {
    await axios.post("http://localhost:7979/admin/addCourses", newCourse)
  } catch (error) {
    (err) => console.log("err", err)
  }
}

export const deletecourse=(id)=>async(dispatch)=>{
  try {
    await axios.delete(`http://localhost:7979/admin/deleteCourses/${id}`)
    dispatch((getCourses()))
  } catch (error) {
    (err) => console.log("err", err)
  }
}

// export const Updatecourse=(id,updateCourse)=>(dispatch)=>{
//   try {
//     axios.put(`http://localhost:7979/admin//updateCourses/${id}`,updateCourse)
//     dispatch((getCourses()))
//   } catch (error) {
//     (err=>console.log('err',err))
//   }
// }