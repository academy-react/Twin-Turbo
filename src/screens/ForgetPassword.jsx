import { Formik , Form } from "formik"
import forgetSubmit from "../core/validations/forgetSubmit";
import { LinkComponent , FieldInput , Header } from '../components/common';

const ForgetPassword = () => {
  return (
    <div className='w-full h-[1200px] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px] max-[1919px]:w-full mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar-1.png" color="#fff" />
          <img src="../src/assets/images/panel/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[120%] max-[1256px]:hidden'/>
          <img src="../src/assets/images/panel/forget logo woman.png" alt="" className='absolute left-[0] top-[260px] w-[65%] transition-all duration-1000 max-[1485px]:top-[200px] max-[1256px]:hidden'/>

          <Formik initialValues={{email: ""}} onSubmit={(values) => forgetSubmit(values)}>
            <Form className="w-[450px] h-[480px] bg-white absolute right-[16%] top-[340px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col items-center justify-center">
              <img src="../src/assets/images/panel/key.png" alt="" className='w-[50px]'/>
              <p className='py-[35px] text-[26px]'>فراموشی رمز عبور</p>
              <div className='w-full h-[140px] flex flex-col items-center justify-center [&>*]:my-[5px]'>

                  <FieldInput name="email" content="" placeholder="ایمیل" dir="rtl" border="border border-[#a361a1]" display="text-[#b9b7b7] text-[15px]" className="rounded-[14px]" />
                  <button type="submit" className='bg-[#36C54E] w-[85%] text-[#fff] text-[20px] h-[50px] rounded-[14px] hover:bg-[#38b24c] transition-all duration-300'>ادامه</button>
              
              </div>
              <div className='w-[33%] h-7 flex justify-around items-center [&>*]:text-[#564FCC]'>
                <LinkComponent content="ثبت نام" link="/register" className='text-[18px]' />
                <p>|</p>
                <LinkComponent content="ورود" link="/login" className='text-[18px]' />
                <a href="hjhj"></a>
              </div>
            </Form>
          </Formik>
      </div>
    </div>

  )
}

export default ForgetPassword