import Header from '../components/common/Header'
import { Link } from 'react-router-dom'

const forget = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px]  mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[120%]'/>
          <img src="../src/assets/images/forget logo woman.png" alt="" className='absolute left-[0] top-[260px]'/>

          <div className="w-[400px] h-[450px] bg-white absolute right-[15%] top-[300px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col items-center justify-center">
            <img src="../src/assets/images/key.png" alt="" className='w-[50px]'/>
            <p className='py-[35px] text-[26px]'>فراموشی رمز عبور</p>
            <div className='w-full h-[140px] flex flex-col items-center justify-center [&>*]:my-[5px]'>
                <input type="text"  dir='rtl' className='text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='ایمیل'/>
                <button className='bg-[#36C54E] w-[88%] text-[#fff] text-[20px] h-[50px] rounded-[14px] hover:bg-[#38b24c] transition-all duration-300'>ادامه</button>
            </div>
            <div className='w-[33%] h-7 flex justify-around items-center [&>*]:text-[#564FCC]'>
                  <Link to={"/register"} className='text-[18px]'>ثبت نام</Link>
                  <p>|</p>
                  <Link to={"/login"} className='text-[18px]'>ورود</Link>

              </div>
          </div>

      </div>
    </div>

  )
}

export default forget