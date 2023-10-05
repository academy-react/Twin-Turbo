import { useState } from "react"

const DescriptionBlog = () => {

    const [Comment, setComment] = useState([
        {src:"bahrol.png",name:"استاد بحر",comment:"چیییییییییی آفرین به گروه Twin Turbo",time:"2"},
        {src:"nazari.png",name:"استاد نظری",comment:"به به چه دیزاین زیبایی, دست دیزاینرتون درد نکنه,خیلی خیلی زیبا شده , به به به به",time:"7"},
    ])

    return (
        <>
            <div className="w-full h-[650px] bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10">
            <div dir="rtl" className="h-full flex flex-col p-[25px] leading-[28px] [&>*]:my-[7px]">
                {Comment.map((element,index)=> {
                    return (
                        <div key={index} className="w-full h-[190px] flex items-center gap-[15px] my-[7px] ">
                            <img src={"../src/assets/images/" + element.src} alt="" />
                            <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                                <span className="text-[17px]">{element.name}  |  {element.time} ساعت پیش</span>
                                <p className="text-[#707070] text-[15px]">{element.comment}</p>
                                <div className="w-[110px] h-[25px] flex justify-evenly items-center">
                                    <span className="text-[#37c54f]">1</span>
                                    <img src="../src/assets/images/like.png" alt="" />
                                    <span>  |  </span>
                                    <span className="text-[#ec0b1a]">1</span> 
                                    <img src="../src/assets/images/dislike.png" alt="" />
                                </div>
                                <img src="../src/assets/images/warning.png" alt="" className="absolute left-[14px] bottom-[9px]" />


                            </div>
                            
                        </div>
                    )
                })}
                <textarea placeholder="نوشتن پیام" className="w-full h-[80%] bg-white shadow-[0_0_7px_#999] rounded-[15px] resize-none outline-none p-[10px]"></textarea>
                <button className="bg-[#36C54E] rounded-[15px] w-full h-[85px] flex justify-center items-center text-[#fff] text-[21px]">ارسال متن</button>
            </div>
        </div>
        </>
    )
}

export default DescriptionBlog