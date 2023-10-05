import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import DescriptionBlog from '../components/DescriptionBlog'
import CommentBlog from '../components/CommentBlog'
import { useState } from 'react'
import { useRef } from 'react'

const Blog = () => {
    const [flag, setFlag] = useState(1)

    const [item, setItem] = useState([
        {src:"node.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"nest.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"vs.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"node.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"nest.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"vs.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"node.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"nest.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"vs.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"node.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"nest.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
        {src:"vs.png",name:"نود جی اس",content:"نود جی‌اس یا نود دات جی‌اس (به انگلیسی: Node.js) یک محیط اجراییِ "},
    ])



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

                    <div dir='ltr' className="w-[30%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white overflow-y-scroll">
                        <div dir='rtl' className='w-[28%] h-[52px] rounded-[18px] bg-white shadow-[0_0_7px_#ddd] flex justify-around items-center [&>img]:w-[30px] [&>p]:text-[20px] my-[20px] mx-[25px] relative left-[350px]'>
                            <img src="../src/assets/images/menuu.png" alt="" />
                            <p>بلاگ ها</p>
                        </div>
                        <div dir='rtl' className='w-full'>
                            {item.map((element,index)=> {
                                return (
                                    <div key={index} className='w-full h-[120px] flex'>
                                        <div className='w-[30%] h-full flex items-center justify-center'><img src={"../src/assets/images/" + element.src} alt="" className='h-[110px] rounded-[15px]' /></div>
                                        <div className='w-[70%] h-full py-[5px] px-[15px] flex flex-col justify-center'>
                                            <p className='text-[25px] '>{element.name}</p>
                                            <p className='text-[#777]'>{element.content}</p>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>

                    <div className="w-[60%] h-[1300px] rounded-xl shadow-[0_0_7px_#ddd] bg-white ">
                        <div className='w-full h-[530px] flex justify-center items-center'><img src="../src/assets/images/node.png" alt="" className='scale-x-[110%]'/></div>
                        <div className='w-full  flex justify-center items-center text-[40px]'>نود جی اس</div>
                        <div dir='rtl' className='w-full h-[600px] px-[20px]'>
                            <button className='p-[10px] border border-[#eee] borde-[green] relative right-[35px] top-[8px] rounded-xl ' onClick={(e)=> change(1)} id='btn1'>نظرات</button>
                            <button className='p-[10px] border border-[#eee] borde-[green] relative right-[65px] top-[8px] rounded-xl ' onClick={(e)=> change(2)} id='btn2'>توضیحات</button>
                            {flag == 1 && <DescriptionBlog/>}
                            {flag == 2 && <CommentBlog />}
                        </div>
                    </div>


                </div>

                <Footer />



            </div>

        </>
        
    )
}

export default Blog