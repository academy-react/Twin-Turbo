import { useState } from 'react'
import courseDB from '../../core/services/courseDB'
import { useEffect } from 'react';
import customAxios from '../../core/services/interceptor';
let setNumberCourse;
const ListCousePanelMap = ({inpurSearch}) => {

  const [slice, setSlice] = useState([])

  const getCourse = async ()=> {
      let result = await customAxios.get("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&SortingCol=Active&SortType=DESC&TechCount=0")
      console.log(result.courseFilterDtos);
      setSlice(result.courseFilterDtos)
  }

    
  useEffect(() => {
      getCourse()
      inpurSearch.current.oninput = ()=> {
          let filtered = slice.filter((element)=> {
            return element.name.indexOf(inpurSearch.current.value) !== -1 || element.masterName.indexOf(inpurSearch.current.value) !== -1
            || element.courseName.indexOf(inpurSearch.current.value) !== -1
          })
          setSlice(filtered)
      }
      
  }, [])
 

    
  
setNumberCourse = setSlice
  return (
    slice.map((element,index)=> {
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
export {setNumberCourse}
export default ListCousePanelMap