import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { disLikeDown, disLikeUp, likeDown, likeUp } from '../../core/utils/commentLikeDisLike.utils'
import customAxios from '../../core/services/interceptor'
import miladi_be_shamsi from '../../core/utils/miladiToShamsi.utils'

const CommentMap = ({db}) => {
    let url = useParams()
    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)
    // console.log(db);

    const plusLike = async (id)=> {
        // let res = await customAxios.post("/Course/AddCourseCommentLike?CourseCommandId=" + id)
        console.log(id);
    }

    
    return (
        db?.map((element,index)=> {
            let insertDate = miladi_be_shamsi(Math.ceil(element.insertDate.slice(0,4)) , Math.ceil(element.insertDate.slice(5,7)) , Math.ceil(element.insertDate.slice(8,10)) )
            
            return (
                <div key={index} className="w-full flex items-center gap-[15px] my-[7px] py-5 " data-id="1" >
                    <img src={"../src/assets/images/panel/user.png"} alt="" className="w-16 h-[60px] rounded-full " />
                    <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                        <div  className="text-[18px] my-1 flex [&>span]:mx-[10px]"><span className='order-1'>{element?.author ? element.author : "بدون نام"}</span>  <span className='order-2'>|</span>  <span className='order-2'>{insertDate[0]}</span>  </div>
                        
                        <p className="text-[#707070] text-[15px] my-1 inline-block">{element.describe}</p>
                        <div className="w-[130px] h-[25px] flex justify-evenly items-center my-1">
                            <div className=" flex items-center" onClick={()=> plusLike(element.id)}>
                                <span className="text-[#37c54f]">{element?.likeCount}</span>
                                <img src="../src/assets/images/selectedCourse/likeDefault.png" className="mx-2 mb-2 w-6 cursor-pointer" data-id={`${index}`} />
                            </div>
                            |
                            <div className="flex items-center mr-2" >
                                <span className="text-[#ec0b1a]">{element?.disslikeCount ? element?.disslikeCount : "0"}</span> 
                                <img src="../src/assets/images/selectedCourse/dislikeDefault.png" className="mr-2 mt-2 w-6 cursor-pointer" data-id={`${index}`} onClick={(e)=> !disLike ? disLikeUp(e,db,like,setDisLike,url) : disLikeDown(e,db,like,setDisLike,url)}/>
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[40px] absolute left-[50px] bottom-[10px] [&>img]:cursor-pointer" >
                            <img src="../src/assets/images/selectedCourse/reply.png" className='scale-[60%]'  />
                            <img src="../src/assets/images/selectedCourse/warning.png" className='scale-[60%]' />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default CommentMap