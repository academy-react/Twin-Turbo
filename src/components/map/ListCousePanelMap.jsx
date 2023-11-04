import { useState } from 'react'
import courseDB from '../../core/services/courseDB'
import { useEffect } from 'react';
let setNumberCourse;
const ListCousePanelMap = ({inpurSearch}) => {
  let sliced = courseDB.slice(0,5)
  const [slice, setSlice] = useState(sliced)

    
  useEffect(() => {

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

                <span dir='rtl'>{element.price}  تومان  </span>
                <span dir='rtl'>{element.endTime}</span>
                <span dir='rtl'>{element.startTime}</span>
                <span dir='rtl'>{element.courseName}</span>
                <span dir='rtl'>{element.masterName}</span>
                <span dir='rtl'>{element.name}</span>

                <img src={"../src/assets/images/courses/" + element.src} alt="" className='w-[90px] h-[80%] rounded-[15px]' />
            </div>
        )
    })
  )
  
  
}
export {setNumberCourse}
export default ListCousePanelMap