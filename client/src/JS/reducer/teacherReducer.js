// import {
//   TEACHER_LOGIN,
//   TEACHER_LOGIN_SUCCESS,
//   TEACHER_LOGIN_FAILED,
// } from "../contants/actionTypes";

// const initialState = {
//   loading: false,

//   isAuth: false,
// };

// const teacherReducer = (state = initialState, {  type,payload }) => {
//   switch (type) {
//     case TEACHER_LOGIN:
//       return {
//         ...state,
//         loading: true,
//       };
//     case TEACHER_LOGIN_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         token: payload,
//       };
//     case TEACHER_LOGIN_FAILED:
//       return {
//         ...state,
//         loading: false,
//         errors: payload,
//       };

//     default:
//       return state;
//   }
// };

// export default teacherReducer;
