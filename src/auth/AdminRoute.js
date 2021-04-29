import React from 'react'
import {Redirect, Route} from 'react-router-dom'
import {useSelector} from 'react-redux'
export default function AdminRoute({children,...props}){

    const {userInfor} = useSelector ((state)=>state.auth)
    
    //chưa đăng nhập
    if(!userInfor){
        console.log(props.path)
        return <Redirect to={`/login?redirectTo=${props.path}`}/>
    }
    
    //đăng nhập nhưng không phải admin
    if(userInfor.maLoaiNguoiDung !== "GV"){
        return <Redirect to='/'/>
    }
    return <Route {...props}>{children}</Route>
}