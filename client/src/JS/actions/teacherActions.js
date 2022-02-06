// import axios from 'axios'
// import { TEACHER_LOGIN ,TEACHER_LOGIN_SUCCESS,TEACHER_LOGIN_FAILED } from '../contants/actionTypes';





// export const teacherLogin = (teacherCred) => async (dispatch) => {
//     dispatch({ type: TEACHER_LOGIN  });
  
//     try {
//       const res = await axios.post(
//         "http://localhost:7979/teacher/teacherLogin",
//         teacherCred
//       );
  
//       dispatch({ type: TEACHER_LOGIN_SUCCESS, payload: res.data });
//     } catch (error) {
//       dispatch({ type: TEACHER_LOGIN_FAILED, payload: error.response.data });
//     }
//   };