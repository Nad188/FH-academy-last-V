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

const initialState = {
  admin:{},
  teachers:[],
  teacherId:{},
  students:[],
  courses:[],
  courseId:{},
  isEdit:false,
  loading: false,
  isAuth: false,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADMIN_LOGIN:
    case GET_PROFIL:
      return {
        ...state,
        loading: true,
      };
      case GET_PROFIL_SUCCESS:
      return {
        ...state,
        loading: false,
        admin: payload,
        isAuth: true,
      };
    case ADMIN_LOGIN_FAILED:
    case GET_PROFIL_FAILED:
      return {
        ...state,
        loading: false,
        errors: payload,
        isAuth:false
      };
  case ADMIN_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        token: payload,
        isAuth:true
      };
      case GET_TEACHERS:
      return {
        ...state,
        teachers:payload,
      }
      case GET_TEACHER:
        return{
          ...state,
          teacherId:payload,
        }
      case GET_STUDENTS:
        return {
          ...state,
          students:payload,
        }
        case TOGGLE_TRUE:
          return {
            ...state,
            isEdit: true,
          };
        case TOGGLE_FALSE:
          return {
            ...state,
            isEdit: false,
          };  
          case GET_COURSES:
            return {
              ...state,
              courses:payload,
            } 
            case GET_COURSE:
              return{
                ...state,
                courseId:payload,
              }
     
    default:
      return state;
  }
};

export default adminReducer;
