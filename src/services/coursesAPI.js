import axiosClient from './axiosClient'
const coursesAPI = {
    getCourses: () => {
        return axiosClient.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc')
    },
    getCoursesByCategory:(category)=>{
        const params = {
            maDanhMuc:category,
            maNhom:'GP01'
        }
        //khi cần accesstocount
        // const headers = {
        //     Authorization:"adksfasjdfhkjsadhf"
        // }
        //return axiosClient.get('/QuanLyKhoaHoc/LayDanhSachKhoaHoc?'${params})
        return axiosClient.get('/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc',{params},)
    },
    getInforCourse:(id) => {
        const params = {
            maKhoaHoc:id,
        }
        return axiosClient.get('/QuanLyKhoaHoc/LayThongTinKhoaHoc',{params})
    }
    ,
    // postUserLogin:(user) =>{
    //     return axiosClient.post('/QuanLyNguoiDung/DangNhap',user)
    // }
}
export default coursesAPI

//Khi nào cần sử dụng thì sẽ import courseApi
// import coursesAPI from './services/coursesAPi'
// const {data} = await coursesAPI.getCourses;