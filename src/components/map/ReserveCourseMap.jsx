import { useState , useEffect } from "react"
import customAxios from "../../core/services/interceptor"

const ReserveCourseMap = () => {

    const [reserveCourse, setReserveCourse] = useState()

    const getReserveCourse = async() => {
        let res = await customAxios.get("/SharePanel/GetMyCoursesReserve")

        setReserveCourse(res)
    }

    const goToCourse = (element) => location.pathname = "/courses/" + element.courseId; 

    const handelDeleting = async (element) => {
        await customAxios.delete("/CourseReserve",{
            data : { id : element.reserveId}
        });
        getReserveCourse()
    }

    useEffect(() => {
        getReserveCourse()
    }, [])
    
    return (
            
            reserveCourse?.map((element,index)=> {
                {console.log(element)}
                return (
                    <div key={index} className='max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >
                        <div className="flex [&>img]:mx-[15px]">
                            <img src="../src/assets/images/panel/view.svg" alt="" className='cursor-pointer w-[35px]' onClick={()=> goToCourse(element)}/>
                            <img src="../src/assets/images/dashboard/Recycle Bin.png" alt="" className='w-[30px] cursor-pointer' onClick={()=> handelDeleting(element)}/>
                        </div>

                        <span dir='rtl'>{element.reserverDate?.slice(0,10)}</span>
                        <span dir='rtl' className={element.accept ? "text-[#36c54e]" : "text-[#ec0b1a]"}>{element.accept ? "فعال" : "غیر فعال"}</span>
                        <span dir='rtl' className="whitespace-nowrap mr-[-25px]">{element.courseName}</span>

                        <img src={element?.tumbImageAddress !== null ? element?.tumbImageAddress : "../src/assets/images/courses/03.png"} alt="" className='w-[90px] h-[80%] rounded-[15px]' />

                    </div>
                )
            })
        
    )
}

export default ReserveCourseMap