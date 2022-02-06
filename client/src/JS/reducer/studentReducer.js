import {
  STUDENT_REGISTER,
  STUDENT_REGISTER_FAILED,
  STUDENT_REGISTER_SUCCESS,
} from "../contants/actionTypes";

const initialState = {
  loading: false,
  isAuth: false,
};

const studentReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case STUDENT_REGISTER:
          return {
            ...state,
            loading: true,
          };
    
    case STUDENT_REGISTER_SUCCESS:
          return {
            ...state,
            loading: false,
            msg: payload,
          };
     case STUDENT_REGISTER_FAILED:
            return {
                ...state,
                loading: false,
                errors: payload,
                isAuth: false,
              };

    default:
      return state;
  }
};

export default studentReducer;
