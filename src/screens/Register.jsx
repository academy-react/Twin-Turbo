import { Formik , Form } from "formik"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Header , FieldInput , LinkComponent , Submit} from "../components/common/index"
import { useRef } from "react"
import Validation from "../core/validations/registerValidation"
import { useState } from "react"

const Register = () => {

  const [flag, setFlag] = useState(1)

  const datePicker = useRef()


  const registerSubmit = (values) => {

      setFlag(flag+1)
      console.log(values);

  }


  return (
    <div className="w-full h-[1200px] bg-[#f5f5f5]">
      <Header className="hidden" src="avatar.png" color="#5A0BA9" />
      <div className="w-[1920px] max-[1919px]:w-full  mx-auto h-full relative overflow-hidden flex flex-col justify-start items-center">
          <img src="../src/assets/images/panel/path register.png" alt="" className="absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%] max-[1000px]:hidden"/>
          <img src="../src/assets/images/panel/register logo.png" alt="" className="absolute left-0 top-[260px] w-[63%] transition-all duration-1000 max-[1485px]:top-[200px] order-2 max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative max-[700px]:hidden"/>

          <Formik initialValues={{PhoneNumberOrGmail:"",VerifyCode:"",Password:"",Email:""}} onSubmit={(values) => registerSubmit(values,setFlag,flag)} validationSchema={Validation} >
            {(form)=>(
              <Form className="w-[520px] h-[400px] bg-white absolute right-[14%] top-[405px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4 regForm max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative max-[550px]:scale-[80%] max-[430px]:scale-[70%] max-[380px]:scale-[60%]  max-[340px]:scale-[50%]">
                  <img src="../src/assets/images/panel/user.png" alt="" className="w-[50px] h-[50px]"/>
                  <div className="text-[26px]">ثبت نام</div>

                  {flag == 1 && <FieldInput name="PhoneNumberOrGmail" type="text" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />}
                  {flag == 2 && <FieldInput name="VerifyCode" type="text" placeholder=" کد تایید  " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" /> }
                  {flag == 3 && <FieldInput name="PhoneNumberOrGmail" type="number" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />}
                  {flag == 3 && <FieldInput name="Password" type="Password" placeholder="رمز عبور" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" showPasswordCheck={true} />}
                  {flag == 3 && <FieldInput name="Email" type="text" placeholder="جیمیل را وارد کنید" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />}

                  

                  <Submit content="ثبت نام" className="w-[89%] h-12 my-2" />
                  
                  <LinkComponent content="ورود به حساب کاربری" link="/login" className="text-[#564FCC] text-[20px]" />
              </Form>
            )}
          </Formik>
      </div>
    </div>
  )
}

export default Register