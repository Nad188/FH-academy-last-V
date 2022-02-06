import {
  STUDENT_REGISTER,
  STUDENT_REGISTER_FAILED,
  STUDENT_REGISTER_SUCCESS,
} from "../contants/actionTypes";
import axios from "axios";

export const StudentRegister = (newStudent) => async (dispatch) => {
  dispatch({ type: STUDENT_REGISTER });

  try {
    const res = await axios.post(
      "http://localhost:7979/student/studentRegistration",
      newStudent
    );
    
    console.log(res);
    console.log(res.data);

    dispatch({ type:STUDENT_REGISTER_SUCCESS , payload: res.data });
  } catch (error) {
    dispatch({ type:STUDENT_REGISTER_FAILED , payload: error.response.data });
  }
};
