import { useState } from "react"

const DescriptionBlog = () => {

    const [Comment, setComment] = useState([
        {src:"bahrol.png",name:"استاد بحر",comment:"چیییییییییی آفرین به خانم دارابی مثل اینکه هم گروهیاتو کچل نکردی اونا کچلت کردن    ",time:"2"},
        {src:"nazari.png",name:"استاد نظری",comment:"به به چه دیزاین زیبایی, دست دیزاینرتون درد نکنه,خیلی خیلی زیبا شده , به به به به",time:"7"},
    ])

    return (
        <>
            <div className="w-full h-[650px] bg-[#F5F5F5] rounded-[25px] overflow-hidden relative z-10">
            <div dir="rtl" className="h-full flex flex-col p-[25px] leading-[28px] border [&>*]:my-[7px]">
                {Comment.map((element,index)=> {
                    return (
                        <div key={index} className="w-full h-[160px] flex items-center gap-[15px] my-[7px] ">
                            <img src={"../src/assets/images/" + element.src} alt="" />
                            <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px]">
                                <span className="text-[15px]">{element.name}  |  {element.time} ساعت پیش</span>
                                <p className="text-[#707070] text-[14px]">{element.comment}</p>
                            </div>
                        </div>
                    )
                })}
                <textarea placeholder="نوشتن پیام" className="w-full h-[80%] bg-white shadow-[0_0_7px_#999] rounded-[15px] resize-none outline-none p-[10px]"></textarea>
                <button className="bg-[#36C54E] rounded-[15px] w-full h-[85px] flex justify-center items-center text-[#fff] text-[19px]">ارسال متن</button>
            </div>
        </div>
        </>
    )
}

export default DescriptionBlog