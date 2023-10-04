import Header from '../components/common/Header'
import { Link } from "react-router-dom";

const login = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px] mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%]'/>
          <img src="../src/assets/images/login.png" alt="" className='absolute left-[0px] top-[260px]'/>

          <div className="w-[400px] h-[450px] bg-white absolute right-[15%] top-[170px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4">
            <img src="../src/assets/images/log-in.png" alt="" className='w-[50px] h-[50px]'/>
            <div className='text-[25px]'>ورود</div>
            <div className='w-full relative flex justify-center'>
                <input type="text" dir='rtl' className='pr-2 border border-[#9F0099] w-[89%] h-10 rounded-xl mx-auto outline-none focus:border-2' placeholder='نام کاربری' />
            </div>
            <div className='w-full relative flex justify-center'>
                <input type="text" dir='rtl' className='pr-2 border border-[#9F0099] w-[89%] h-10 rounded-xl mx-auto outline-none focus:border-2' placeholder='رمز ورود'/>
            </div>
            <div className='flex items-center self-end mr-10'>
                <label htmlFor='checkbox' className='mx-2 text-[#564FCC] text-[15px] cursor-pointer'>مرا به خاطر بسپار</label>
                <input type="checkbox" id='checkbox' className='appearance-none border border-[#564FCC] w-4 h-4 rounded-[7px] cursor-pointer checked:bg-[#564FCC]'/>
            </div>
            <div className='w-[89%] h-10 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl'>
                ورود
            </div>
            <Link to={"/forget"} className='text-[#564FCC] text-[15px]'>فراموشی رمز عبور</Link>
            <div className='text-[13px] text-[#00000092]'>برای ثبت نام <Link to={"/register"} className='text-[#564FCC]' >اینجا</Link> کلیک کنید</div>
          </div>

      </div>
    </div>
  )
}

export default login