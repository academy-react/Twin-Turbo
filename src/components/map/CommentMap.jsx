import customAxios from '../../core/services/interceptor'

const CommentMap = ({ db , parentComment }) => {

    const likeDissLikeCourse = (id,params,bool) => {
        console.log(id);
        if(location.pathname.indexOf("/courses") !== -1){

            customAxios.post(`/Course/AddCourseComment${params}?CourseCommandId=` + id)

        }
        else if(location.pathname.indexOf("/blogs") !== -1) {
            
            customAxios.post(`/News/CommentLike/${id}?LikeType=${bool}`)

        }
    }

    let flag = true

    const replay = (e) => {

        if(flag) {
            
            let targetComment = e.target.parentNode.parentNode.parentNode
            let order = targetComment.getAttribute("data-order")
            console.log(order);
    
            let replay = document.createElement("div");
            replay.className = `border-[red] border w-[80%] h-[200px] relative`;
            replay.style.order = order
            parentComment.appendChild(replay)
    
    
            let textarea = document.createElement("textarea");
            textarea.className = "resize-none w-[90%] h-[50%] absolute left-0 top-0 border rounded-[25px] m-[15px] p-[10px]";
            replay.appendChild(textarea);

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
    
            let accBtn = document.createElement("button")
            accBtn.className = "bg-[green] w-[120px] h-[50px] rounded-[15px] text-[#fff] text-[19px]"
            accBtn.innerHTML = "ارسال";
            accBtn.onclick = () => { 
                // replay.remove()
                flag = true
            }
            idea.appendChild(accBtn);

        }
        else return false
        flag = false
        
    }

    
    return (
        db?.map((element,index)=> {            
            return (
                <div key={index} className={`w-full flex items-center gap-[15px] my-[7px] py-5`} data-order={index+5} style={{order:index+5}} >
                    <img src={"../src/assets/images/panel/user.png"} alt="" className="w-16 h-[60px] rounded-full " />
                    <div className="w-full h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative">
                        <div  className="text-[18px] my-1 flex [&>span]:mx-[10px]"><span className='order-1'>{element?.author ? element.author : "بدون نام"}</span>  <span className='order-2'>|</span>  <span className='order-2'></span>  </div>
                        
                        <p className="text-[#707070] text-[15px] my-1 inline-block">{element.describe}</p>
                        <div className="w-[130px] h-[25px] flex justify-evenly items-center my-1">
                            <div className=" flex items-center" onClick={()=> likeDissLikeCourse(element.id,"Like",true)}>
                                <span className="text-[#37c54f]">{element?.likeCount || element?.commentLike}</span>
                                <img src="../src/assets/images/selectedCourse/likeDefault.png" className="mx-2 mb-2 w-6 cursor-pointer" data-id={`${index}`} />
                            </div>
                            | {console.log(element?.commentLike)}
                            <div className="flex items-center mr-2" onClick={()=> likeDissLikeCourse(element.id,"DissLike",false)} >
                                <span className="text-[#ec0b1a]">{element?.disslikeCount ? element?.disslikeCount : "0"}</span> 
                                <img src="../src/assets/images/selectedCourse/dislikeDefault.png" className="mr-2 mt-2 w-6 cursor-pointer" data-id={`${index}`} />
                            </div>
                        </div>
                        <div className="flex items-center justify-between w-[40px] absolute left-[50px] bottom-[10px] [&>img]:cursor-pointer" >
                            <img src="../src/assets/images/selectedCourse/reply.png" className='scale-[60%]' onClick={(e) => replay(e)} />
                            <img src="../src/assets/images/selectedCourse/warning.png" className='scale-[60%]' />
                        </div>
                    </div>
                </div>
            )
        })
    )
}
export default CommentMap