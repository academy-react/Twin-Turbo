import React, { useState } from 'react'

const Category = () => {

    const [images, setImages] = useState([
        {src:"../src/assets/images/1.png",name:"شیمی",color: "#32d835"},
        {src:"../src/assets/images/2.png",name:"ریاضی",color: "#ff3320"},
        {src:"../src/assets/images/3.png",name:"معماری",color: "#af2ecc"},
        {src:"../src/assets/images/4.png",name:"کامپیوتر",color: "#3282d8"},
        {src:"../src/assets/images/5.png",name:"فیزیک",color: "#20f9ff"},
        {src:"../src/assets/images/6.png",name:"برق",color: "#cb0000"},
        {src:"../src/assets/images/7.png",name:"بازار سهام",color: "#ff0065"},
        {src:"../src/assets/images/8.png",name:"صنعت",color: "#ff9515"},
    ])

  return (
    <div className='w-[full] h-[750px] mb-10 flex flex-col justify-around items-center relative'>
        <div className='relative'>
            <div className='text-[#5a0ba9] text-[38px] absolute left-[32%] top-8 z-10'>دسته بندی ها</div>
            <div className='text-[#9c6dcb] text-[20px] absolute left-[32%] top-28 z-10'>گستره وسیعی از موضوعات</div>
            <img src="../src/assets/images/category.png" alt="" className='drop-shadow-[0px_3px_6px_#5757574f]'/>
        </div>
        <div className='w-[80%] h-[65%] flex flex-wrap justify-center [&>div]:w-[20%] [&>div]:h-[42%] [&>div]:m-5 [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-around  [&>div]:rounded-[15px] [&>div]:shadow-[0px_0px_2px_#5757574f] text-[27px]'>
            
            {images.map((el,index) => {
                return (
                    <div key={index}>
                        <img src={el.src} className='w-28 h-28' />
                        <p style={{color : el.color}}>{el.name}</p>
                    </div>
                )
            })}
        </div>
        <div className='text-[#6c63ff] border border-[#6c63ff] px-4 py-1 rounded-[14px] text-[18px]'>بیشتر</div>
    </div>
  )
}

export default Category