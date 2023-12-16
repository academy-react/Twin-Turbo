import React , { useEffect, useRef, useState } from 'react'
import {Formik,Form, Field} from 'formik'
import EditProfileItem from './EditProfileItem'

import DatePicker from "react-multi-date-picker"
import persian from "react-date-object/calendars/persian"
import persian_fa from "react-date-object/locales/persian_fa"
import editProfileValidation from '../../core/validations/editProfileValidation';
import { changePic, editProfileSubmit } from '../../core/validations/submit/editProfileSubmit';
import customAxios from '../../core/services/interceptor'
import { ToastContainer } from 'react-toastify'



const EditProfile = () => {

    let theme = localStorage.getItem("theme")
    let userImage = useRef()
    let img = useRef()
    const [myInfo, setMyInfo] = useState()
    const datePicker = useRef()

    const getInfo = async () => {
        let result = await customAxios.get("/SharePanel/GetProfileInfo")
        setMyInfo(result)
        console.log(result);
    }

    useEffect(() => {
        getInfo()
    }, [])
    

    const inHovering = ()=> img.current.src = "../src/assets/images/panel/camera hover.png"
    const outHovering = ()=> img.current.src = "../src/assets/images/panel/camera.png"
    

    return (
        <div id="editProfile" className="h-[1550px] max-[1200px]:h-[2850px] max-[1020px]:bg-[none] max-[1020px]:w-full max-[1800px]:w-[70%] max-[1550px]:w-[60%] max-[1494px]:w-[60%] w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd]">

            <div className="h-[250px] justify-center items-center max-[1200px]:h-[15%]">
                <div className="relative w-[50%] mx-auto h-full flex flex-col justify-center items-center">
                    <div className='w-[120px] h-[120px] rounded-[50%] mb-[25px] relative'>
                        <img src={myInfo?.currentPictureAddress} alt="" className='rounded-[50%] w-[120px] h-[120px]' ref={userImage} />
                        <input type="file" className='hidden' onChange={(e)=> changePic(e,userImage)} id='fileInput' />
                        <label htmlFor="fileInput" className='border border-black w-[34px] h-[34px] bg-[#db9cdb] cursor-pointer flex justify-center items-center text-[#fff] text-[20px] rounded-[50%] absolute right-[-2px] top-[80px]' onMouseOver={inHovering} onMouseOut={outHovering} ><img src="../src/assets/images/panel/camera.png" alt="" className='w-[20px] h-[15px]' ref={img} /></label>
                    </div>
                </div>
            </div>
            <Formik initialValues={{lName:"",fName:"",userAbout:"",linkdinProfile:"",telegramLink:"",receiveMessageEvent:false,homeAdderess:"",nationalCode:"",gender:true,birthDay:""}} onSubmit={(values)=> editProfileSubmit(values,userImage)} validationSchema={editProfileValidation}>
                {(form)=> (
                    <Form dir='rtl' className="items-start max-[1200px]:flex-col max-[1200px]:[&>div]:w-full py-[10px] w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:flex [&>div]:flex-col [&>div>div]:my-[15px] [&>div>div]:w-[95%] [&>div>div]:h-[200px] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px] ">
                        <div>

                            <EditProfileItem content="نام" name="fName" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="درباره من" name="userAbout" placeholder="مشخصات را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="کد ملی" name="nationalCode" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <div>
                                <div>جنسیت</div>
                                <div className='flex pt-[20px] [&>div]:w-[150px] [&>div]:h-[100px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>*]:m-[15px] [&>div>*]:cursor-pointer [&>div>*]:text-[20px]'>
                                    <div>
                                        <input type="radio" name="gendedr" id="radio1" className='w-[20px] h-[20px]' onChange={() => form.values.gender = true}/>
                                        <label htmlFor="radio1">مرد</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="gendedr" id="radio2" className='w-[20px] h-[20px]' onChange={() => form.values.gender = false}/>
                                        <label htmlFor="radio2">زن</label>
                                    </div>
                                </div>
                            </div>
                                
                                <div className='[&>div:last-child]:w-[85%] [&>div:last-child>input]:h-[50px] [&>div:last-child>input]:border [&>div:last-child>input]:border-[#ccc] [&>div:last-child>input]:relative [&>div:last-child>input]:top-[-20px] [&>div:last-child>input]:text-[#5A0BA9]'>
                                    <div>تاریخ تولد</div>
                                    <DatePicker
                                        ref={datePicker}
                                        onChange={() => {
                                        setTimeout(() => {
                                            form.values.birthDay = datePicker.current.children[0].value
                                        }, 10);
                                        }}
                                        placeholder="تاریخ تولد را وارد کنید ..."
                                        minDate="1900/1/1"
                                        maxDate={new Date}
                                        // calendar={persian}
                                        // locale={persian_fa}
                                        arrow={false}
                                        calendarPosition="left"
                                        inputClass='text-[18px] pr-[15px] w-full placeholder:text-[#5a0ba951] text-[#5A0BA9]  border-[rgba(112,112,112,0.14)] outline-none rounded-lg h-12 pl-5 placeholder:text-[#b9b7b7]'
                                    />
                                </div>


                        </div>
                        <div>

                            <EditProfileItem content="نام خانوادگی" name="lName" placeholder="نام خانوادگی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="پروفایل لینکدین" name="linkdinProfile" placeholder=" لینک لینکدین را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <EditProfileItem content="لینک تلگرام" name="telegramLink" placeholder="لینک تلگرام  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                            <div>
                                <div>آیا مایل به دریافت خبر هستید؟</div>
                                <div className='flex pt-[20px] [&>div]:w-[150px] [&>div]:h-[100px] [&>div]:flex [&>div]:justify-center [&>div]:items-center [&>div>*]:m-[15px] [&>div>*]:cursor-pointer [&>div>*]:text-[20px]'>
                                    <div>
                                        <input type="radio" name="receiveMessageEvent1" id="radio3" className='w-[20px] h-[20px]' onChange={() => form.values.receiveMessageEvent = true}/>
                                        <label htmlFor="radio3" className='px-5 relative right-[-30px] '>بله</label>
                                    </div>
                                    <div>
                                        <input type="radio" name="receiveMessageEvent1" id="radio4" className='w-[20px] h-[20px]' onChange={() => form.values.receiveMessageEvent = false}/>
                                        <label htmlFor="radio4" className='px-5 relative right-[-30px] '>خیر</label>
                                    </div>
                                </div>
                            </div>
                            <EditProfileItem content="ادرس منزل" name="homeAdderess" placeholder="ادرس منزل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                        </div>

                        <div className='absolute bottom-0 left-0 flex justify-center items-center' style={{height:"100px",width:"100%"}}>
                            <button type='submit' className='w-[150px] bg-[#922492] active:bg-[#922492dd] text-[#fff] scale-[105%] px-[15px] h-[45px] rounded-[30px] right-[44%]' >ثبت تغییرات</button>
                        </div>  

                    </Form>
                    
                )}
            </Formik>
            
            <ToastContainer theme={theme} autoClose={4000} position="top-center" limit={2}  /> 

        </div>
    )
}

export default EditProfile