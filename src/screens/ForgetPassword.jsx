import { Link } from 'react-router-dom'
import { Formik , Form , Field } from "formik"
import Header from '../components/common/Header'
import forgetSubmit from "../core/validations/forgetSubmit";

const ForgetPassword = () => {
  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px]  mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/panel/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[120%]'/>
          <img src="../src/assets/images/panel/forget logo woman.png" alt="" className='absolute left-[0] top-[260px]'/>

          <Formik initialValues={{email: ""}} onSubmit={(values) => forgetSubmit(values)}>
            <Form className="w-[450px] h-[480px] bg-white absolute right-[16%] top-[340px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col items-center justify-center">
              <img src="../src/assets/images/panel/key.png" alt="" className='w-[50px]'/>
              <p className='py-[35px] text-[26px]'>فراموشی رمز عبور</p>
              <div className='w-full h-[140px] flex flex-col items-center justify-center [&>*]:my-[5px]'>
                  <Field name="email" type="text"  dir='rtl' className='text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='ایمیل'/>
                  <button type="submit" className='bg-[#36C54E] w-[88%] text-[#fff] text-[20px] h-[50px] rounded-[14px] hover:bg-[#38b24c] transition-all duration-300'>ادامه</button>
              </div>
              <div className='w-[33%] h-7 flex justify-around items-center [&>*]:text-[#564FCC]'>
                <Link to={"/register"} className='text-[18px]'>ثبت نام</Link>
                <p>|</p>
                <Link to={"/login"} className='text-[18px]'>ورود</Link>
              </div>
            </Form>
          </Formik>
      </div>
    </div>

  )
}

export default ForgetPassword