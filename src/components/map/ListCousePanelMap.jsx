import { useState } from 'react'
import courseDB from '../../core/services/courseDB'
import { useEffect } from 'react';
import customAxios from '../../core/services/interceptor';
import { useRef } from 'react';
export let settingPageNumberCoursePanel;
const ListCousePanelMap = ({inpurSearch}) => {

    const [course, setCourse] = useState([])
    const [input, setInput] = useState("")
    const [PageNumber, setPageNumber] = useState(1)
    const time = useRef()

    const getCourse = async ()=> {
        let result = await customAxios.get(`/Home/GetCoursesWithPagination?PageNumber=${PageNumber}&RowsOfPage=5&&SortType=DESC${input ? `&Query=${input}` : ""}`)
        setCourse(result.courseFilterDtos)
    }
    useEffect(() => {getCourse()}, [input])
    useEffect(() => {getCourse()}, [PageNumber])
    
    useEffect(() => {
        settingPageNumberCoursePanel = setPageNumber
        inpurSearch.current.oninput = () => {
            clearTimeout(time.current)
            let timeOut = setTimeout(() => {setInput(inpurSearch.current.value)}, 1000);
            time.current = timeOut
        }
        getCourse()

    }, [])
    

  return (
    course.map((element,index)=> {
        return (
            <div key={index} className='max-[1350px]:w-[900px] h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex flex-row-reverse items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                <img src="../src/assets/images/dashboard/add.png" alt="" className='cursor-pointer' onClick={()=> findListCourse(element)}/>

                <span dir='rtl'>{element.cost}  تومان  </span>
                <span dir='rtl'>{element.lastUpdate?.slice(0,10)}</span>
                <span dir='rtl'>{element.statusName}</span>
                <span dir='rtl'>{element.levelName}</span>
                <span dir='rtl'>{element.teacherName}</span>
                <span dir='rtl'>{element.title}</span>

                <img src={element.tumbImageAddress} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
            </div>
        )
    })
  )
  
  
}
export default ListCousePanelMap