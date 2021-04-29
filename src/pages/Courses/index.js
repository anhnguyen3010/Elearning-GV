// import ListCourses from '../../components/ListCourses'
import React,{ useEffect } from 'react'
import {useParams} from 'react-router-dom' //hàm lấy params tử route
import {getCoursesByCategory} from '../../actions/courses'
import {useSelector,useDispatch} from 'react-redux'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";

export default function Courses() {
    const dispatch = useDispatch()
    const {courses} = useSelector((state)=>state.courses)
    const {category} = useParams()
    
    //MỖi khi category thay đổi sẽ gọi lại API để lấy về những khóa học đúng với category
    useEffect(()=>{
        //dispatch action gọi API lấy DSKH
        dispatch(getCoursesByCategory(category))
    },[category])
    console.log(category)
    return (
        <div className='row container m-auto'>
            {courses.map((course)=>(
                <Card key={course.maKhoaHoc} className='col-sm-4'>
                <CardImg
                  top
                  width="100%"
                  src={course.hinhAnh}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{course.tenKhoaHoc}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {course.biDanh}
                  </CardSubtitle>
                  <CardText>
                  {course.moTa}
                  </CardText>
                  <Button>Course Detail</Button>
                </CardBody>
              </Card>
            ))}
        </div>
    )
}
