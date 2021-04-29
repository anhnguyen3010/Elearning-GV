import {LOGIN_FAILURE,LOGIN_SUCCESS,LOGIN_REQUEST} from '../constants/auth'
import authAPI from '../services/auth'

export function login(values){
    return async (dispatch) => {
        dispatch({
            type:LOGIN_REQUEST,
            isLoading:true,
        })
        try{
            const {data} = await authAPI.login(values)
            //Lưu thông tin xuống localstore
            localStorage.setItem('userInfor',JSON.stringify(data))
            dispatch({
                type:LOGIN_SUCCESS,
                payload: {data}
            })
        }catch(error){
            dispatch({
                type:LOGIN_FAILURE,
                payload: {error:error.response.data}
            })
        }
    }
}