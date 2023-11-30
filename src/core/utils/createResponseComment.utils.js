import customAxios from "../services/interceptor";
import likeDissLikeCourse from "./likeDissLikeCourse.utils";
let parentElement ;
const creatingReply = async (element,url,bool) => {
    if(bool == true)  parentItem.innerHTML = "";
    
    let resultReply = await customAxios.get(`/Course/GetCourseReplyCommnets/${element.courseId}/${element.id}`)

    parentElement = element
    resultReply.map((element,index)=> {


        let parent = document.createElement("div");
        parent.className = "w-[85%] h-[100%] bg-white shadow-[0_0_7px_#999] rounded-[15px] p-[10px] relative mr-28"

    
        let top = document.createElement("div");
        top.className = "text-[18px] my-1 flex [&>span]:mx-[10px]"
    
        let span1 = document.createElement("span");
        span1.className = "order-1"
        span1.innerHTML = element?.author ? element.author : element.title
        top.appendChild(span1)
    
        let span2 = document.createElement("span");
        span2.className = "order-2"
        span2.innerHTML = "|"
        top.appendChild(span2)
    
        let span3 = document.createElement("span");
        span3.className = "order-2"
        span3.innerHTML = element.insertDate ? element.insertDate.slice(0,10).replace("-","/").replace("-","/") : element.inserDate.slice(0,10).replace("-","/").replace("-","/")
        top.appendChild(span3)
        
        parent.appendChild(top)
    
        let desc = document.createElement("p");
        desc.className = "text-[#707070] text-[15px] my-1 inline-block"
        desc.innerHTML = element.describe
        parent.appendChild(desc)
    
        let likeAndDisslike = document.createElement("div");
        likeAndDisslike.className = "w-[130px] h-[25px] flex justify-evenly items-center my-1"
    
        let like = document.createElement("div");
        like.className = "flex items-center"
    
        let likeSpan = document.createElement("span");
        likeSpan.className = element?.currentUserEmotion == "LIKED" ? "text-[#37c54f]" : "text-[#000]"
        likeSpan.innerHTML = element?.likeCount == 0 ? 0 : element?.likeCount || element?.commentLike
        like.appendChild(likeSpan)
    
        let likeImg = document.createElement("img");
        likeImg.className = "mx-2 mb-2 w-6 cursor-pointer"
        likeImg.setAttribute("data-id" , index)
        likeImg.src = element?.currentUserEmotion == "LIKED" ? "../../src/assets/images/selectedCourse/like.png" : "../../src/assets/images/selectedCourse/likeDefault.png"
        likeImg.onclick = (e)=> {
            likeDissLikeCourse(element.id,"Like",true,element,e,url)
            let parent = e.target.parentNode.parentNode.parentNode
            creatingReply(parentElement,url,true)
        }
        like.appendChild(likeImg)
    
        likeAndDisslike.appendChild(like)
    
        let space = document.createElement("span");
        space.innerHTML = "|"
        likeAndDisslike.appendChild(space)
    
        let dissLike = document.createElement("div");
        dissLike.className = "flex items-center mr-2"
    
        let dissLikeSpan = document.createElement("span");
        dissLikeSpan.className = element?.currentUserEmotion == "DISSLIKED" ? "text-[#ec0b1a]" : "text-[#000]"
        dissLikeSpan.innerHTML = element?.disslikeCount ? element?.disslikeCount : "0"
        dissLike.appendChild(dissLikeSpan)
    
        let dissLikeImg = document.createElement("img");
        dissLikeImg.className = "mr-2 mt-2 w-6 cursor-pointer"
        dissLikeImg.setAttribute("data-id" , index)
        dissLikeImg.src = element?.currentUserEmotion == "DISSLIKED" ? "../../src/assets/images/selectedCourse/disslike.png" : "../../src/assets/images/selectedCourse/disslikeDefault.png"
        dissLikeImg.onclick = (e)=> { 
            likeDissLikeCourse(element.id,"DissLike",false,element,e,url)
            creatingReply(parentElement,url,true)
        }
        dissLike.appendChild(dissLikeImg)
    
        likeAndDisslike.appendChild(dissLike)
    
        parent.appendChild(likeAndDisslike)
    
        let repParent = document.createElement("div");
        repParent.className = "flex items-center justify-between absolute left-[20px] bottom-[10px] [&>img]:cursor-pointer"
    
        let showRepParent = document.createElement("div");
        showRepParent.className = "text-[#777] cursor-pointer flex items-center"
        // showRepParent.onclick = showResponse(e,element,index)
    
        let showRep = document.createElement("span");
        showRep.className = "ml-[15px]"
        showRep.setAttribute("data-id" , index)
        showRep.innerHTML = location.pathname.indexOf("/blogs") !== -1 ? element.replyCount !== 0 ? `نمایش پاسخ ها ${element.replyCount}` : "" : element.acceptReplysCount !== 0 ? `نمایش پاسخ ها ${element.acceptReplysCount ? element.acceptReplysCount : element.replyCount}` : "" 
    
        showRepParent.appendChild(showRep)
    
        repParent.appendChild(showRepParent)
    
        parent.appendChild(repParent)
    
        let replyImg = document.createElement("img");
        replyImg.className = "w-[25px] h-[20px]"
        replyImg.src = "../../src/assets/images/selectedCourse/reply.png"
        // replyImg.onclick = (e)=> replay(e,element)
        repParent.appendChild(replyImg)
    
        parentItem.appendChild(parent)
    
    

    })
}
const create = async (element,url) => {

    creatingReply(element,url,false)
}

export default create