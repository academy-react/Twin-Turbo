import { Formik , Form , Field } from "formik"
import loginSubmit from "../core/validations/loginSubmit";
import { LinkComponent , FieldInput , Header } from "../components/common";

const login = () => {

  return (
    <div className='w-full h-[100vh] bg-gradient-to-r from-[#66008C] to-[#9F0099]'>
      <div className='w-[1920px] max-[1919px]:w-full mx-auto h-full relative overflow-hidden'>
          <Header className="hidden" src="avatar-1.png" color="#fff" />

          <img src="../src/assets/images/panel/path forget.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%] max-[1256px]:hidden'/>
          <img src="../src/assets/images/panel/login.png" alt="" className='absolute left-0 top-[260px] w-[61%] transition-all duration-1000 max-[1485px]:top-[200px] max-[1256px]:hidden'/>

          <Formik initialValues={{name : "" , password : "" , remind : false}} onSubmit={(values)=> loginSubmit(values)}>
              <Form className="w-[450px] h-[500px] bg-white absolute right-[300px] top-[335px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4 transition-all duration-1000 max-[1800px]:top-[300px] max-[1700px]:top-[270px] max-[1700px]:right-[200px] max-[1530px]:top-[200px] max-[1460px]:scale-90 max-[1400px]:top-[150px]">
                <img src="../src/assets/images/panel/log-in.png" alt="" className='w-[50px] h-[50px]'/>
                <div className='text-[26px]'>ورود</div>

                <FieldInput name="name" content="ورود" placeholder="نام کاربری" border="border border-[#a361a1]" display="hidden" className="w-full placeholder:text-[#b9b7b7]" dir="rtl" />
                <FieldInput name="password" content="رمز ورود" placeholder="رمز ورود" border="border border-[#a361a1]" display="hidden" className="w-full placeholder:text-[#b9b7b7]" dir="rtl" />
                
                <div className='flex items-center self-end mr-10'>
                    <label htmlFor='checkbox' className='mx-2 text-[#564FCC] text-[17px] cursor-pointer'>مرا به خاطر بسپار</label>
                    <Field name="remind" type="checkbox" id='checkbox' className='appearance-none border border-[#564FCC] w-4 h-4 rounded-[7px] cursor-pointer checked:bg-[#564FCC]'/>
                </div>
                <button type="submit" className='w-[89%] h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px]'>
                    ورود
                </button>
                <LinkComponent content="فراموشی رمز عبور" link="/forgetPassword" className='text-[#564FCC] text-[20px]' />
                <div className='text-[#00000092]'>برای ثبت نام <LinkComponent content="ایجاد" link="/register" className='text-[#564FCC]' /> کلیک کنید</div>
              </Form>
          </Formik>
      </div>
    </div>
  )
}

export default login