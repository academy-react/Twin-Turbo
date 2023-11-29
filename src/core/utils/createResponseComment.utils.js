import customAxios from "../services/interceptor";

const create = async (parentItem,element) => {

    let resultReply = await customAxios.get(`/Course/GetCourseReplyCommnets/${element.courseId}/${element.id}`)
    
    resultReply.map((element,index)=> {
        let parent = document.createElement("div");
        parent.className = "w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative border border-[red]"
        parent.innerHTML = element.describe;

        let top = document.createElement("div");
        top.className = "text-[18px] my-1 flex [&>span]:mx-[10px]"

        parentItem.appendChild(parent)
    })  
}



        // <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
        //     <div  className="text-[18px] my-1 flex [&>span]:mx-[10px]">
        //         <span className='order-1'>{element?.author ? element.author : element.title}</span>  
        //         <span className='order-2'>|</span>  
        //         <span className='order-2'>{element.insertDate ? element.insertDate.slice(0,10).replace("-","/").replace("-","/") : element.inserDate.slice(0,10).replace("-","/").replace("-","/")}</span>  
        //     </div>
            
        //     <p className="text-[#707070] text-[15px] my-1 inline-block">{element.describe}</p>
        //     <div className="w-[130px] h-[25px] flex justify-evenly items-center my-1">
        //         <div className=" flex items-center">
        //             <span className="text-[#37c54f]">{element?.likeCount == 0 ? 0 : element?.likeCount || element?.commentLike}</span>
        //             <img src={element?.currentUserEmotion == "LIKED" ? "../src/assets/images/selectedCourse/like.png" : "../src/assets/images/selectedCourse/likeDefault.png"} onClick={(e)=> likeDissLikeCourse(element.id,"Like",true,element,e)} className="mx-2 mb-2 w-6 cursor-pointer" data-id={`${index}`} />
        //         </div>
        //         |
        //         <div className="flex items-center mr-2" >
        //             <span className="text-[#ec0b1a]">{element?.disslikeCount ? element?.disslikeCount : "0"}</span> 
        //             <img src={element?.currentUserEmotion == "DISSLIKED" ? "../src/assets/images/selectedCourse/disslike.png" : "../src/assets/images/selectedCourse/disslikeDefault.png"} onClick={(e)=> likeDissLikeCourse(element.id,"DissLike",false,element,e)} className="mr-2 mt-2 w-6 cursor-pointer" data-id={`${index}`} />
        //         </div>
        //     </div>
        //     <div className="flex items-center justify-between absolute left-[20px] bottom-[10px] [&>img]:cursor-pointer" >
        //         <div className='text-[#777] cursor-pointer flex items-center' onClick={(e) => showResponse(e,element,index)}> 
        //             <span className='ml-[15px]' data-id={index}>{location.pathname.indexOf("/blogs") !== -1 ? element.replyCount !== 0 ? `نمایش پاسخ ها ${element.replyCount}` : "" : element.acceptReplysCount !== 0 ? `نمایش پاسخ ها ${element.acceptReplysCount ? element.acceptReplysCount : element.replyCount}` : "" }</span>
        //         </div>
        //         <img src="../src/assets/images/selectedCourse/reply.png" className='w-[25px] h-[20px]' onClick={(e) => replay(e,element)} />
        //     </div>
        // </div>


export default create