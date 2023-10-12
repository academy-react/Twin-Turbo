import { useState } from 'react'
import Comment from '../../core/services/commentDB'
const CommentMap = () => {
    const [comment2, setComment] = useState(Comment)
  return (
    comment2.map((element,index)=> {
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
    })
  )
}

export default CommentMap