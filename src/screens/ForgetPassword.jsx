import { Formik , Form } from "formik"
import forgetSubmit from "../core/validations/submit/forgetSubmit";
import { LinkComponent , FieldInput , Header, Submit } from '../components/common';
import forgetPasswordValidation from "../core/validations/forgetPasswordValidation";

const ForgetPassword = () => {
  return (
    <div className='border border-[black] w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <Header className="hidden" src="avatar-1.png" color="#fff" borderClass="border-b border-b-[#fff]" />

      <div className='border border-[red] w-[1920px] max-[1919px]:w-full mx-auto h-[100vh] relative overflow-hidden flex flex-col justify-start items-center'>
          
          <img src="../src/assets/images/panel/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[120%] max-[1000px]:hidden'/>
          <img src="../src/assets/images/panel/forget logo woman.png" alt="" className='absolute left-[0] top-[260px] w-[65%] transition-all duration-1000 max-[1485px]:top-[200px] order-2 max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative max-[700px]:hidden'/>

          <Formik initialValues={{email: ""}} onSubmit={(values) => forgetSubmit(values)} validationSchema={forgetPasswordValidation}>
            
            <Form className="w-[450px] h-[480px] order-1 bg-white absolute right-[16%] top-[340px] transition-all duration-1000 shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col items-center justify-center max-[550px]:scale-[80%] max-[430px]:scale-[70%] max-[340px]:scale-[65%] max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative">
              
                <img src="../src/assets/images/panel/key.png" alt="" className='w-[50px]'/>
                <p className='py-[35px] text-[26px]'>فراموشی رمز عبور</p>
                <div className='w-full h-[140px] flex flex-col items-center justify-center [&>*]:my-[5px]'>

                    <FieldInput name="email" content="" placeholder="ایمیل" dir="rtl" border="border border-[#a361a1]" display="text-[#b9b7b7] text-[15px]" className="rounded-[14px]" />
                    <Submit content="ادامه" className="w-[85%] h-[50px]" />
                
                </div>
                <div className='w-[33%] h-7 flex justify-around items-center [&>*]:text-[#564FCC] mt-2'>
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