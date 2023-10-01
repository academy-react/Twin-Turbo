import React from 'react'

const Services = () => {
  return (
    <div className='w-[full] h-[700px]  flex justify-center items-center pt-[100px] relative'>
        <div className='w-[550px] h-[270px] flex flex-wrap'>
            <img src="../src/assets/images/blue.png" alt="" className='w-[50%] h-[50%] '/>
            <img src="../src/assets/images/purple.png" alt="" className='w-[50%] h-[50%] '/>
            <img src="../src/assets/images/yellow.png" alt="" className='w-[50%] h-[50%] '/>
            <img src="../src/assets/images/red.png" alt="" className='w-[50%] h-[50%] '/>
        </div>
        <img src="../src/assets/images/Group 159.png" alt="" className='absolute left-[-110px] bottom-[-70px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f]' />
        <img src="../src/assets/images/Path 620.png" alt="" className='absolute left-[-250px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f]'/>
        <img src="../src/assets/images/Group 160.png" alt="" className='absolute right-[-140px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f]' />
    </div>
  )
}

export default Services