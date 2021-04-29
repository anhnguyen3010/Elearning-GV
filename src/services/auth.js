import axiosClient from '../services/axiosClient'

const authAPI = {
    login:(values)=>{
        return axiosClient.post('/QuanLyNguoiDung/DangNhap',values)
    }
}

export default authAPI