import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../constants/auth";


//lấy dữ liệu từ localStorage
const userInfor = localStorage.getItem("userInfor")
  ? JSON.parse(localStorage.getItem("userInfor"))
  : null;
  
const initialState = {
  userInfor,
  isLoading: false,
  error: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case LOGIN_SUCCESS: {
      return { ...state, userInfor: action.payload.data, isLoading: false };
    }
    case LOGIN_FAILURE: {
      return { ...state, error: action.payload.error, isLoading: false };
    }
    default:
      return state;
  }
}
export default authReducer;
