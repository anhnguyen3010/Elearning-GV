import React,{useEffect} from 'react'
import {getInforCourse} from '../../actions/courses'
import {useSelector,useDispatch} from 'react-redux'
import {useParams} from 'react-router-dom'
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
   
  } from "reactstrap";
export default function Course() {
    const dispatch = useDispatch()
    const {courseDetail} = useSelector((state)=>state.courses)
    console.log(courseDetail)
    const {id} = useParams()
    // console.log(id)
    // console.log(id)
    useEffect(()=>{
        dispatch(getInforCourse(id))
    },[id])
    return (
        <div>
            <Card className='col-sm-4'>
                <CardImg
                  top
                  width="100%"
                  src={courseDetail.hinhAnh}
                  alt="Card image cap"
                />
                <CardBody>
                  <CardTitle tag="h5">{courseDetail.tenKhoaHoc}</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">
                    {courseDetail.biDanh}
                  </CardSubtitle>
                  <CardText>
                  {courseDetail.moTa}
                  </CardText>
                </CardBody>
              </Card>
        </div>
    )
}
