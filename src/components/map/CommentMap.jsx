import customAxios from '../../core/services/interceptor'
import create from '../../core/utils/createResponseComment.utils'
import { setComments } from '../../screens/SelectedCourse'

const CommentMap = ({ db , parentComment }) => {
    let flag = true
    let showResponseFlag = true

    const likeDissLikeCourse = (id,params,bool,element,e) => {
        
        if(location.pathname.indexOf("/courses") !== -1){
            
            // like
            if(params == "Like" && element.currentUserEmotion !== "LIKED") {
                e.target.previousElementSibling.innerHTML = element.likeCount + 1
                e.target.src = "../src/assets/images/selectedCourse/like.png"
                customAxios.post(`/Course/AddCourseComment${params}?CourseCommandId=` + id)
            }
            else if(params == "Like" && element.currentUserEmotion == "LIKED") {
                e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML - 1
                e.target.src = "../src/assets/images/selectedCourse/likeDefault.png"
                customAxios.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=` + id)
            }

            //disslike
            if(params == "DissLike" && element.currentUserEmotion !== "DISSLIKED") {
                e.target.previousElementSibling.innerHTML = element.disslikeCount + 1
                e.target.src = "../src/assets/images/selectedCourse/disslike.png"
                customAxios.post(`/Course/AddCourseComment${params}?CourseCommandId=` + id)
            }
            else if(params == "DissLike" && element.currentUserEmotion == "DISSLIKED") {
                e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML - 1
                e.target.src = "../src/assets/images/selectedCourse/disslikeDefault.png"
                // api isnt exist

                // customAxios.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=` + id)
            }

        }
        else if(location.pathname.indexOf("/blogs") !== -1) {
            
             // like
            if(bool) {
                e.target.previousElementSibling.innerHTML = element.commentLike + 1
                e.target.src = "../src/assets/images/selectedCourse/like.png"
                customAxios.post(`/News/CommentLike/${id}?LikeType=${bool}`)
            }
            else if(!bool) {
                e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML - 1
                e.target.src = "../src/assets/images/selectedCourse/likeDefault.png"
                // api isnt exist

                // customAxios.post(`/News/CommentLike/${id}?LikeType=${bool}`)
            }

            

        }
    }

    const replay = (e,element) => {


        if(flag) {
            
            let targetComment = e.target.parentNode.parentNode.parentNode
            let order = targetComment.getAttribute("data-order")
            console.log(order);
    
            let replay = document.createElement("div");
            replay.className = `border-[red] border w-[80%] h-[200px] relative`;
            replay.style.order = order
            parentComment.appendChild(replay)
    
    
            let textareaReply = document.createElement("textarea");
            textareaReply.className = "resize-none w-[90%] h-[50%] absolute left-0 top-0 border rounded-[25px] m-[15px] p-[10px]";
            replay.appendChild(textareaReply);

            let idea = document.createElement("div")
            idea.className = "w-[300px] h-[70px] px-[20px] absolute left-0 bottom-0 flex justify-between items-center"
            replay.appendChild(idea);
    
    
            let rejBtn = document.createElement("button")
            rejBtn.className = "bg-[red] w-[120px] h-[50px] rounded-[15px] text-[#fff] text-[19px]"
            rejBtn.innerHTML = "بیخیال";
            rejBtn.onclick = () => { 
                replay.remove()
                flag = true
            }
            idea.appendChild(rejBtn);
    
            let accBtn = document.createElement("div")
            accBtn.className = "bg-[green] w-[120px] h-[50px] rounded-[15px] text-[#fff] text-[19px] cursor-pointer flex justify-center items-center"
            accBtn.innerHTML = "ارسال";

            accBtn.onclick = async () => {

                let res = await customAxios.get("/SharePanel/GetProfileInfo")
                flag = true

                let formData = new FormData()
                formData.append("CommentId",element.id)
                formData.append("CourseId",element.courseId)
                formData.append("Title",res.fName + " " + res.lName)
                formData.append("Describe",textareaReply.value)
                customAxios.post("/Course/AddReplyCourseComment",formData)
                // setComments()


            }
            idea.appendChild(accBtn);

        }
        else return false
        flag = false
        
    }


    const showResponse = async (e,element) => {
        let targetComment = e.target.parentNode.parentNode.parentNode.parentNode
        let order = targetComment.getAttribute("data-order")

        
        if(showResponseFlag) {
            
            let parentItem = document.createElement("div");
            parentItem.className = `border border-[red] w-full flex items-center gap-[15px] my-[7px] py-5 flex flex-col relative`;
            parentItem.style.order = order
            parentComment.appendChild(parentItem)

            create(parentItem,element,order)
            showResponseFlag = false

        }
        else if (!showResponseFlag) {
            console.log(parentItem);
            showResponseFlag = true

        }


    }
    return (
        db?.map((element,index)=> {
            return (
                <div key={index} className={`w-full flex items-center gap-[15px] my-[7px] py-5`} data-order={index+5} style={{order:index+5}} >
                    <img src={"../src/assets/images/panel/user.png"} alt="" className="w-16 h-[60px] rounded-full " />
                    <div className="border border-[green] w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                        <div  className="text-[18px] my-1 flex [&>span]:mx-[10px]"><span className='order-1'>{element?.author ? element.author : "بدون نام"}</span>  <span className='order-2'>|</span>  <span className='order-2'>{element.insertDate.slice(0,10).replace("-","/").replace("-","/")}</span>  </div>
                        
                        <p className="text-[#707070] text-[15px] my-1 inline-block">{element.describe}</p>
                        <div className="w-[130px] h-[25px] flex justify-evenly items-center my-1">
                            <div className=" flex items-center">
                                <span className="text-[#37c54f]">{element?.likeCount == 0 ? 0 : element?.likeCount || element?.commentLike}</span>
                                <img src={element?.currentUserEmotion == "LIKED" ? "../src/assets/images/selectedCourse/like.png" : "../src/assets/images/selectedCourse/likeDefault.png"} onClick={(e)=> likeDissLikeCourse(element.id,"Like",true,element,e)} className="mx-2 mb-2 w-6 cursor-pointer" data-id={`${index}`} />
                            </div>
                            |
                            <div className="flex items-center mr-2" >
                                <span className="text-[#ec0b1a]">{element?.disslikeCount ? element?.disslikeCount : "0"}</span> 
                                <img src={element?.currentUserEmotion == "DISSLIKED" ? "../src/assets/images/selectedCourse/disslike.png" : "../src/assets/images/selectedCourse/disslikeDefault.png"} onClick={(e)=> likeDissLikeCourse(element.id,"DissLike",false,element,e)} className="mr-2 mt-2 w-6 cursor-pointer" data-id={`${index}`} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between absolute left-[20px] bottom-[10px] [&>img]:cursor-pointer" >
                            <div className='text-[#777] cursor-pointer flex items-center' onClick={(e) => showResponse(e,element)}> 
                                <span className='ml-[15px]'>نمایش پاسخ ها {element.acceptReplysCount}</span>
                            </div>
                            <img src="../src/assets/images/selectedCourse/reply.png" className='w-[25px] h-[20px]' onClick={(e) => replay(e,element)} />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default CommentMap