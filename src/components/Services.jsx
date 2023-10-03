import React, { useRef } from 'react'

const Services = () => {

  window.onscroll = ()=> {
    if(pageYOffset > 140) man.style.right = "-140px"
    if(pageYOffset > 240) holder.style.transform = "scale(100%)"
    if(pageYOffset > 300) woman.style.left = "-110px"
    
  }

  return (
    <div className='w-[full] h-[700px] flex justify-center items-center pt-[100px] relative'>
        <div className='w-[550px] h-[270px] flex flex-wrap justify-between scale-[1%] transition-all duration-1000' id='holder'>
            <img src="../src/assets/images/blue.png" alt="" className='w-[48%] h-[48%] mb-5'/>
            <img src="../src/assets/images/purple.png" alt="" className='w-[48%] h-[48%] '/>
            <img src="../src/assets/images/yellow.png" alt="" className='w-[48%] h-[48%] '/>
            <img src="../src/assets/images/red.png" alt="" className='w-[48%] h-[48%] '/>
        </div>
        <img src="../src/assets/images/Group 159.png" alt="" className='absolute left-[-500px] bottom-[-70px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000' id='woman'/>
        <img src="../src/assets/images/Path 620.png" alt="" className='absolute left-[-250px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] '/>
        <img src="../src/assets/images/Group 160.png" alt="" className='absolute right-[-500px] top-[-20px] scale-[50%] drop-shadow-[0px_3px_6px_#5757574f] transition-all duration-1000' id='man'/>
    </div>
  )
}

export default Services