import customAxios from "../services/interceptor";

const landingCourseSelector = async (e,pic,title,master,content,landingCourse,setCourseId) => {
    let result = await customAxios.get("/Home/GetCoursesTop?Count=6")
    let num = e.target.getAttribute("data-id")
    let courseMapId = e.target.getAttribute("data-courseid")
    
    setTimeout(() => {
        pic.src = e.target.getAttribute("src")
        title.innerHTML = "دوره کامل : " + result[num].title
        master.innerHTML = result[num].teacherName  
        content.innerHTML =  result[num].describe  

        landingCourse.setAttribute("data-courseid",courseMapId)
        setCourseId(landingCourse.getAttribute("data-courseid"))
    }, 100);

}

export default landingCourseSelector