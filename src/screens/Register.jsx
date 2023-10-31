import { Formik , Form } from "formik"
import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import { Header , FieldInput , LinkComponent , Submit} from "../components/common/index"
import registerSubmit from "../core/validations/submit/registerSubmit"
import { useRef } from "react"
import Validation from "../core/validations/registerValidation"

const Register = () => {

  const datePicker = useRef()

  return (
    <div className="w-full h-[1200px] bg-[#f5f5f5]">
      <Header className="hidden" src="avatar.png" color="#5A0BA9" />
      <div className="w-[1920px] max-[1919px]:w-full  mx-auto h-full relative overflow-hidden flex flex-col justify-start items-center">
          <img src="../src/assets/images/panel/path register.png" alt="" className="absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%] max-[1000px]:hidden"/>
          <img src="../src/assets/images/panel/register logo.png" alt="" className="absolute left-0 top-[260px] w-[63%] transition-all duration-1000 max-[1485px]:top-[200px] order-2 max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative max-[700px]:hidden"/>

          <Formik initialValues={{name: "" , email: "", password: "" , nationalCode: "" , phone: "" , birthdayDate: ""}} onSubmit={(values) => registerSubmit(values)} validationSchema={Validation} >
            {(form)=>(
              <Form className="w-[520px] h-[740px] bg-white absolute right-[14%] top-[255px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4 regForm max-[1256px]:mt-20 max-[1256px]:right-0 max-[1256px]:top-0 max-[1256px]:relative max-[550px]:scale-[80%] max-[430px]:scale-[70%] max-[380px]:scale-[60%]  max-[340px]:scale-[50%]">
                  <img src="../src/assets/images/panel/user.png" alt="" className="w-[50px] h-[50px]"/>
                  <div className="text-[26px]">ثبت نام</div>

                  <FieldInput name="name" type="text" placeholder="نام کاربری " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                  <FieldInput name="email" type="text" placeholder=" ایمیل  " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                  <FieldInput name="password" type="password" placeholder="رمز عبور" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" showPasswordCheck={true} />

                  <FieldInput name="nationalCode" type="number" placeholder="کد ملی " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />
                  
                  <FieldInput name="phone" type="number" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc]" />

                  <div className="w-[85%] h-12 flex justify-between items-center rounded-lg overflow-hidden border border-[#a361a1] [&>div>input]:w-[450px] [&>div>input]:h-[49px] [&>div>input]:outline-none [&>div>input]:border-none [&>div>input]:placeholder:text-[#ccc] [&>div>input]:text-[#5A0BA9]" dir="rtl">
                    <DatePicker
                      ref={datePicker}
                      onChange={() => {
                        setTimeout(() => {
                          form.values.birthdayDate = datePicker.current.children[0].value
                        }, 10);
                      }}
                      arrow={false}
                      placeholder="تاریخ تولد"
                      minDate="1330/1/1"
                      maxDate={new Date}
                      calendar={persian}
                      locale={persian_fa}
                      calendarPosition="top"
                    />
                  </div>
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