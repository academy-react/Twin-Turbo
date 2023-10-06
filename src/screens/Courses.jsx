import React, { useState } from 'react'
import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import DescriptionBlog from '../components/DescriptionBlog'
import CommentBlog from '../components/CommentBlog'

const Courses = () => {
    const [flag, setFlag] = useState(1)
    const change = (num) => {
        setFlag(num)

        if(num == 1) {
            btn2.style.background = "transparent";
            btn1.style.background = "#F5F5F5";
        }
        else if(num == 2) {
            btn1.style.background = "transparent";
            btn2.style.background = "#F5F5F5";
        }
    }

    return (
        <>
            <div className='w-[1920px] mx-[auto]'>

                <Header  src="avatar.png" color="#5A0BA9" />

                <div className="w-[full] h-[1400px] flex justify-center items-center gap-[50px]">

                    <div dir='ltr' className="w-[30%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white ">
                        
                    </div>

                    <div className="w-[60%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white ">
                        <div className='w-full h-[530px] flex justify-center items-center'><img src="../src/assets/images/angularCourses.png" alt="" className='scale-x-[110%]'/></div>
                        <div className='w-full  flex justify-center items-center text-[40px]'>انگولار</div>
                        <div dir='rtl' className='w-full h-[600px] px-[20px]'>
                            <button className='p-[10px] border border-[#eee] borde-[green] relative right-[35px] top-[8px] rounded-xl ' onClick={(e)=> change(1)} id='btn1'>نظرات</button>
                            <button className='p-[10px] border border-[#eee] borde-[green] relative right-[65px] top-[8px] rounded-xl ' onClick={(e)=> change(2)} id='btn2'>توضیحات</button>
                            {flag == 1 && <DescriptionBlog />}
                            {flag == 2 && <CommentBlog />}
                        </div>
                    </div>


                </div>

                <Footer />



            </div>

        </>
        
    )
}

export default Courses