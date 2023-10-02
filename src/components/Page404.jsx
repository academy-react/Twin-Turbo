import React from 'react'
import Footer from "../components/Footer";
import {Link} from "react-router-dom"
const Page404 = () => {
  return (
    <div className=' w-[1280px] mx-[auto]'>
        <div className='w-full h-[400px] flex flex-col items-center justify-center'>
            <img src="../src/assets/images/404.png" alt="" className='scale-[60%]'/>
            <Link className="w-[20%] h-[45px] rounded-[15px] bg-[#A644C1] flex justify-center items-center text-[#fff] cursor-pointer">بازگشت به صفحه اصلی</Link>
        </div>
        <Footer />
    </div>
  )
}

export default Page404