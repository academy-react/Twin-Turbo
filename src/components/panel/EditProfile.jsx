import axios from 'axios';
import React from 'react'
import { useRef } from 'react';
import {Formik,Form,Field} from 'formik'
import EditProfileItem from './EditProfileItem'
import FieldInput from '../common/FieldInput'


const EditProfile = () => {
    let image = useRef()


    const changePic = async (e)=> {
        let src = e.target.files[0];

        let imageData = new FormData()
        imageData.append("image",src)

        let result = await axios.post("https://api.admin.sepehracademy.ir/api/upload/image",imageData)
        image.current.src = result.data.result

    }

    const submit = (values) => {
        usename.innerHTML = values.name;
    }

    return (
        <div className="w-[73%] bg-white relative rounded-3xl shadow-[0_0_7px_#ddd]">

            <div className="h-[30%] justify-center items-center">
                <div className="w-[50%] mx-auto h-full flex flex-col justify-center items-center">
                    <img src="../src/assets/images/khoros.jpg" alt="" className='w-[120px] h-[120px] rounded-[50%] mb-[25px]' ref={image} />
                    <input type="file" className='hidden' onChange={(e)=> changePic(e)} id='fileInput' />
                    <label htmlFor="fileInput" className='w-[180px] h-[50px] bg-[#922492] cursor-pointer flex justify-center items-center text-[#fff] text-[20px] rounded-md'>اپلود عکس</label>
                </div>
            </div>
            <Formik initialValues={{name:"",birthDay:"",phone:"",email:"",nationalCode:"",role:""}} onSubmit={(values)=> submit(values)}>
                <Form dir='rtl' className="h-[62%] w-[95%] flex mx-auto bg-[#f4f4f4] mt-[-10px] rounded-[25px] [&>div]:w-[50%] [&>div]:h-full [&>div]:flex [&>div]:flex-col [&>div]:justify-around [&>div>div]:w-[95%] [&>div>div]:h-[28%] [&>div>div]:rounded-[15px] [&>div>div]:mx-auto [&>div>div]:bg-[#fff] [&>div>div>div]:m-[20px] ">
                    <div >
                        
                        <EditProfileItem content="نام کاربری" name="name" placeholder="نام را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                        <EditProfileItem content="تاریخ تولد" name="birthDay" placeholder="تاریخ را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                        <EditProfileItem content="شماره همراه" name="phone" placeholder="شماره را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                    </div>
                    <div>

                        <EditProfileItem content="ایمیل" name="email" placeholder="ایمل را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                        <EditProfileItem content="کد ملی" name="nationalCode" placeholder="کد ملی را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />
                        <EditProfileItem content="نقش" name="role" placeholder="نقش  را وارد کنید ..." border="border border-[#ccc]" display="hidden" className="placeholder:text-[#b9b7b7]" dir="rtl"  />

                    </div>
                    <button type='submit' className='bg-[#922492] text-[#fff] absolute bottom-[15px] w-[150px] h-[40px] rounded-[15px] right-[44%]' >ثبت تغییرات</button>
                </Form>
            </Formik>

        </div>
    )
}

export default EditProfile