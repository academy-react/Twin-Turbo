import React, { useState } from 'react'

const Category = () => {

    const [images, setImages] = useState([
        {src:"../src/assets/images/1.png",name:"شیمی"},
        {src:"../src/assets/images/2.png",name:"ریاضی"},
        {src:"../src/assets/images/3.png",name:"معماری"},
        {src:"../src/assets/images/4.png",name:"کامپیوتر"},
        {src:"../src/assets/images/5.png",name:"فیزیک"},
        {src:"../src/assets/images/6.png",name:"برق"},
        {src:"../src/assets/images/7.png",name:"بازار سهام"},
        {src:"../src/assets/images/8.png",name:"صنعت"},
    ])

  return (
    <div className='w-[full] h-[700px] mb-10 flex flex-col justify-around items-center relative'>
        <img src="../src/assets/images/Group 55.png" alt="" className=' drop-shadow-[0px_3px_6px_#5757574f]'/>
        <div className='w-[80%] h-[65%] flex flex-wrap justify-center [&>div]:w-[20%] [&>div]:h-[42%] [&>div]:m-5 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-around  [&>div]:rounded-[15px] [&>div]:shadow-[0px_0px_2px_#5757574f] font-bold text-[25px]'>
            
            {images.map((el,index) => {
                return (
                    <div key={index}>
                        <img src={el.src} alt="" />
                        <p>{el.name}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Category