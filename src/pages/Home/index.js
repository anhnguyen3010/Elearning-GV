import React,{useEffect} from 'react'

import {useSelector,useDispatch} from 'react-redux'
import {getCourses} from '../../actions/courses'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
  } from "reactstrap";
import {Link} from 'react-router-dom'
export default function Home() {
    const dispatch = useDispatch()
    const {courses} = useSelector((state)=>state.courses)
    useEffect(()=>{
        dispatch(getCourses())
    },[])
    
    return (
        <div className='row container'>
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
                  <Link to={`course/${course.maKhoaHoc}`}>Course Detail</Link>
                </CardBody>
              </Card>
            ))}
        </div>
    )
}
