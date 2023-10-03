import React from 'react'
import Header from '../components/common/Header'
import { useLocation } from 'react-router-dom'

const forget = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1280px] border mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%]'/>
          <img src="../src/assets/images/forget logo woman.png" alt="" className='absolute left-[-310px] top-[140px] scale-[65%] '/>

          <div className="w-[400px] h-[380px] bg-white absolute right-[15%] top-[170px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col "></div>

      </div>
    </div>

  )
}

export default forget