import { Formik , Form } from "formik"
import { DatePicker } from "zaman";
import { Header , FieldInput , LinkComponent} from '../components/common/index'
import registerSubmit from "../core/validations/registerSubmit";
import { useEffect , useRef} from "react";

const login = () => {

  const dataPicker = useRef()

  useEffect(() => {
    dataPicker.current.children[0].placeholder = "تاریخ تولد"
  }, [])
  

  return (
    <div className='w-full h-[100vh] bg-[#f5f5f5]'>
      <div className='w-[1920px] max-[1919px]:w-full  mx-auto h-full relative overflow-hidden '>
          <Header className="hidden" src="avatar.png" color="#5A0BA9" />
          <img src="../src/assets/images/panel/path register.png" alt="" className='absolute left-[-31px] top-0 scale-x-[122%] scale-y-[127%] max-[1256px]:hidden'/>
          <img src="../src/assets/images/panel/register logo.png" alt="" className='absolute left-0 top-[260px] w-[63%] transition-all duration-1000 max-[1485px]:top-[200px] max-[1256px]:hidden'/>

            <Formik initialValues={{name: "" , email: "", password: "" , nationalCode: "" , phone: "" , birthdayDate: ""}} onSubmit={(values) => registerSubmit(values)}>
              {(form)=>(
                <Form className="w-[520px] h-[700px] bg-white absolute right-[14%] top-[255px] shadow-[0_0_7px_#ccc] rounded-[15px] flex flex-col justify-around items-center py-4 regForm">
                    <img src="../src/assets/images/panel/user.png" alt="" className='w-[50px] h-[50px]'/>
                    <div className='text-[26px]'>ثبت نام</div>

                    <FieldInput name="name" type="text" placeholder="نام و نام خانوداگی" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />

                    <FieldInput name="email" type="text" placeholder=" ایمیل  " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />

                    <FieldInput name="password" type="text" placeholder="رمز عبور" dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />

                    <FieldInput name="nationalCode" type="text" placeholder="کد ملی " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />
                    
                    <FieldInput name="phone" type="text" placeholder="شماره موبایل " dir="rtl" border="border border-[#a361a1]" display="text-[#999] text-[15px]" className="placeholder:text-[#ccc] w-full" />

                    <div className="relative w-[85%] h-12 flex justify-between items-center rounded-lg pr-[15px] overflow-hidden border border-[#a361a1] [&>input]:w-full [&>input]:h-full [&>input]:outline-none [&>input]:placeholder:text-[#ccc] [&>input]:text-[#5A0BA9]" dir="rtl" ref={dataPicker}>
                      <DatePicker onChange={(e) => {form.values.birthdayDate = e.value.toLocaleDateString("fa")}} className="datePicker" />
                    </div>
                    
                    <button type="submit" className='w-[89%] h-12 flex justify-center items-center bg-[#36C54E] text-white rounded-2xl text-[22px]'>
                        ثبت نام
                    </button>
                    <LinkComponent content="ورود به حساب کاربری" link="/login" className='text-[#564FCC] text-[20px]' />
                </Form>
              )}
            </Formik>

      </div>
    </div>
  )
}

export default login