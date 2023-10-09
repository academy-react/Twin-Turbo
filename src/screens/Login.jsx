import Header from '../components/common/Header'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px] mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/panel/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%]'/>
          <img src="../src/assets/images/panel/login.png" alt="" className='absolute left-0 top-[260px]'/>

          <div className="w-[450px] h-[500px] bg-white absolute right-[16%] top-[335px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4">
            <img src="../src/assets/images/panel/log-in.png" alt="" className='w-[50px] h-[50px]'/>
            <div className='text-[26px]'>ورود</div>
            <div className='w-full relative flex justify-center'>
                <input type="text" dir='rtl' className='text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='نام کاربری' />
            </div>
            <div className='w-full relative flex justify-center'>
                <input type="text" dir='rtl' className='text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='رمز ورود'/>
            </div>
            <div className='flex items-center self-end mr-10'>
                <label htmlFor='checkbox' className='mx-2 text-[#564FCC] text-[17px] cursor-pointer'>مرا به خاطر بسپار</label>
                <input type="checkbox" id='checkbox' className='appearance-none border border-[#564FCC] w-4 h-4 rounded-[7px] cursor-pointer checked:bg-[#564FCC]'/>
            </div>
            <button className='w-[89%] h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px]'>
                ورود
            </button>
            <Link to={"/forget"} className='text-[#564FCC] text-[20px]'>فراموشی رمز عبور</Link>
            <div className='text-[#00000092]'>برای ثبت نام <Link to={"/register"} className='text-[#564FCC]' >اینجا</Link> کلیک کنید</div>
          </div>

      </div>
    </div>
  )
}

export default login