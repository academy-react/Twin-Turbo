import { useState , useEffect } from "react"
import customAxios from "../../core/services/interceptor"

const FavoriteCourseMap = () => {

    const [favoriteCourse, setFavoriteCourse] = useState()

    const getFavoriteCourse = async() => {
        let res = await customAxios.get("/SharePanel/GetMyFavoriteCourses")
        setFavoriteCourse(res.favoriteCourseDto)
    }

    useEffect(() => {getFavoriteCourse()}, [])

    const handelDeleting = (element) => {
        let formData = new FormData()
        formData.append("CourseFavoriteId",element.favoriteId)
        customAxios.delete("/Course/DeleteCourseFavorite",formData);
    }
    const goToCourse = (element) => location.pathname = "/courses/" + element.courseId; 
    
    return (
        
            favoriteCourse?.map((element,index)=> {
                return (
                    <div key={index} className='max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                        <img src="../src/assets/images/dashboard/Recycle Bin.png" alt="" className='w-[30px] cursor-pointer' onClick={()=> handelDeleting(element)}/>
                        <img src="../src/assets/images/panel/view.svg" alt="" className='w-[30px] cursor-pointer' onClick={()=> goToCourse(element)}/>

                        <span dir='rtl'>{element.cost}  تومان  </span>
                        <span dir='rtl'>{element.lastUpdate.slice(0,10)}</span>
                        <span dir='rtl'>{element.typeName}</span>
                        <span dir='rtl'>{element.levelName}</span>
                        <span dir='rtl'>{element.teacheName}</span>
                        <span dir='rtl'>{element.courseTitle}</span>

                        <img src={element?.tumbImageAddress !== null ? element?.tumbImageAddress : "../src/assets/images/courses/03.png"} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
                    </div>
                )
            })

    )
}

export default FavoriteCourseMap