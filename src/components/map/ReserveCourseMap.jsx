import { useState , useEffect } from "react"
import customAxios from "../../core/services/interceptor"

const ReserveCourseMap = () => {

    const [reserveCourse, setReserveCourse] = useState()

    const getReserveCourse = async() => {
        let res = await customAxios.get("/SharePanel/GetMyCoursesReserve")

        setReserveCourse(res)
    }

    const goToCourse = (element) => location.pathname = "/courses/" + element.courseId; 


    useEffect(() => {
        getReserveCourse()
    }, [])
    
    return (
        
            reserveCourse?.map((element,index)=> {
                return (
                    <div key={index} className='max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                        <img src="../src/assets/images/panel/view.svg" alt="" className='cursor-pointer w-[35px]' onClick={()=> goToCourse(element)}/>

                        <span dir='rtl'>{element.cost}  تومان  </span>
                        <span dir='rtl'>{element.reserverDate?.slice(0,10)}</span>
                        <span dir='rtl'>{element.statusName}</span>
                        <span dir='rtl'>{element.levelName}</span>
                        <span dir='rtl'>{element.teacherName}</span>
                        <span dir='rtl'>{element.courseName}</span>
                        <span></span>
                    </div>
                )
            })
        
    )
}

export default ReserveCourseMap