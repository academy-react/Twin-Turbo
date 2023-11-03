import React , { useRef } from 'react'
import {Formik,Form} from 'formik'
import EditProfileItem from './EditProfileItem'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import account from '../../core/services/account';
import editProfileValidation from '../../core/validations/editProfileValidation';
import { changePic, editProfileSubmit } from '../../core/validations/submit/editProfileSubmit';



const EditProfile = () => {
    let userImage = useRef()

    const datePicker = useRef()

    return (
        <div id="editProfile" className="h-[3000px]  max-[1020px]:bg-[none] max-[1020px]:w-full max-[1800px]:w-[70%] max-[1550px]:w-[60%] max-[1494px]:w-[60%] w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd]">

            <div className="h-[30%] justify-center items-center max-[1200px]:h-[15%]">
                <div className="w-[50%] mx-auto h-full flex flex-col justify-center items-center">
                    <img src={"../src/assets/images/dashboard/" + account.image} alt="" className='w-[120px] h-[120px] rounded-[50%] mb-[25px]' ref={userImage} />
                    <input type="file" className='hidden' onChange={(e)=> changePic(e,userImage)} id='fileInput' />
                    <label htmlFor="fileInput" className='w-[180px] h-[50px] bg-[#922492] cursor-pointer flex justify-center items-center text-[#fff] text-[20px] rounded-md'>اپلود عکس</label>
                </div>
            </div>
            <Formik initialValues={{name:"",birthDayDate:"",phone:"",email:"",nationalCode:"",role:""}} onSubmit={(values)=> editProfileSubmit(values,userImage)} validationSchema={editProfileValidation}>
                {(form)=> (
                    <Form dir='rtl' className="max-[1200px]:flex-col max-[1200px]:[&>div]:w-full items-center py-[10px] w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:h-[600px] [&>div]:flex [&>div]:flex-col [&>div]:justify-around [&>div>div]:w-[95%] [&>div>div]:h-[28%] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px] ">
                        <div>
                            
                            <EditProfileItem content="نام کاربری" name="name" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                                <div className='[&>div:last-child]:w-[85%] [&>div:last-child>input]:h-[50px] [&>div:last-child>input]:border [&>div:last-child>input]:border-[#ccc] [&>div:last-child>input]:relative [&>div:last-child>input]:top-[-20px] [&>div:last-child>input]:text-[#5A0BA9]'>
                                    <div>تاریخ تولد</div>
                                    <DatePicker
                                        ref={datePicker}
                                        onChange={() => {
                                        setTimeout(() => {
                                            form.values.birthDayDate = datePicker.current.children[0].value
                                        }, 10);
                                        }}
                                        placeholder="تاریخ تولد را وارد کنید ..."
                                        minDate="1330/1/1"
                                        maxDate={new Date}
                                        calendar={persian}
                                        locale={persian_fa}
                                        arrow={false}
                                        calendarPosition="left"
                                        inputClass='text-[18px] pr-[15px] w-full placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[rgba(112,112,112,0.14)] outline-none rounded-lg h-12 pl-5 placeholder:text-[#b9b7b7]'
                                    />
                                </div>

                            <EditProfileItem content="شماره همراه" name="phone" placeholder="شماره را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>
                        <div>

                            <EditProfileItem content="ایمیل" name="email" placeholder="ایمیل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="کد ملی" name="nationalCode" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="نقش" name="role" placeholder="نقش  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>

                        <div className='absolute bottom-0 flex justify-center items-center' style={{height:"100px",width:"100%"}}>
                            <button type='submit' className='w-[150px] bg-[#922492] text-[#fff] scale-[105%] px-[15px] h-[45px] rounded-[30px] right-[44%]' onClick={(e)=> editProfileSubmit(form.values,userImage)} >ثبت تغییرات</button>
                        </div>  

                    </Form>
                    
                )}
            </Formik>
            

        </div>
    )
}

export default EditProfile