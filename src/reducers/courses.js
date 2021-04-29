import {
  GET_COURSES_FAILURE,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  GET_COURSE_INFOR_FAILURE,
  GET_COURSE_INFOR_REQUEST,
  GET_COURSE_INFOR_SUCCESS,
  POST_USER_LOGIN_FAILURE,
  POST_USER_LOGIN_REQUEST,
  POST_USER_LOGIN_SUCCESS,
} from "../constants/courses";
const initialState = {
  courses: [],
  isLoading: false,
  error: "",
  userLogin: {},
  courseDetail:{},
};

function courses(state = initialState, action) {
  switch (action.type) {
    case GET_COURSE_INFOR_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_COURSE_INFOR_SUCCESS: {
      return {
        ...state,
        courseDetail: action.payload.data || {
          maKhoaHoc: "",
          tenKhoaHoc: "",
          hinhAnh: "",
          maNhom: "",
          nguoiTao: {
            taiKhoan: "",
            hoTen: "",
          },
        },
        isLoading: false,
      };
    }
    case GET_COURSE_INFOR_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || "something went wrong",
      };
    }
    case GET_COURSES_REQUEST: {
      return { ...state, isLoading: true };
    }
    case GET_COURSES_SUCCESS: {
      return { ...state, courses: action.payload.data, isLoading: false };
    }
    case GET_COURSES_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error || "something went wrong",
      };
    }

    
    
    default:
      return state;
  }
}
export default courses;
