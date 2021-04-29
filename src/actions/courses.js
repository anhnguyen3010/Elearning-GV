// import axiosClient from '../services/axiosClient'
import coursesAPI from "../services/coursesAPI";
import {
  GET_COURSES_FAILURE,
  GET_COURSES_REQUEST,
  GET_COURSES_SUCCESS,
  POST_USER_LOGIN_FAILURE,
  POST_USER_LOGIN_SUCCESS,
  POST_USER_LOGIN_REQUEST,
  GET_COURSE_INFOR_FAILURE,
  GET_COURSE_INFOR_REQUEST,
  GET_COURSE_INFOR_SUCCESS,
} from "../constants/courses";


export function getCoursesByCategory(category) {
  return async (dispatch) => {
    dispatch({
      type: GET_COURSES_REQUEST,
    });
    try {
      const { data } = await coursesAPI.getCoursesByCategory(category);
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  };
}


export function postUserLogin(user) {
  return async (dispatch) => {
    dispatch({
      type:POST_USER_LOGIN_REQUEST
    })
    try{
      const {data} = await coursesAPI.postUserLogin(user)
      dispatch({
        type:POST_USER_LOGIN_SUCCESS,
        payload: {data}
      })
    }catch(error){
      dispatch({
        type:POST_USER_LOGIN_FAILURE,
        payload:{error:error.response.data}
      })
    }
  }
}

export function getCourses(){
  return async (dispatch) =>{
    dispatch({
      type: GET_COURSES_REQUEST,
    });
    try {
      const { data } = await coursesAPI.getCourses();
      dispatch({
        type: GET_COURSES_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_COURSES_FAILURE,
        payload: { error: error.response.data },
      });
    }
  }
}
export function getInforCourse(id){
  return async (dispatch) =>{
    dispatch({
      type: GET_COURSE_INFOR_REQUEST,
    });
    try {
      const { data } = await coursesAPI.getInforCourse(id);
      dispatch({
        type: GET_COURSE_INFOR_SUCCESS,
        payload: { data },
      });
    } catch (error) {
      dispatch({
        type: GET_COURSE_INFOR_FAILURE,
        payload: { error: error.response.data },
      });
    }
  }
}