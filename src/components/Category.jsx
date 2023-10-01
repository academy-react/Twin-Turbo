import React, { useState } from 'react'

const Category = () => {

    const [images, setimages] = useState([
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
    <div className='w-[full] h-[700px] flex flex-col justify-around items-center relative'>
        <img src="../src/assets/images/Group 55.png" alt="" className=' drop-shadow-[0px_3px_6px_#5757574f]'/>
        <div className='w-[80%] h-[65%] flex flex-wrap [&>div]:w-[23%] [&>div]:h-[45%] [&>div]:flex [&>div]:flex-col [&>div]:items-center [&>div]:justify-around  [&>div]:rounded-[15px] [&>div]:shadow-[0px_0px_6px_#5757574f] [&>div]:m-[4px]'>
            
            {images.map((el,index) => {
                return (
                    <div key={index}>
                        <img src={el.src} alt="" />
                        <p>{el.name}</p>
                    </div>
                )
            })}

            {/* <div>
                <img src="../src/assets/images/1.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/2.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/3.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/4.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/5.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/6.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/7.png" alt="" className='scale-[70%]' />
                <p></p>
            </div>
            <div>
                <img src="../src/assets/images/8.png" alt="" className='scale-[70%]' />
                <p></p>
            </div> */}

        </div>
    </div>
  )
}

export default Category