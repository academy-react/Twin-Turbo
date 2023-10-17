import courseDB from '../../core/services/courseDB'
import { useParams } from 'react-router-dom'
const CommentMap = () => {
    let url = useParams()
    
    let finded = courseDB.find((el)=> {
        return el.id == url.id
    })

    return (
    
        finded.comment.map((element,index)=> {

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