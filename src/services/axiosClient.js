import axios from "axios";
import qs from "qs";
//cấu hình axios
const axiosClient = axios.create({
  baseURL: "https://elearning0706.cybersoft.edu.vn/api",
  //tự cấu hình cách lấy params mặc định của axios
  //cài đặt thư viện qs
  paramsSerializer: (params) =>
    qs.stringify(
      params, //bỏ qua giá trị undefineded
      { skipnulls: true }
    ), //bỏ qua giá trị null,
});

axiosClient.interceptors.request.use(
  (config)=>{
    //xử lý trước khi request được gửi lên sever
    //thêm Authorization vào headers
    const userInfor = localStorage.getItem('userInfor')
    if(userInfor){
      const {accessToken} = JSON.parse(userInfor);
      config.headers.Authorization=`Bearer ${accessToken}`
    }
    return config
  },
  (error)=>{
    //xử lý khi request bị lỗi
    return Promise.reject(error)
  }
  )
axiosClient.interceptors.response.use(
  (response)=>{
    //Xử lý kết quả trả về từ sever
    return response;
  },
    //Xử lý lỗi
  (error)=>{
    if(error.status === 401){
      //Xử lý logout : clear localStorage, đẩy người dùng về trang Login
      //khi accesstoken hết thời hạn sử dụng   
    }
    if(error.status === 500){
      //Xử lý báo cho người dùng sever ddagnf bị lỗi

    }
  }
)
export default axiosClient;
