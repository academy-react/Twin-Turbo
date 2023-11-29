import { setComments } from "../../screens/SelectedCourse"
import customAxios from "../services/interceptor"

const likeDissLikeCourse = async (id,params,bool,element,e,url) => {
    
    if(location.pathname.indexOf("/courses") !== -1){
        
        // like
        if(params == "Like" && element.currentUserEmotion !== "LIKED") {
            e.target.previousElementSibling.innerHTML = element.likeCount + 1
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
            e.target.previousElementSibling.innerHTML = element.disslikeCount + 1
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
    let result = await customAxios.get("/Course/GetCourseCommnets/" + url.id)
    setComments(result)

}

export default likeDissLikeCourse