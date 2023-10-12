import { Link } from "react-router-dom";
import { Formik , Form , Field } from "formik"
import Header from '../components/common/Header'
import registerSubmit from "../core/validations/registerSubmit";

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
                    <div className='w-full relative flex justify-center'>
                        <Field name="name" type="text" dir='rtl' className='my-4 text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='نام و نام خانوادگی' />
                    </div>
                    <div className='w-full relative flex justify-center'>
                        <Field name="email" type="text" dir='rtl' className='my-4 text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='ایمیل'/>
                    </div>
                    <div className='w-full relative flex justify-center'>
                        <Field name="password" type="password" dir='rtl' className='my-4 text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='رمز عبور'/>
                    </div>
                    <div className='w-full relative flex justify-center'>
                        <Field name="nationalCode" type="text" dir='rtl' className='my-4 text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='کد ملی'/>
                    </div>
                    <div className='w-full relative flex justify-center'>
                        <Field name="birthdayDate" type="date" dir='rtl' className='my-4 text-[18px] px-[15px] placeholder:text-[#b9b7b7] placeholder:text-[16px] outline-none w-[88%] h-[50px] rounded-[14px] border border-[#a361a1] focus:border-[3px]' placeholder='تاریخ تولد'/>
                    </div>
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