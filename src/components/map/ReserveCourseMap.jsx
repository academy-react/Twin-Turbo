import { useState } from "react"
import customAxios from "../../core/services/interceptor"
import { useEffect } from "react"

const ReserveCourseMap = () => {
    let token = localStorage.getItem("token")

    const [reserveCourse, setReserveCourse] = useState()

    const getReserveCourse = async() => {
        let res = await customAxios.get("/SharePanel/GetMyCoursesReserve",{
            headers : {"Authorization" : "Bearer " + token}
        })

        setReserveCourse(res)
        console.log(res);
    }

    useEffect(() => {
        getReserveCourse()
    }, [])
    
    return (
        
            reserveCourse?.map((element,index)=> {
                return (
                    <div key={index} className='border border-[red] max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                        <img src="../src/assets/images/dashboard/add.png" alt="" className='cursor-pointer' onClick={()=> findListCourse(element)}/>

                        <span dir='rtl'>{element.cost}  تومان  </span>
                        <span dir='rtl'>{element.reserverDate?.slice(0,10)}</span>
                        <span dir='rtl'>{element.statusName}</span>
                        <span dir='rtl'>{element.levelName}</span>
                        <span dir='rtl'>{element.teacherName}</span>
                        <span dir='rtl'>{element.courseName}</span>

                        <img src={element.tumbImageAddress} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
                    </div>
                )
            })
        
    )
}

export default ReserveCourseMap