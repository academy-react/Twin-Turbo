import courseDB from '../../core/services/courseDB'

const ListCousePanelMap = () => {
  let sliced = courseDB.slice(0,6)
  return (
    sliced.map((element,index)=> {
        return (
            <div key={index} className='h-[80px] bg-[#fff] my-[7px] rounded-[25px] flex items-center justify-around [&>span]:w-[110px] px-[10px] [&>span]:text-center' data-id={`${index+1}`} >

                <img src="../src/assets/images/dashboard/add.png" alt="" className='cursor-pointer' onClick={(e)=> findItem(e)}/>

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

export default ListCousePanelMap