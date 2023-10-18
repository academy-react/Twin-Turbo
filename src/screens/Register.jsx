import { Link } from "react-router-dom";
import { Formik , Form , Field } from "formik"
import Header from '../components/common/Header'
import registerSubmit from "../core/validations/registerSubmit";
import FieldInput from '../components/common/FieldInput'

const login = () => {
  return (
    <div className='w-full h-[100vh] bg-[#f5f5f5]'>
      <div className='w-[1920px] mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar.png" color="#5A0BA9" />
          <img src="../src/assets/images/panel/path register.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%]'/>
          <img src="../src/assets/images/panel/register logo.png" alt="" className='absolute left-0 top-[260px]'/>

            <Formik initialValues={{name: "" , email: "", password: "" , nationalCode: "" , birthdayDate: ""}} onSubmit={(values) => registerSubmit(values)}>
                <Form className="w-[520px] h-[700px] bg-white absolute right-[14%] top-[255px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4">
                    <img src="../src/assets/images/panel/log-in.png" alt="" className='w-[50px] h-[50px]'/>
                    <div className='text-[26px]'>ثبت نام</div>

                        <FieldInput name="name" type="text" placeholder="نام و نام خانوداگی" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                        <FieldInput name="email" type="text" placeholder=" ایمیل  " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                        <FieldInput name="password" type="text" placeholder="رمز عبور" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                        <FieldInput name="nationalCode" type="text" placeholder="کد ملی " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />
                        
                        <FieldInput name="birthdayDate" type="text" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />
                        
                        <FieldInput name="birthdayDate" type="date" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />
                    
                    <button type="submit" className='w-[89%] h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px]'>
                        ثبت نام
                    </button>
                    <Link to={"/login"} className='text-[#564FCC] text-[20px]'>ورود به حساب کاربری</Link>
                </Form>
            </Formik>

      </div>
    </div>
  )
}

export default login