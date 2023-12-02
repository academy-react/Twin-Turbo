import { setComment } from "../../screens/SelectedBlog"
import { setComments } from "../../screens/SelectedCourse"
import customAxios from "../services/interceptor"

const likeDissLikeCourse = async (id,params,bool,element,e,url) => {

    if(location.pathname.indexOf("/courses") !== -1){
        // like
        if(params == "Like" && element.currentUserEmotion !== "LIKED") {
            e.target.previousElementSibling.innerHTML = Math.ceil(e.target.previousElementSibling.innerHTML) + 1
            e.target.previousElementSibling.style.color = "#37c54f"
            e.target.src = "../src/assets/images/selectedCourse/like.png"
            await customAxios.post(`/Course/AddCourseComment${params}?CourseCommandId=` + id)
        }
        else if(params == "Like" && element.currentUserEmotion == "LIKED") {
            e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML - 1
            e.target.previousElementSibling.style.color = "#000"
            e.target.src = "../src/assets/images/selectedCourse/likeDefault.png"
            await customAxios.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=` + id)
        }
        
        //disslike
        if(params == "DissLike" && element.currentUserEmotion !== "DISSLIKED") {
            e.target.previousElementSibling.innerHTML = Math.ceil(e.target.previousElementSibling.innerHTML) + 1
            e.target.previousElementSibling.style.color = "#ec0b1a"
            e.target.src = "../src/assets/images/selectedCourse/disslike.png"
            await customAxios.post(`/Course/AddCourseComment${params}?CourseCommandId=` + id)
        }
        else if(params == "DissLike" && element.currentUserEmotion == "DISSLIKED") {
            e.target.previousElementSibling.innerHTML = e.target.previousElementSibling.innerHTML - 1
            e.target.previousElementSibling.style.color = "#000"
            e.target.src = "../src/assets/images/selectedCourse/disslikeDefault.png"
            // api isnt exist
            
            // customAxios.delete(`/Course/DeleteCourseCommentLike?CourseCommandId=` + id)
        }
    }
    else if(location.pathname.indexOf("/blogs") !== -1) {
        
        // like
        if(!element.currentUserIsLike) {
            e.target.previousElementSibling.innerHTML = element.likeCount + 1
            e.target.previousElementSibling.style.color = "#37c54f"
            e.target.src = "../src/assets/images/selectedCourse/like.png"
            await customAxios.post(`/News/CommentLike/${id}?LikeType=${bool}`)
        }
        else if(element.currentUserIsLike) {
            e.target.previousElementSibling.innerHTML = element.dissLikeCount + 1
            e.target.parentNode.previousElementSibling.firstChild.style.color = "#000"
            e.target.src = "../src/assets/images/selectedCourse/disslike.png"
            // api isnt exist
            await customAxios.post(`/News/CommentLike/${id}?LikeType=${bool}`)
        }
    }
    if(location.pathname.indexOf("/courses") !== -1) {
        let result = await customAxios.get("/Course/GetCourseCommnets/" + url.id)
        setComments(result)
    }
    else {
        let result = await customAxios.get("/News/GetNewsComments?NewsId=" + url.id)
        setComment(result)
    }

}

export default likeDissLikeCourse