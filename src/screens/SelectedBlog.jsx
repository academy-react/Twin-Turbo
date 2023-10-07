import Header from '../components/common/Header'
import Footer from '../components/common/Footer'
import RightPanel from '../components/RightPanel'
import { useState } from 'react'

const Blog = () => {

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

                    <RightPanel src="Node.png" name="نود جی اس"/>


                </div>

                <Footer />



            </div>

        </>
        
    )
}

export default Blog