import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import {Formik,Form} from 'formik'
import EditProfileItem from './EditProfileItem'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import account from '../../core/services/Account';
import editProfileValidation from '../../core/validations/editProfileValidation';



const EditProfile = () => {
    let userImage = useRef()

    const datePicker = useRef()

    const changePic = async (e)=> {
        let src = e.target.files[0];

        let imageData = new FormData()
        imageData.append("image",src)

        let result = await axios.post("https://api.admin.sepehracademy.ir/api/upload/image",imageData)
        userImage.current.src = result.data.result

    }

    const submit = (values) => {
        console.log(values);
        if(values.name.length !== 0){
            usename.innerHTML = values.name;
            account.username = values.name
        }
        picprofile.src = userImage.current.getAttribute("src")
        account.image = userImage.current.getAttribute("src")
        
        if(values.email.length !== 0) account.email = values.email
        if(values.birthDayDate.length !== 0) account.birthDayDate = values.birthDayDate
        if(values.nationalCode.length !== 0) account.nationalCode = values.nationalCode
        if(values.phone.length !== 0) account.phone = values.phone
        if(values.role.length !== 0) account.role = values.role
    }

    return (
        <div className="w-[73%]  border border-[green] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd]">

            <div className="h-[30%] border-[red] border justify-center items-center">
                <div className="w-[50%] mx-auto h-full flex flex-col justify-center items-center">
                    <img src={account.image} alt="" className='w-[120px] h-[120px] rounded-[50%] mb-[25px]' ref={userImage} />
                    <input type="file" className='hidden' onChange={(e)=> changePic(e)} id='fileInput' />
                    <label htmlFor="fileInput" className='w-[180px] h-[50px] bg-[#922492] cursor-pointer flex justify-center items-center text-[#fff] text-[20px] rounded-md'>اپلود عکس</label>
                </div>
            </div>
            <Formik initialValues={{name:"",birthDayDate:"",phone:"",email:"",nationalCode:"",role:""}} onSubmit={(values)=> submit(values)} validationSchema={editProfileValidation}>
                {(form)=> (
                    <Form dir='rtl' className=" max-[1550px]:items-center max-[1550px]:[&>div>div]:h-[150px] max-[1550px]:[&>div>div]:border max-[1550px]:[&>div>div]:border-[red] max-[1550px]:[&>div>div]:my-[5px] max-[1550px]:flex-col-reverse w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:flex [&>div]:flex-col [&>div]:justify-around [&>div>div]:w-[95%] [&>div>div]:h-[28%] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px]">
                    {/* <Form dir='rtl' className="h-[605px] w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:h-[600px] [&>div]:flex [&>div]:flex-col [&>div]:justify-around [&>div>div]:w-[95%] [&>div>div]:h-[28%] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px] "> */}
                        <div>
                            
                            <EditProfileItem content="نام کاربری" name="name" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                                <div className=' [&>div:last-child>input]:h-[50px] [&>div:last-child>input]:border [&>div:last-child>input]:border-[#ccc] [&>div:last-child>input]:relative [&>div:last-child>input]:top-[-20px] [&>div:last-child>input]:text-[#5A0BA9] [&>div:last-child>input]:w-[234%]'>
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
                                        calendarPosition="left"
                                    />
                                </div>

                            <EditProfileItem content="شماره همراه" name="phone" placeholder="شماره را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>
                        <div>

                            <EditProfileItem content="ایمیل" name="email" placeholder="ایمیل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="کد ملی" name="nationalCode" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="نقش" name="role" placeholder="نقش  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>
                        <button type='submit' className='bg-[#922492] text-[#fff] scale-[105%] absolute bottom-[15px] w-[150px] h-[45px] rounded-[15px] right-[44%]' >ثبت تغییرات</button>
                    </Form>
                )}
            </Formik>

        </div>
    )
}

export default EditProfile