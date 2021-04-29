import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form"; //Validation library
//materialUI??
import { Input, FormGroup, Label, Alert } from "reactstrap";
//Controll Component: Control tất cả mọi thứ trên giao diện bằng state vs props
//Uncontrolled Component: Control giao diện không thông qua state hoặc props
//yup library giúp cho xử lý validation trong reac-hook-form được gọn hơn
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch,useSelector} from 'react-redux'
// import {postUserLogin} from '../../actions/courses'
//tạo schema validation
import {login} from '../../actions/auth'
import { Redirect, useLocation } from "react-router";
import qs from 'qs'


const schema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  matKhau: yup.string().required("Không được để trống"),
});

export default function LoginPage() {
  const dispatch = useDispatch()
  const inputAcc = useRef(); //biến inputAcc dc gán ở đâu => thì nó đang DOM đến đó
  const inputPass = useRef();
  const {userInfor,isLoading,error} = useSelector((state)=>state.auth)

  //useLocation(để lấy ra cái Queryparams)
  const location = useLocation()
  const handleLogin = (values) => {
    // console.log(inputAcc.current.value)
    // console.log(inputPass.current.value)
    console.log(values)
    dispatch(login(values))
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
    //sử dụng khi UI component không hổ trợ register
    control,
    
  } = useForm(
      {resolver:yupResolver(schema),}
  );

    //userInfor có data => đã đăng nhập sẽ chuyển người dùng về trang Home
    if(userInfor){
      //dùng qs để cắt phần phía trước ?xxx 
      const {redirectTo} = qs.parse(location.search,{ignoreQueryPrefix:true})
      if(redirectTo){
        return <Redirect to={redirectTo}/>
      }
      return <Redirect to="/"/>
    }

  // useRef vs useState : cả 2 đều cùng dùng để lưu trữ dữ liệu
  //Khi state thay đổi component => render lại
  //Khi ref thay đổi component => ko render lại (thường dùng để lưu trữ cho các input trên component => tối ưu performane)
  //nên dùng thư viện sử lý form: formik-dùng state , react-hook-form-dùng ref
  return (
    <form
      className="container w-50 m-auto"
      onSubmit={handleSubmit(handleLogin)}
    >
      <h1>Login Page</h1>
      <div className="form-group">
        <label>Account</label>
        <input
          type="text"
          className="form-control"
          {...register("taiKhoan", 
          //Sử dụng yup để validate nên không cần đoạn này
        //   {
        //     required: {
        //       value: true,
        //       message: "Tài khoản không được để trống",
        //     },
        //     minLength: {
        //       value: 5,
        //       message: "Tài khoản phải từ 5 đến 20 kí tự",
        //     },
        //     maxLength: {
        //       value: 20,
        //       message: "Tài khoản phải từ 5 đến 20 kí tự",
        //     },
        //   }
          )}
        />
        {errors.taiKhoan && (
          <div className="alert alert-danger">{errors.taiKhoan.message}</div>
        )}
      </div>
      {/* <div className='form-group'>
                <label>Password</label>
                <input type="password" className='form-control' {...register("password")}/>
            </div> */}
      {/* <FormGroup>
                <Label>
                    Password
                </Label>
                <Input {...register("password",{
                    required:{
                        value:true,
                        message:'Tài khoản không đc để trống'
                    },
                })}/>
                {errors.password && (
                    <Alert color='danger'>{errors.password.message}</Alert>
                )}
            </FormGroup> */}
      {/* Sử dunjjg khi UI component không hổ trợ register */}
      <FormGroup>
        <Label>Password</Label>
        <Controller
          defaultValue=""
          name="matKhau"
          rules={{
            required: {
              value: true,
              message: "Mật khẩu không đc để trống",
            },
          }}
          control={control}
          render={({ field }) => {
            return <Input {...field} />;
          }}
        />
        {errors.matKhau && (
          <Alert color="danger">{errors.matKhau.message}</Alert>
        )}
      </FormGroup>
      {error && <Alert color='danger'>{error}</Alert>}
      <button type="submit" className="btn btn-success">
        Login
      </button>
    </form>
  );
}
