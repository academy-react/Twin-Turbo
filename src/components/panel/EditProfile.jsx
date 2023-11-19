import React , { useEffect, useRef, useState } from 'react'
import {Formik,Form} from 'formik'
import EditProfileItem from './EditProfileItem'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import account from '../../core/services/account';
import editProfileValidation from '../../core/validations/editProfileValidation';
import { changePic, editProfileSubmit } from '../../core/validations/submit/editProfileSubmit';
import customAxios from '../../core/services/interceptor'



const EditProfile = () => {

    let userImage = useRef()
    let img = useRef()
    const [myInfo, setMyInfo] = useState()
    let token = localStorage.getItem("token")
    const datePicker = useRef()

    const getInfo = async () => {
        let result = await customAxios.get("/SharePanel/GetProfileInfo",{
            headers : {"Authorization" : "Bearer " + token}
        })
        setMyInfo(result)
    }

    useEffect(() => {
        getInfo()
    }, [])
    

    const inHovering = ()=> img.current.src = "../src/assets/images/panel/camera hover.png"
    const outHovering = ()=> img.current.src = "../src/assets/images/panel/camera.png"

    return (
        <div id="editProfile" className="h-[1800px] max-[1200px]:h-[3200px] max-[1020px]:bg-[none] max-[1020px]:w-full max-[1800px]:w-[70%] max-[1550px]:w-[60%] max-[1494px]:w-[60%] w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd]">

            <div className="h-[250px] justify-center items-center max-[1200px]:h-[15%]">
                <div className="relative w-[50%] mx-auto h-full flex flex-col justify-center items-center">
                    <div className='w-[120px] h-[120px] rounded-[50%] mb-[25px] relative'>
                        <img src={myInfo?.currentPictureAddress} alt="" className='rounded-[50%]' ref={userImage} />
                        <input type="file" className='hidden' onChange={(e)=> changePic(e,userImage)} id='fileInput' />
                        <label htmlFor="fileInput" className='border border-black w-[34px] h-[34px] bg-[#db9cdb] cursor-pointer flex justify-center items-center text-[#fff] text-[20px] rounded-[50%] absolute right-[-2px] top-[80px]' onMouseOver={inHovering} onMouseOut={outHovering} ><img src="../src/assets/images/panel/camera.png" alt="" className='w-[20px] h-[15px]' ref={img} /></label>
                    </div>
                </div>
            </div>
            <Formik initialValues={{lName:"",fName:"",UserAbout:"",LinkdinProfile:"",TelegramLink:"",ReceiveMessageEvent:false,HomeAdderess:"",NationalCode:"",Gender:false,BirthDay:""}} onSubmit={(values)=> editProfileSubmit(values,userImage)} validationSchema={editProfileValidation}>
                {(form)=> (
                    <Form dir='rtl' className="items-start max-[1200px]:flex-col max-[1200px]:[&>div]:w-full py-[10px] w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:flex [&>div]:flex-col [&>div>div]:my-[15px] [&>div>div]:w-[95%] [&>div>div]:h-[200px] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px] ">
                        <div>

                            <EditProfileItem content="نام" name="fName" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="درباره من" name="UserAbout" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="کد ملی" name="NationalCode" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem type="checkbox" content="جنسیت " name="Gender" placeholder="جنسیت را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                                
                                <div className='[&>div:last-child]:w-[85%] [&>div:last-child>input]:h-[50px] [&>div:last-child>input]:border [&>div:last-child>input]:border-[#ccc] [&>div:last-child>input]:relative [&>div:last-child>input]:top-[-20px] [&>div:last-child>input]:text-[#5A0BA9]'>
                                    <div>تاریخ تولد</div>
                                    <DatePicker
                                        ref={datePicker}
                                        onChange={() => {
                                        setTimeout(() => {
                                            form.values.BirthDay = datePicker.current.children[0].value
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

                            <EditProfileItem content="نام خانوادگی" name="lName" placeholder="ایمیل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="پروفایل لینکدین" name="LinkdinProfile" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="لینک تلگرام" name="TelegramLink" placeholder="نقش  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="دریافت خبرها" type="checkbox" name="ReceiveMessageEvent" placeholder="نقش  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="ادرس منزل" name="HomeAdderess" placeholder="ادرس منزل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>

                        <div className='absolute bottom-0 left-0 flex justify-center items-center' style={{height:"100px",width:"100%"}}>
                            <button type='submit' className='w-[150px] bg-[#922492] text-[#fff] scale-[105%] px-[15px] h-[45px] rounded-[30px] right-[44%]' onClick={(e)=> editProfileSubmit(form.values,userImage)} >ثبت تغییرات</button>
                        </div>  

                    </Form>
                    
                )}
            </Formik>
            

        </div>
    )
}

export default EditProfile