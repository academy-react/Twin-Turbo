import React from 'react'
import Header from '../components/common/Header'
import { Link } from 'react-router-dom'

const forget = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1280px]  mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%]'/>
          <img src="../src/assets/images/forget logo woman.png" alt="" className='absolute left-[-310px] top-[140px] scale-[65%] '/>

          <div className="w-[400px] h-[380px] bg-white absolute right-[15%] top-[170px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col items-center justify-center">
            <img src="../src/assets/images/key.png" alt="" className='w-[34px]'/>
            <p className='py-[35px] text-[22px]'>فراموشی رمز عبور</p>
            <div className='w-full h-[120px] flex flex-col items-center justify-center [&>*]:my-[5px]'>
                <input type="text"  dir='rtl' className='text-[13px] focus:border-2 px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[13px] outline-none w-[88%] h-[44px] rounded-[14px] border border-[#a361a1]' placeholder='ایمیل'/>
                <button className='bg-[#36C54E] w-[88%] text-[#fff] h-[44px] rounded-[14px]'>ادامه</button>
            </div>
            <div className='w-[25%] h-7 flex justify-around items-center [&>*]:text-[#564FCC]'>
                  <Link to={"/register"} className='text-[12px]'>ثبت نام</Link>
                  <p>|</p>
                  <Link to={"/login"} className='text-[12px]'>ورود</Link>

              </div>
          </div>

      </div>
    </div>

  )
}

export default forget