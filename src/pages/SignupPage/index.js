
import React, { useRef } from "react";
import { useForm, Controller } from "react-hook-form"; //Validation library
//materialUI??
import { Input, FormGroup, Label, Alert } from "reactstrap";
//Controll Component: Control tất cả mọi thứ trên giao diện bằng state vs props
//Uncontrolled Component: Control giao diện không thông qua state hoặc props
//yup library giúp cho xử lý validation trong reac-hook-form được gọn hơn
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {useDispatch} from 'react-redux'
import {postUserLogin} from '../../actions/courses'
//tạo schema validation
const schema = yup.object().shape({
  account: yup
    .string()
    .required("Tài khoản không được để trống")
    .min(5, "Tài khoản phải từ 5 đến 20 kí tự")
    .max(20, "Tài khoản phải từ 5 đến 20 kí tự"),
  password: yup.string().required("Không được để trống"),
});


export default function SignupPage() {
    const dispatch = useDispatch()
    
    const handleSignup = (values) => {
      // console.log(inputAcc.current.value)
      // console.log(inputPass.current.value)
      const user = {
        taiKhoan:values.taiKhoan,
        matKhau:values.matKhau,
        hoTen:values.hoTen,
        email:values.email,
        soDt:values.soDt,
        maLoaiNguoiDung:values.maLoaiNguoiDung
      }
      // dispatch(postUserLogin(user))
      console.log(user)
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

    return (
      <form  onSubmit={handleSubmit(handleSignup())}>
          <FormGroup>
        <Label>
            Tài Khoản
        </Label>
        <Input {...register("taiKhoan",{
            required:{
                value:true,
                message:'Mật khẩu không đc để trống'
            },
        })}/>
        {errors.taiKhoan && (
            <Alert color='danger'>{errors.taiKhoan.message}</Alert>
        )}
      <Label>
          Mật khẩu
      </Label>
      <Input {...register("matKhau",{
          required:{
              value:true,
              message:'Mật khẩu không đc để trống'
          },
      })}/>
      {errors.matKhau && (
          <Alert color='danger'>{errors.matKhau.message}</Alert>
      )}
      <button type='submit'></button>
  </FormGroup>
      </form>
      
    )
}
